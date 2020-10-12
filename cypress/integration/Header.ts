describe('Header', () => {
  it('renders correctly on large devices', () => {
    cy.viewport(1280, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="logo.logo"]').should('be.visible');
    cy.get('[data-testid="logo.badge"]').should('be.visible');
    cy.get('[data-testid="header.logo"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('be.visible');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('not.exist');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.left.dropdown.target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.left.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Header while open on a large device', { widths: [1280] });
  });

  it('renders correctly on medium devices', () => {
    cy.viewport(768, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="logo.logo"]').should('be.visible');
    cy.get('[data-testid="logo.badge"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(3);
      });

    cy.percySnapshot('Header while open on a medium device', { widths: [768] });
  });

  it('renders correctly on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="logo.logo"]').should('not.exist');
    cy.get('[data-testid="logo.logo-small"]').should('be.visible');
    cy.get('[data-testid="logo.badge"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('not.exist');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(5);
      });

    cy.percySnapshot('Header while open on a small device');
  });

  it('dropdown in header behaves correctly', () => {
    cy.viewport(1280, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.left.dropdown.target"]').click();
    cy.tick(10000);
    
    cy.get('[data-testid="header.left.dropdown.content"]')
      .children()
      .children()
      .then((children) => {
        expect(children.length).to.equal(7);
      });
  });

  it('dropdown in drawer behaves correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.accordion.1.target"]').click();
    cy.tick(10000);
    
    cy.get('[data-testid="header.accordion.1.children"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(4);
      });
  });

  it('clicking items in the drawer behaves correctly', () => {
    cy.clock();

    cy.get('[data-testid="header.accordion.0.target"]').click();
    cy.tick(10000);
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.accordion.1.target"]').click();
    cy.tick(10000);
    
    cy.get('[data-testid="header.accordion.1.children"]')
      .children()
      .then((children) => {
        children[0].click();
        cy.tick(10000);
        cy.get('[data-testid="header.drawer.container"]').should('not.exist');
      });
  });
});