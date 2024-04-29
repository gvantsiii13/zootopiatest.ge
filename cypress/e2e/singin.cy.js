/*describe('Register User Test', () => {
    it('should register a new user', () => {
        cy.fixture('example.json').then((siningin) => {
            cy.login(siningin.email,siningin.password)
        })
    });
});*/

import siningin from '../fixtures/example.json'

describe('sining', () => {
    it('should sining user', () => {
        
            cy.login(siningin.email, siningin.password)
        
    });
});