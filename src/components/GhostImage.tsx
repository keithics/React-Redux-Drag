import { Box } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectGhostImage } from '../redux/slices/GhostImageSlice';
import { selectIsOverlapping } from '../redux/slices/IsOverlappingSlice';

function GhostImage() {
  const { x, y, w, h, isCentered } = useAppSelector(selectGhostImage);
  const { isOverlapping } = useAppSelector(selectIsOverlapping);

  const color = isOverlapping ? 'rgba(255,0,0,0.5)' : 'rgba(0,255,0,0.5)';

  let left = x;
  let top = y;

  if (isCentered === false) {
    top = y - h! / 2;
    left = x - w! / 2;
  }

  if (w === 0) return null;
  return (
    <Box
      flex={1}
      border={1}
      zIndex={100}
      position="absolute"
      bgcolor={color}
      width={w}
      height={h}
      top={top}
      left={left}
      borderColor="aqua.500"
    />
  );
}

export default React.memo(GhostImage);
