import { HomePage } from "../support/pages/homePO";
import { AddToCart } from "../support/pages/addToCartCartPO";

describe("Add product in Shoping cart", () => {
  const homepage = new HomePage();
  const addtocart = new AddToCart();
  beforeEach(() => {
    homepage.visit();
  });

  it.only("should verify product computer are added into cart", () => {
   addtocart.addToCart()
  });

  it("should verify product gift cards are added into cart", () => {
    addtocart.mouseOverGiftIcon();
    addtocart.clickOnGiftCards();
    cy.get("h1").should('be.visible');
    addtocart.clickOnGiftCardItem();
    addtocart.fillGiftCardDetail();
    addtocart.clickAddToCartGift();
    addtocart.checkshopingCart();
  });

  it("should verify books are added into cart", () => {
    addtocart.mouseOverBookIcon();
    addtocart.clickOnBooks();
    cy.get("h1").should("be.visible");
    addtocart.clickOnComputingAndInternet();
    cy.get("h1").should("be.visible");
    addtocart.enterBookQuantity();
    addtocart.clickAddToCartBook();
    addtocart.checkshopingCart();
  });
});
