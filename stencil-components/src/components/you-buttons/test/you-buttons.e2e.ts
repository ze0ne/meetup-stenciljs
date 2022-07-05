import { newE2EPage } from '@stencil/core/testing';

describe('you-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-buttons></you-buttons>');

    const element = await page.find('you-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
