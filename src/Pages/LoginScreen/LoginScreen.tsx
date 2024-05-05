import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const Navigate = useNavigate();
  setTimeout(() => {
    Navigate("/WindowScreen");
  }, 5000);
  return (
    <div className="font-sans bg-[#004E98] w-screen">
      <div id="window">
        <div id="topBar">
          <p>Log On to Windows</p>
        </div>

        <div id="logoArea">
          <div style={{ position: "absolute", top: "35px", left: "855px" }}>
            <canvas id="canvas" width="80" height="100">
              This browser is not compatible with HTML5 canvas.
            </canvas>
          </div>
          <div id="section">
            <br />
            <p id="microsoftTop">Microsoft</p>
            <p>
              <span id="windowSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows<sup>xp</sup>
              </span>
            </p>
            <p id="proBottom">Professional</p>
          </div>

          <nav>
            <p>Copyright &copy; 1985-2001</p>
            <p>
              Microsoft Corporation <span id="rightSpan">Microsoft</span>
            </p>
          </nav>
        </div>

        <div id="orangeBar"></div>

        <form>
          <p className="specialAlign">
            User name: <input type="text" />
          </p>
          <p className="specialAlign">
            Password: &nbsp; <input type="password" />
          </p>
          <button id="firstButton">OK</button>
          <button>Cancel</button>
          <button>Options &gt;&gt;</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
