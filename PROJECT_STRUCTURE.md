# Project Structure

This is the complete file and directory structure of the project:

```
.
├── .gitignore
├── bun.lock
├── CONTRIBUTING.md
├── forgrok.png
├── LICENSE
├── package.json
├── README.md
├── render.yaml
├── RENDER_DEPLOYMENT_SUMMARY.md
├── tsconfig.json
├── turbo.json
├── client/
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── .tanstack/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── routeTree.gen.ts
│   │   ├── vite-env.d.ts
│   │   ├── assets/
│   │   │   ├── beaver.svg
│   │   │   └── logos/
│   │   │       ├── BWCozySpaceLogo.png
│   │   │       ├── CozySpaceLogo.png
│   │   │       ├── CozySpaceLogoIcon_16.png
│   │   │       ├── CozySpaceLogoIcon_32.png
│   │   │       ├── CozySpaceLogoIcon.png
│   │   │       ├── HorizontalCozySpaceLogo.png
│   │   │       ├── monoCozySpaceLogo.png
│   │   │       └── VerticalCozySpaceLogo.png
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Typography.tsx
│   │   │   └── ui/
│   │   │       └── card.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   └── routes/
│   │       ├── __root.tsx
│   │       ├── color-palette.tsx
│   │       ├── graphics-icons.tsx
│   │       ├── index.tsx
│   │       ├── logo-design.tsx
│   │       └── typography.tsx
├── server/
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── src/
│       ├── client.ts
│       └── index.ts
└── shared/
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── index.ts
        └── types/
            └── index.ts