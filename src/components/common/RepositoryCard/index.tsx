import { SyntheticEvent } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';
import ChatIcon from '@mui/icons-material/Chat';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { IRepositoryWithRating, IRepository } from 'models/repository';

type RepositoryCardProps = {
  repository: IRepositoryWithRating | IRepository;
  withRating: boolean;
  onToggleFavouritesClick: (repository: IRepository) => void;
  onRatingChange: (id: string, newValue: number | null) => void;
  getIsInFavourites: (id: string) => boolean;
};

const MAX_COUNT_TO_SHOW = 9999;

const RepositoryCard = ({
  repository,
  withRating,
  onRatingChange,
  onToggleFavouritesClick,
  getIsInFavourites,
}: RepositoryCardProps) => {
  const {
    id,
    name,
    description,
    owner,
    url,
    stargazerCount,
    forkCount,
    watchers,
    discussions,
    assignableUsers,
    primaryLanguage,
  } = repository;

  const rating = withRating
    ? (repository as IRepositoryWithRating).rating
    : undefined;

  const { color, name: languageName } = primaryLanguage || {};

  const isInFavourites = getIsInFavourites(id);

  const handleToggleFavouritesClick = () => {
    onToggleFavouritesClick(repository);
  };

  const handleRatingChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    onRatingChange(id, newValue);
  };

  return (
    <Card
      variant="outlined"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          @{owner.login}
        </Typography>

        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color={color}>
          {languageName}
        </Typography>

        <Typography variant="body2">{description}</Typography>

        <Box flexGrow={1} />

        <Grid
          container
          justifyContent="space-between"
          direction="row"
          sx={{ mt: 2 }}
        >
          <Grid item>
            <Grid container spacing={4}>
              <Grid item>
                <Badge
                  badgeContent={watchers.totalCount}
                  max={MAX_COUNT_TO_SHOW}
                  color="primary"
                >
                  <VisibilityIcon color="action" />
                </Badge>
              </Grid>

              <Grid item>
                <Badge
                  badgeContent={stargazerCount}
                  max={MAX_COUNT_TO_SHOW}
                  color="primary"
                >
                  <StarIcon color="action" />
                </Badge>
              </Grid>

              <Grid item>
                <Badge
                  badgeContent={forkCount}
                  max={MAX_COUNT_TO_SHOW}
                  color="primary"
                >
                  <ForkRightIcon color="action" />
                </Badge>
              </Grid>

              <Grid item>
                <Badge
                  badgeContent={discussions.totalCount}
                  max={MAX_COUNT_TO_SHOW}
                  color="primary"
                >
                  <ChatIcon color="action" />
                </Badge>
              </Grid>

              <Grid item>
                <Badge
                  badgeContent={assignableUsers.totalCount}
                  max={MAX_COUNT_TO_SHOW}
                  color="primary"
                >
                  <SupervisedUserCircleIcon color="action" />
                </Badge>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <Box flexGrow={1} />

      <CardActions>
        <Grid container flexDirection="column">
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <IconButton size="small" onClick={handleToggleFavouritesClick}>
                  {isInFavourites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Grid>
              {withRating && (
                <Grid item>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </Grid>
              )}
              <Grid item>
                <Link href={url} target="_blank" rel="noopener">
                  <IconButton size="small">
                    <LinkIcon />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RepositoryCard;
