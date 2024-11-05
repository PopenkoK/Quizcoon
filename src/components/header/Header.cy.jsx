import Header from './Header';

describe('ProfileDisplay Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Header />);

    cy.getByDataCy('header-container').should('exist');
  });
});
