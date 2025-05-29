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

    it('Deve editar o contato da lista', () => {
        cy.get('.contato').first()
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear().type('Anreia')
        cy.get('input[placeholder="E-mail"]').clear().type('anreia1@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('612126')
        cy.get('.alterar').click()
    })
} )