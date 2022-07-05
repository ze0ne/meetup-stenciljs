import { newSpecPage } from '@stencil/core/testing';
import { YouCardJob } from '../you-card-job';

describe('you-card-job', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouCardJob],
      html: `<you-card-job></you-card-job>`,
    });
    expect(page.root).toEqualHtml(`
      <you-card-job>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-card-job>
    `);
  });
});
