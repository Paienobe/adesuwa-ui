import { ActionType } from "./types";

export const actions: { [x: string]: ActionType } = {
  delete: {
    action: "Delete",
    message:
      "This action will permanently delete this item. Are you sure you want to proceed?",
  },
  logout: {
    action: "Log out",
    message:
      "Logging out will end your current session. Are you sure you want to log out?",
  },
};
