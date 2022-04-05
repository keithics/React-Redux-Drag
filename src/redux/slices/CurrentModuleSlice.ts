import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import CurrentModuleInterface from '../../types/CurrentModuleInterface';

export const moduleInitialState: CurrentModuleInterface = {
  id: 0,
};

export const CurrentModuleSlice = createSlice({
  name: 'CurrentModule',
  initialState: moduleInitialState,
  reducers: {
    setCurrentModule: (
      state: Draft<CurrentModuleInterface>,
      action: PayloadAction<CurrentModuleInterface>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setCurrentModule } = CurrentModuleSlice.actions;
export const selectCurrentModule = (state: RootState) => state.currentModule;
export const CurrentModuleReducer = CurrentModuleSlice.reducer;
