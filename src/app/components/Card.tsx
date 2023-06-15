import Image from "next/image"
import ImageOne from "../../../public/image1.jpg"


const Card = () => {
  return (
    <div className='container mx-auto mt-12'>
      
      <div className="mt-12 mx-6 lg:mx-0"><Image src={ImageOne} alt="Image One"/>
      <h3 className="my-4">NEWS</h3>
      <h1 className="my-4 text-xl font-semibold">I. Took a Test to Detect Lung Cancer.</h1>
      </div>
    </div>
  )
}

export default Card