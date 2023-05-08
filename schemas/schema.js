// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import art from './art'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import project from './project'
import notes from './notes'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',

  types: schemaTypes.concat([

    art,
    post,

    category,

    blockContent,
    project,
    notes
  ]),
})
