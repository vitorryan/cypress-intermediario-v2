const acessToken = `Bearer ${Cypress.env('gitlab_acess_token')}`

Cypress.Commands.add('api_createdProject', (projeto) => {
    cy.request({
        method: 'POST',
        url: '/api/v4/projects/',
        body: {
            name: projeto.nome,
            description: projeto.descricao,
            initialize_with_readme: true
        },
        headers: { Authorization: acessToken},
    })
})