/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Youtube App", () => {
  beforeEach(() => {
    cy.intercept("GET", /(mostPopular)/g, {
      fixture: "popular.json",
    });
    cy.intercept("GET", /(search)/g, {
      fixture: "search.json",
    });
    cy.viewport(1200, 800);
    cy.visit("/");
  });
  it("renders", () => {
    cy.findByText("MyTube").should("exist");
  });

  it("shows popular video first", () => {
    cy.findByText("popular video").should("exist");
  });

  it("searches by keyword", () => {
    cy.findByPlaceholderText("Search...").type("apple");
    cy.findByRole("button").click();
    cy.findByText("searchresult").should("exist");
  });

  it("goes to detail page", () => {
    cy.findAllByRole("listitem").first().click();
    cy.findByTitle("popular video").should("exist");
    cy.findByText("popular video").should("exist");
    cy.findByText("searchresult").should("exist");
  });
});
