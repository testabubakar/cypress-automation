import { RegisterPage } from "../support/pages/registerpo";
import { HomePage } from "../support/pages/homePO";

describe("register", () => {
  const registerpage = new RegisterPage();
  const homepage = new HomePage();

  beforeEach(() => {
    homepage.visit();
  
  })
  
  
  it('should show a submit register button', () => {
    
    registerpage.clickRegisterIcon();
    cy.get('h1').should('be.visible')
    registerpage.submitRegisterButton();
    
  });

  it("should show a submit register button", () => {
    registerpage.clickRegisterIcon();
    cy.get("h1").should("be.visible");
    registerpage.submitRegisterButton();
  });

  it("should click on submit register button", () => {
    registerpage.clickRegisterIcon();
    cy.get("h1").should("be.visible");
    registerpage.submitRegisterButton();
    cy.get('.field-validation-error').should('be.visible', 'First name is required')
    cy.get('.field-validation-error').should('be.visible', 'Last name is required')
    cy.get('.field-validation-error').should('be.visible', 'Email is required')
    cy.get('.field-validation-error').should('be.visible', 'Password is required')
    cy.get('.field-validation-error').should('be.visible', 'Password is required ')
    
    
  });

  it("Verify by clicking on the register button for blank input. ", () => {
    registerpage.clickRegisterIcon();
    cy.get("h1").should("be.visible");
    cy.get("#FirstName").should("be.empty");
    cy.get("#LastName").should("be.empty");
    cy.get("#Email").should("be.empty");
    cy.get("#Password").should("be.empty");
    cy.get("#ConfirmPassword").should("be.empty");
    registerpage.submitRegisterButton();
    cy.get(".field-validation-error").should(
      "be.visible",
      "First name is required"
    );
    cy.get(".field-validation-error").should(
      "be.visible",
      "Last name is required"
    );
    cy.get(".field-validation-error").should("be.visible", "Email is required");
    cy.get(".field-validation-error").should(
      "be.visible",
      "Password is required"
    );
    cy.get(".field-validation-error").should(
      "be.visible",
      "Password is required "
    );
  });

  it("Verify user should be register ", () => {
    registerpage.clickRegisterIcon();
    cy.get("h1").should("be.visible");
    const userInfo = {
      Firstname: "Bob",
      Lastname: "Ross",
      Email: "abubakar30sb@gmail.com",
      Password: "123",
      ConfirmPassword: "123",
    };
    cy.get("#FirstName").type(userInfo.Firstname);
    cy.get("#LastName").type(userInfo.Lastname);
    cy.get("#Email").type(userInfo.Email);
    cy.get("#Password").type(userInfo.Password);
    cy.get("#ConfirmPassword").type(userInfo.ConfirmPassword);
    registerpage.submitRegisterButton();
  });

  it("should verify password and confirm password are not same ", () => {
    registerpage.clickRegisterIcon();
    cy.get("h1").should("be.visible");
    const userInfo = {
      Firstname: "Bob",
      Lastname: "Ross",
      Email: "abubakar300sb@gmail.com",
      Password: "123456",
      ConfirmPassword: "1234567",
    };
    cy.get("#FirstName").type(userInfo.Firstname);
    cy.get("#LastName").type(userInfo.Lastname);
    cy.get("#Email").type(userInfo.Email);
    cy.get("#Password").type(userInfo.Password);
    cy.get("#ConfirmPassword").type(userInfo.ConfirmPassword);
    registerpage.submitRegisterButton();
    cy.get('.field-validation-error').should('contain','The password and confirmation password do not match.')
    
  });
});
