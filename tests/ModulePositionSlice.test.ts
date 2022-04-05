import {
  ghostImageInitialState,
  GhostImageReducer,
  setGhostImageCoordinates,
} from '../src/redux/slices/GhostImageSlice';

describe('Ghost Image Tests', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(GhostImageReducer(undefined, {})).toMatchSnapshot();
  });

  test('should be able to change the ghost image coordinates', () => {
    expect(
      GhostImageReducer(
        ghostImageInitialState,
        setGhostImageCoordinates({
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
});
