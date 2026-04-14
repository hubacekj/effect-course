# effect-course

Personalized, source-backed course materials for learning Effect v4 as a
TypeScript programming platform.

This repository is designed for interactive study with Codex. It has two goals:

1. Document the process of building the course.
2. Contain the actual course materials, exercises, and reading paths.

## Guiding Principles

- Treat `resources/effect-smol` as the primary source for Effect v4 beta.
- Use official public docs only where the concepts are stable and still match
  the v4 repo.
- Mark uncertain areas explicitly instead of filling gaps with assumptions.
- Optimize for practical understanding first, then depth.

## Repository Structure

- `docs/meta/progress.md`: log of course-building progress and decisions
- `docs/meta/source-map.md`: where each part of the course is sourced from
- `docs/syllabus.md`: full course outline and study plan
- `docs/modules/`: lesson-by-lesson course material
- `docs/.vitepress/`: local documentation web app configuration
- `exercises/`: hands-on work for the running commerce-engine anchor project

## Source Policy

Each topic is tagged with one of:

- `Stable concept`: supported by repo examples and stable public docs
- `v4 beta shape`: primarily derived from `effect-smol`; API may still move
- `Uncertain / sparse source`: visible in the repo, but not strong enough to
  teach as settled guidance

## Current Status

The repository currently contains:

- the initial personalized syllabus
- the source map and confidence policy
- the full Pass 1 module set
- the running project frame for a commerce-engine learning track
- the initial GitHub publication at `https://github.com/hubacekj/effect-course`
- a `Start Here` guide and readiness checklist

## How To Use

Start with [docs/start-here.md](docs/start-here.md).

Then continue through:

1. [docs/modules/00-how-to-use-this-course.md](docs/modules/00-how-to-use-this-course.md)
2. [docs/syllabus.md](docs/syllabus.md)
3. [docs/modules/01-effect-mental-model.md](docs/modules/01-effect-mental-model.md)

For each module:

1. Read the lesson.
2. Follow the linked source-reading assignments.
3. Complete the exercise.
4. Return to Codex for an interactive checkpoint and the next module.

## Readiness

The repository is ready for active study of the full Pass 1 course.

See [docs/meta/ready-checklist.md](docs/meta/ready-checklist.md).

## Local Web App

This repository also includes a locally runnable VitePress app that renders the
course Markdown as a navigable study site.

```sh
pnpm install
pnpm docs:dev
```

Then open the local URL shown in the terminal.
