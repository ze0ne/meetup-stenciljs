import { Component, Host, h, Prop } from '@stencil/core';

export interface DropdownLinkModel {
  text: string;
  url: string;
}

@Component({
  tag: 'you-dropdown',
  styleUrl: 'you-dropdown.scss',
  shadow: true,
})

export class YouDropdown {
  
  @Prop() label: string;

  @Prop() links: any;
  
 

  render() {

    console.log(this);
    return (
      <Host>
        <div class="dropdown">
          <span class="label">{this.label}</span>
          <div class="content">
          <ul>
              {this.links.map((link) => (
                <li><a href={link.url}>{link.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </Host>
    );
  }

}
