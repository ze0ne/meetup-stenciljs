import { newE2EPage } from '@stencil/core/testing';

describe('you-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-header></you-header>');

    const element = await page.find('you-header');
    expect(element).toHaveClass('hydrated');
  });
});
