import { useNavigate } from "react-router-dom";
import "./WindowLoader.css";
function WindowsLoader() {
  const Navigate = useNavigate();
  setTimeout(() => {
    Navigate("/LoginScreen");
  }, 5000);
  return (
    <div className="windowloadercontainer">
      <div className="windowLoader text-white">
        <div className="logo">
          <p className="top">Microsoft</p>
          <p className="mid">
            Windows<span>XP</span>
          </p>
          <p className="bottom">Professional</p>
          <p className="text-red-500">!This website not responsive</p>
        </div>

        <div className="container">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default WindowsLoader;
