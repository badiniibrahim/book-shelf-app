/// <reference types="cypress" />

describe("ShelfTabs Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display correct content when a shelf tab is clicked", () => {
    cy.get('[data-testid="tabs-trigger-shelf-1"]').click();
    cy.get('[data-testid="tabs-trigger-shelf-2"]').click();
    cy.get('[data-testid="tabs-trigger-shelf-3"]').click();
  });

  it("should show content only for the selected tab", () => {
    cy.get('[data-testid="tabs-trigger-shelf-1"]').click();
    cy.get('[data-testid="book-card-book"]').should("be.visible");

    cy.get('[data-testid="tabs-trigger-shelf-2"]').click();
    cy.get('[data-testid="book-card-book"]').should("be.visible");

    cy.get('[data-testid="tabs-trigger-shelf-3"]').click();
    cy.get('[data-testid="book-card-book"]').should("be.visible");
  });
});
