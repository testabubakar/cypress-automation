export class RegisterPage {
  constructor(){
    this.registerIcon = '.ico-register';
    this.emailField = '#Email';
    this.firstNameField = '#FirstName';
    this.lastNameField = '#LastName';
    this.passwordField = '#Password'
    this.confirmPasswordField = '#ConfirmPassword'
    this.submitRegister = '#register-button'
    this.errorMessage = '.field-validation-error'
    

  }
  registrationIcon(){
      cy.get(this.registerIcon).click();
  }
  verifyFailedRegister(){
    return cy.get(this.errorMessage)
  }
 
  enterFirstName(firstname){
    cy.get(this.firstNameField).type(firstname)
  }
  enterLastName(lastname){
    cy.get(this.lastNameField).type(lastname)
  }
  enterEmail(email){
    cy.get(this.emailField).type(email)
  }
  enterPassword(password){
    cy.get(this.passwordField).type(password)
  }
  confirmPassword(confirmPassword){
     cy.get(this.confirmPasswordField).type(confirmPassword)
  }
  submitRegistration(){
    cy.get(this.submitRegister).click();
  }


  register(firstname,lastname,email,password,confirmpassword){
    this.registrationIcon();
    this.enterFirstName(firstname);
    this.enterLastName(lastname);
    this.enterEmail(email);
    this.enterPassword(password);
    this.confirmPassword(confirmpassword);
    this.submitRegistration();

  }
  
 
 
}
