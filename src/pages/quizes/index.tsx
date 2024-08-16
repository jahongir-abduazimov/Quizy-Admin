import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import QuizModal from "../../components/modals/quiz";
import MoreIcon from "../../assets/more-icon.svg";
const Index = () => {
  const { quizId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleEdit = () => {
    setShowMenu(false);
  }
  const handleDelete = () => {
    setShowMenu(false);
  }
  return (
    <>
      <div onClick={() => setShowMenu(false)} className={showMenu ? "absolute w-full h-[100vh] top-0 left-0" : "absolute hidden w-full h-[100vh] top-0 left-0"}/>
      <QuizModal open={showModal} handleClose={handleClose} />
      <div className="flex justify-between">
        <p className="text-mainColor text-[26px] font-semibold mb-6">{quizId}</p>
        <Button size="large" type="primary" icon={<PlusOutlined />}>
          Add Question
        </Button>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="duration-200 border border-mainColor pl-7 pr-3 py-3 rounded-md flex gap-5 items-center">
          <p className="text-[16px] font-semibold line-clamp-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            elementum ipsum, vitae consectetur lectus.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed id elementum ipsum, vitae
            consectetur lectus.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed id elementum ipsum, vitae consectetur lectus.
          </p>
          <div className="relative">
            <Button
              shape="circle"
              type="text"
              size="large"
              icon={<img src={MoreIcon} alt="more icon" />}
              onClick={() => setShowMenu(!showMenu)}
            />
            <div
              className={
                showMenu
                  ? "absolute max-w-[150px] p-[6px] flex flex-col gap-1 shadow-[0_2px_10px_silver] top-[0] left-[-150px] w-[200px] z-50 bg-white rounded-md"
                  : "absolute hidden max-w-[150px] p-[6px] gap-1 shadow-[0_2px_10px_silver] top-[0] left-[-150px] w-[200px] z-50 bg-white rounded-md"
              }
            >
              <div onClick={handleEdit} className="flex cursor-pointer items-center gap-[6px] px-3 py-[6px] rounded-md hover:bg-[#1677ff1e] duration-200">
                <EditOutlined className="text-[18px] text-[#1677FF]"/>
                <span className="text-[17px] font-medium text-[#1677FF]">Edit</span>
              </div>
              <div onClick={handleDelete} className="flex cursor-pointer items-center gap-[6px] px-3 hover:bg-[#ff00001a] py-[6px] rounded-md duration-200">
                <DeleteOutlined className="text-[18px] text-[red]"/>
                <span className="text-[17px] font-medium text-[red]">Delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
