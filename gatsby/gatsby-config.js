import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: `Slick's slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `the best pizza in Mass`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      // this is the name of the plugin you are adding
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `7udw1buu`,
        dataset: `production`,
        watch: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
