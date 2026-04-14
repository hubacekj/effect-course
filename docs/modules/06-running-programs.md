# Module 6: Running Programs

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/05_running/index.md`
- `resources/effect-smol/ai-docs/src/01_effect/05_running/10_run-main.ts`
- `resources/effect-smol/ai-docs/src/01_effect/05_running/20_layer-launch.ts`
- `resources/effect-smol/migration/runtime.md`

## Goal

Understand the boundary between Effect code and the actual process.

## Key idea

Most of your code should describe computations.
Only a small part of your application should actually run them.

This keeps:

- composition easy
- tests cheap
- architecture explicit

## Entry patterns

### `NodeRuntime.runMain`

Use when you have an Effect program that should become the main process
entrypoint.

### `Layer.launch`

Use when the whole application is best described as a long-running layer graph,
such as:

- an HTTP server
- worker processes
- app-wide background tasks

## v4 runtime shift

The migration guide matters here:

- `Runtime<R>` is gone
- use context-based execution patterns instead
- runtime concerns are more edge-oriented than center-oriented in v4 teaching

You do not need to learn historical runtime APIs.

## Running-project anchor

Split the project into two possible entrypoints:

- `checkout-worker`
- `admin-http-server`

Both should be thin shells around Effect programs or launched layers.

## Common mistakes

- running effects all over the codebase instead of at the edge
- putting application logic into framework callbacks directly
- over-learning runtime internals before understanding services and layers

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/01_effect/05_running/10_run-main.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/05_running/20_layer-launch.ts`
3. `resources/effect-smol/migration/runtime.md`

Answer for yourself:

- When does `runMain` make sense?
- When is `Layer.launch` the cleaner model?
- Why is it helpful to keep execution at the boundary?

## Exercise

Detailed exercise pack:

- [Exercise 6 · Running Programs](/exercises/06-running-programs)

Sketch two entrypoint files:

1. one that launches a long-running worker
2. one that launches an HTTP server layer

For each, describe:

- what program is being run
- what layers it needs
- what should happen on shutdown

## Checkpoint questions

1. Why should execution happen near the boundary?
2. What problem does `NodeRuntime.runMain` solve?
3. When is `Layer.launch` a better fit than a hand-built main function?
4. What changed in v4 about runtime learning?
5. Why is this separation useful for testing?
