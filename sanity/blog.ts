export const blog = {
    name: "posts",
    type: "document",
    title: "Posts",
    fields: [
        {
            name: "id",
            title: "Blog ID",
            type: "number"
        },
        {
            name: "title",
            title: "Blog Title",
            type: "string"
        },
        {
            title: 'Slug',
            name: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input:any) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: "description",
            title: "Blog Description",
            type: "string"
        },
        {
            name: "category",
            title: "Blog Category",
            type: "string"
        },
        {
            name: "latest",
            title: "Latest Blog",
            type: "string"
        },
        {
            name: "mustread",
            title: "Must Read",
            type: "string"
        },
        {
            name: "trending",
            title: "Trending Blog",
            type: "string"
        },
        {
            name: "featured",
            title: "Featured Blog",
            type: "string"
        },
        {
            name: "date",
            title: "Blog Date",
            type: "string"
        },
        {
            name: "featuredimage",
            title: "Featured image",
            type: "image"
        },
    ]
}