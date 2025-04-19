
  describe('No Results Search', () => {
    it('Verifies No Results of Search', () => {
           // Visit the homepage
       cy.visit('https://automationexercise.com/');
       cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
       cy.get('#search_product').type('nonameshirt');
       cy.get('#submit_search').click();
    //Searched product results
       cy.get('.title.text-center')
  .should('be.visible')
  .and('contain', 'Searched Products');
  //No message appears letting the user know that there are 0 search results. Empty page with Searched Products may lead user to think page is still loading.
       });
   });