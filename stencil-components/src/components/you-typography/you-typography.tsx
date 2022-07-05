import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'you-typography',
  styleUrl: 'you-typography.scss',
  shadow: true,
})
export class YouTypography {

  render() {
    return (
      <Host>
        <h1>Hambray readymade authentic mustache</h1>
        <h1 class="styled-title">Hambray readymade authentic mustache</h1>
        <h1>Jean <b>shorts four</b> loko selvedge</h1>
        <h2>Symmetrical <b>tote bag</b> vaporware</h2>
        <h3>Hambray readymade authentic mustache</h3>
        <h4>Copper mug succulents blue bottle</h4>
        <h5>Microdosing cray dreamcatcher pork belly</h5>
        <h6>Direct trade post-ironic taiyaki</h6>
      </Host>
    );
  }

}
