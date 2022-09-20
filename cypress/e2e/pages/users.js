class UsersPage {
    enterEmail(){
        cy.get('#ap_email')
          .clear()
          .type('samm.jaab@gmail.com');
        cy.get('.a-button-inner > #continue')
          .should('be.visible')
          .click();
    }
    enterPassword(){
        cy.get('#ap_password')
          .should('be.visible')
          .clear()
          .type('Testing123');
        cy.get('#signInSubmit')
          .should('be.visible')
          .click();
    }
    authenticateUser(){
        this.enterEmail();
        this.enterPassword();

    }
    selectAddress(){
        cy.get('.ship-to-this-address')
          .should('be.visible')
          .click();
    }
}

export default new UsersPage