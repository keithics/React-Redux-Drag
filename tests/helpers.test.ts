import {
  getCoordinates,
  isOverlapping,
  localX2ModuleX,
  moduleW2LocalWidth,
  moduleX2LocalX,
  moduleYGutter,
  setMinMax,
  snapToGutter,
} from '../src/lib/helpers';

describe('helpers', () => {
  test('moduleW2LocalWidth', () => {
    const w = 2;
    expect(moduleW2LocalWidth(w)).toMatchSnapshot();
  });

  test('moduleX2LocalX', () => {
    const x = 2;
    expect(moduleX2LocalX(x)).toMatchSnapshot();
  });

  test('localX2ModuleX', () => {
    const x = 2;
    expect(localX2ModuleX(x)).toMatchSnapshot();
  });

  test('moduleYGutter', () => {
    expect(moduleYGutter(1)).toMatchSnapshot();
  });

  test('setMinMax must return the lowest', () => {
    expect(setMinMax(2, 10, 20)).toMatchSnapshot();
  });

  test('setMinMax must return the highest', () => {
    expect(setMinMax(21, 10, 20)).toMatchSnapshot();
  });

  test('setMinMax must return the same number if between min and max', () => {
    expect(setMinMax(15, 10, 20)).toMatchSnapshot();
  });

  test('getCoordinates', () => {
    expect(
      getCoordinates({
        id: 0,
        coord: { x: 0, y: 0, h: 0, w: 0 },
      })
    ).toMatchSnapshot();
  });

  test('isOverlapping must return true if both modules are overlapping', () => {
    const rect1 = { id: 2, coord: { x: 5, y: 180, w: 2, h: 100, realX: 500 } };
    const rect2 = { id: 1, coord: { x: 4, y: 180, w: 2, h: 100, realX: 500 } };
    expect(isOverlapping(rect1, rect2)).toMatchSnapshot();
  });

  test('isOverlapping must return false if both modules are spaced out', () => {
    const rect1 = { id: 2, coord: { x: 5, y: 180, w: 2, h: 100, realX: 500 } };
    const rect2 = { id: 1, coord: { x: 8, y: 180, w: 2, h: 100, realX: 500 } };
    expect(isOverlapping(rect1, rect2)).toMatchSnapshot();
  });

  test('snapToGutter', () => {
    expect(snapToGutter(2)).toMatchSnapshot();
  });
});
