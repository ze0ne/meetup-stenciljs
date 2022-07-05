import { newSpecPage } from '@stencil/core/testing';
import { YouDropdown } from '../you-dropdown';

describe('you-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouDropdown],
      html: `<you-dropdown></you-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <you-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-dropdown>
    `);
  });
});
