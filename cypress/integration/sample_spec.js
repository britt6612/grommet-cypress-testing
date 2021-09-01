describe("My first test", function () {
  it("Does not do much", function () {
    expect(true).to.equal(true);
  });
});

describe("Vsit Grommet Storybook", function () {
  it("Visits Storybook Grommet", function () {
    cy.visit("https://storybook.grommet.io/");
  });
});

describe("Open textinput", function () {
  it("Find textinput", function () {
    cy.visit(
      "http://localhost:3000/"
    );
    cy.waitForReact();
    cy.findByPlaceholderText('testing place holder').click().type('Hello, World')
    cy.get("input").should("have.value", "Hello, World");
  });
});

describe("Open form", function () {
  it("Fill out form ", function () {
    cy.visit(
      "https://storybook.grommet.io/iframe.html?id=input-form-custom--custom&args=&viewMode=story"
    );
    cy.waitForReact();
    cy.react("StyledTextInput", { props: { name: "name" } }).type("Brittany");
    // cy.react("StyledMaskedInput", { props: { name: "email" } }).type(
    //   "brittany@hpe.com"
    // );
    cy.react("StyledButton", { props: { type: "submit" } }).click();
  });
});
