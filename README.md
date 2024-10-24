# rtmonly.com

---

Source code for my personal website, [rtmonly.com](https://rtmonly.com).

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/) & [Million](https://www.million.dev).

Using [Lanyard](https://lanyard.rest) for Discord Presence.

## Development

```bash
pnpm i && pnpm dev
```

## Build

```bash
pnpm i && pnpm build
```

## Deploy

Deployment is done via [Github Pages](https://pages.github.com/).

Cache is cleared via a [Workflow](.github/workflows/cf-pages-await.yml) that runs on every push.
