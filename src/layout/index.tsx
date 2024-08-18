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
    <Layout className="h-[100vh] overflow-hidden">
      <Header
        className="flex items-center h-[7%] md:h-[10%] bg-white shadow-[0_2px_10px_#0000001a] px-5 md:px-12"
      >
        <div className="flex h-full items-center justify-between w-full">
          <Link to="/" className="demo-logo">
            <img className="w-[130px]" src={Logo} alt="quizy logo" />
          </Link>
          <div>
            <LogOutModal/>
          </div>
        </div>
      </Header>
      <Content className="px-5 pb-5 pt-1 md:px-12 md:pb-12 md:pt-[11px]">
        <div className="min-h-[27px] mb-2">
          {location.pathname.slice(1, 9) === "category" && (
            <Breadcrumb
              items={[
                {
                  title: (
                    <a onClick={() => navigate(-1)} className="text-[16px] sm:text-[18px]">
                      Categories
                    </a>
                  ),
                },
                {
                  title: <p className="text-[16px] sm:text-[18px] line-clamp-1">{localStorage.getItem("subcategory_name")}</p>,
                },
              ]}
            />
          )}
          {location.pathname.slice(1, 5) === "quiz" && (
            <Breadcrumb
              items={[
                {
                  title: (
                    <a onClick={() => navigate(-2)} className="text-[16px] sm:text-[18px]">
                      Categories
                    </a>
                  ),
                },
                {
                  title: (
                    <a onClick={() => navigate(-1)} className="text-[16px] sm:text-[18px] line-clamp-1">
                      {localStorage.getItem("subcategory_name")}
                    </a>
                  ),
                },
                {
                  title: <p className="text-[16px] sm:text-[18px] line-clamp-1">{localStorage.getItem("quiz_name")}</p>,
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
