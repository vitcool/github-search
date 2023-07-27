import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

import { Routes } from 'constants/common';

const NAVIGATION = [Routes.HOME, Routes.FAVOURITES];

const SimpleBottomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigationChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    navigate(NAVIGATION[newValue]);
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1111 }}
      elevation={3}
    >
      <BottomNavigation showLabels onChange={handleNavigationChange}>
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          sx={{ width: 500 }}
        />

        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default SimpleBottomNavigation;
