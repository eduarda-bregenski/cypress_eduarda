/// <reference types="Cypress" />

Cypress.Commands.add('loginGitHub', () => {

    cy.visit(Cypress.env('baseUrl'));

    cy.get('[id="login_field"]').type(Cypress.env('user_name'));
    cy.get('[name="password"]').type(Cypress.env('user_password'));
    cy.get('[name="commit"]').click();
});
