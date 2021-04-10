import { CMSGraphQClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const client = CMSGraphQClient();

  const response = await client.query({ query });

  return response.data.messages;
  // ==================================
  // const TOKEN = process.env.DATO_CMS_TOKEN;
  // const DatoCMSURL = 'https://graphql.datocms.com/';

  // const client = new GraphQLClient(DatoCMSURL, {
  //   headers: {
  //     Authorization: `Bearer ${TOKEN}`,
  //   },
  // });

  // const messages = await client.request(query);
}
