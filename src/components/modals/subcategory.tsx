import { Button, Form, Input, Modal } from "antd";

const App = ({ open, handleClose, id }: any) => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        title={id ? "Edit subcategory" : "Add new subcategory"}
        open={open}
        onCancel={handleClose}
        footer
        style={{ maxWidth: "450px" }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Subcategory name"
            name="subcategory"
            rules={[
              { required: true, message: "Please input category name!" },
            ]}
          >
            <Input size="large" />
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
      </Modal>
    </>
  );
};

export default App;
