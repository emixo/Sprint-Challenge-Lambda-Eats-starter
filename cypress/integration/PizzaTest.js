describe("Pizza Order Form", () => {
  it("navigates to the localhost", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });

  it("input a name", () => {
    cy.get('input[name="name"]').type("Emilio").should("have.value", "Emilio");
  });


  it("check the Pepperoni", () => {
    cy.get('input[name="Pepperoni"]').check().should("checked");
  });
  it("check the Sausage", () => {
    cy.get('input[name="Sausage"]').check().should("checked");
  });
  it("check the Pineapple", () => {
    cy.get('input[name="Pineapple"]').check().should("checked");
  });
  it("check the Ham", () => {
    cy.get('input[name="Ham"]').check().should("checked");
  });
  it("input special instructions", () => {
    cy.get('input[name="special"]').type("get me some bacon bits on there").should("have.value", "get me some bacon bits on there");
  });
  
  it("submit the user", () => {
    cy.get("form button").click();
  });

});  