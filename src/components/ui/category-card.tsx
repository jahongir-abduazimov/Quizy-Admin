import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const Index = ({ data, handleDelete, handleEdit }: any) => {
  return (
    <>
      <div className="relative w-full sm:w-[180px] md:w-[200px] h-[110px] rounded-md bg-white border-mainColor duration-200 shadow-[0_2px_7px_silver] hover:shadow-[0_4px_15px_silver] hover:scale-105">
        <Link to={`/category/${data?.id}`}>
          <div
            onClick={() =>
              localStorage.setItem("subcategory_name", data?.title)
            }
            className="flex items-center justify-center cursor-pointer w-full h-full p-3"
          >
            <p className="line-clamp-2 font-semibold text-[18px]">
              {data?.title}
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-2 absolute top-1 right-1">
          <Button
            onClick={() => handleEdit(data)}
            type="text"
            shape="circle"
            icon={<EditOutlined />}
          />
          <Popconfirm
            title="Delete the category"
            description="Are you sure to delete this category?"
            okText="Yes"
            cancelText="No"
            placement="topRight"
            onConfirm={() => handleDelete(data?.id)}
          >
            <Button type="text" shape="circle" icon={<DeleteOutlined />} />
          </Popconfirm>
        </div>
      </div>
    </>
  );
};

export default Index;
