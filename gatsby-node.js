const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const postTemplate = path.resolve("./src/templates/blog-post.js")
const tagTemplate = path.resolve("src/templates/tag-template.js")
const categTemplate = path.resolve("src/templates/categories.js")


//Create Types
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       categoryimage: File @link(from: "fields.localFile")
//       featuredimage: File @link(from: "fields.localFile")
//     }
//     type Frontmatter {
//       title: String!
//       categoryimage: String
//       featuredimage: String
//     }
//   `)
// }
//OnCreateNode
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}





//create Pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
 const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            
            fields {
              slug
            }
            frontmatter {
              tags
              prodimage {
                childrenImageSharp {
                  gatsbyImageData(aspectRatio: 0.5)
                }
              }
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categoria) {
          fieldValue
        }
      }
      sizesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___sizes) {
          fieldValue
        }
      }
      
    }
  `)
 // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //Use Blog Template
  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  //Tags
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  //Categorias
  // Extract categoria data from query
  const categories = result.data.categoriesGroup.group
  // Make categoria pages
  categories.forEach(categoria => {
    createPage({
      path: `/categories/${_.kebabCase(categoria.fieldValue)}/`,
      component: categTemplate,
      context: {
        categoria: categoria.fieldValue,
      },
    })
  })
}