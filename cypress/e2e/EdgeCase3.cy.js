/*
Edge Case 3: Removing Duplicate Products Added to Cart
  Expected Result: User has 1 item in cart after removing duplicates.
  */

  describe('Duplicate Products', () => {
    it('Removes duplicate items from cart', () => {
           // Visit the homepage
       cy.visit('https://automationexercise.com/');
       cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
       cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
       cy.get(':nth-child(5) > .btn').click();
       cy.get('.modal-content')
            .should('be.visible')
           .and('contain', 'Added!');
           cy.get('.modal-footer > .btn').click();
        /* verify website navigates back to main product page
        cy.url()
          .should('include', '/products')
          .and('not.include', '/product_details'); 
          test fails - navigates back to product details
          */
        cy.get('#quantity').clear().type('4');
        cy.get(':nth-child(5) > .btn').click();
        cy.get('.modal-content')
         .should('be.visible')
         .and('contain', 'Added!');
         cy.get('u').click();
         cy.get('.cart_info').should('contain', 'Sleeveless Dress');
         cy.get('.cart_quantity').should('contain', '5');
    /*Expected to fail - not defined in website code
         cy.get('.decrement-button').should('exist');
         */
        }); 
   });