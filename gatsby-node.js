const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const publicationPost = path.resolve('./src/templates/publication-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const publications = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (publications.length > 0) {
    publications.forEach((publication, index) => {
      const previousPostSlug = index === 0 ? null : publications[index - 1].slug
      const nextPostSlug =
        index === publications.length - 1 ? null : publications[index + 1].slug

      createPage({
        path: `/publication/${publication.slug}/`,
        component: publicationPost,
        context: {
          slug: publication.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
