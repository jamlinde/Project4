/*
Test Case 3: Product Cart Removal
Expected Result: User has only Men TShirt in cart.
 */

    describe('Product Cart Removal', () => {
        it('Verifies Products Removed from Cart', () => {
               // Visit the homepage
           cy.visit('https://automationexercise.com/');
           cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
           cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        // verify popup
           cy.get('.modal-content')
           .should('be.visible')
           .and('contain', 'Added!');
           cy.get('u').click();
        // verify 'Blue Top' is in cart
        cy.get('.cart_info').should('contain', 'Blue Top');
        // remove item from cart
        cy.get('.cart_quantity_delete').click();
        cy.get('#empty_cart').should('contain', 'Cart is empty!');
        cy.get('#empty_cart > .text-center > a > u').click();
        // add new product
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-content')
           .should('be.visible')
           .and('contain', 'Added!');
           cy.get('u').click();
        // verify item is in cart
        cy.get('.cart_info').should('contain', 'Men Tshirt');
           });
       });