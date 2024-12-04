// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh', // Full vertical height
        width: 250,
        backgroundColor: '#2E3B55', // Dark background color
        color: 'white',
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Task Management Dashboard
      </Typography>
      
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 2,
          backgroundColor: '#4CAF50', // Green background for active button
          '&:hover': {
            backgroundColor: '#45a049', // Darker green when hovered
          },
        }}
      >
        Dashboard
      </Button>
    </Box>
  );
};

export default Sidebar;