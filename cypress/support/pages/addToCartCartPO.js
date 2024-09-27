export class AddToCart {
getComputersTab()
{
  return cy.get('a[href="/computers"]');
}
getTabsLabels(tabs){
  return cy.get(`a:contains(${tabs})`)
}
clickOnDesktop(){
  return cy.get('a[href="/desktops"]')
}
buildYourOwnComputer(){
  return cy.get('a[href="/build-your-own-computer"]')
}
addToCartComputer() {
 return cy.get("#add-to-cart-button-16")
}
selectHarddisk(){
 return cy.get("#product_attribute_16_3_6_18")
} 
shopingCart() {
 return cy.get(".cart-label")
 }   



  addToCart() {
    this.getComputersTab().eq(0).trigger("mouseover");
    this.getTabsLabels("Desktops")
    this.getTabsLabels("Notebooks")
    this.getTabsLabels("Accessories")
    this.getComputersTab().eq(0).click();
    this.clickOnDesktop().eq(0).click({force:true});
    this.buildYourOwnComputer().eq(0).click({ force: true });
    this.selectHarddisk().click();
    this.addToCartComputer().click();
    this.shopingCart().should("be.visible", "1");
  }

     clickAddToCartGift() {
       cy.get("#add-to-cart-button-1").should("be.visible").click();
     }
    clickAddToCartBook() {
      cy.get("#add-to-cart-button-13")
        .click()
         .should("be.visible", "The product has been added to your shopping cart");
    }
  

     mouseOverGiftIcon(){
       cy.get('a[href="/gift-cards"]').eq(0).trigger("mouseover")
     }
    clickOnGiftCards(){
      cy.get('a[href="/gift-cards"]').eq(0).click({ force: true });
     }
    clickOnGiftCardItem(){
      cy.get('a[href="/5-virtual-gift-card"]').eq(0).click({ force: true });
     }
     fillGiftCardDetail(){

       const giftCardUser = {
        RecipienName: "ali",
        RecipientEmail: "ali30@gmail.com",
        YourName: "abubakar",
        YourEmail: "abubakar30sb@gmail.com",
        Message: "abcd",
     };
      cy.get("#giftcard_1_RecipientName").type(giftCardUser.RecipienName);
      cy.get("#giftcard_1_RecipientEmail").type(giftCardUser.RecipientEmail);
      cy.get("#giftcard_1_SenderName").type(giftCardUser.YourName);
     cy.get("#giftcard_1_SenderEmail").type(giftCardUser.YourEmail);
     cy.get("#giftcard_1_Message").type(giftCardUser.Message);
     }
     mouseOverBookIcon(){
     cy.get('a[href="/books"]').eq(0).trigger("mouseover");
     }
     clickOnBooks(){
       cy.get('a[href="/books"]').eq(0).click({ force: true });
     }
     clickOnComputingAndInternet(){
       cy.get('a[href="/computing-and-internet"]')
      .eq(0)
      .should("be.visible")
      .click({ force: true });

     }
    enterBookQuantity(){
      cy.get("#addtocart_13_EnteredQuantity").should("be.visible", "1");

    }

  }
