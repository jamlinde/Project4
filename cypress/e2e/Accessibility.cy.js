
        describe('Accessibility Testing', () => { 
            beforeEach(() => { 
                cy.visit('https://automationexercise.com/'); 
                cy.injectAxe(); }); 
            it('has no detectable accessibility violations on load', () => { 
                cy.checkA11y(); }); 
            it('has no accessibility violations after interaction', () => { 
                cy.get('button').click(); 
                cy.checkA11y(); 
                }); 
        });
// Website failed - I should have the test log the fails, but i don't know how to write that code yet.

