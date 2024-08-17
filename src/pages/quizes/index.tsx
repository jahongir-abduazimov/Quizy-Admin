import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Empty, Spin } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import QuizDrawer from "../../components/modals/quiz";
import MoreIcon from "../../assets/more-icon.svg";
import QuizStore from "../../store/quiz";
import QuizModal from "../../components/modals/quiz-delete";

const Index = () => {
  const { quizId } = useParams();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [item, setItem] = useState({});
  const [questionId, setQuestionId] = useState("");
  const { getQuizzes, quizzes, isLoading } = QuizStore();

  const handleClose = () => {
    setShowDrawer(false);
    setItem({});
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleEdit = (item: any) => {
    setItem(item);
    setActiveMenuIndex(null);
    setShowDrawer(true);
  };

  const handleDelete = (id: string) => {
    setActiveMenuIndex(null);
    setQuestionId(id);
    setShowModal(true);
  };

  const toggleMenu = (index: any) => {
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".menu-wrapper")) {
      setActiveMenuIndex(null);
    }
  };

  useEffect(() => {
    getQuizzes(quizId);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [quizId, getQuizzes]);

  return (
    <>
      <QuizDrawer
        open={showDrawer}
        handleClose={handleClose}
        item={item}
        id={quizId}
      />
      <QuizModal
        open={showModal}
        handleClose={handleModalClose}
        id={questionId}
      />
      <div className="flex justify-between">
        <p className="text-mainColor text-[26px] font-semibold mb-10">
          {localStorage.getItem("quiz_name")}
        </p>
        <Button
          onClick={() => setShowDrawer(true)}
          size="large"
          type="primary"
          icon={<PlusOutlined />}
        >
          Add Question
        </Button>
      </div>
      {isLoading === true ? (
        <div className="flex items-center justify-center mt-[150px]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex flex-col gap-y-10">
          {quizzes.length > 0 ? (
            quizzes?.map((item, index) => (
              <div
                key={index}
                className="relative duration-200 border border-mainColor pl-7 pr-3 py-3 rounded-md flex justify-between gap-5 items-center"
              >
                <p className="text-[18px] font-semibold line-clamp-1">
                  {item.quiz}
                </p>
                <div className="relative menu-wrapper">
                  <Button
                    shape="circle"
                    type="text"
                    size="large"
                    icon={<img src={MoreIcon} alt="more icon" />}
                    onClick={() => toggleMenu(index)}
                  />
                  <div
                    className={
                      activeMenuIndex === index
                        ? "absolute max-w-[150px] p-[6px] flex flex-col gap-1 shadow-[0_2px_10px_silver] top-[0] left-[-150px] w-[200px] z-[3000] bg-white rounded-md"
                        : "absolute hidden max-w-[150px] p-[6px] gap-1 shadow-[0_2px_10px_silver] top-[0] left-[-150px] w-[200px] z-50 bg-white rounded-md"
                    }
                  >
                    <div
                      onClick={() => handleEdit(item)}
                      className="flex cursor-pointer items-center gap-[6px] px-3 py-[6px] rounded-md hover:bg-[#1677ff1e] duration-200"
                    >
                      <EditOutlined className="text-[18px] text-[#1677FF]" />
                      <span className="text-[17px] font-medium text-[#1677FF]">
                        Edit
                      </span>
                    </div>
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="flex cursor-pointer items-center gap-[6px] px-3 hover:bg-[#ff00001a] py-[6px] rounded-md duration-200"
                    >
                      <DeleteOutlined className="text-[18px] text-[red]" />
                      <span className="text-[17px] font-medium text-[red]">
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-25px] px-2 border-t border-l border-r rounded-t-[4px] border-mainColor flex items-center gap-2">
                  <p className="font-medium text-[14px]">Answer:</p>
                  <p className="font-medium text-[16px] text-[#1677FF]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center mt-[100px]">
              <Empty description="No questions found." />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Index;
