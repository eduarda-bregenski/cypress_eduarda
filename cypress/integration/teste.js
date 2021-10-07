context('Login', () => {
    it('Acessar ao site', () => {
        cy.visit('https://app-fretefy-staging.azurewebsites.net/#/');
        cy.intercept('GET','https://popups.rdstation.com.br/**')
        .as('waitRdstation')
        cy.wait('@waitRdstation', 60000)
        cy.get('[label="E-mail"]').type('UsuarioBDD@fretefy.com.br');        
        cy.get('[label="Senha"]').type('Bdd@Fretefy');
        cy.get('[label="Entrar"]').click();
        cy.intercept('GET','/api/ofertaCarga/summary')
        .as('waitGet')
        cy.wait('@waitGet',60000)
        cy.url().should('include', '/#/home');        
    })  
    it('Login off', () => {
        cy.visit('https://app-fretefy-staging.azurewebsites.net/#/');
        cy.loginAPI
        cy.url().should('include', '/#/login');        
    })  
})