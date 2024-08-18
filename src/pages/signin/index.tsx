import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Notification from "@notification";
import { auth } from "@service";
import { setDataToCookie, getDataFromCookie } from "@data-service";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false)
  useEffect(() => {
    const token = getDataFromCookie("token");
    if (token) {
      navigate("/");
    }
  }, [])
  const onFinish = async (values: any) => {
    setButtonLoading(true)
    try {
      const res = await auth.sign_in(values);
      console.log(res);
      if (res?.status === 200) {
        setDataToCookie("token", res?.data?.token)
        Notification({
          message: "Successfully login!",
          type: "success",
        });
        navigate("/");
      }
    } catch (error: any) {
      Notification({
        message: error.request.status === 401 ? "Email or password incorrect!" : "Something went wrong!",
        type: "error",
      });
    } finally {
      setButtonLoading(false)
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="mb-4 sm:mb-8 text-[28px] sm:text-[34px] font-semibold sm:font-bold text-center text-mainColor">
        Admin
      </p>
      <div className="w-[310px] sm:w-[450px]">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your E-mail!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 5,
                message: "Please input at least 5 characters!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              loading={buttonLoading}
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Index;
