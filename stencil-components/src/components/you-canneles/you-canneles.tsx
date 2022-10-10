import { Component, h, getAssetPath, Element, State, EventEmitter, Event, Prop, Host } from '@stencil/core';

@Component({
  tag: 'you-canneles',
  styleUrl: 'you-canneles.scss',
  shadow: true,
  assetsDirs: ["assets"],
})
export class YouCanneles {

  @Prop() mainTitle: string;

  @Event() acceptHandler: EventEmitter;

  @Element() element: HTMLElement;

  @State() animation: string;

  componentWillLoad() {
    setTimeout(() => {
      this.animation = "animate__fadeInLeft";
    }, 2000);
  }

  close() {
    this.animation = "animate__fadeOutLeft";
  }

  accept() {
    this.acceptHandler.emit();
    this.close();
  }

  reject() {
    this.close();
  }

  render() {
    const imageSrc = getAssetPath(`assets/img/canneles.png`);
    return (
      <Host>
        <main class={"animate__animated " + (this.animation ? this.animation : "")}>
          <section>
            <h1>{this.mainTitle}</h1>
            <img src={imageSrc} alt="" />
            <slot name="content"></slot>
            <button class="button is-primary">Primary</button>
          </section>
          <footer><ul>
            <li onClick={this.reject.bind(this)}>Non merci</li>
            <li>Je choisis</li>
            <li class="link" onClick={this.accept.bind(this)}>Ok pour moi</li>
          </ul></footer>
        </main>
      </Host>
    );
  }

}
