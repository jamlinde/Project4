/*
Edge Case 2: Empty Cart Checkout
  Expected Result: User is not able to proceed to checkout.
  */

  describe('Empty Cart Checkout', () => {
    it('Attempts Checkout With Empty Cart', () => {
           // Visit the homepage
       cy.visit('https://automationexercise.com/');
       cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
       cy.get('#empty_cart').should('contain', 'Cart is empty!');
       });
   });