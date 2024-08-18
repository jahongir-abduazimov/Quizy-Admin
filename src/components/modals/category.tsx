import { Button, Form, Input, Modal } from "antd";
import useCategoryStore from "../../store/categories";
import { useEffect, useState } from "react";

const App = ({ open, handleClose, item }: any) => {
  const { postCategory, editCategory } = useCategoryStore()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [form] = Form.useForm();
  const initialValues: any = {
    title: item?.title || "",
    time: item?.time || "",
  }
  const onFinish = async (values: any) => {
    setButtonLoading(true)
    try {
      if (item.id) {
        const res: any = await editCategory(item.id, values)
        if (res.status === 201) {
          handleClose()
          form.resetFields()
        }
      } else {
        const res = await postCategory(values)
        if (res.status === 201) {
          handleClose()
          form.resetFields()
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setButtonLoading(false)
    }
  };
  useEffect(() => {
    form.resetFields()
    if (item) {
      form.setFieldsValue({
        title: item.title,
      })
    }
  }, [handleClose])

  return (
    <>
      <Modal
        className="max-w-[450px]"
        title={item.id ? "Edit category" : "Add new category"}
        open={open}
        onCancel={handleClose}
        footer
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={initialValues}
        >
          <Form.Item
            label="Category name"
            name="title"
            rules={[
              { required: true, message: "Please input category name!" },
              { min: 5, message: "Category name should be at least 5 characters long!" },
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
              loading={buttonLoading}
            >
              {item.id? "Save" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
