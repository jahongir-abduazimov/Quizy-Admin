import { Button, Modal } from "antd";
import QuizStore from "../../store/quiz"
interface MyComponents {
  open: boolean;
  handleClose: () => void;
  id: string;
}

const MyModal: React.FC<MyComponents> = ({open, handleClose, id}:any) => {
  const { deleteQuiz } = QuizStore()
  const handleDelete = async () => {
    await deleteQuiz(id)
    handleClose()
  }
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        style={{ maxWidth: "450px" }}
        title="Are you sure you want dalete this question"
        footer={
          <div className="flex items-center gap-3 justify-end mt-10">
            <Button size="large" type="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleDelete} size="large" type="primary">
                Ok
            </Button>
          </div>
        }
      />
    </>
  );
};
export default MyModal;
