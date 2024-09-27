import { HomePage } from "../support/pages/homePO";
describe("Title", () => {
  const homepage = new HomePage();
  it("verify title-positive", () => {
    homepage.visit();
    cy.title().should("eq", "Tricentis Demo Web Shop");
  });

  it("verify title-Nagive", () => {
    homepage.visit();
    cy.title().should("not.equal", "Demo Web Shop123. Apparel & Shoes");
  });
});
