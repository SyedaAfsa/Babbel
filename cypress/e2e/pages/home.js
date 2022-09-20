class HomePage {
    searchTV(){
        cy.get('#twotabsearchtextbox')
          .clear()
          .type('samsung crystal uhd');
        cy.get('#nav-search-submit-button')
          .should('be.visible')
          .click();
    }
    selectTv(){
        cy.get('[data-asin="B092RBCZD4"] :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-section.a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
          .should('be.visible')
          .click();
    }
    goToHomePage(){
        cy.visit('/');
        cy.get('#sp-cc-accept')
          .should('be.visible')
          .click();
    }
}

export default new HomePage