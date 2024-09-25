export class RegisterPage {
  submitRegisterButton() {
    cy.get("#register-button").should("be.visible").click();
  }
  clickRegisterIcon() {
    cy.get(".ico-register").should("be.visible").click();
  }
}
