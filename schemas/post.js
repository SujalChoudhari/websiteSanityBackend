export default {
  name: 'blog',
  title: 'Blogpost',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },


    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },

    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
}