import {
  moduleInitialState,
  ModulePositionReducer,
  setPosition,
  startDrag,
} from '../src/redux/slices/ModulePositionSlice';

describe('Module Tests', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(ModulePositionReducer(undefined, {})).toMatchSnapshot();
  });

  test('should be able to change the module coordinates', () => {
    expect(
      ModulePositionReducer(
        moduleInitialState,
        setPosition({
          id: 2,
          coord: {
            x: 1,
            y: 2,
            h: 100,
            w: 2,
          },
        })
      )
    ).toMatchSnapshot();
  });

  test('should be able to change the drag modules', () => {
    expect(
      ModulePositionReducer(
        moduleInitialState,
        startDrag({
          id: 2,
          oldX: 2,
          oldY: 10,
        })
      )
    ).toMatchSnapshot();
  });
});
