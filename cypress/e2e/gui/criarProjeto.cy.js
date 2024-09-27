import { faker } from '@faker-js/faker'


describe('Criando um projeto', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Sucesso', () => {
        const project = {
            name: `project-${faker.person.firstName()}`,
            description: faker.word.words(5)
        }

        cy.createProject(project);
    })
})