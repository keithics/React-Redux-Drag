import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import ModuleInterface from '../../types/ModuleInterface';
import { RootState } from '../store';
import { StartDragInterface } from '../../types/StartDragInterface';

export const moduleInitialState: ModuleInterface[] = [
  { id: 1, coord: { x: 1, y: 80, w: 2, h: 200 } },
  { id: 2, coord: { x: 5, y: 180, w: 2, h: 100 } },
  { id: 3, coord: { x: 4, y: 290, w: 3, h: 200 } },
];

export const ModulePositionSlice = createSlice({
  name: 'ModulePosition',
  initialState: moduleInitialState,
  reducers: {
    addModule: (state: Draft<ModuleInterface[]>, action: PayloadAction<ModuleInterface>) => {
      state.push(action.payload);
    },
    // set position of a single module
    setPosition: (state: Draft<ModuleInterface[]>, action: PayloadAction<ModuleInterface>) => {
      const currentModule = state.find(
        (module) => module.id === action.payload.id
      ) as ModuleInterface;

      const { coord } = currentModule;
      const { x, y } = action.payload.coord;

      Object.assign(coord, { ...coord, x, y });
    },
    startDrag: (state: Draft<ModuleInterface[]>, action: PayloadAction<StartDragInterface>) => {
      const { coord } = state.find((module) => module.id === action.payload.id) as ModuleInterface;

      Object.assign(coord, { ...coord });
    },
  },
});

export const { setPosition, startDrag } = ModulePositionSlice.actions;
export const selectModule = (state: RootState) => state.modulePosition;
export const ModulePositionReducer = ModulePositionSlice.reducer;
