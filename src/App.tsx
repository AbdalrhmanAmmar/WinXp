import { RouterProvider } from "react-router-dom";

import router from "./Routes";
// import WindowScreen from "./Components/WindowScreen";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <WindowScreen/> */}
    </>
  );
}

export default App;
