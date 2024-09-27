describe('Testando o logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('Sucesso', () => {
        cy.logout()
        cy.url().should('include', '/users/sign_in')
    })
})