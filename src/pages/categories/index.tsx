import { useEffect, useState } from "react";
import Card from "../../components/ui/category-card";
import { PlusOutlined } from "@ant-design/icons";
import CategoryModal from "../../components/modals/category";
import CategoryStore from "../../store/categories";
import { Spin } from "antd";
const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState({})
  const handleClose = () => {
    setShowModal(false);
    setItem({});
  };
  const { getCategories, isLoading, categories, deleteCategory } = CategoryStore();
  const handleDelete = async (id:string) => {
    await deleteCategory(id)
  }
  const handleEdit = (item: any) => {
    setShowModal(true);
    setItem(item);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <CategoryModal open={showModal} handleClose={handleClose} item={item} />
      <p className="text-mainColor text-[26px] font-semibold mb-6">
        Categories
      </p>
      {isLoading === true ? (
        <div className="flex items-center justify-center mt-[150px]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-6 auto-cols-max">
          {categories?.map((item: any, index: number) => (
            <Card key={index} data={item} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center cursor-pointer w-[200px] h-[110px] rounded-md bg-white border border-mainColor p-3"
          >
            <PlusOutlined className="text-[30px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
