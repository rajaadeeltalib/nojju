// import Image from "next/image";
// import ImageOne from "../../../public/image1.jpg";
// import Link from "next/link";
// import { client } from "../../lib/sanityClient";
// import { urlForImage } from "../../../sanity/lib/image";


// const getTrendingPosts = async () => {
//   const res = await client.fetch(`*[_type=='posts' && trending=='Trending']`);

//   return res;
// }

// const Trending = async() => {
//   const trendingPosts = await getTrendingPosts();
//   return (
//     <div className="container mx-auto">
        
//       <div className=" mt-12">
//       <div className='border border-t  border-gray-400 mx-6 my-12'></div> 
//         <div className="flex justify-between mx-6">
//           <div className="font-semibold text-orange-500">TRENDING</div>
//           <div className="font-semibold border-b-2 border-b-orange-500"><Link href={"/blog"}>VIEW ALL</Link></div>
//         </div>
//       </div>
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">

//       {trendingPosts.map((posts:any, index:number) => (

//       <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]" key={index}>
//       <Link href={"/blog/blog1"}><Image src={urlForImage(posts.image).url()} alt="Image One" width={380}
//                   height={253} className="rounded-xl"/></Link>
//           <div className="flex justify-between items-center px-2">
//           <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
//           <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
//           </div>
//           <div className="">
//           <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
//             {posts.title}
//           </h1>
//           <p className="text-justify text-gray-600 ">{posts.description}</p>
//           </div>
//         </div>
        
//         ))}
//       </div>      
      
//     </div>
//   );
// };

// export default Trending;
