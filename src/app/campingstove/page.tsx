import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";

export const metadata = {
  title: 'Camping Stove',
  description: 'Discover the best camping stoves for your outdoor cooking adventures. Portable, efficient, and reliable.',
  keywords: ' camping stove, portable stove, outdoor stove, backpacking stove, camping cooking equipment, propane stove, camp stove, lightweight stove, camping kitchen, camping gear, camping essentials, camping cookware,'
}

const getCampingStovePosts = async () => {
  const res = await client.fetch(`*[_type=='posts' && category=='CAMPING STOVE'] | order(date desc)`);

  return res;
};



const CampingStove = async() => {
  const blogsPosts = await getCampingStovePosts();
  return (
    <div className="container mx-auto lg:pl-8">
      <div className="flex justify-center text-2xl font-bold mt-10 text-orange-500">
        <h1>ALL CAMPING STOVE BLOGS</h1>
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

export default CampingStove;
