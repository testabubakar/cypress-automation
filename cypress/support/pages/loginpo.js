export class LoginPage {
  submitLoginButton() {
    cy.get(".login-button").click();
  }
  clickLoginIcon() {
    cy.get(".ico-login").click();
  }
}
