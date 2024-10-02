import { faker } from '@faker-js/faker';

describe('created project', () => {
    it('Sucesso', () => {
        const projeto = {
            nome: `projeto-${faker.string.uuid()}`,
            descricao: faker.word.words(5)
        };

        cy.api_createdProject(projeto).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(projeto.nome)
            expect(response.body.description).to.equal(projeto.descricao)
        })

    })
})