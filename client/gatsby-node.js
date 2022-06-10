const slugify = require('slugify')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            createdAt
            headline
            preamble {
              preamble
            }
            tags
            coverImage {
              file {
                url
              }
            }
            article {
              raw
              references {
                file {
                  url
                }
                title
                contentful_id
              }
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.allContentfulBlogPost.edges.map(({ node }) => node)

  blogPosts.forEach(blogPost => {
    const slug = slugify(blogPost.headline).toLowerCase()

    createPage({
      path: `/blog/${slug}`,
      component: require.resolve('./src/templates/blogPost.tsx'),
      context: { blogPost },
    })
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
  const typeDefs = `
    type File {
      url: String
    }
  
    type Asset implements Node {
      file: File
    }

    type FixedAsset {
      height: Int
      width: Int
      src: String
    }

    type Fixed implements Node {
      fixed: FixedAsset
    }

    type Body {
      body: String
    }


    type ContentfulRegisterPage implements Node {
      sponsorLogos: [Asset]
      attendButtonLink: String
      competeButtonLink: String
      sponsorButtonLink: String
    }

    type ContentfulNewsPost implements Node {
      headline: String
      ctaLink: String
    }
  `

  createTypes(typeDefs)
}
