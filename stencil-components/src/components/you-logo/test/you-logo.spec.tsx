import { newSpecPage } from '@stencil/core/testing';
import { YouLogo } from '../you-logo';

describe('you-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouLogo],
      html: `<you-logo></you-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <you-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-logo>
    `);
  });
});
