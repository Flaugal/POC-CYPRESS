describe('add elements to cart', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('a.login').click();
        cy.get('input#email').type('flatest@yahoo.com');
        cy.get('input#passwd').type('Dorian2016');
        cy.get('button#SubmitLogin').click()
    });
    it('verify than is possible add elements to cart', () => {
        cy.get('div.shopping_cart a[title="View my shopping cart"]').click();
        cy.get('a[title="Women"]').click();
        cy.get('a[data-id-product="1"] span').click();
});
});
