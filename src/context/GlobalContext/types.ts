export type GlobalContextType = {
  action: ActionType | null;
  setAction: React.Dispatch<React.SetStateAction<ActionType | null>>;
};

export type ActionType = {
  action: string;
  message: string;
  actionFunc?: (...args: any[]) => Promise<any>;
};
