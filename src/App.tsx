// import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      {/* <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1D1D1D",
          },
          components: {
            Input: {
              activeShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            },
          }
        }}
      > */}
        <Outlet />
      {/* </ConfigProvider> */}
    </>
  );
};

export default App;
