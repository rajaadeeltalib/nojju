import Image from "next/image";
import ImageOne from "../../../public/image1.jpg";
import Link from "next/link"
import { client } from "../../lib/sanityClient";

import { urlForImage } from "../../../sanity/lib/image";
import PortableText from "react-portable-text";

const getLatestPosts = async () => {
  const res = await client.fetch(`*[_type=='posts' && latest=='Latest']`);

  return res;
};

const Hero = async () => {
  const latestPosts = await getLatestPosts();
  return (
    <div className="container mx-auto ">
      
      <div className=" mt-6">
        <div className="flex justify-between mx-6 items-center">
          <div className="font-semibold text-md text-orange-500">LATEST</div>
          <div className="font-semibold text-md border-b-2 border-b-orange-500 "><Link href={"/blog"}>VIEW ALL</Link></div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
               {latestPosts.map((posts:any, index:number) => (
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]" key={index}>          
        <Link href={"/blog/blog1"}><Image src={urlForImage(posts.image).url()} alt="Image One" width={380}
                  height={253} className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
          <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
          {posts.title} 
          </h1>
          <p className="text-justify text-gray-600 "><PortableText dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "39d4qf6j"}
          content={posts.description}
          serializers={{
            h1:(props:any)=>(
              <h1
              className="text-3xl font-bold my-5"
              {...props}/>
              ),
              h2:(props:any)=>(
              <h2
              className="text-2xl font-bold my-5"
              {...props}/>
              ),
              h3:(props:any)=>(
              <h3
              className="text-xl font-bold my-5"
              {...props}/>
              ),
              
               
          }}
          /></p>
          </div>
        </div>
        
        ))}
      </div>      
      
    </div>
  );
};

export default Hero;
