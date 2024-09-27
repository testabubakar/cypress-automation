import { HomePage } from "../support/pages/homePO";
import { AddToCart } from "../support/pages/addToCartCartPO";

describe("Add product in Shoping cart", () => {
  const homepage = new HomePage();
  const addtocart = new AddToCart();
  beforeEach(() => {
    homepage.visit();
  });

  it("should verify product computer are added into cart", () => {
   addtocart.addToCart();
  });

  it("should verify product gift cards are added into cart", () => {
    addtocart.mouseOverGiftIcon();
    addtocart.clickOnGiftCards();
    addtocart.clickOnGiftCardItem();
    addtocart.fillGiftCardDetail();
    addtocart.clickAddToCartGift();
    addtocart.shopingCart().should('be.visible','1');
  });

  it("should verify books are added into cart", () => {
    addtocart.mouseOverBookIcon();
    addtocart.clickOnBooks();
    addtocart.clickOnComputingAndInternet();
    addtocart.enterBookQuantity();
    addtocart.clickAddToCartBook();
    addtocart.shopingCart().should('be.visible','1');
  });
});
