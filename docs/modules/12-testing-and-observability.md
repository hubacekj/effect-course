# Module 12: Testing And Observability

Source tag: testing `Stable concept`, observability `v4 beta shape`

Primary sources:

- `resources/effect-smol/ai-docs/src/09_testing/index.md`
- `resources/effect-smol/ai-docs/src/09_testing/10_effect-tests.ts`
- `resources/effect-smol/ai-docs/src/09_testing/20_layer-tests.ts`
- `resources/effect-smol/packages/vitest/README.md`
- `resources/effect-smol/ai-docs/src/08_observability/10_logging.ts`
- `resources/effect-smol/ai-docs/src/08_observability/20_otlp-tracing.ts`

## Goal

Close the loop between clean architecture, testability, and production
visibility.

## Why this module comes late, but not last in importance

Effect architecture becomes much more convincing once you see:

- services replaced cleanly in tests
- time controlled with `TestClock`
- logs and spans attached without smearing concerns across business logic

## Testing

The repo-backed early testing model is:

- `@effect/vitest`
- `it.effect`
- `it.live`
- shared layers for integration-style tests
- test services and refs

This is high-confidence material.

## Observability

Logging and tracing are also important, but the exact OTLP and unstable
observability APIs should be treated as beta-shaped.

You can learn the architectural pattern confidently:

- attach log context
- attach spans near important workflows
- provide observability layers at the edge

## Running-project anchor

Test and observe:

- checkout retries
- order placement
- admin product updates
- background sync jobs

## Common mistakes

- treating logs as stringly-typed side effects instead of structured signals
- testing only at the outermost HTTP boundary
- ignoring time control in retry/schedule tests
- assuming unstable observability APIs are fully settled

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/09_testing/10_effect-tests.ts`
2. `resources/effect-smol/ai-docs/src/09_testing/20_layer-tests.ts`
3. `resources/effect-smol/packages/vitest/README.md`
4. `resources/effect-smol/ai-docs/src/08_observability/10_logging.ts`
5. `resources/effect-smol/ai-docs/src/08_observability/20_otlp-tracing.ts`

Answer for yourself:

- Why are test layers such a strong fit with this architecture?
- When should you use `TestClock`?
- What observability concepts are stable even if some APIs are still beta-shaped?

## Exercise

Design:

1. a test for a retrying checkout flow using virtual time
2. a `layerTest` replacement for one service
3. one span and one structured log annotation you would add to order placement

## Checkpoint questions

1. Why does Effect architecture usually test well?
2. What does `TestClock` let you avoid?
3. Why are layers useful in tests?
4. Which observability ideas are safe to learn now?
5. Which observability details should still be treated cautiously?
