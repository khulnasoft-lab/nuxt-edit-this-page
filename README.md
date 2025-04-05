# 📝 @khulnasoft/nuxt-edit-this-page

[![CI](https://github.com/khulnasoft-lab/nuxt-edit-this-page/actions/workflows/ci.yml/badge.svg)](https://github.com/khulnasoft-lab/nuxt-edit-this-page/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@khulnasoft/nuxt-edit-this-page/latest.svg?style=flat-square)](https://npmjs.com/package/@khulnasoft/nuxt-edit-this-page)
[![npm downloads](https://img.shields.io/npm/dt/@khulnasoft/nuxt-edit-this-page.svg?style=flat-square)](https://npmjs.com/package/@khulnasoft/nuxt-edit-this-page)

> Effortlessly add an **"Edit this page"** link to your Nuxt app — seamlessly integrated with Git platforms.

📄 [**Changelog**](./CHANGELOG.md)

---

## 🚀 Features

- 💻 Adds a global component for “Edit this page” links
- 🔗 Git-aware: supports GitHub and self-hosted Git platforms
- 🔧 Configurable path, branch, link text, and more
- 📦 Lightweight and Nuxt-native

---

## 📦 Installation

```bash
# With pnpm
pnpm add @khulnasoft/nuxt-edit-this-page

# Or with npm
npm install @khulnasoft/nuxt-edit-this-page
```

---

## ⚙️ Configuration

Add the module to your `nuxt.config.js`:

```js
export default {
  modules: ['@khulnasoft/nuxt-edit-this-page'],

  editThisPage: {
    repo: 'https://github.com/khulnasoft-lab/nuxt-edit-this-page',
    branch: 'master',
    path: 'blob',
    linkText: 'Edit this page',
    componentName: 'EditThisPageLink',
  },
};
```

---

## 🧪 Usage

Use the component anywhere in your pages:

```vue
<template>
  <edit-this-page-link />
</template>
```

---

## ⚙️ Options

| Option         | Type     | Default      | Description |
|----------------|----------|--------------|-------------|
| `repo`         | String   | _required_   | Git repository URL (HTTPS or SSH) |
| `branch`       | String   | `'master'`   | Git branch to edit |
| `path`         | String   | `'blob'`     | URL path (e.g., `blob`, `edit`) |
| `linkText`     | String   | `'Edit this page'` | Text shown in the link |
| `componentName`| String   | `'EditThisPageLink'` | Custom component name |

---

## 🧰 Props

Override options locally via props:

```vue
<edit-this-page-link
  edit-url="https://custom.git/edit/path"
  link-text="Contribute here"
/>
```

| Prop        | Type   | Description |
|-------------|--------|-------------|
| `editUrl`   | String | Custom edit link URL |
| `linkText`  | String | Custom link text |

---

## 🎨 Scoped Slot Example

Customize rendering via scoped slot:

```vue
<template>
  <edit-this-page-link>
    <template #default="{ href }">
      <a :href="href" target="_blank" rel="noopener">✏️ Contribute to this doc</a>
    </template>
  </edit-this-page-link>
</template>
```

---

## 🧠 Custom Path Resolver

Use a custom file path if the content isn’t based on the route:

```vue
<script>
export default {
  editThisPage: {
    resolve({ route }) {
      return `docs/${route.params.slug}.md`;
    },
  },
};
</script>
```

---

## 🛠 Development

```bash
git clone https://github.com/khulnasoft-lab/nuxt-edit-this-page.git
cd nuxt-edit-this-page
pnpm install
pnpm dev
```

---

## 📄 License

[MIT](./LICENSE) © [KhulnaSoft](https://github.com/khulnasoft)

---

Want to add more polish like demo links, badges for GitHub stars/contributors, or a table of contents? Let me know — I can help you make it pop even more!
