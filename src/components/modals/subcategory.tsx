import { Button, Form, Input, Modal } from "antd";
import SubcategoryStore from "../../store/subcategory"
import { useEffect, useState } from "react";

const App = ({ open, handleClose, item, params }: any) => {
  const { postSubcategory, editSubcategory } = SubcategoryStore()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [form] = Form.useForm();
  const initialValues: any = {
    title: item?.title || "",
    time: item?.time || "",
  }
  const onFinish = async (values: any) => {
    const payload = {
      categoryId: params,
      title: values.title,
      time: values.time,
    }
    setButtonLoading(true)
    try {
      if (item.id) {
        await editSubcategory(item?.id, values)
        form.resetFields()
        handleClose()
      } else {
        const res = await postSubcategory(payload)
        if (res.status === 201) {
          form.resetFields()
          handleClose()
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setButtonLoading(false)
    }
  };
  useEffect(() => {
    form.resetFields()
    if (item) {
      form.setFieldsValue({
        title: item.title,
        time: item.time,
      })
    }
  }, [handleClose])
  return (
    <>
      <Modal
        title={item?.id ? "Edit subcategory" : "Add new subcategory"}
        open={open}
        onCancel={handleClose}
        footer
        style={{ maxWidth: "450px" }}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
          initialValues={initialValues}
        >
          <Form.Item
            label="Subcategory name"
            name="title"
            rules={[
              { required: true, message: "Please input subcategory name!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              { required: true, message: "Please input category name!" },              
            ]}
          >
            <Input min={1} type="number" size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              loading={buttonLoading}
            >
              {item.id ? "Save" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
