// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (email, password) =>{
    

    cy.viewport(1440, 900);
        cy.visit('https://testzootopia.loremipsum.ge/ka')
        cy.get('.iprof').click()
        cy.wait(400); 
        cy.get(':nth-child(5) > .imail').type (email)
        cy.get('.ipass').type(password)
        cy.get('.avtorization > .input-shablon > .form-button').should('be.visible').click()
});
