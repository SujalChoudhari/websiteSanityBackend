export default {
    name: 'notes',
    title: 'Notes',
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
            name: 'languages',
            title: 'Languages',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'language' } }],
        },

    ],
}