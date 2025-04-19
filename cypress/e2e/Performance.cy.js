describe('Lighthouse audit', () => {
    it('runs a basic Lighthouse audit', () => {
      cy.task('lighthouse', {
        url: 'https://automationexercise.com/', // replace with your site
        thresholds: {
          performance: 50,
          accessibility: 50,
          'best-practices': 50,
          seo: 50,
          pwa: 0,
        },
      });
    });
  });
  
// Inconclusive - Cypress would not stay within the testing framwork so I could see if it passed. It kept opening up into a different page.