import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import Card from "../../components/ui/subcategory-card";
import SubCategoryModal from "../../components/modals/subcategory";
import SubcategoryStore from "../../store/subcategory";
import CategoryStore from "../../store/categories";
import { Spin } from "antd";
const Index = () => {
  const { categoryId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState({});
  const { getSubcategories, subcategories, isLoading, deleteSubcategory } = SubcategoryStore();
  const { getCategories, categories } = CategoryStore();
  const handleClose = () => {
    setShowModal(false);
    setItem({});
  };
  const handleDelete = async (id:string) => {
    await deleteSubcategory(id);
  };
  const handleEdit = (data:object) => {
    setItem(data);
    setShowModal(true)
  }
  useEffect(() => {
    getCategories();
    getSubcategories(categoryId);
  }, []);
  return (
    <>
      <SubCategoryModal open={showModal} handleClose={handleClose} params={categoryId} item={item} />
      {categories.map(
        (item, index) =>
          item.id === categoryId && (
            <p key={index} className="text-mainColor text-[26px] font-semibold mb-6">
              {item?.title}
            </p>
          )
      )}
      {isLoading === true ? (
        <div className="flex items-center justify-center mt-[150px]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-6 auto-cols-max">
          {subcategories?.map((item: any, index: number) => (
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
