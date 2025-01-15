import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import state from '../store';

function ColorPicker({ handletabclick }) {
  const snap = useSnapshot(state);

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 80,
        bottom: 360,
        width: '200px',
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        // Responsive styling
        '@media (max-width: 768px)': {
          left: 90,
          bottom: 350,
          p: 0,
          width:"160px"
        },
      }}
    >
      {/* Close Icon */}
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}
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
              width: '100%',
              height: 'auto',
              // Responsive styles
              '@media (max-width: 768px)': {
                height: '200px', // Adjust height for mobile view
              },
            },
          },
        }}
      />
    </Box>
  );
}

export default ColorPicker;
