import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import state from '../store';

function ColorPicker({ handletabclick }) {
  const snap = useSnapshot(state);
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 90,
        bottom: 360,
        width: '200px',
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        p: 1,
        // Responsive styling
        '@media (max-width: 768px)': {
          left: 50,
          bottom: 350,
          p: 0,
          width:"fit-content",
          overflow:"hidden"
        },
      }}
    >
      {/* Close Icon */}
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end',}}
        onClick={() => handletabclick('close')}
      >
          <CloseIcon />
      </Box>

      {/* Sketch Picker */}
      <SketchPicker
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
        disableAlpha
        
        styles={{
          default: {
            picker: {
              boxShadow: 'none',
              borderRadius: '8px',
              width: isMobile ? '150px' : "180px",
              height: isMobile ? '160px':"250px",
            },
            // Hide suggested colors for mobile screens
            swatches: isMobile ? { display: 'none' } : {},
          },
        }}
      />

    </Box>
  );
}

export default ColorPicker;
