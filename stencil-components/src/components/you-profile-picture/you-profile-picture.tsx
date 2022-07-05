import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-profile-picture',
  styleUrl: 'you-profile-picture.scss',
  shadow: true,
})
export class YouProfilePicture {

  @Prop() image: string;

  render() {
    return (
      <Host>
        <div class="profile-picture">
          <img loading="lazy" src={this.image} />
        </div>
      </Host>
    );
  }

}
