describe('Authorization', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('login-button').click();
  });

  it('should login successfully and redirect to home page', () => {
    cy.getByDataCy('email-input').type('correct@example.com');
    cy.getByDataCy('password-input').type('correctpassword');
    cy.getByDataCy('submit-button').click();
  });

  it('should sign up successfully and redirect to home page', () => {
    cy.getByDataCy('sign-up-link').click();
    cy.getByDataCy('name-input').type('Test User');
    cy.getByDataCy('email-input').type('testuser@example.com');
    cy.getByDataCy('password-input').type('password123');
    cy.getByDataCy('confirm-password-input').type('password123');
    cy.getByDataCy('submit-button').click();
  });
});
