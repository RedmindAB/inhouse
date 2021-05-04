import { graphql, useStaticQuery } from 'gatsby'

const useTempSponsorLogo = () => {
  const {
    file: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "BSmart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return image
}
export default useTempSponsorLogo
