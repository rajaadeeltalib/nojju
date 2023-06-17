// import Hero from './components/Hero'
// import Trending from './components/Trending'
// import MustRead from './components/MustRead'
import Image from "next/image";
import ImageOne from "../../../public/image1.jpg";
import Link from "next/link"
import { client } from "../lib/sanityClient";
import { urlForImage } from "../../sanity/lib/image";

const getLatestPosts = async (slug: any) => {
  const res = await client.fetch(`*[_type=='posts' && latest=='Latest' || slug.current == '${slug.params.blog}']`);

  return res;
};

const getMustReadPost = async (slug: any) => {
  const res = await client.fetch(`*[_type=='posts' && mustread=='Must Read' || slug.current == '${slug.params.blog}']`);

  return res;
};
const getTrendingPosts = async (slug: any) => {
  const res = await client.fetch(`*[_type=='posts' && trending=='Trending' || slug.current == '${slug.params.blog}']`);

  return res;
}

export default async function Home(slug: any) {
  const latestPosts = await getLatestPosts(slug);
  const mustReadPost = await getMustReadPost(slug);
  const trendingPosts = await getTrendingPosts(slug);
  return (
    <main >      
          {/* hero section started */}
          <div className="container mx-auto ">
      
      <div className=" mt-6">
        <div className="flex justify-between mx-6 items-center">
          <div className="font-semibold text-md text-orange-500">LATEST</div>
          <div className="font-semibold text-md border-b-2 border-b-orange-500 "><Link href={"/blog"}>VIEW ALL</Link></div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
               {latestPosts.map((posts:any) => (
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]" key={posts.id}>          
        <Link href={{
                  pathname: `/blog/[Slug.current]`,
                  query: { data: posts.slug.current },
                }}
                as={`/blog/${posts.slug.current}`}
              ><Image src={urlForImage(posts.image).url()} alt="Image One" width={380}
                  height={253} className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
          <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
          {posts.title} 
          </h1>
          <p className="text-justify text-gray-600 ">{posts.description}</p>
          </div>
        </div>
        
        ))}
      </div>      
      
    </div>
    {/* hero section end */}
    {/* must read section started */}


      <div className="container mx-auto ">
      <div className=" mt-12">
      <div className='border border-t  border-gray-400 mx-6 my-12'></div> 
        <div className="flex justify-between mx-6">
          <div className="font-semibold text-md text-orange-500">MUST READ</div>
          <div className="font-semibold text-md border-b-2 border-b-orange-500"><Link href={"/blog"}>VIEW ALL</Link></div>
        </div>
      </div>
      {mustReadPost.map((posts:any) => (
      <div className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center" key={posts.id}>

      

        <div className="lg:max-w-[50%] text-justify" >
            <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
            {posts.title}
          </h1>
          <p className="text-gray-600">{posts.description}</p>
          </div>
        <div className="mt-12 mx-6 lg:mx-0">
        <Link href={{
                  pathname: `/blog/[Slug.current]`,
                  query: { data: posts.slug.current },
                }}
                as={`/blog/${posts.slug.current}`}
              ><Image src={urlForImage(posts.image).url()} alt="Image One" width={600}
                  height={800} className="rounded-xl object-cover"/></Link>
          {/* <Image src={ImageOne} alt="Image One" width={600} height={800}/> */}
          <div className="flex justify-between items-center text-slate-400">
          <h4 className="text-[12px]">{posts.date}</h4>
          <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
          </div>
          
        </div> 
          
      </div>      
      ))}
    </div>
    {/* must read section end */}
    {/* trending section started */}

    <div className="container mx-auto">
        
        <div className=" mt-12">
        <div className='border border-t  border-gray-400 mx-6 my-12'></div> 
          <div className="flex justify-between mx-6">
            <div className="font-semibold text-orange-500">TRENDING</div>
            <div className="font-semibold border-b-2 border-b-orange-500"><Link href={"/blog"}>VIEW ALL</Link></div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
  
        {trendingPosts.map((posts:any) => (
  
        <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]" key={posts.id}>
        <Link href={{
                  pathname: `/blog/[Slug.current]`,
                  query: { data: posts.slug.current },
                }}
                as={`/blog/${posts.slug.current}`}
              ><Image src={urlForImage(posts.image).url()} alt="Image One" width={380}
                    height={253} className="rounded-xl"/></Link>
            <div className="flex justify-between items-center px-2">
            <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
            <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
            </div>
            <div className="">
            <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
              {posts.title}
            </h1>
            <p className="text-justify text-gray-600 ">{posts.description}</p>
            </div>
          </div>
          
          ))}
        </div>      
        
      </div>
      {/* trending section end */}
    </main>
  )
}
