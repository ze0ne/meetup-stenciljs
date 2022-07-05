import { newE2EPage } from '@stencil/core/testing';

describe('you-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-logo></you-logo>');

    const element = await page.find('you-logo');
    expect(element).toHaveClass('hydrated');
  });
});
