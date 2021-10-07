/// <reference types="Cypress" />

describe('login', () => {
    it('successfully', () => {
        cy.login()

        cy.get('icon:avatar').should('exist')
    })
})