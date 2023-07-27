import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';

import IRepository from 'models/repository';
import { Badge, Box, Grid, Link } from '@mui/material';

type RepositoryCardProps = {
  repository: IRepository;
};

const MAX_COUNT_TO_SHOW = 9999;

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const {
    name,
    description,
    owner,
    url,
    stargazerCount,
    forkCount,
    isPrivate,
    primaryLanguage,
  } = repository;

  const { color, name: languageName } = primaryLanguage || {};

  return (
    <Card
      variant="outlined"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent>
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
      </CardContent>

      <Box flexGrow={1} />

      <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <Grid container spacing={3}>
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
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={3}>
              <Grid item>{isPrivate ? <LockIcon /> : <PublicIcon />}</Grid>

              <Grid item>
                <Link href={url} target="_blank" rel="noopener">
                  <LinkIcon color="primary" />
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
