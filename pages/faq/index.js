import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

// eslint-disable-next-line react/prop-types
function FAQPage({ faqCategories }) {
    // const [faqCategories, setFaqCategories] = React.useState([]);

    // React.useEffect(() => {
    //     console.log('acontenceu um efeito')
    //     fetch('https://instalura-api.vercel.app/api/content/faq')
    //         .then((resposta) => resposta.json())
    //         .then((res) => res.data)
    //         .then((result => {
    //             setFaqCategories(result);
    //         }))
    // }, []);

    return (
        <FAQScreen faqCategories={faqCategories} />
    );
}

FAQPage.propTypes = FAQScreen.propTypes;

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
  .then((respostaDoServer) => respostaDoServer.json())
  .then((respostaConvertida) => respostaConvertida.data);
  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
  }