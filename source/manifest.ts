/* eslint-disable @typescript-eslint/naming-convention */

export default function createManifest(
  target: string,
): Record<string, unknown> {
  const manifest: Record<string, unknown> = {
    name: 'WebExtension Template',
    description: 'An opinionated WebExtension template.',
    version: '0.1.0',
    permissions: ['downloads', 'storage'],
    options_ui: {
      page: 'options/index.html',
      open_in_tab: true,
    },
    content_scripts: [
      {
        matches: ['*://example.org/*'],
        run_at: 'document_end',
        css: ['content-scripts/content-styles.scss'],
        js: ['content-scripts/initialize.ts'],
      },
    ],
  };

  const icons = {
    128: 'assets/web-ext-template-logo.png',
  };

  manifest.icons = icons;

  const browserAction = {
    default_icon: icons,
  };

  const backgroundScript = 'background-scripts/initialize.ts';

  if (target === 'chromium') {
    manifest.manifest_version = 3;
    manifest.action = browserAction;
    manifest.background = {
      service_worker: backgroundScript,
      type: 'module',
    };
    manifest.host_permissions = ['*://example.org/*'];
  } else {
    manifest.manifest_version = 2;
    manifest.browser_action = browserAction;
    manifest.background = {
      scripts: [backgroundScript],
    };
    (manifest.permissions as string[]).push('*://example.org/*');
  }

  return manifest;
}
