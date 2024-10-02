import { faker } from '@faker-js/faker';

describe('Created Issue', () => {
    const issue = {
        tittle: `issue-${faker.string.uuid()}`,
        description: faker.word.words(5),
        project: {
            name: `project-${faker.string.uuid()}`,
            description: faker.word.words(3)
        }
    }

    beforeEach(() => {
        cy.login()
        cy.createProject(issue.project)
    })

    it('Sucesso', () => {
        cy.CreateIssue(issue)
        cy.get('.issue-details').should('contain', issue.tittle).and('contain', issue.description)
    })
})