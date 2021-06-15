/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreenPageObject';

describe('/pages/app/login', () => {
  // describe('when fill and submit a form login request', () => {
  //   it('go to the profile page', () => {
  //     // Pré Teste
  //     it('preencha os campos e vá para a página /app/profile', () => {
  //       cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
  //         .as('userLogin');

  //       // Cenário
  //       const loginScreen = new LoginScreenPageObject(cy);
  //       loginScreen.fillLoginForm({ user: 'allef', password: 'senhasegura' })
  //         .submitLoginForm();

  //       // Asserções
  //       cy.url().should('include', '/app/profile');

  //       // Temos o Token?
  //       cy.wait('@userLogin')
  //         .then((intercept) => {
  //           const { token } = intercept.response.body.data;
  //           cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
  //             .should('exist')
  //             // token do cookie é igual ao do server?
  //             .should('have.property', 'value', token);
  //         });
  //     });
  //   });
  // });
  // it === test que agente estamos fazendo!
  it('preencha os campos e vá para a página /app/fead', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    cy.visit('/app/login/');

    loginScreen.fillLoginForm({ user: 'allef', password: 'senhasegura' })

    //  // preencher o input usuario
    //  // document.querySelector('input[name="usuario"]')
    //  cy.get('#formCadastro input[name="usuario"]').type('joseallef')

    //  // preencher o iput senha
    //  cy.get('#formCadastro input[name="senha"]').type('senhasegura')

    //  //  clicar no botão de submit!
    //  cy.get('#formCadastro button[type="submit"]').click()

      .submitLoginForm();

    // o que esperamos? ir pra "/app/fead/"
    cy.url().should('include', '/app/fead');

    // Temos oT token?

    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;
        cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
          .should('exist')
          // token do cookie é igual ao do server?
          .should('have.property', 'value', token);
      });
  });
});
