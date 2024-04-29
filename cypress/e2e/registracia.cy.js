
describe('registeration', () => {
 it('register without tel', () => {
       let random = Math.random()
           let email = "gvantsa"+random+"@gmail.com"  
          let username = "gvantsa"+random
          let ID = Math.floor(Math.random() * 90000000000) + 10000000000;
          let Tel = Math.floor(Math.random() * 900000000) + 100000000;
          
           cy.viewport(1440, 900);
        cy.visit('https://testzootopia.loremipsum.ge/ka')
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').should('be.visible', "სახელი გვარი").type(username)
        cy.get(':nth-child(2) > .imail').should('be.visible', "ელ.ფოსტა").type(email)
        cy.get('.ipir').should('be.visible', "პირადი ნომერი").type(ID)
        cy.get(':nth-child(4) > .itel').should('be.visible', "ტელ")
        cy.get(':nth-child(5) > .ipass').should('be.visible', "პაროლი").type('123456')
        cy.get('.reg-form-left > :nth-child(6) > .ipass').should('be.visible', "პაროლი").type('123456')
        cy.get('#etx').check({force: true})
        cy.get('.regsub').click()
        cy.get('.input-div.alert > .alert > img').should('be.visible')
  })

  it("Register User Test", () => {
    let random = Math.random()
    let email = "gvantsa"+random+"@gmail.com"  
   let username = "gvantsa"+random
   let ID = Math.floor(Math.random() * 90000000000) + 10000000000;
   let Tel = Math.floor(Math.random() * 900000000) + 100000000;
   cy.viewport(1440, 900);
    cy.visit('https://testzootopia.loremipsum.ge/ka')
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').should('be.visible', "სახელი გვარი").type(username)
        cy.get(':nth-child(2) > .imail').should('be.visible', "ელ.ფოსტა").type(email)
        cy.get('.ipir').should('be.visible', "პირადი ნომერი").type(ID)
        cy.get(':nth-child(4) > .itel').should('be.visible', "ტელ").type(Tel)
        cy.get(':nth-child(5) > .ipass').should('be.visible', "პაროლი").type('123456')
        cy.get('.reg-form-left > :nth-child(6) > .ipass').should('be.visible', "პაროლი").type('123456')
        cy.get('#etx').check({force: true})
        cy.get('.regsub').click()
        cy.wait(5000)
        cy.url().then(url => {
          if (url !== 'https://testzootopia.loremipsum.ge/ka') {
              cy.contains("Go Home").click();
          }
      }); 
 })
    })
