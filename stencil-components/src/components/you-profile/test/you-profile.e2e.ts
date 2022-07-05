import { newE2EPage } from '@stencil/core/testing';

describe('you-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-profile></you-profile>');

    const element = await page.find('you-profile');
    expect(element).toHaveClass('hydrated');
  });
});
