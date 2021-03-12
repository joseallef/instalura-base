import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
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

export async function getStaticProps() {
    const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
        .then((resposta) => resposta.json())
        .then((res) => res.data);
    return {
      props: {
        faqCategories,
      }, // will be passed to the page component as props
    };
  }