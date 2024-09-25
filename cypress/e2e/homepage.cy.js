import { HomePage } from "../support/pages/homePO";

describe("home page", () => {
  const homepage = new HomePage();
  it("sucessfully load", () => {
    homepage.visit();
  });
});
