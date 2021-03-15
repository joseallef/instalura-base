import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestinScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQInternaScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternaScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
  .then(async (respostaDoServer) => {
    const resposta  = await respostaDoServer.json();
    return resposta.data;
  });

  const dadosDaPagina = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if(question.slug === params.slug){
        return true;
      }
      return false;
    })

    if (foundQuestion) {
      return {
        ...valorAcumulado,
        category: faqCategory,
        question: foundQuestion
      }
    }

    return valorAcumulado;

  }, { category: {}, question: {} })


    return {
        props: {
          category: dadosDaPagina.category,
          question: dadosDaPagina.question,
          pageWrapperProps: {
            seoProps: {
              headTitle: dadosDaPagina.question.title,
            },
          },
        },
    };
}

// Essa função funciona como Rotas da Aplicação
export async function getStaticPaths() {
  const faqCatefories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta  = await respostaDoServer.json();
      return resposta.data;
    });

    
  const paths = faqCatefories.reduce((valorAcumulado, faqCategory) => {
    const questionsPatchs = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
        return { params: { slug: questionSlug } };
    });

    return [
        ...valorAcumulado,
        ...questionsPatchs,
    ];
  }, []);

  return {
    paths,
    fallback: false  // See the "fallback" section below
  };
}