module.exports = {
  siteMetadata: {
      title: `hules-tijuana`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-88888888"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "productos",
      "path": "./cms/productos/"
    },
    __key: "productos"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "categoria",
      "path": "./cms/categorias/"
    },
    __key: "categorias"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "sizes",
      "path": "./cms/sizes/"
    },
    __key: "sizes"
  }
]
};