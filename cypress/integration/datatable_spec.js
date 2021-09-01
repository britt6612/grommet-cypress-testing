beforeEach(() => {
  cy.visit("http://localhost:3000/");
  describe("DataTable Component", () => {});
});

it("scrolls to bottom", () => {
  cy.waitForReact();
  cy.react("StyledTable__StyledTableBody");
  cy.scrollTo("bottom");
  cy.react("StyledTable__StyledTableBody")
    .find("tr:last-child")
    .should("be.visible");
});
