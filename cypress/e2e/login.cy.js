import { LoginPage } from "../support/pages/loginpo";
import { HomePage } from "../support/pages/homePO";

describe('login functionality', () => {  
  const loginpage = new LoginPage
  const homepage= new HomePage
  beforeEach(() => {
    homepage.visit();
  });

  it("should show a submit login button", () => {
    loginpage.clickLoginIcon();
    loginpage.submitLoginButton();
  });

  it("should click on submit  login button", () => {
    loginpage.clickLoginIcon();
    loginpage.submitLoginButton();
  });

  it.only('verify login with valid email and password', () => {
    loginpage.clickLoginIcon();
    cy.fixture('Login').then( (data) => {
      cy.get('#Email').type(data.email);
      cy.get('#Password').type(data.password);
      loginpage.submitLoginButton();
      
    })
  });

  it("should display error when login with invalid email and password", () => {
    loginpage.clickLoginIcon();
    const userInfo = {
      Email: "abuba4kar30sb@gmail.com",
      Password: "123455",
    };
    cy.get("#Email").type(userInfo.Email);
    cy.get("#Password").type(userInfo.Password);
    loginpage.submitLoginButton();
    cy.get('.validation-summary-errors').should('be.visible', 'Login was unsuccessful. Please correct the errors and try again.')
    
    
  });
});
