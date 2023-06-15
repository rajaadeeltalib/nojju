import Image from "next/image";
import ImageOne from "../../../../public/image1.jpg";

const BlogPage = () => {
  return (
    <div className="container mx-auto my-10 px-4 flex flex-col md:flex-row md: gap-x-6 lg:flex-row justify-between">
      <div className="md:max-w-[30%] md:my-12">
        <Image src={ImageOne} alt="Image One" className="rounded-xl" />
        <div className="border border-gray-500 my-10">
          <h2 className="md:text-md md:font-bold">Table of Contents</h2>
          <div className="border-t border-gray-500">
            1. introduction
            <br />
            2. introduction
            <br />
            1. introduction
            <br />
            2. introduction
            <br />
            1. introduction
            <br />
            2. introduction
            <br />
            1. introduction
            <br />
            2. introduction
            <br />
            1. introduction
            <br />
            2. introduction
          </div>
        </div>
      </div>
      <div className="md:max-w-[40%] md:my-12">
        {" "}
        <h1 className=" text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
          I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung
          Cancer.
        </h1>
        <div className="my-8 text-justify">
          <p>
            <strong>Lorem ipsum</strong>,{" "}
          </p>
          <p>
            dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta
            sint quisquam, minus autem necessitatibus recusandae dolore.{" "}
          </p>
          <p>
            Ipsa eligendi reiciendis illo sequi saepe autem repellat quas,
            veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem
            necessitatibus recusandae dolore.{" "}
          </p>
          <p>
            <strong>
              Ipsa eligendi reiciendis illo sequi saepe autem repellat quas
            </strong>{" "}
          </p>
          <p>
            veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem
            necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo
            sequi saepe autem repellat quas, veritatis recusandae odit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            impedit! Dicta sint quisquam, minus autem necessitatibus recusandae
            dolore.{" "}
          </p>
          <div className="flex justify-center py-4">

          <Image src={ImageOne} alt="Image One" className="rounded-xl"/>
          </div>
          <p>
            <strong>Ipsa eligendi reiciendis illo</strong>{" "}
          </p>
          <p>
            sequi saepe autem repellat quas, veritatis recusandae odit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            impedit! Dicta sint quisquam, minus autem necessitatibus recusandae
            dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat
            quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam,
            minus autem necessitatibus recusandae dolore. Ipsa eligendi
            reiciendis illo sequi saepe autem repellat quas, veritatis
            recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aperiam, impedit!{" "}
          </p>
        </div>
      </div>
      {/* section 3 */}
      <div className="md:max-w-[30%] md:my-12 ">
        <h4 className="border-b-2 border-b-orange-500 font-semibold text-md flex justify-center md:mx-14 lg:mx-28">Featured</h4>
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl"/>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="text-md font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          
          </div>
        </div>
        {/* featured 2 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl"/>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className=" text-md font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          
          </div>
        </div>
        {/* featured 3 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl"/>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
          <h3 className="text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-md font-semibold border-b-2 border-b-orange-500 text-justify">
            I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect Lung Cancer. 
          </h1>
          
          </div>
        </div>
         </div>
    </div>
  );
};

export default BlogPage;
