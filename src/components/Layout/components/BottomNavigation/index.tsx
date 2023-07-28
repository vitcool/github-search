import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import BottomNavigationMaterial from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

import { Routes } from 'constants/common';

const NAVIGATION = [Routes.HOME, Routes.FAVOURITES];

const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [value, setValue] = React.useState<number>(
    NAVIGATION.indexOf(pathname as Routes)
  );

  const handleNavigationChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
    navigate(NAVIGATION[newValue]);
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1111 }}
      elevation={3}
    >
      <BottomNavigationMaterial
        showLabels
        onChange={handleNavigationChange}
        value={value}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />

        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigationMaterial>
    </Paper>
  );
};

export default BottomNavigation;
