Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="email-checkbox"]').click()
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    cy.get('button[type="submit"]').click()
  })