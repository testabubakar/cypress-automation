export class LoginPage {

  constructor(){          //constructor name
    this.loginIcon = '.ico-login';
    this.emailField = '#Email';
    this.passwordField = '#Password'
    this.loginField = '.login-button'
    this.errorMessage = '.validation-summary-errors'
    this.accountButton = '.account'
    
  }
  enterEmail(email){
    cy.get(this.emailField).type(email);
  }

  enterPassword(password){
    cy.get(this.passwordField).type(password)
  }

  clickLoginIcon(){
    cy.get(this.loginIcon).click();
  }

  submitLogin(){
    cy.get(this.loginField).click();
  }

  verifySuccessfullyLogin(){
   return cy.get(this.accountButton)
  }
  verifyFailedLogin(){
    cy.get(this.errorMessage).should('contain.text','Login was unsuccessful. Please correct the errors and try again.')
  }

  login(email,password){
    this.clickLoginIcon();
    this.enterEmail(email);
    this.enterPassword(password);
    this.submitLogin();

  }
  
}
