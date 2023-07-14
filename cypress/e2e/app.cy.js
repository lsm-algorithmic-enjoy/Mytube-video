/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Youtube App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders", () => {
    cy.findByText("Youtube").should("exist");
  });
});
