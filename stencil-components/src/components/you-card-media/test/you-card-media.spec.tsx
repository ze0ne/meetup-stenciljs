import { newSpecPage } from '@stencil/core/testing';
import { YouCardMedia } from '../you-card-media';

describe('you-card-media', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YouCardMedia],
      html: `<you-card-media></you-card-media>`,
    });
    expect(page.root).toEqualHtml(`
      <you-card-media>
        <mock:shadow-root>
        <div class="card">
        <header><img src={this.image}/></header>
        <main>
          <h2>{this.title}</h2>
          <div class="summary">{this.summary}</div>
        </main>
        <footer>
          <div class="author">{this.author}</div>
          <div class="readMore">
            <div class="">
              <img src="https://assets-global.website-files.com/625aea37d2019e1dd7782064/6276811cc2ed01388c587adc_Group%20191.svg" loading="lazy" alt=""/>
            </div>
          </div>
        </footer>
      </div>
        </mock:shadow-root>
      </you-card-media>
    `);
  });
});
