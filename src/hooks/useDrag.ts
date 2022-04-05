import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectModule, setPosition, startDrag } from '../redux/slices/ModulePositionSlice';
import React, { useRef } from 'react';
import { SetPositionInterface } from '../types/SetPositionInterface';
import ModuleInterface from '../types/ModuleInterface';
import {
  dragGhostImage,
  hideGhostImage,
  setGhostImageCoordinates,
} from '../redux/slices/GhostImageSlice';
import { setCurrentModule } from '../redux/slices/CurrentModuleSlice';
import { getModulePosition } from '../lib/module';
import { isOverlappingWithOtherModules } from '../lib/helpers';
import { setOverlapping } from '../redux/slices/IsOverlappingSlice';

export const useDrag = () => {
  const dispatch = useAppDispatch();
  let parentPosition: SetPositionInterface;
  const modules = useAppSelector(selectModule);
  const containerRef = useRef<HTMLDivElement>();

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    // converts px to row
    const x = event.clientX - parentPosition.x;
    const y = event.clientY - parentPosition.y;

    const currentModule = modules.find(
      (module) => module.id === parentPosition.id
    ) as ModuleInterface;
    const coord = getModulePosition(currentModule, { id: parentPosition.id, x, y });

    const newCoordModule = { id: parentPosition.id, coord };
    const otherModules = modules.filter((allModule) => allModule.id != parentPosition.id);

    // we will only move the module if it is not overlapping
    if (!isOverlappingWithOtherModules(newCoordModule, otherModules)) {
      dispatch(setPosition(newCoordModule));
      dispatch(setOverlapping({ isOverlapping: false, id: parentPosition.id }));
    } else {
      dispatch(setOverlapping({ isOverlapping: true, id: parentPosition.id }));
    }

    dispatch(dragGhostImage({ x, y }));
  };

  const onMouseUp = () => {
    dispatch(hideGhostImage()); // hide the ghost image
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseDown = (
    event: React.MouseEvent,
    parent: SetPositionInterface,
    currentModule: ModuleInterface
  ) => {
    const parentContainer = containerRef.current?.parentElement?.getBoundingClientRect() as DOMRect;
    parentPosition = { id: parent.id, x: parentContainer.x, y: parentContainer.y };

    dispatch(startDrag({ oldX: event.clientX, oldY: event.clientY, id: parent.id }));
    dispatch(setGhostImageCoordinates(currentModule));
    dispatch(setCurrentModule(currentModule));

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  };

  return {
    containerRef,
    onMouseDown,
  };
};
