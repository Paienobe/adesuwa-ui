import { useNavigate } from "react-router-dom";

export const navigator = (path: string) => {
  const navigate = useNavigate();
  navigate(path);
};
