export default class AddPostPageFead {
  constructor(cy) {
    this.cy = cy;
    cy.visit('app/fead');
  }

  openModal() {
    this.cy.get('#toggleModal').click();
    return this;
  }

  insertUrlField({ url }) {
    this.cy.get('#formModal input[name="url"]').type(url);
    return this;
  }

  nextPagePost() {
    this.cy.get('#formModal button').click();

    return this;
  }
}
