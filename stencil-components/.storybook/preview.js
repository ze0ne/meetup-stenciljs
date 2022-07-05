import  { defineCustomElements } from '../loader';
import "../node_modules/normalize.css/normalize.css";
import '!style-loader!css-loader!../../stencil-components/dist/stencil-components/stencil-components.css'
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}