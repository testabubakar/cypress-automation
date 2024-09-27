import { RegisterPage } from "../support/pages/registerPO";
import { HomePage } from "../support/pages/homePO";

describe("register", () => {
  const registerpage = new RegisterPage();
  const homepage = new HomePage();

  beforeEach(() => {
    homepage.visit();
  
  })
  
  
  it('should show a submit register button', () => {
    registerpage.registrationIcon();
    registerpage.submitRegistration();
    
  });

  it("should click on submit register button", () => {
    registerpage.registrationIcon();
    registerpage.submitRegistration();
    
  });

  it("Verify by clicking on the register button for blank input. ", () => {
    registerpage.registrationIcon();
    registerpage.submitRegistration();
    registerpage.verifyFailedRegister().should(
      "be.visible",
      "First name is required"
    );
    registerpage.verifyFailedRegister().should(
      "be.visible",
      "Last name is required"
    );
    registerpage.verifyFailedRegister().should("be.visible", "Email is required");
    registerpage.verifyFailedRegister().should(
      "be.visible",
      "Password is required"
    );
    registerpage.verifyFailedRegister().should(
      "be.visible",
      "Password is required "
    );
  });

  it("Verify user should be register ", () => {
    registerpage.registrationIcon();
    registerpage.register('ali','raza','aliraza40@gmail.com','12345','12345')
  
  });

  it("should verify password and confirm password are not same ", () => {
    registerpage.registrationIcon();
    registerpage.register('ali','raza','aliraza40@gmail.com','12345','123456')
    registerpage.verifyFailedRegister().should('contain','The password and confirmation password do not match.')
    
  });
});
