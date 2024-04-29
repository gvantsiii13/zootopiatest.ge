import siningin from '../fixtures/example.json'
//კალათაში პროდუქტის დამატება მთავარ გვერდზე არსებული "ტოპ პროდუქცია-დან

describe('sining', () => {
    it('should product add from Top Product', () => {
        
            cy.login(siningin.email, siningin.password)

            cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-next > .price-cart > .product-cart > p').click()
            cy.get('.icart > #cart-items-count').should('be.visible')
            cy.get('.icart').click()
            cy.get('.spinner > input').should('have.attr', 'value', '1'); 
    });
});

//კალათის გვერდზე შერჩეული პროდუქციის რაოდენობის გასაზრდელი/ შესამცირებელი ღილაკების ფუნქციის შემოწმება

//describe('sining', () => {
    it('should + and - Check the buttons', () => {
        
            cy.login(siningin.email, siningin.password)

            cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-next > .price-cart > .product-cart > p').click()
            cy.get('.icart > #cart-items-count').should('be.visible')
            cy.get('.icart').click()
            cy.get('.spinner > input').should('have.attr', 'value', '1')
            
            cy.get('.plus').click().click().click()
            cy.get('.spinner > input').should(($input) => {
              expect($input.val()).to.equal('4')
            })

            cy.wait(4000)
            cy.get('#cart-items-count').invoke('text').then(text => {
                expect(text.trim()).to.equal('4')
            })

            cy.get('.minus').click().click().click().click()
            cy.wait(4000)
            cy.get('.empty > p').should('have.text','კალათა ცარიელია')
            cy.get('#cart-items-count').invoke('text').then(text => {
              expect(text.trim()).to.equal('0')
          })
            
    });
