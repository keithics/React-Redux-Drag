import React from 'react';
import { Box } from '@mui/material';

import Grid from './Grid';
import Module from './Module';
import { useAppSelector } from '../redux/hooks';
import { selectModule } from '../redux/slices/ModulePositionSlice';
import ModuleInterface from '../types/ModuleInterface';
import { GUTTER_SIZE } from '../constants';
import { useDrop } from 'react-dnd';
import GhostImage from './GhostImage';

const Page = () => {
  const modules: ModuleInterface[] = useAppSelector(selectModule);
  const containerRef = React.useRef<HTMLDivElement>();

  const containerHeight = React.useMemo(
    () => Math.max(...modules.map(({ coord: { y, h } }) => y + h)) + GUTTER_SIZE * 2,
    [modules]
  );

  // Wire the module to DnD drag system
  const [, drop] = useDrop({ accept: 'module' });
  drop(containerRef);

  return (
    <Box position="relative" width={1024} height={containerHeight} margin="auto">
      <GhostImage />
      <Box
        ref={containerRef}
        position="relative"
        height={containerHeight}
        margin="auto"
        sx={{
          overflow: 'hidden',
          outline: '1px dashed #ccc',
          transition: 'height 0.2s',
        }}
      >
        <Grid height={containerHeight} />
        {modules.map((module) => (
          <Module key={module.id} data={module} />
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(Page);
