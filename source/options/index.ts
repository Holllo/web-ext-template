import browser from 'webextension-polyfill';
import {html} from 'htm/preact';
import {Component, render} from 'preact';

window.addEventListener('DOMContentLoaded', () => {
  console.debug('Options page opened!');

  render(html`<${OptionsPage} />`, document.body);
});

class OptionsPage extends Component {
  render() {
    const manifest = browser.runtime.getManifest();

    const tableRows = [
      ['Name', manifest.name],
      ['Description', manifest.description],
      ['Version', manifest.version],
      ['Mode', import.meta.env.MODE],
    ].map(
      ([key, value]) =>
        html`
          <tr>
            <td>${key}</td>
            <td>${value}</td>
          </tr>
        `,
    );

    const permissions = manifest.permissions?.map(
      (permission) => html`<li><code>${permission}</code></li>`,
    );

    return html`
      <header class="page-header">
        <h1>
          <img
            alt="WebExtension Template Logo"
            src="/assets/web-ext-template-logo.png"
          />
          WebExtension Template
        </h1>
      </header>

      <main class="page-main">
        <div class="info">
          <h2>Manifest Info</h2>
          <table>
            ${tableRows}
          </table>
        </div>

        <div class="info">
          <h2>Permissions</h2>
          <ul>
            ${permissions}
          </ul>
        </div>
      </main>
    `;
  }
}
