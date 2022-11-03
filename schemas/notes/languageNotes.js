export default {
    name: 'languageNotes',
    title: "Language Notes",
    type: 'document',
    fields: [
        {
            name: 'language',
            title: 'Language',
            type: 'string',
        },

        {
            name:"languageImage",
            title: "Language Image",
            type: 'image',
        },
        
        {
            name: 'renfrences',
            title: 'References',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'notes' } }],
        },
    ],
}