describe('Quizzes page', () => {
  beforeEach(() => {
    cy.visitApp();
  });

  it('should display the title and buttons', () => {
    cy.getByDataCy('home-title').should('exist').and('be.visible');
    cy.getByDataCy('quizzes-grid').should('exist').and('be.visible');
  });
});
