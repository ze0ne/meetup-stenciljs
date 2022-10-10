import { newE2EPage } from '@stencil/core/testing';

describe('you-canneles', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-canneles></you-canneles>');

    const element = await page.find('you-canneles');
    expect(element).toHaveClass('hydrated');
  });
});
