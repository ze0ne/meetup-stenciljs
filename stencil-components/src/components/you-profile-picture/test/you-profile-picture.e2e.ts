import { newE2EPage } from '@stencil/core/testing';

describe('you-profile-picture', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-profile-picture></you-profile-picture>');

    const element = await page.find('you-profile-picture');
    expect(element).toHaveClass('hydrated');
  });
});
