import Image from "next/image";
//import Image1 from "../public/img23.jpg";

const ContentThere = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-amber-600">WHY CHOOSE US</p>
        <p className="text-4xl font-light text-gray-600">
          Proudly Serving the  SBI Bank Anand nagar colony ,Care hospital back side
                      <br /> Hyderabad, Telangana. 
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>
  );
};
export default ContentThere;
