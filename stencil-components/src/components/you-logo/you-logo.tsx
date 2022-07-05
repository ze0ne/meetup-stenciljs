import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'you-logo',
  styleUrl: 'you-logo.scss',
  shadow: true,
})
export class YouLogo {

  @Prop() width: string;

  @Prop() type: string;

  render() {
    let image = "https://assets-global.website-files.com/625aea37d2019e1dd7782064/62617385c686c2d8d5820bc9_Logo%20Dark.svg";
    if(this.type === "light") {
      image = "https://assets-global.website-files.com/625aea37d2019e1dd7782064/62617385e28df6f87a4c67c2_Logo%20Light.svg";
    }

    return (
      <Host>
        <img src={image} width={this.width} alt="Logo Younup" />
      </Host>
    );
  }

}
