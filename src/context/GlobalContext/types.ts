import { SetURLSearchParams } from "react-router-dom";

export type GlobalContextType = {
  action: ActionType | null;
  setAction: React.Dispatch<React.SetStateAction<ActionType | null>>;
  queryText: string;
  setQueryText: React.Dispatch<React.SetStateAction<string>>;
  navigator: (path: string) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

export type ActionType = {
  action: string;
  message: string;
  actionFunc?: (...args: any[]) => Promise<any>;
};
