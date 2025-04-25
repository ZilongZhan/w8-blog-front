import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/posts"} />} />
        <Route path="posts" element={<></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
