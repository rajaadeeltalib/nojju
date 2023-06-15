import Image from "next/image";
import ImageOne from "../../../public/image1.jpg";

const Trending = () => {
  return (
    <div className="container mx-auto">
        
      <div className=" mt-12">
      <div className='border border-t  border-black mx-6 my-12'></div> 
        <div className="flex justify-between mx-6">
          <div className="font-semibold ">TRENDING</div>
          <div className="font-semibold border-b-2 border-b-orange-500">VIEW ALL</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
      <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
        {/* blog 2 */}
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
        {/* blog 3 */}
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
        {/* blog 4 */}
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
        {/* blog 5 */}
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
        {/* blog 6 */}
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" className="rounded-lg"/>
          <div className="flex justify-between items-center text-neutral-600">
          <h4 className="text-[12px]">June 14, 2023</h4>          
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
        </div>
      </div>      
      
    </div>
  );
};

export default Trending;
