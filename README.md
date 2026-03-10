x# tenwolde.dev

Personal portfolio of me (Lennart ten Wolde) — fullstack .NET & Vue engineer, Azure & Cloud DevOps.

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- Deployed at [tenwolde.dev](https://tenwolde.dev)

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── icons/
│   │       ├── GitHub.astro
│   │       └── LinkedIn.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Commands

| Command            | Action                                 |
| :----------------- | :------------------------------------- |
| `pnpm install`     | Install dependencies                   |
| `pnpm dev`         | Start local dev server at `localhost:4321` |
| `pnpm build`       | Build for production to `./dist/`      |
| `pnpm preview`     | Preview production build locally       |