import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-card-job',
  styleUrl: 'you-card-job.scss',
  shadow: true,
})
export class YouCardJob {

  @Prop() name: string;
  @Prop() contractType: string;
  @Prop() location: string;

  render() {
    return (
      <Host>
        <div class="card">
          <header><h2>{this.name}</h2></header>
          <main>
            <ul>
              <li>{this.contractType}</li>
              <li>{this.location}</li>
            </ul>
          </main>
        </div>
      </Host>
    );
  }

}
