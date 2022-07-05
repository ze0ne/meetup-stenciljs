import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'you-footer',
  styleUrl: 'you-footer.scss',
  shadow: true,
})
export class YouFooter {

  render() {
    return (
      <Host>
        <footer class="footer">
          <div class="logo">
            <you-logo type="light"></you-logo>
          </div>
          <div class="list">
            <div class="label">NOTRE IDENTITÉ</div>
            <ul class="list">
              <li>Notre ADN</li>
              <li>Le quotidien</li>
              <li>La Team</li>
              <li>Le recrutement</li>
            </ul>
          </div>
          <div class="list">
            <div class="label">NOTRE IDENTITÉ</div>
            <ul>
              <li>Notre ADN</li>
              <li>Le quotidien</li>
              <li>La Team</li>
              <li>Le recrutement</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>NOS EXPERTISES</li>
              <li>LE MEDIA</li>
              <li>JOB</li>
            </ul>
          </div>

        </footer>
      </Host>
    );
  }

}
