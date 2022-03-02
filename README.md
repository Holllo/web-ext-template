# WebExtension Template

> An opinionated WebExtension template.

* Building with [Vite] and [vite-plugin-web-extension]
* Packaging with [git-archive], [pnpm] and [web-ext]
* [Sass] and [TypeScript] preconfigured
* [Stylelint] and [XO] code linting
* [HTM] and [Preact] frontend development
* Typed browser APIs with [webextension-polyfill]

## Usage

1. Download the repository.
2. Install the dependencies.
    * Optionally update the dependencies too.
3. Start an auto-reloading browser instance for development.
4. Check for linting and TypeScript errors.
5. Build the WebExtension for production.

```sh
# Step 1.
pnpx degit Holllo/web-ext-template your-awesome-project
cd your-awesome-project

# Step 2.
pnpm install
pnpm update --latest

# Step 3, you can change which browser to use in the Vite config.
pnpm start

# Step 4.
pnpm test

# Step 5, see the web-ext-artifacts directory for output.
pnpm build
```

[git-archive]: https://git-scm.com/docs/git-archive
[HTM]: https://github.com/developit/htm
[pnpm]: https://pnpm.io
[Preact]: https://preactjs.com
[Sass]: https://sass-lang.com
[Stylelint]: https://stylelint.io
[TypeScript]: https://typescriptlang.org
[Vite]: https://vitejs.dev
[vite-plugin-web-extension]: https://github.com/aklinker1/vite-plugin-web-extension
[web-ext]: https://github.com/mozilla/web-ext
[webextension-polyfill]: https://github.com/mozilla/webextension-polyfill
[XO]: https://github.com/xojs/xo
