import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-card-media',
  styleUrl: 'you-card-media.scss',
  shadow: true,
})

export class YouCardMedia {

  @Prop() image: string;

  @Prop() mainTitle: string;

  @Prop() summary: string;

  @Prop() author: string;

  @Prop() url: string;

  render() {
    return (
      <Host>
        <div class="card">
          <header><img src={this.image}/></header>
          <main>
            <h2>{this.mainTitle}</h2>
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
      </Host>
    );
  }

}
