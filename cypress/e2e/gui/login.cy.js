describe('Testando a tela de login', () => {
  it('Sucesso', () => {
    cy.login()

    cy.get('[data-qa-selector="welcome_title_content"]').should('be.visible')
  })
})