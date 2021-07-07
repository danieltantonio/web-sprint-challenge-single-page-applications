describe('Inputs and buttons', () => {
    it('Can connect to the server', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', '/pizza')
    })

    it('Can add text to the text input', () => {
        cy.get('.submit-section > [type="text"]')
          .type('Daniel was here lol')
    })

    it('Can select multiple toppings', () => {
        cy.get(':nth-child(3) > .choice-input-section > :nth-child(1) > input')
          .click()

        cy.get(':nth-child(3) > .choice-input-section > :nth-child(2) > input')
          .click()
        
        cy.get(':nth-child(3) > .choice-input-section > :nth-child(3) > input')
          .click()

        cy.get(':nth-child(3) > .choice-input-section > :nth-child(4) > input')
          .click()

        cy.get(':nth-child(5) > input')
          .click()

        cy.get('.choice-input-section > :nth-child(6) > input')
          .click()

        cy.get(':nth-child(7) > input')
          .click()

        cy.get(':nth-child(8) > input')
          .click()

        cy.get(':nth-child(9) > input')
          .click()

        cy.get(':nth-child(10) > input')
          .click()
    })

    it('Can submit the form', () => {
        cy.get('button')
          .click()
    })
})