// import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import Notification from "@notification";
import { auth } from "@service"


const Index = () => {
  // const navigate = useNavigate();

  const onFinish = async (values:any) => {
    try {
      const res = await auth.sign_in(values)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="mb-8 text-[34px] font-bold text-center text-mainColor">
        Admin
      </p>
      <div className="w-[450px]">
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
                min: 6,
                message: "Please input at least 6 characters!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Index;
