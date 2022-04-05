import React from 'react';
import { Box } from '@mui/material';

import ModuleInterface from '../types/ModuleInterface';
import { moduleW2LocalWidth, moduleX2LocalX, moduleYGutter } from '../lib/helpers';
import { useDrag } from '../hooks/useDrag';

const Module = ({ data: currentModule }: { data: ModuleInterface }) => {
  const {
    id,
    coord: { x, y, w, h },
  } = currentModule;

  const { onMouseDown, containerRef } = useDrag();

  const top = moduleYGutter(y);
  const left = moduleX2LocalX(x);
  const width = moduleW2LocalWidth(w);

  return (
    <Box
      ref={containerRef}
      display="flex"
      position="absolute"
      border={1}
      borderColor="grey.500"
      padding="10px"
      bgcolor="rgba(0, 0, 0, 0.5)"
      top={top}
      left={left}
      width={width}
      height={h}
      sx={{
        transitionProperty: 'top, left',
        transitionDuration: '0.1s',
        '& .resizer': {
          opacity: 0,
        },
        '&:hover .resizer': {
          opacity: 1,
        },
      }}
    >
      <Box
        onMouseDown={(event: React.MouseEvent) =>
          onMouseDown(event, { id, x: 0, y: 0 }, currentModule)
        }
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={40}
        color="#fff"
        sx={{ cursor: 'move' }}
        draggable
      >
        <Box sx={{ userSelect: 'none', pointerEvents: 'none' }}>{id}</Box>
      </Box>
    </Box>
  );
};

export default React.memo(Module);
