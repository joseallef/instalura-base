/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreenPageObject';
import AddPostPageFead from '../../../../src/components/screens/Profile/Fead/AddPostPageFead';

describe('page/app/fead/', () => {
  it('when loaded pege, open the modal', () => {
    // Login
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);
    cy.visit('/app/login/');

    loginScreen.fillLoginForm({ user: 'allef', password: 'senhasegura' })
      .submitLoginForm();

    cy.url().should('include', '/app/fead');
    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;
        cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
          .should('exist')
        // token do cookie é igual ao do server?
          .should('have.property', 'value', token);
      });

    // Open Modal
    const addContent = new AddPostPageFead(cy);
    addContent.openModal()

      // Enter Url in the field
      .insertUrlField({ url: 'https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_960_720.jpg' })

      // Click on the next button
      .nextPagePost()

      // Click the button post
      .nextPagePost();
  });
});
