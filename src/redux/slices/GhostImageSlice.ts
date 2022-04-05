import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import GhostImageInterface from '../../types/GhostImageInterface';
import { RootState } from '../store';
import { moduleW2LocalWidth, moduleX2LocalX, moduleYGutter } from '../../lib/helpers';
import ModuleInterface from '../../types/ModuleInterface';

export const ghostImageInitialState: GhostImageInterface = {
  x: 0,
  y: 0,
  h: 0,
  w: 0,
  // if false, we need the move the cursor centered with the ghost image
  isCentered: true,
};

export const GhostImageSlice = createSlice({
  name: 'GhostImage',
  initialState: ghostImageInitialState,
  reducers: {
    dragGhostImage: (
      state: Draft<GhostImageInterface>,
      action: PayloadAction<GhostImageInterface>
    ) => {
      const { x, y } = action.payload;
      Object.assign(state, { x, y, isCentered: false });
    },
    hideGhostImage: (state: Draft<GhostImageInterface>) => {
      state.w = 0;
      state.isCentered = true;
    },
    // called when mouse down and mouse up event the module
    // we need the same values from current module in order to center the ghost image on click
    setGhostImageCoordinates: (
      state: Draft<GhostImageInterface>,
      action: PayloadAction<ModuleInterface>
    ) => {
      const {
        coord: { x, y, w, h },
      } = action.payload;

      Object.assign(state, {
        x: moduleX2LocalX(x),
        y: moduleYGutter(y),
        w: moduleW2LocalWidth(w),
        h,
      });
    },
  },
});

export const { dragGhostImage, hideGhostImage, setGhostImageCoordinates } = GhostImageSlice.actions;
export const selectGhostImage = (state: RootState) => state.ghostImage;
export const GhostImageReducer = GhostImageSlice.reducer;
