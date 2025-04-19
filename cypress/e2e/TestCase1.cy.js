
    describe('Product Purchase Flow', () => {
        it('Verifies Product Purchase Flow', () => {
               // Visit the homepage
           cy.visit('https://automationexercise.com/');
           //navigate to product page
           cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
           //navigate to Kids side menu
           cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa').click();
           cy.get('#Kids > .panel-body > ul > :nth-child(2) > a').click();
           cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
           //Verify product page displays
           cy.get('.product-information')
            .should('be.visible')
            .and('contain', 'Half Sleeves Top Schiffli Detailing - Pink');
           cy.get(':nth-child(5) > .btn').click();
           //Verify popup appeared
           cy.get('.modal-content')
             .should('be.visible')
             .and('contain', 'Added!');
           cy.get('u').click();
           //Verify item is in cart
           cy.get('.cart_info').should('contain', 'Half Sleeves Top Schiffli Detailing - Pink');
           cy.get('.col-sm-6 > .btn').click();
           cy.get('.modal-content')
             .should('be.visible')
             .and('contain', 'Checkout');
           cy.get('.modal-body > :nth-child(2) > a > u').click();
        // Login 
           cy.url().should('include', '/login');
    cy.get('[data-qa="signup-name"]').type('your_email@example.com'); 
    cy.get('[data-qa="signup-email"]').type('your_password');
    cy.get('[data-qa="signup-button"]').click();
// test failed - No login information to proceed with the order submission.
        });
       });