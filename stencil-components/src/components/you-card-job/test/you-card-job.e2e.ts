import { newE2EPage } from '@stencil/core/testing';

describe('you-card-job', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-card-job></you-card-job>');

    const element = await page.find('you-card-job');
    expect(element).toHaveClass('hydrated');
  });
});
