import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

function NavLink({ label, link, icon, clickHandler }) {
  return (
    <Link to={link} style={{ width: '100%' }} onClick={clickHandler}>
      <li
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          //   paddingTop: 2,
          //   paddingBottom: 2,
          padding: '10px 20px',
          borderRadius: 12,
          marginTop: 4,
          marginBottom: 4,
          //   width: '100%',
          boxSizing: 'border-box',
          color: '#2E2C3A',
        }}
      >
        <Box sx={{ marginRight: 1 }}>{icon}</Box>
        <span>{label}</span>
      </li>
    </Link>
  );
}

export default NavLink;
