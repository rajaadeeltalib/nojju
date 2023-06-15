import Image from "next/image";
import ImageOne from "../../../../public/image1.jpg";

const BlogPage = () => {
  return (
    <>
    <div className="container mx-auto my-10 px-4 flex flex-col md:flex-row md: gap-x-6 lg:flex-row justify-between">
      <div className="md:max-w-[30%] md:my-12">
        <Image src={ImageOne} alt="Image One" className="rounded-xl" />
        <div className="border border-gray-500 my-10 px-4">
          <h2 className="md:text-md md:font-bold py-4 text-orange-500">Table of Contents</h2>
          <div className="border-t border-gray-500 py-2 px-6">
            <ol className="list-decimal">
              <li>hello the deal</li>
              <li>nice to meet you</li>
              <li>once upon a time</li>
              <li>you will get this</li>
              <li>now see this item</li>
              <li>it is great to see</li>
              <li>no one can get this</li>
              <li>time is going very fast</li>
              <li>hello the deal</li>
              <li>nice to meet you</li>
              <li>once upon a time</li>
              <li>you will get this</li>
              <li>now see this item</li>
              <li>it is great to see</li>
              <li>no one can get this</li>
              <li>time is going very fast</li>
              <li>hello the deal</li>
              <li>nice to meet you</li>
              <li>once upon a time</li>
              <li>you will get this</li>
              <li>now see this item</li>
              <li>it is great to see</li>
              <li>no one can get this</li>
              <li>time is going very fast</li>
            </ol>
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
          <div className="flex justify-center my-8">
          <button className="bg-orange-500 text-white text-lg font-bold px-4 py-4 rounded-full">Buy From Amazon</button>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="md:max-w-[30%] md:my-12 ">
        <h4 className="border-b-2 border-b-orange-500 font-semibold text-md md:mx-4 lg:mx-0">
          Featured
        </h4>
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl" />
          <div className="flex justify-between items-center px-2">
            <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
            <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
            <h1 className="text-md font-semibold border-b-2 border-b-orange-500 text-justify">
              I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect
              Lung Cancer.
            </h1>
          </div>
        </div>
        {/* featured 2 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl" />
          <div className="flex justify-between items-center px-2">
            <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
            <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
            <h1 className=" text-md font-semibold border-b-2 border-b-orange-500 text-justify">
              I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect
              Lung Cancer.
            </h1>
          </div>
        </div>
        {/* featured 3 */}
        <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl" />
          <div className="flex justify-between items-center px-2">
            <h4 className="text-[12px] text-neutral-600">June 14, 2023</h4>
            <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
          </div>
          <div className="">
            <h1 className=" text-md font-semibold border-b-2 border-b-orange-500 text-justify">
              I. Took a Test to Detect Lung Cancer. I. Took a Test to Detect
              Lung Cancer.
            </h1>
          </div>
        </div>
      </div>
      
    </div>
    <div>
    <div className="container mx-auto ">
  <div className=" mt-12">
  <div className='border border-t  border-gray-400 mx-6 my-8'></div> 
    <div className="flex justify-between mx-6">
      <div className="font-semibold text-md text-orange-500">MUST READ</div>
      <div className="font-semibold text-md border-b-2 border-b-orange-500">VIEW ALL</div>
    </div>
  </div>
  <div className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center">
    <div className="lg:max-w-[50%] text-justify">
        <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
        I. Took a Test to Detect Lung Cancer.
      </h1>
      <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore.</p>
      </div>
    <div className="mt-12 mx-6 lg:mx-0">
      <Image src={ImageOne} alt="Image One" width={600} height={800}/>
      <div className="flex justify-between items-center text-slate-400">
      <h4 className="text-[12px]">June 14, 2023</h4>
      <h3 className="my-4 text-sm text-orange-500">NEWS</h3>
      </div>
      
    </div>        
  </div>      
  
</div>
</div>
</>
  );
};

export default BlogPage;
