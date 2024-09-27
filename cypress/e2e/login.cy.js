import { LoginPage } from "../support/pages/loginP0";
import { HomePage } from "../support/pages/homePO";

describe('login functionality', () => {  
  const loginpage = new LoginPage
  const homepage= new HomePage
  beforeEach(() => {
    homepage.visit();
  });

  it("should click on submit  login button", () => {
    loginpage.clickLoginIcon();
    loginpage.submitLogin();
  });

  it('verify login with valid email and password', () => {
    loginpage.clickLoginIcon();
    cy.fixture('Login').then( (data) => {            //this code is for login through fixture.
      cy.get('#Email').type(data.email);
      cy.get('#Password').type(data.password);
      loginpage.verifySuccessfullyLogin().should('be.visible');
    });
    
  });

  it("should display error when login with invalid email and password", () => {
    loginpage.clickLoginIcon();
    loginpage.login('abubakar30sb@gmail.com','12345');
    loginpage.verifyFailedLogin();
    
  });

});
