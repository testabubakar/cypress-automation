export class AddToCart{

    clickAddToCartComputer() {
        cy.get('#add-to-cart-button-16').click();
    }
    clickAddToCartGift(){
       cy.get('#add-to-cart-button-1').should('be.visible').click();
        
    }
    clickAddToCartBook(){
       cy.get('#add-to-cart-button-13').click().should('be.visible','The product has been added to your shopping cart')
    
        
    }
    checkshopingCart(){
        cy.get('.cart-label').should('be.visible', '1')
    }

}