# Source Map

This file maps course sections to their strongest available sources.

## Core Mental Model

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/01_basics/index.md`
  - `resources/effect-smol/ai-docs/src/01_effect/01_basics/01_effect-gen.ts`
  - `resources/effect-smol/ai-docs/src/01_effect/01_basics/02_effect-fn.ts`
  - `resources/effect-smol/ai-docs/src/01_effect/01_basics/10_creating-effects.ts`
- Secondary:
  - `https://effect.website/docs`

Tag: `Stable concept`

## Error Model

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/03_errors/**`
  - `resources/effect-smol/migration/error-handling.md`
  - `resources/effect-smol/migration/cause.md`
- Secondary:
  - public error-management docs

Tag: `Stable concept`

## Services And Layers

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/02_services/**`
  - `resources/effect-smol/migration/services.md`
  - `resources/effect-smol/migration/layer-memoization.md`
- Secondary:
  - public requirements-management docs

Tag: `Stable concept`

## Resources And Scope

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/04_resources/**`
  - `resources/effect-smol/migration/scope.md`

Tag: `Stable concept`

## Running Programs

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/05_running/**`
  - `resources/effect-smol/migration/runtime.md`

Tag: `Stable concept`

## PubSub, Scheduling, Concurrency

- Primary:
  - `resources/effect-smol/ai-docs/src/01_effect/06_pubsub/**`
  - `resources/effect-smol/ai-docs/src/06_schedule/**`
  - `resources/effect-smol/packages/effect/src/Fiber.ts`
  - `resources/effect-smol/packages/effect/src/Queue.ts`
  - `resources/effect-smol/packages/effect/src/PubSub.ts`

Tag: `Stable concept`

## Schema

- Primary:
  - `resources/effect-smol/packages/effect/src/Schema.ts`
  - `resources/effect-smol/migration/schema.md`
  - repo examples using `Schema.Class` and `Schema.TaggedErrorClass`
- Secondary:
  - public Schema docs, only where they still match the repo

Tag: `Stable concept` for basics, `v4 beta shape` for migration-sensitive areas

## Streams

- Primary:
  - `resources/effect-smol/ai-docs/src/02_stream/**`
  - `resources/effect-smol/packages/effect/src/Stream.ts`

Tag: `Stable concept`

## HTTP, HttpApi, ManagedRuntime

- Primary:
  - `resources/effect-smol/ai-docs/src/03_integration/10_managed-runtime.ts`
  - `resources/effect-smol/ai-docs/src/50_http-client/10_basics.ts`
  - `resources/effect-smol/ai-docs/src/51_http-server/10_basics.ts`
  - `resources/effect-smol/packages/effect/src/unstable/http/**`
  - `resources/effect-smol/packages/effect/src/unstable/httpapi/**`

Tag: `v4 beta shape`

## SQL And Batching

- Primary:
  - `resources/effect-smol/ai-docs/src/05_batching/10_request-resolver.ts`
  - `resources/effect-smol/packages/effect/src/Request.ts`
  - `resources/effect-smol/packages/effect/src/RequestResolver.ts`
  - `resources/effect-smol/packages/effect/src/unstable/sql/**`
  - `resources/effect-smol/packages/sql/sqlite-node/README.md`

Tag: batching is `Stable concept`; SQL is `v4 beta shape`

## Testing

- Primary:
  - `resources/effect-smol/ai-docs/src/09_testing/**`
  - `resources/effect-smol/packages/vitest/README.md`

Tag: `Stable concept`

## Observability

- Primary:
  - `resources/effect-smol/ai-docs/src/08_observability/**`
  - `resources/effect-smol/packages/effect/src/unstable/observability/**`

Tag: `v4 beta shape`

## Optional Capstones

- `cluster`: `resources/effect-smol/ai-docs/src/80_cluster/**`
- `ai`: `resources/effect-smol/ai-docs/src/71_ai/**`
- `workflow`: `resources/effect-smol/packages/effect/src/unstable/workflow/**`

Tag: `Uncertain / sparse source` for a first learning pass
