Cypress.Commands.add('login', () => {
    cy.fixture('sensitive-data/cypress.env').then((data) => {
        const user = data;

        cy.visit('/users/sign_in')
        cy.get('[data-qa-selector="login_field"]').type(user.user_name);
        cy.get('[data-qa-selector="password_field"]').type(user.user_password, {log: false})
        cy.get('[data-qa-selector="sign_in_button"]').click()
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
})