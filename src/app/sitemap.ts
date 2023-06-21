import { client } from "../lib/sanityClient";
import { urlForImage } from "../../sanity/lib/image";

const getAllBlogsPosts = async () => {
    const res = await client.fetch(`*[_type=='posts'] {slug} | order(date desc) `);
  
    return res;
  };

export default async function sitemap() {
    const allBlogsPosts = await getAllBlogsPosts();
    
const baseUrl = "https://www.nojju.com/";
const blogUrl = "https://www.nojju.com/blog/";



    const data = allBlogsPosts.map((post:any, index:number) => {
      
        return {
            url:`${blogUrl}${allBlogsPosts[index].slug.current}`,
            lastModified: new Date(),
    };
}) ?? [];
    return [
       
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}terms`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}privacy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}disclaimer`,
            lastModified: new Date(),
        },

        ...data,
        
    
    ]
}