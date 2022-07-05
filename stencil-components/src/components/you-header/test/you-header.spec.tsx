import { newSpecPage } from '@stencil/core/testing';
import { YouHeader } from '../you-header';

describe('you-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouHeader],
      html: `<you-header></you-header>`,
    });
    expect(page.root).toEqualHtml(`
      <you-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-header>
    `);
  });
});
