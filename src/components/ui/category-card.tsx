import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Tooltip } from "antd";
import { Link } from "react-router-dom";
import CategoryModal from "../../components/modals/category";
const Index = ({ title, id }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <CategoryModal
        open={isModalVisible}
        handleClose={() => setIsModalVisible(false)}
        id={id}
      />
      <div className="relative w-[200px] h-[110px] rounded-md bg-white border-mainColor duration-200 shadow-[0_2px_7px_silver] hover:shadow-[0_4px_15px_silver] hover:scale-105">
        <Link to={`/subcategories/${title}`}>
          <div className="flex items-center justify-center cursor-pointer w-full h-full p-3">
            <p className="line-clamp-2 font-semibold text-[18px]">{title}</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 absolute top-1 right-1">
          <Tooltip title="Edit">
            <Button
              onClick={() => setIsModalVisible(true)}
              type="text"
              shape="circle"
              icon={<EditOutlined />}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Delete the category"
              description="Are you sure to delete this category?"
              okText="Yes"
              cancelText="No"
              placement="topRight"
            >
              <Button type="text" shape="circle" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Index;
