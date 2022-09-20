class CartPage {
    addToCart(){
        cy.get('#add-to-cart-button')
          .should('be.visible')
          .click();
    }
    proceedToCheckout(){
        cy.get('#sc-buy-box-ptc-button')
          .should('be.visible')
          .click();
    }
    passwordStrength(length){
        cy.get('[class=password-hint-container]')
          .should('be.visible');
        cy.get('[class=fulfilled]')
          .and('have.length', length);
    }
    goToSignUpPage(){
        cy.visit('/');
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        cy.get(':nth-child(1) > .radio-control').click();
        cy.wait(1000);
        cy.get('.button').should('be.visible').and('be.enabled').click();
    }
}

export default new CartPage