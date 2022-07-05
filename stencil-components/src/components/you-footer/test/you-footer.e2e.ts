import { newE2EPage } from '@stencil/core/testing';

describe('you-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-footer></you-footer>');

    const element = await page.find('you-footer');
    expect(element).toHaveClass('hydrated');
  });
});
