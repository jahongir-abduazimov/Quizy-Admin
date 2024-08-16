import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";
import Logo from "../assets/Logo.svg";
import LogOutModal from "../components/modals/logout";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh]">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          height: "10%",
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex h-full items-center justify-between w-full">
          <Link to="/" className="demo-logo">
            <img src={Logo} alt="quizy logo" />
          </Link>
          <div>
            <LogOutModal/>
          </div>
        </div>
      </Header>
      <Content style={{ padding: "11px 48px 48px 48px" }}>
        <div className="h-[27px] mb-2">
          {location.pathname.slice(1, 9) === "category" && (
            <Breadcrumb
              items={[
                {
                  title: (
                    <a onClick={() => navigate(-1)} className="text-[16px]">
                      Categories
                    </a>
                  ),
                },
                {
                  title: <p className="text-[16px]">Subcategories</p>,
                },
              ]}
            />
          )}
          {location.pathname.slice(1, 5) === "quiz" && (
            <Breadcrumb
              items={[
                {
                  title: (
                    <a onClick={() => navigate(-2)} className="text-[16px]">
                      Categories
                    </a>
                  ),
                },
                {
                  title: (
                    <a onClick={() => navigate(-1)} className="text-[16px]">
                      Subcategories
                    </a>
                  ),
                },
                {
                  title: <p className="text-[16px]">Quizzes</p>,
                },
              ]}
            />
          )}
        </div>
        <div
          style={{
            background: colorBgContainer,
            height: "96%",
            padding: 24,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1)",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
