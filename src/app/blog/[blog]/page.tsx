import Image from "next/image";
import ImageOne from "../../../../public/image1.jpg";
import Link from "next/link";
import { client } from "../../../lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";
import PortableText from "react-portable-text";


const getdetailPost = async () => {
  const res = await client.fetch(`*[_type=='posts']`);

  return res;
};
const getdetailRead = async () => {
  const res = await client.fetch(`*[_type=='posts' && mustread=='Must Read']`);

  return res;
};
const getdetailFeatured = async () => {
  const res = await client.fetch(`*[_type=='posts' && featured=='Featured']`);

  return res;
};

const BlogPage = async () => {
  const detailPost = await getdetailPost();
  const detailRead = await getdetailRead();
  const detailFeatured = await getdetailFeatured();
  return (
    <div>
      {detailPost.map((posts: any, index: number) => (
        <div
          className="container mx-auto my-10 px-4 flex flex-col md:flex-row md: gap-x-6 lg:flex-row justify-between"
          key={index}
        >
          <div className="md:max-w-[30%] md:my-12">
            <Link href={"/blog/blog1"}>
              <Image
                src={urlForImage(posts.image).url()}
                alt="Image One"
                width={380}
                height={253}
                className="rounded-xl"
              />
            </Link>
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
                    content={posts.tableofcontent}
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
              {posts.title}
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
                  content={posts.body}
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
                  Buy From Amazon
                </button>
              </div>
            </div>
          </div>
          {/* section 3 */}
          <div className="md:max-w-[30%] md:my-12 ">
            <h4 className="border-b-2 border-b-orange-500 font-semibold text-md md:mx-4 lg:mx-0">
              Featured
            </h4>
          {detailPost.map((posts: any, index: number) => (
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
          {/* div closed */}
        </div>
      ))}

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
          {detailRead.map((read: any, index: number) => (
            <div className="mt-4 mx-6 flex flex-col lg:flex-row justify-between items-center" key={index}>
              <div className="lg:max-w-[50%] text-justify" >
                <h1 className="my-4 text-xl font-semibold border-b-2 border-b-orange-500">
                  {read.title}
                </h1>
                <p className="text-gray-600">{read.description}</p>
              </div>
              <div className="mt-12 mx-6 lg:mx-0">
                <Link href={"/blog/blog1"}>
                  <Image
                    src={urlForImage(read.image).url()}
                    alt="Image One"
                    width={600}
                    height={800}
                    className="rounded-xl object-cover"
                  />
                </Link>
                {/* <Image src={ImageOne} alt="Image One" width={600} height={800}/> */}
                <div className="flex justify-between items-center text-slate-400">
                  <h4 className="text-[12px]">{read.date}</h4>
                  <h3 className="my-4 text-sm text-orange-500">
                    {read.category}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
