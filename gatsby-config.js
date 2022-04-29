module.exports = {
  siteMetadata: {
    title: `hules-tijuana`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-88888888",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "productos",
        path: "./cms/productos/",
      },
      __key: "productos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "categoria",
        path: "./cms/categorias/",
      },
      __key: "categorias",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sizes",
        path: "./cms/sizes/",
      },
      __key: "sizes",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: "static",
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              //include: ["featured"],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              //exclude: ["featured.skip"],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
        ],
      },
    },
    
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-netlify',
    "gatsby-plugin-netlify-cms",
  ],
};
