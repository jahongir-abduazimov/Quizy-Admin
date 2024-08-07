import { useParams } from "react-router-dom";
const Index = () => {
  const { quizId } = useParams();
  return (
    <>
      <p className="text-mainColor text-[26px] font-semibold mb-6">
        {quizId}
      </p>
      <div className="flex flex-col gap-y-6">
        <div className="duration-200 shadow-[0_4px_10px_silver] px-7 py-4 rounded-md">
          <p className="text-[18px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            elementum ipsum, vitae consectetur lectus. Donec et urna vel velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            elementum ipsum, vitae consectetur lectus. Donec et urna vel velit?
          </p>
        </div>
        <div className="duration-200 shadow-[0_4px_10px_silver] px-7 py-4 rounded-md">
          <p className="text-[18px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            elementum ipsum, vitae consectetur lectus. Donec et urna vel velit?
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
