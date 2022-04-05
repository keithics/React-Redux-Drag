import {
  CurrentModuleReducer,
  moduleInitialState,
  setCurrentModule,
} from '../src/redux/slices/CurrentModuleSlice';

describe('Current Module Tests', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(CurrentModuleReducer(undefined, {})).toMatchSnapshot();
  });

  test('should be able to change module', () => {
    expect(CurrentModuleReducer(moduleInitialState, setCurrentModule({ id: 2 }))).toMatchSnapshot();
  });
});
