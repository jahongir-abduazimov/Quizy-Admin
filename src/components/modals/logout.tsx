import { Button, Modal } from "antd";
import { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { removeDataFromCookie } from "@data-service";

const MyModal: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const out = () => {
    removeDataFromCookie("token");
    navigate('/login')
    window.location.reload()
  }
  return (
    <>
      <Button
        onClick={() => setIsModalVisible(true)}
        icon={<LogoutOutlined style={{ fontSize: "20px" }} />}
        size="large"
        type="text"
      >
        <div className="hidden sm:block">
           <span className="font-semibold">Logout</span>
        </div>
      </Button>
      <Modal
        className="max-w-[450px]"
        open={isModalVisible}
        onCancel={handleCancel}
        title="Are you sure you want to log out?"
        footer={
          <div className="flex items-center gap-3 justify-end mt-10">
            <Button size="large" type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="large" type="primary" onClick={out}>
                Ok
            </Button>
          </div>
        }
      />
    </>
  );
};
export default MyModal;
