import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import WindowsLoader from "../Pages/WindowLoader/WindowsLoader";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";
import WindowScreen from "../Components/WindowScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<WindowsLoader />} />
      <Route path="/loginScreen" element={<LoginScreen />} />
      <Route path="/WindowScreen" element={<WindowScreen />} />
    </>
  )
);

export default router;
