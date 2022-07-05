import { newE2EPage } from '@stencil/core/testing';

describe('you-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-dropdown></you-dropdown>');

    const element = await page.find('you-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
