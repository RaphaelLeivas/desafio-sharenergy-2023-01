import React from 'react';

export interface IMainContext {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

export const DEFAULT_MAIN_CONTEXT: IMainContext = {
  isDrawerOpen: true,
  setIsDrawerOpen: (value: boolean) => undefined,
};

export const MainContext = React.createContext<IMainContext>(DEFAULT_MAIN_CONTEXT);
