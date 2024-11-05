describe('Test page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('quiz-button').first().click();
  });

  it('should display the quiz title and toggle buttons', () => {
    cy.getByDataCy('quiz-title').should('exist').and('be.visible');
    cy.getByDataCy('toggle-cards').should('exist').and('be.visible');
    cy.getByDataCy('toggle-test').should('exist').and('be.visible');
  });

  it('should switch between Cards and Test modes', () => {
    cy.getByDataCy('toggle-cards').click();
    cy.getByDataCy('progress-counter').should('exist').and('contain', '1/');
    cy.getByDataCy('toggle-test').click();
    cy.getByDataCy('progress-counter').should('exist').and('contain', '1/');
  });

  it('should navigate through cards and questions', () => {
    cy.getByDataCy('toggle-cards').click();
    cy.getByDataCy('nav-button-right').click();
    cy.getByDataCy('progress-counter').should('contain', '2/');
    cy.getByDataCy('nav-button-left').click();
    cy.getByDataCy('progress-counter').should('contain', '1/');

    cy.getByDataCy('toggle-test').click();
    cy.getByDataCy('nav-button-right').click();
    cy.getByDataCy('progress-counter').should('contain', '2/');
  });

  it('should select answers and calculate score', () => {
    cy.getByDataCy('toggle-test').click();
    cy.getByDataCy('finish-button').click();
    cy.getByDataCy('score-display').should('contain', 'Your score:');
  });
});
