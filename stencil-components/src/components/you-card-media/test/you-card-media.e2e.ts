import { newE2EPage } from '@stencil/core/testing';

describe('you-card-media', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<you-card-media></you-card-media>');

    const element = await page.find('you-card-media');
    expect(element).toHaveClass('hydrated');
  });
});
