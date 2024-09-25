export class AddToCart {
getComputersTab()
{
  return cy.get('a[href="/computers"]');
}
getTabsLabels(tabs){
  return cy.get(`a:contains(${tabs})`)
}
clickOnDesktop(){
  return cy.get('a[href="/desktops"]').eq(0).click({ force: true });
}

  addToCart() {
    this.getComputersTab().eq(0).trigger("mouseover");
    this.getTabsLabels("Desktops")
    this.getTabsLabels("Notebooks")
    this.getTabsLabels("Accessories")
    this.getComputersTab().eq(0).click();
    this.clickOnDesktop();

    // cy.contains("a", "Desktops").should("be.visible");
    // cy.contains("a", "Notebooks").should("be.visible");
    // cy.contains("a", "Accessories").should("be.visible");
    // cy.get(".hover").click();
    // cy.get('h1:contains("Computers")').should("be.visible");
    // cy.get('a[href="/desktops"]').eq(0).click({ force: true });
    // cy.get('a[href="/build-your-own-computer"]').eq(0).click({ force: true });
    // cy.get("#product_attribute_16_3_6_18").click();
    // cy.get("#add-to-cart-button-16").should("be.visible").click();
    // cy.get(".cart-label").should("be.visible", "1");

  }
  //   clickAddToCartComputer() {
  //     cy.get("#add-to-cart-button-16").click();
  //   }
  //   clickAddToCartGift() {
  //     cy.get("#add-to-cart-button-1").should("be.visible").click();
  //   }
  //   clickAddToCartBook() {
  //     cy.get("#add-to-cart-button-13")
  //       .click()
  //       .should("be.visible", "The product has been added to your shopping cart");
  //   }
  //   checkshopingCart() {
  //     cy.get(".cart-label").should("be.visible", "1");
  //   }
  //   clickOnDesktops(){
  //     cy.get('a[href="/desktops"]').eq(0).click({ force: true });
  //   }
  //   mouseOverComputerIcon(){
  //     cy.get('a[href="/computers"]').eq(0).trigger("mouseover");

  //   }
  //   clickOnComputers(){
  //     cy.get(".hover").click();
  //   }
  //   clickBuildYourOwnComputer(){
  //     cy.get('a[href="/build-your-own-computer"]').eq(0).click({ force: true });
  //   }
  //   selectHdd(){
  //     cy.get("#product_attribute_16_3_6_18").click();
  //   }
  //   mouseOverGiftIcon(){
  //     cy.get('a[href="/gift-cards"]').eq(0).trigger("mouseover")
  //   }
  //   clickOnGiftCards(){
  //     cy.get('a[href="/gift-cards"]').eq(0).click({ force: true });
  //   }
  //   clickOnGiftCardItem(){
  //     cy.get('a[href="/5-virtual-gift-card"]').eq(0).click({ force: true });
  //   }
  //   fillGiftCardDetail(){

  //     const giftCardUser = {
  //       RecipienName: "ali",
  //       RecipientEmail: "ali30@gmail.com",
  //       YourName: "abubakar",
  //       YourEmail: "abubakar30sb@gmail.com",
  //       Message: "abcd",
  //     };
  //     cy.get("#giftcard_1_RecipientName").type(giftCardUser.RecipienName);
  //     cy.get("#giftcard_1_RecipientEmail").type(giftCardUser.RecipientEmail);
  //     cy.get("#giftcard_1_SenderName").type(giftCardUser.YourName);
  //     cy.get("#giftcard_1_SenderEmail").type(giftCardUser.YourEmail);
  //     cy.get("#giftcard_1_Message").type(giftCardUser.Message);
  //   }
  //   mouseOverBookIcon(){
  //     cy.get('a[href="/books"]').eq(0).trigger("mouseover");
  //   }
  //   clickOnBooks(){
  //     cy.get('a[href="/books"]').eq(0).click({ force: true });
  //   }
  //   clickOnComputingAndInternet(){
  //     cy.get('a[href="/computing-and-internet"]')
  //     .eq(0)
  //     .should("be.visible")
  //     .click({ force: true });

  //   }
  //   enterBookQuantity(){
  //     cy.get("#addtocart_13_EnteredQuantity").should("be.visible", "1");

  //   }

}
