module.exports = {
  pathPrefix: '/division-landing-page',
  siteMetadata: {
    siteUrl: 'https://redmindab.github.io/division-landing-page',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=robot
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DIVISION.',
        short_name: 'DIVISION.',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#FFE500',
        display: 'standalone',
        icon: 'src/assets/images/favico.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sroqziwmzomc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'bYFFFvr0YgmRWoKcPHqpjb432n7DfE6Si4nx9MnT_ro',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: 'G-1TBLN21DV1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '270502057925030', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production'],
      },
    },
  ],
}
