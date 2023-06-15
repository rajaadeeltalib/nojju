import Image from "next/image";
import ImageOne from "../../../public/image1.jpg";

const MustRead = () => {
  return (
    <div>
        <div className="container mx-auto">
      <div className=" mt-12">
      <div className='border border-t  border-black mx-6 my-12'></div> 
        <div className="flex justify-between mx-6">
          <div className="font-semibold text-md ">MUST READ</div>
          <div className="font-semibold text-md border-b-2 border-b-orange-500">VIEW ALL</div>
        </div>
      </div>
      <div className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:max-w-[50%] text-justify">
            <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            I. Took a Test to Detect Lung Cancer.
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore. Ipsa eligendi reiciendis illo sequi saepe autem repellat quas, veritatis recusandae odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit! Dicta sint quisquam, minus autem necessitatibus recusandae dolore.</p>
          </div>
        <div className="mt-12 mx-6 lg:mx-0">
          <Image src={ImageOne} alt="Image One" width={600} height={800}/>
          <div className="flex justify-between items-center text-slate-400">
          <h4 className="text-[12px]">June 14, 2023</h4>
          <h3 className="my-4 text-sm">NEWS</h3>
          </div>
          
        </div>        
      </div>      
      
    </div>
    </div>
  )
}

export default MustRead