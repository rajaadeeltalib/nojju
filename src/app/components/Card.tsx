import ImageOne from "../../../public/image1.jpg"
import Image from "next/image";
import Link from "next/link"
import { client } from "../../lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";


const getFeaturedPosts = async () => {
  const res = await client.fetch(`*[featured=='Featured']`);

  return res;
};


const Card = async() => {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      {featuredPosts.map((posts:any, index:number) => (
      <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]" key={index}>

          <Image src={ImageOne} alt="Image One" className="rounded-xl" />
          <div className="flex justify-between items-center px-2">
            <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
            <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
          </div>
          <div className="">
            <h1 className="text-md font-semibold border-b-2 border-b-orange-500 text-justify">
              {posts.title}
            </h1>
          </div>
        </div>
))}
    </div>
  )
}

export default Card