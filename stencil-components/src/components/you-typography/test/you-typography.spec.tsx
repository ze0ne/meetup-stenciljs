import { newSpecPage } from '@stencil/core/testing';
import { YouTypography } from '../you-typography';

describe('you-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouTypography],
      html: `<you-typography></you-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <you-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-typography>
    `);
  });
});
