import { newE2EPage } from '@stencil/core/testing';

describe('you-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-typography></you-typography>');

    const element = await page.find('you-typography');
    expect(element).toHaveClass('hydrated');
  });
});
