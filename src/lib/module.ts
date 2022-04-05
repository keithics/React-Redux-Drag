import ModuleInterface from '../types/ModuleInterface';
import { NUM_COLUMNS } from '../constants';
import { SetPositionInterface } from '../types/SetPositionInterface';
import {
  isOverlapping,
  localX2ModuleX,
  moduleW2LocalWidth,
  setMinMax,
  snapToGutter,
} from './helpers';

/**
 * MODULE RELATED HELPERS
 */

/**
 * Get Overlapping modules then sort it by id.
 * Since id is based on index, we can safely assume the first item is in on top of the next module
 * returns the topmost overlapping module
 */
export const getOverlappingModules = (
  modules: ModuleInterface[],
  currentModule: ModuleInterface
) => {
  return modules
    .filter((om) => isOverlapping(currentModule, om))
    .sort((a, b) => {
      return a.id - b.id;
    });
  //.shift();
};

export const getModulePosition = (
  currentModule: ModuleInterface,
  position: SetPositionInterface
) => {
  const { coord } = currentModule;
  const { x: newX, y: newY } = position;

  // snap right and center
  const currentX = localX2ModuleX(newX - moduleW2LocalWidth(coord.w) / 4);

  let x = setMinMax(currentX, 0, NUM_COLUMNS - coord.w);

  // snap top and center the module to mouse cursor
  const centeredY = newY - coord.h / 2;
  const y = setMinMax(centeredY, 0, centeredY);

  // we will convert our local to modules
  const top = snapToGutter(y);

  return { ...coord, x, y: top };
};
