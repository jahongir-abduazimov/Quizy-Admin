import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromCookie } from "@data-service";
import Layout from "../../layout/index";
const Index = () => {
  const navigate = useNavigate();
  const token = getDataFromCookie("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <Layout />;
};

export default Index;
