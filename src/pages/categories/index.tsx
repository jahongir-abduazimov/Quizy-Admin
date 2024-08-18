import { useEffect, useState } from "react";
import Card from "../../components/ui/category-card";
import { PlusOutlined } from "@ant-design/icons";
import CategoryModal from "../../components/modals/category";
import CategoryStore from "../../store/categories";
import { Spin } from "antd";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState({});
  
  const handleClose = () => {
    setShowModal(false);
    setItem({});
  };

  const { getCategories, isLoading, categories, deleteCategory } = CategoryStore();
  
  const handleDelete = async (id: string) => {
    await deleteCategory(id);
  };
  
  const handleEdit = (item: any) => {
    setShowModal(true);
    setItem(item);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    localStorage.removeItem("subcategory_name");
    localStorage.removeItem("quiz_name");
  }, []);

  return (
    <>
      <CategoryModal open={showModal} handleClose={handleClose} item={item} />
      <p className="text-mainColor text-[22px] md:text-[26px] font-semibold mb-3 md:mb-6 line-clamp-1">
        Categories
      </p>
      {isLoading === true ? (
        <div className="flex items-center justify-center mt-[150px]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-cols-max">
          {categories?.map((item: any, index: number) => (
            <Card key={index} data={item} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center cursor-pointer w-full h-[110px] rounded-md bg-white border border-mainColor p-3 sm:w-[200px]"
          >
            <PlusOutlined className="text-[30px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
