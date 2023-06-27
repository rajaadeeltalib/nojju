import Image from "next/image";
import Link from "next/link";
import { client } from "../../../lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";
import PortableText from "react-portable-text";
import { Metadata } from "next";



export async function generateMetadata(slug:any):Promise<Metadata> {
  const post = await getdetailPost(slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  }

  return {
    title: post[0].title,
    description: post[0].description,
    keywords: post[0].keywords,
   
  };
}



const getdetailPost = async (slug: any) => {
  const res = await client.fetch(
    `*[_type=='posts' && slug.current == '${slug.params.blog}']`
  );

  return res;
};
const getdetailRead = async (slug: any) => {
  const res = await client.fetch(
    `*[_type=='posts' && mustread=='Must Read' || slug.current == '${slug.params.blog}']`
  );

  return res;
};
const getdetailFeatured = async (slug: any) => {
  const res = await client.fetch(
    `*[_type=='posts' && featured=='Featured' || slug.current == '${slug.params.blog}'][0...5] | order(date asc)`
  );

  return res;
};

const BlogPage = async (slug: any) => {
  const detailPost = await getdetailPost(slug);
  const detailRead = await getdetailRead(slug);
  const detailFeatured = await getdetailFeatured(slug);
  return (
    <div>
      {/* {detailPost.map((posts: any) => ( */}
        <div
          className="container mx-auto my-10 px-4 flex flex-col md:flex-row md: gap-x-6 lg:flex-row justify-between"
          // key={posts.id}
        >
          <div className="md:max-w-[30%] md:my-12">
            
              <Image
                src={urlForImage(detailPost[0].image).url()}
                alt={`${detailPost[0].title}`}
                width={380}
                height={253}
                className="rounded-xl"
              />
            
            <div className="border border-gray-500 my-10 px-4">
              <h2 className="md:text-md md:font-bold py-4 text-orange-500">
                Table of Contents
              </h2>
              <div className="border-t border-gray-500 py-2 px-6">
                <p className="text-justify text-gray-600 ">
                  <PortableText
                    dataset={
                      process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
                    }
                    projectId={
                      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "39d4qf6j"
                    }
                    content={detailPost[0].tableofcontent}
                    serializers={{
                      h1: (props: any) => (
                        <h1 className="text-3xl font-bold my-5" {...props} />
                      ),
                      h2: (props: any) => (
                        <h2 className="text-2xl font-bold my-5" {...props} />
                      ),
                      h3: (props: any) => (
                        <h3 className="text-xl font-bold my-5" {...props} />
                      ),
                      li: ({ children }: any) => (
                        <li className="ml-4 list-disc? list-decimal">
                          {" "}
                          {children}
                        </li>
                      ),

                      link: ({ href, children }: any) => (
                        <a
                          href={href}
                          className="text-blue-600 hover:underline"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="md:max-w-[40%] md:my-12">
            {" "}
            <h1 className=" text-xl font-semibold border-b-2 border-b-orange-500 text-justify">
              {detailPost[0].title}
            </h1>
            <div className="my-8 text-justify">
              <p className="text-justify text-gray-600 ">
                <PortableText
                  dataset={
                    process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
                  }
                  projectId={
                    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "39d4qf6j"
                  }
                  content={detailPost[0].body}
                  serializers={{
                    h1: (props: any) => (
                      <h1 className="text-3xl font-bold my-5" {...props} />
                    ),
                    h2: (props: any) => (
                      <h2 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h3: (props: any) => (
                      <h3 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }: any) => (
                      <li className="ml-4 list-disc"> {children}</li>
                    ),
                    link: ({ href, children }: any) => (
                      <a href={href} className="text-blue-600 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              </p>
              <div className="flex justify-center my-8">
                <button className="bg-orange-500 text-white text-lg font-bold px-4 py-4 rounded-full">
                  <Link href={detailPost[0].link} target="_blank">
                    Check Price On Amazon
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* section 3 */}
          <div className="md:max-w-[30%] md:my-12 ">
            <h4 className="border-b-2 border-b-orange-500 font-semibold text-md md:mx-4 lg:mx-0">
              Featured
            </h4>
            {detailFeatured.map((posts: any) => (
              <div className="mt-12 mx-6 lg:mx-0  max-w-[300px]" 
              key={posts.id}
              >
                <Link
                  href={{
                    pathname: `/blog/[Slug.current]`,
                    query: { data: posts.slug.current },
                  }}
                  as={`/blog/${posts.slug.current}`}
                >
                  <Image
                    src={urlForImage(posts.image).url()}
                    alt={`${posts.title}`}
                    width={380}
                    height={253}
                    className="rounded-xl"
                  />
                </Link>
                <div className="flex justify-between items-center px-2">
                  <h4 className="text-[12px] text-neutral-600">{posts.date}</h4>
                  <h3 className="my-4 text-sm text-orange-500">
                    {posts.category}
                  </h3>
                </div>
                <div className="">
                  <h1 className="text-md font-semibold border-b-2 border-b-orange-500 text-justify">
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
          {/* div closed */}
        </div>
      {/* // ))} */}

      <div>
        <div className="container mx-auto ">
          <div className=" mt-12">
            <div className="border border-t  border-gray-400 mx-6 my-12"></div>
            <div className="flex justify-between mx-6">
              <div className="font-semibold text-md text-orange-500">
                MUST READ
              </div>
              <div className="font-semibold text-md border-b-2 border-b-orange-500">
                <Link href={"/blog"}>VIEW ALL</Link>
              </div>
            </div>
          </div>
          {/* {detailRead.map((read: any) => ( */}
            <div
              className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center"
              // key={read.id}
            >
              <div className="lg:max-w-[50%] text-justify">
                <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
                  {detailRead[0].title}
                </h1>
                <p className="text-justify text-gray-600 ">{detailRead[0].description.substring(0, 300)}......<Link href={{
                  pathname: `/blog/[Slug.current]`,
                  query: { data: detailRead[0].slug.current },
                }}
                as={`/blog/${detailRead[0].slug.current}`}
                className="text-orange-500"
              >Read More</Link></p>
              </div>
              <div className="mt-12 mx-6 lg:mx-0">
                <Link
                  href={{
                    pathname: `/blog/[Slug.current]`,
                    query: { data: detailRead[0].slug.current },
                  }}
                  as={`/blog/${detailRead[0].slug.current}`}
                >
                  <Image
                    src={urlForImage(detailRead[0].image).url()}
                    alt={`${detailRead[0].title}`}
                    width={600}
                    height={800}
                    className="rounded-xl object-cover"
                  />
                </Link>
                {/* <Image src={ImageOne} alt="Image One" width={600} height={800}/> */}
                <div className="flex justify-between items-center text-slate-400">
                  <h4 className="text-[12px]">{detailRead[0].date}</h4>
                  <h3 className="my-4 text-sm text-orange-500">
                    {detailRead[0].category}
                  </h3>
                </div>
              </div>
            </div>
          {/* // ))} */}
          
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
