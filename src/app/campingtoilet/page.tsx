import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";

export const metadata = {
  title: 'Camping Toilet',
  description: 'Discover the best portable camping toilets for hassle-free relief during your outdoor escapades.',
  keywords: 'camping toilet, portable toilet, outdoor toilet, camping hygiene, camping restroom, portable restroom, camping essentials, camping gear, camping accessories, outdoor sanitation, camping comfort, portable bathroom, camping sanitation, camping facilities, camping waste disposal,'
}

const getCampingToiletPosts = async () => {
  const res = await client.fetch(`*[_type=='posts' && category=='CAMPING TOILET'] | order(date desc)`);

  return res;
};



const CampingToilet = async() => {
  const blogsPosts = await getCampingToiletPosts();
  return (
    <div className="container mx-auto lg:pl-8">
      <div className="flex justify-center text-2xl font-bold mt-10 text-orange-500">
        <h1>ALL CAMPING TOILET BLOGS</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">

      {blogsPosts.map((posts:any) => (

      <div className="mt-12 mx-6 lg:mx-0  max-w-[380px]" key={posts.id}>
          <Link href={{
                  pathname: `/blog/[slug.current]`,
                  query: { data: posts.slug.current },
                }}
                as={`/blog/${posts.slug.current}`}
              ><Image src={urlForImage(posts.image).url()} alt={`${posts.title}`} width={380}
                  height={253} className="rounded-xl"/></Link>
          <div className="flex justify-between items-center px-2">
          <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
          <h3 className="my-4 text-sm text-orange-500">{posts.category}</h3>
          </div>
          <div className="">
          <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
           {posts.title}
          </h1>
          <p className="text-justify text-gray-600 ">{posts.description.substring(0, 200)}......<Link href={{
                  pathname: `/blog/[Slug.current]`,
                  query: { data: posts.slug.current },
                }}
                as={`/blog/${posts.slug.current}`}
                className="text-orange-500"
              >Read More</Link></p>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default CampingToilet;
