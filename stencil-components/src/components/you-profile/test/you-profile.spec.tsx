import { newSpecPage } from '@stencil/core/testing';
import { YouProfile } from '../you-profile';

describe('you-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouProfile],
      html: `<you-profile></you-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <you-profile>
        <mock:shadow-root>
        <div class="content">
        <div class="name">{this.name}</div>
        <div class="job">{this.job}</div>
      </div>
        </mock:shadow-root>
      </you-profile>
    `);
  });
});
