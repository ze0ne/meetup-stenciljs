import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'you-header',
  styleUrl: 'you-header.scss',
  shadow: true,
})
export class YouHeader {

  identityLinks = [
    { text: "Notre ADN", url: "https://www.younup.fr/consultants/identite/adn" },
    { text: "Le quotidien", url: "https://www.younup.fr/consultants/identite/quotidien" },
    { text: "La team", url: "https://www.younup.fr/consultants/identite/team" },
    { text: "Recrutement", url: "https://www.younup.fr/consultants/identite/recrutement" },
  ];

  agencyLinks = [
    { text: "Nantes", url: "https://www.younup.fr/consultants/agences/nantes" },
    { text: "Rennes", url: "https://www.younup.fr/consultants/agences/rennes" },
    { text: "Bordeaux", url: "https://www.younup.fr/consultants/agences/bordeaux" },
    { text: "Lille", url: "https://www.younup.fr/consultants/agences/lille" }
  ];

  render() {
    return (
      <Host>
        <header>
          <you-logo width='150'></you-logo>
          <nav>
            <ul>
              <li><you-dropdown label="Notre identité" links={this.identityLinks}></you-dropdown></li>
              <li>Nos Expertises</li>
              <li><you-dropdown label="Agence" links={this.agencyLinks}></you-dropdown></li>
              <li>Le Media</li>
              <li>Job</li>
              <li>Entreprise</li>
            </ul>
          </nav>
        </header>
      </Host>
    );
  }

}
