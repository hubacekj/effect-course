# Course Build Progress

## Status

- State: in progress, published
- Primary learner profile: advanced TypeScript, minimal FP theory, backend use
  cases as anchors, wants to learn Effect generally
- Delivery mode: self-study materials plus interactive tutoring with Codex
- GitHub repository: `https://github.com/hubacekj/effect-course`
- Local repository path: `/Users/hubacek/learning/effect/effect-course`

## Constraints And Decisions

- Use backend commerce/admin examples only as focused anchors, not as the whole
  framing of the course.
- Teach concept-first, then deep-dive.
- Prefer one running project plus small drills.
- Cover `Schema`, `Stream`, `HTTP`, `SQL`, testing, observability, batching,
  and managed runtime.
- Include source-reading assignments directly against `effect-smol`.
- Mark unsupported or weakly-sourced areas explicitly.

## Evidence Collected

### Local primary source

- `resources/effect-smol/MIGRATION.md`
- `resources/effect-smol/ai-docs/src/**`
- `resources/effect-smol/packages/effect/src/index.ts`
- `resources/effect-smol/packages/effect/src/**/*.ts`

### Current public source

- `https://effect.website/docs`

## Main Findings From effect-smol

### Clear repo-level coding style

- Prefer `Effect.gen` for effect bodies.
- Prefer `Effect.fn("name")` for named effectful functions.
- Prefer `Context.Service` for services.
- Prefer `Layer` for wiring dependencies and lifecycle.
- Prefer `Schema.TaggedErrorClass` for domain errors.
- Use `Effect.acquireRelease` for resource lifetime management.
- Use `NodeRuntime.runMain` or `Layer.launch` at process boundaries.

### Important v4 shifts confirmed by migration docs

- ecosystem packages are version-aligned in v4
- more functionality moved into the core `effect` package
- many areas now live under `effect/unstable/*`
- `Context.Service` replaces older service APIs
- `Runtime<R>` is removed
- error combinator naming changed

## Confidence Policy

### High confidence

- `Effect`, errors, services, layers, resources, runtime entrypoints, testing,
  streams, batching patterns shown in `ai-docs`

### Medium confidence

- `effect/unstable/http`
- `effect/unstable/httpapi`
- `effect/unstable/observability`
- `effect/unstable/sql`

These have strong repo presence, but the `unstable` namespace means they should
be taught as beta-shaped APIs.

### Lower confidence

- `cluster`
- `workflow`
- other unstable modules without enough teaching examples for a first-pass
  course

These should be treated as optional capstones, not as core course material.

## Next Steps

1. Expand the deep-dive pass beyond outlines.
2. Add answer keys or tutor-only review guides per module.
3. Add source-linked exercise packs as standalone files.
4. Refine the running project into an explicit progressive build path.

## Publication Log

- Created local repository `effect-course`.
- Wrote initial course materials and source-policy documents.
- Committed initial content.
- Created GitHub repository `hubacekj/effect-course`.
- Pushed `main` successfully.

## Build Log: Course Readiness

- Added `Start Here` guide.
- Added study session template.
- Added readiness checklist.
- Added Pass 1 modules 2 through 12.
- Added explicit running-project architecture principles.
- Marked course as ready for active study, while keeping deep-dive expansion as
  future work.
