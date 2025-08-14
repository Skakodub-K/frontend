import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404Page from "@pages/error404-page/";
import LoginPage from "@/pages/login-page";
import AppLayout from "@/widgets/app-layout";
import ProfilePage from "@/pages/profile-page";
import AchievementsPage from "@/pages/achievements-page";
import ActivityPage from "@/pages/activity-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
