/// <reference types="cypress" />

describe('/pages/app/login', () => {
  // it === test que agente estamos fazendo!
 it('preencha os campos e vá para a página /app/profile', () => {
   cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
    .as('userLogin');

   cy.visit('/app/login/');

   // preencher o input usuario
   // document.querySelector('input[name="usuario"]')
   cy.get('#formCadastro input[name="usuario"]').type('joseallef')

   // preencher o iput senha 
   cy.get('#formCadastro input[name="senha"]').type('senhasegura')

   //  clicar no botão de submit!
   cy.get('#formCadastro button[type="submit"]').click()

   // o que esperamos? ir pra "/app/progile/"
   cy.url().should('include', '/app/profile');


   // Temos oT token?

   cy.wait('@userLogin')
    .then((intercept) => {
      const token = intercept.response.body.data.token;
      cy.getCookie('APP_TOKEN')
        .should('exist')
        // token do cookie é igual ao do server?
        .should('have.property', 'value', token);

    });
 });
});
