it('preenche os campos obrigatórios e submete o formulário', function() {
  cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html')

  cy.get('#first-name').type('Paula')
  cy.get('#last-name').type('Senna')
  cy.get('#email').type('paula@exemplo.com')
  cy.get('#agree').check()
  cy.contains('button[type="submit"]', 'Confirm Tickets').click()

  cy.get('.success').should('contain', 'Ticket(s) successfully ordered.')
})