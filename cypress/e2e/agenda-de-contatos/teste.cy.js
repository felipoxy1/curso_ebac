/// <reference types="cypress" />

describe('Testar site de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar contato a lista', () => {
        cy.get('input[placeholder="Nome"]').type('Luiz')
        cy.get('input[placeholder="E-mail"]').type('souAlenda@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('141216')
        cy.get('button[class="adicionar"]').click()
    })
} )