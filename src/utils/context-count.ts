import { createContext } from "react";

export type ContextCountType = {
  contextCount: number;
  setContextCount: (contextCount: number) => void;
};

export const ContextCount = createContext<ContextCountType>({
  contextCount: 0,
  setContextCount: () => {},
});
