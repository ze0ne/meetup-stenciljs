import { newSpecPage } from '@stencil/core/testing';
import { YouFooter } from '../you-footer';

describe('you-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouFooter],
      html: `<you-footer></you-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <you-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-footer>
    `);
  });
});
