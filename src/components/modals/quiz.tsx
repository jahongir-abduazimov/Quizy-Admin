import {
  Button,
  Drawer,
  Form,
  Input,
  Radio,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import QuizStore from "../../store/quiz"

const App = ({ open, handleClose, item, id }: any) => {
  const [form] = Form.useForm();
  const { postQuiz, editQuiz } = QuizStore()
  const onFinish = async (values: any) => {
    const payload = {
      typeId: id,
      quiz: values.quiz,
      A: values.A,
      B: values.B,
      C: values.C,
      D: values.D,
      answer: values.answer,
    }
    try {
      if (item.id) {
        await editQuiz(item.id, values)
        form.resetFields()
        handleClose()
      } else {
        await postQuiz(payload)
        form.resetFields()
        handleClose()
      }
    } catch (err) {
      console.error(err)
    } finally {

    }
  };
  useEffect(() => {
    form.resetFields()
    if (item) {
      form.setFieldsValue({
        quiz: item.quiz,
        A: item.A,
        B: item.B,
        C: item.C,
        D: item.D,
        answer: item.answer,
      })
    }
  }, [handleClose])
  return (
    <>
      <Drawer
        width={500}
        title={item.id ? "Edit question" : "Add question"}
        open={open}
        onClose={handleClose}
      >
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Question"
            name="quiz"
            rules={[
              { required: true, message: "Please input question!" },
              {
                min: 5,
                message: "Question should be at least 5 characters long!",
              },
            ]}
          >
            <TextArea rows={2} size="large" />
          </Form.Item>
          <Form.Item
            label="A"
            name="A"
            rules={[{ required: true, message: "Please input text!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="B"
            name="B"
            rules={[{ required: true, message: "Please input text!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="C"
            name="C"
            rules={[{ required: true, message: "Please input text!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="D"
            name="D"
            rules={[{ required: true, message: "Please input text!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Correct answer"
            name="answer"
            rules={[{ required: true, message: "Please input correct answer!" }]}
          >
            <Radio.Group>
              <Space direction="horizontal">
                <Radio value="A">A</Radio>
                <Radio value="B">B</Radio>
                <Radio value="C">C</Radio>
                <Radio value="D">D</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              {item.id ? "Save" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default App;
