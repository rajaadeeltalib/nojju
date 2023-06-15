import Image from "next/image";
import ImageOne from "../../../public/image1.jpg";
import Link from "next/link"

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className=" mt-6">
        <div className="flex justify-between mx-6 items-center">
          <div className="font-semibold text-md text-orange-500">LATEST</div>
          <div className="font-semibold text-md border-b-2 border-b-orange-500 "><Link href={"/blog"}>VIEW ALL</Link></div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog/blog1"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
        {/* blog 2 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
        {/* blog 3 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
        {/* blog 4 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
        {/* blog 5 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
        {/* blog 6 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
        <Link href={"/blog"}><Image src={ImageOne} alt="Image One" className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          <p className="text-justify text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.</p>
          </div>
        </div>
      </div>      
      
    </div>
  );
};

export default Hero;
