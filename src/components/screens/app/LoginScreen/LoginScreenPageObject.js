export default class LoginScreenPageObject {
    constructor(cy) {
      this.cy = cy;
  
      this.cy.visit('/app/login');
    }
  
    fillLoginForm({ user, password }) {
  
         // preencher o input usuario
     // document.querySelector('input[name="usuario"]')
     this.cy.get('#formCadastro input[name="usuario"]').type(user);
  
     // preencher o iput senha 
     this.cy.get('#formCadastro input[name="senha"]').type(password);

     return this;
  
    }
  
    submitLoginForm() {
      this.cy.get('#formCadastro button[type="submit"]').click();

      return this;
    }
  }