import { newSpecPage } from '@stencil/core/testing';
import { YouCanneles } from '../you-canneles';

describe('you-canneles', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouCanneles],
      html: `<you-canneles></you-canneles>`,
    });
    expect(page.root).toEqualHtml(`
      <you-canneles>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-canneles>
    `);
  });
});
