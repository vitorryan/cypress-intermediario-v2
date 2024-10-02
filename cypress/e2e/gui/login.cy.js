describe('Testando a tela de login', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Sucesso', () => {
    //cy.login()
    cy.visit('users/sign_in')
    cy.get('.qa-user-avatar').should('be.visible')
  })
})