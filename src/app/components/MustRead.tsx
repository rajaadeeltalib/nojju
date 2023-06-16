// import Image from "next/image";
// import ImageOne from "../../../public/image1.jpg";
// import Link from "next/link";
// import { client } from "../../lib/sanityClient";
// import { urlForImage } from "../../../sanity/lib/image";

// const getMustReadPost = async () => {
//   const res = await client.fetch(`*[_type=='posts' && mustread=='Must Read']`);

//   return res;
// };

// const MustRead = async() => {
//   const mustReadPost = await getMustReadPost();
//   return (
    
//         <div className="container mx-auto ">
//       <div className=" mt-12">
//       <div className='border border-t  border-gray-400 mx-6 my-12'></div> 
//         <div className="flex justify-between mx-6">
//           <div className="font-semibold text-md text-orange-500">MUST READ</div>
//           <div className="font-semibold text-md border-b-2 border-b-orange-500"><Link href={"/blog"}>VIEW ALL</Link></div>
//         </div>
//       </div>
//       {mustReadPost.map((posts:any, index:number) => (
//       <div className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center">

      

//         <div className="lg:max-w-[50%] text-justify" key={index}>
//             <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
//             {posts.title}
//           </h1>
//           <p className="text-gray-600">{posts.description}</p>
//           </div>
//         <div className="mt-12 mx-6 lg:mx-0">
//         <Link href={"/blog/blog1"}><Image src={urlForImage(posts.image).url()} alt="Image One" width={600}
//                   height={800} className="rounded-xl object-cover"/></Link>
//           {/* <Image src={ImageOne} alt="Image One" width={600} height={800}/> */}
//           <div className="flex justify-between items-center text-slate-400">
//           <h4 className="text-[12px]">{posts.date}</h4>
//           <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
//           </div>
          
//         </div> 
          
//       </div>      
//       ))}; 
//     </div>
    
//   )
// }

// export default MustRead