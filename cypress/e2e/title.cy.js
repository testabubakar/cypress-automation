import { HomePage } from "../support/pages/homepo"; 
describe('Title', () => {
  const homepage = new HomePage
  it('verify title-positive', () => {
    homepage.visit();
    cy.title().should('eq','Demo Web Shop. Apparel & Shoes')

  });

  it('verify title-Nagive', () => {
    homepage.visit();
    cy.title().should('not.equal','Demo Web Shop123. Apparel & Shoes')
  });
  
});