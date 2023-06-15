import Image from "next/image"
import ImageOne from "../../../public/image1.jpg"


const Card = () => {
  return (
    <div className='container mx-auto mt-6'>
      
      <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]">
          <Image src={ImageOne} alt="Image One" className="rounded-xl"/>
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
  )
}

export default Card