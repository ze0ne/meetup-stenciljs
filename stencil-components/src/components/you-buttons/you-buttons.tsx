import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-buttons',
  styleUrl: 'you-buttons.scss',
  shadow: true,
})
export class YouButtons {

  @Prop() text: string;
  @Prop() type: string;


  render() {
    return (
      <Host>
        <button class={`btn btn-${this.type}`}><slot></slot></button>
      </Host>
    );
  }

}
