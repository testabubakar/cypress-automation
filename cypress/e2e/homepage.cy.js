import { HomePage } from "../support/pages/homepo";

describe("home page", () => {
  const homepage = new HomePage();
  it("sucessfully load", () => {
    homepage.visit();
  });
});
