import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IsOverlappingInterface } from '../../types/isOverlappingInterface';

export const isOverlappingInitialState: IsOverlappingInterface = {
  id: 0,
  isOverlapping: false,
};

export const IsOverlappingSlice = createSlice({
  name: 'IsOverlapping',
  initialState: isOverlappingInitialState,
  reducers: {
    setOverlapping: (
      state: Draft<IsOverlappingInterface>,
      action: PayloadAction<IsOverlappingInterface>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setOverlapping } = IsOverlappingSlice.actions;
export const selectIsOverlapping = (state: RootState) => state.isOverlapping;
export const IsOverlappingReducer = IsOverlappingSlice.reducer;
