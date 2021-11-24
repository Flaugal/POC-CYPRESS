describe('create an account', () => {
    it('verify than its possible add create an account', () => {
        cy.visit('/')
        cy.get('a.login').click();
        cy.get('input#email_create').type('albornoz1234g@gmail.com');
        cy.get('button#SubmitCreate').click();
        cy.get('div#uniform-id_gender2').click();
        cy.get('input#customer_firstname').type('fla');
        cy.get('input#customer_lastname').type('Alb');
        cy.get('input#passwd').type('control123');
        cy.get('input#firstname').type('fla');
        cy.get('input#lastname').type('alb');
        cy.get('input#address1').type('Av.123');
        cy.get('input#company').type('Patito');
        cy.get('input#city').type('Paris');
        cy.get('input#postcode').type('12345');
        cy.get('select#id_state').click();
        cy.get('select#id_country').click();
        cy.get('input#phone_mobile').type('123445678');
        cy.get('input#alias').type('patito');
        cy.get('button#submitAccount').click();
    });
});    
