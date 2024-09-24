import { HomePage } from "../support/pages/homepo";
import { AddToCart } from "../support/pages/addtocartpo";
describe('Add product in Shoping cart', () => {
  const homepage = new HomePage()
  const addtocart=new AddToCart()
  beforeEach( () => {
    homepage.visit();


  });

  it('should verify product computer are added into cart', () => {
    cy.get('a[href="/computers"]').eq(0).trigger('mouseover');
    cy.contains('a','Desktops').should('be.visible')
    cy.contains('a','Notebooks').should('be.visible')
    cy.contains('a','Accessories').should('be.visible')
    cy.get('.hover').click();
    cy.get('h1').should('be.visible')
    cy.get('a[href="/desktops"]').eq(0.).click({ force: true });
    cy.get('a[href="/build-your-own-computer"]').eq(0.).click({ force: true });
    cy.get('#product_attribute_16_3_6_18').click()
    addtocart.clickAddToCartComputer();
    addtocart.checkshopingCart();

  });

  it('should verify product gift cards are added into cart', () => {
    cy.get('a[href="/gift-cards"]').eq(0).trigger('mouseover');
    cy.get('a[href="/gift-cards"]').eq(0).click({force:true});
    cy.get('h1').click();
    cy.get('a[href="/5-virtual-gift-card"]').eq(0).click({ force: true });
    const giftCardUser = {
      RecipienName: 'ali',
      RecipientEmail: 'ali30@gmail.com',
      YourName: 'abubakar',
      YourEmail: 'abubakar30sb@gmail.com',
      Message: 'abcd'

    }
    cy.get('#giftcard_1_RecipientName').type(giftCardUser.RecipienName)
    cy.get('#giftcard_1_RecipientEmail').type(giftCardUser.RecipientEmail)
    cy.get('#giftcard_1_SenderName').type(giftCardUser.YourName)
    cy.get('#giftcard_1_SenderEmail').type(giftCardUser.YourEmail)
    cy.get('#giftcard_1_Message').type(giftCardUser.Message)
    addtocart.clickAddToCartGift();
    addtocart.checkshopingCart();

   
  });

  it('should verify books are added into cart', () => {
    cy.get('a[href="/books"]').eq(0).trigger('mouseover');
    cy.get('a[href="/books"]').eq(0).click({force:true});
    cy.get('h1').should('be.visible')
    cy.get('a[href="/computing-and-internet"]').eq(0).should('be.visible').click({force:true})
    cy.get('h1').should('be.visible')
    cy.get('#addtocart_13_EnteredQuantity').should('be.visible','1')
    addtocart.clickAddToCartBook();
    addtocart.checkshopingCart();

  });
  
});


   


   

    


        


        



    

       
    
   
  
