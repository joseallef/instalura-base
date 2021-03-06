/* eslint-disable no-console */
import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps({ preview }) {
  console.log('Next Previel Mode:  preview', preview);
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
