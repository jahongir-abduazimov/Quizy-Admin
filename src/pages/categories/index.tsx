import { useState } from "react";
import Card from "../../components/ui/category-card";
import { PlusOutlined } from "@ant-design/icons"
import CategoryModal from "../../components/modals/category"
// import CategoryStore from "../../store/categories"
const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  // const { getCategories } = CategoryStore()
  
  // const categoryData = () => {
  //   const res = getCategories()
  //   console.log(res);
  // }
  // useEffect(() => {
  //   categoryData()
  // }, [])
  return (
    <>
      <CategoryModal open={showModal} handleClose={handleClose} />
      <p className="text-mainColor text-[26px] font-semibold mb-6">
        Categories
      </p>
      <div className="grid gap-5 grid-cols-6 auto-cols-max">
        <Card id="1" title="Inliz-tili" />
        <Card id="2" title="Matematika" />
        <Card id="3" title="IQ" />
        <Card id="4" title="Kimyo" />
        <Card id="5" title="Fizika" />
        <Card id="6" title="Inliz-tili" />
        <Card id="7" title="Matematika" />
        <Card id="8" title="IQ" />
        <Card id="9" title="Kimyo" />
        <Card id="10" title="Fizika" />
        <div onClick={() => setShowModal(true)} className="flex items-center justify-center cursor-pointer w-[200px] h-[110px] rounded-md bg-white border border-mainColor p-3">
          <PlusOutlined className="text-[30px]" />
        </div>
      </div>
    </>
  );
};

export default Index;
