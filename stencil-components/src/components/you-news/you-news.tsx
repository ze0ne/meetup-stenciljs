import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'you-news',
  styleUrl: 'you-news.scss',
  shadow: true,
})
export class YouNews {

  render() {

    const news = [
      `npx ou comment comprendre que ce n'est pas une faute d'orthographe de npm`,
      `nvm ou comment travailler avec plusieurs versions de Node.js`,
      `Les arguments par défaut d'une fonction en C++`,
      `Ecrire ses keywords Robot Framework avec Python`,
      `À la découverte du | async en Angular`
    ];


    return (

      <Host>
        <div class="most-viewed">
          <header>
            <h2>Publications à la une</h2>
            <img src="https://assets-global.website-files.com/625aea37d2019e1dd7782064/62769b62883474734e218129_Group%20335.svg" alt=""/>
          </header>
          <main>
            <ol>
              {news.map((article) => (
                <li><a href={article}>{article}</a></li>
              ))}
            </ol>
          </main>
        </div>
      </Host>
    );
  }

}
