import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-profile',
  styleUrl: 'you-profile.scss',
  shadow: true,
})
export class YouProfile {

  @Prop() image: string;
  @Prop() name: string;
  @Prop() job: string;

  render() {
    return (
      <Host>
        <you-profile-picture image={this.image}></you-profile-picture>
        <div class="content">
          <div class="name">{this.name}</div>
          <div class="job">{this.job}</div>
        </div>
      </Host>
    );
  }

}
