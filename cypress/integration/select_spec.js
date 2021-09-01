beforeEach(() => {
  cy.visit("http://localhost:3000/");
  describe("Component Page", () => {});
});

it("keyboard with html select", () => {
  cy.get("body")
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .type("{downarrow}")
    .type("{uparrow}")
    .type("{enter}");
  cy.get("#name").should("have.value", "Peter");
});

// This is not working
// it("tab to third option in select", () => {
//   cy.get("body")
//     .tab()
//     .tab()
//     .tab()
//     .tab()
//     .tab()
//     .type("{downarrow}")
//     .type("{downarrow}")
//     .type("{downarrow}")
//     .type("{enter}");
//   cy.get("#select-testing").should("have.value", "option 4");
// });

it("down arrow once in select", () => {
  cy.findByPlaceholderText("Select single option")
    .click()
    .type("{downarrow}")
    .type("{downarrow}")
    .type("{downarrow}")
    .type("{enter}");
  cy.get("#select-testing__input").should("have.value", "option 4");
});

it("selects option 20 in select", () => {
  cy.findByPlaceholderText("Select single option").click();
  cy.wait(5000);
  cy.contains("[role=menuitem]", "option 20").click();
  cy.get("#select-testing__input").should("have.value", "option 20");
});

it("Select Aug 11th for date", () => {
  cy.get("body")
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .tab()
    .type("{downarrow}")
    .type("{rightarrow}")
    .type("{rightarrow}")
    .type("{rightarrow}")
    .type("{enter}");
  cy.get("#dateinput-testing").should("have.value", "8/11/21");
});

it("Find textinput", function () {
  cy.findByPlaceholderText("testing place holder")
    .click()
    .type("Hello, World")
    .should("have.value", "Hello, World");
});

// This is not working
it("find Menu by text", () => {
  cy.findByText("Menu").type("{downarrow}").focused().tab();
});
