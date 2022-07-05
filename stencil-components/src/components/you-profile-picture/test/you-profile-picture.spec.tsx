import { newSpecPage } from '@stencil/core/testing';
import { YouProfilePicture } from '../you-profile-picture';

describe('you-profile-picture', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouProfilePicture],
      html: `<you-profile-picture></you-profile-picture>`,
    });
    expect(page.root).toEqualHtml(`
      <you-profile-picture>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </you-profile-picture>
    `);
  });
});
