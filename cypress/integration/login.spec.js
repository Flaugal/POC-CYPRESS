describe('login with valid credentials', () => {
    it('verify than its possible add create an account', () => {
        cy.visit('/')
        cy.get('a.login').click();
        cy.get('input#email').type(Cypress.env('username'));
        cy.get('input#passwd').type(Cypress.env('password'));
        cy.get('button#SubmitLogin').click();
    });
});
