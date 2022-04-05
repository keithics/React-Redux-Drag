import { COLUMN_WIDTH, GUTTER_SIZE } from '../constants';
import ModuleInterface from '../types/ModuleInterface';
import { ModuleCoordinatesInterface } from '../types/ModuleCoordinatesInterface';

export const moduleW2LocalWidth = (moduleW: number) => moduleW * COLUMN_WIDTH - GUTTER_SIZE;

// converts grid column value to to pixels
export const moduleX2LocalX = (moduleX: number) => moduleW2LocalWidth(moduleX) + GUTTER_SIZE * 2;

export const localX2ModuleX = (localX: number) =>
  Math.floor((localX - GUTTER_SIZE / 2) / COLUMN_WIDTH);

export const moduleYGutter = (y: number) => y + GUTTER_SIZE;

export const setMinMax = (value: number, min: number, max: number) =>
  value > max ? max : value < min ? min : value;

export const getCoordinates = (module: ModuleInterface): ModuleCoordinatesInterface => {
  const {
    coord: { x, w, y, h },
  } = module;
  // width in px
  const realWidth = moduleW2LocalWidth(w);
  const localX = moduleX2LocalX(x);
  return {
    left: localX,
    right: localX + realWidth,
    top: y,
    bottom: y + h,
  };
};

export const isOverlapping = (module1: ModuleInterface, module2: ModuleInterface) => {
  const a = getCoordinates(module1);
  const b = getCoordinates(module2);
  const left = a.left < b.right;
  const right = a.right > b.left;
  const top = a.top < b.bottom + GUTTER_SIZE;
  const bottom = a.bottom >= b.top;
  return left && right && top && bottom;
};

export const snapToGutter = (n: number) => Math.ceil(n / GUTTER_SIZE) * GUTTER_SIZE;

export const isOverlappingWithOtherModules = (
  currentModule: ModuleInterface,
  otherModules: ModuleInterface[]
): boolean => {
  let hasOverlapped = false;
  for (const otherModule of otherModules) {
    if (isOverlapping(currentModule, otherModule)) {
      hasOverlapped = true;
      break;
    }
  }

  return hasOverlapped;
};
