# Evidence First

An AI-assisted evaluation notebook by **Shivraj Sonwane**, built for Handshake AI Skills Studio's **Create Your First Website and Share It on GitHub** mission.

[View the website](https://evidence-first-project-website.vercel.app/) · [Read the original model responses](https://progress.openai.com/?prompt=2)

## What this project demonstrates

The site presents one response-comparison exercise: two AI-generated dog limericks evaluated against the same criteria. It explains the preference, suggests an improvement, and makes the limits of the conclusion visible.

- A side-by-side case study of gpt-4-0314 (2023) and GPT-5 (2025).
- A shared rubric covering five-line structure, AABBA rhyme, and a coherent comic scene.
- Keyboard-operable **Requirements**, **Evidence**, and **Limits** tabs.
- A source link, author credit, skip link, and responsive page layout.
- Git history showing how the website changes over time.

**Scope:** this is learning practice, not a professional certification, paid assignment, or comprehensive model benchmark. Preferring one response on one prompt does not establish that its model is better overall. Poetry judgments also depend on taste and pronunciation.

## Run locally

Install Node.js and pnpm. The exact package-manager version is recorded in `package.json`.

```sh
git clone https://github.com/shivrajks/evidence-first-project-website.git
cd evidence-first-project-website
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Next.js, normally `http://localhost:3000`.

### Check and build

```sh
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

Run `pnpm start` after a successful production build. There is no dedicated automated unit-test suite configured.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Page content, evaluation case study, and interactive judgment tabs. |
| `app/layout.tsx` | Root layout, page metadata, and font setup. |
| `app/globals.css` | Visual styles, responsive layout, and focus states. |
| `components/ui/` | Supporting UI components from the generated scaffold. |
| `public/` | Static icons and other scaffold assets. |

Built with Next.js, React, TypeScript, and CSS. The website was generated and iterated with v0. AI assistance was used for the evaluation draft and website implementation; the site identifies that assistance explicitly.

## Before publishing a change

1. Run the TypeScript check and production build.
2. Check the navigation anchors and the original-responses link.
3. Switch all three judgment tabs using clicks and arrow keys.
4. Tab through the page and confirm the skip link and focus indicators are usable.
5. Check a narrow phone viewport for clipping and horizontal overflow.
6. Review the changed files for private information before making source code public.

The source repository and deployment are connected through v0/Vercel. Publishing a revision updates the live website and preserves the corresponding change in GitHub history.

## Source and attribution

The comparison uses the prompt and model responses displayed on [OpenAI Progress, prompt 2](https://progress.openai.com/?prompt=2), reviewed November 17, 2026. The website summarizes the evaluation and links to the original responses rather than reproducing the complete poems.

Built for learning. Claims grounded in the source.
