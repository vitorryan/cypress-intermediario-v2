Cypress.Commands.add('login', ({ cacheSession = true } = {},) => {
    cy.session('login', () => {
        cy.fixture('sensitive-data/cypress.env').then((data) => {
            const user = data;
        
            cy.visit('/users/sign_in')
            cy.get('[data-qa-selector="login_field"]').type(user.user_name);
            cy.get('[data-qa-selector="password_field"]').type(user.user_password, {log: false})
            cy.get('[data-qa-selector="sign_in_button"]').click()
            cy.getCookie('session_id')
        }) 
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
    
})

Cypress.Commands.add('createProject', project => {
    cy.visit('/projects/new')

    cy.get('#project_name').type(project.name)  
    cy.get('#project_description').type(project.description)  
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()

    //cy.url().should('include', `/root/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
})

Cypress.Commands.add('CreateIssue', issue => {
    cy.visit(`/root/${issue.project.name}/issues/new`)

    cy.get('.qa-issuable-form-title').type(issue.tittle)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.get('.qa-issuable-create-button').click()
})

