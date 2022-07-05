import { newSpecPage } from '@stencil/core/testing';
import { YouButtons } from '../you-buttons';

describe('you-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouButtons],
      html: `<you-buttons></you-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <you-buttons>
        <mock:shadow-root>
        <button class="btn btn-undefined"><slot></slot></button>
        </mock:shadow-root>
      </you-buttons>
    `);
  });
});
