import {defineField, defineType} from 'sanity'

export default defineType ( {
    name: "posts",
    type: "document",
    title: "Posts",
    fields: [
        
        defineField({
            name: "id",
            title: "Blog ID",
            type: "number"
        }),
        defineField({
            name: "title",
            title: "Blog Title",
            type: "string"
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input:any) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }),
          defineField({
            name: "description",
            title: "Blog Description",
            type: "string"           
        }),
        defineField({
            name: "tableofcontent",
            title: "Table of Content",
            type: "blockContent",            
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
            
        }),
        defineField({
            name: "category",
            title: "Blog Category",
            type: "string"
        }),
        defineField({
            name: "latest",
            title: "Latest Blog",
            type: "string"
        }),
        defineField({
            name: "mustread",
            title: "Must Read",
            type: "string"
        }),
        defineField({
            name: "trending",
            title: "Trending Blog",
            type: "string"
        }),
        defineField({
            name: "featured",
            title: "Featured Blog",
            type: "string"
        }),        
        defineField({
            name: "date",
            title: "Blog Date",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Featured image",
            type: "image"
        }),
        defineField({
            name: 'link',
            title: 'Product Link',
            type: 'url'
          }),
    ]
})