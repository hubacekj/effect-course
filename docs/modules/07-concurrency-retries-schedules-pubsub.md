# Module 7: Concurrency, Retries, Schedules, PubSub

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/06_schedule/10_schedules.ts`
- `resources/effect-smol/ai-docs/src/01_effect/06_pubsub/10_pubsub.ts`
- stable public docs for concurrency concepts that still match the repo

## Goal

Learn the operational core you need to write robust backend workflows.

## What to learn first

You do not need scheduler internals.
You do need working intuition for:

- parallel composition
- interruption
- retries
- schedules
- fan-out messaging

## Fibers, first pass

For this course phase, think of fibers as lightweight managed units of
concurrency used by Effect.

Important properties to internalize:

- they can be interrupted
- they can be scoped
- they compose better than loose Promise races

## Retries and schedules

The repo examples show schedules as reusable retry and repetition policies.

Common early patterns:

- fixed retries
- spaced polling
- exponential backoff
- retry only for retryable errors

This is extremely relevant for:

- payment providers
- shipping integrations
- admin exports
- background polling workers

## PubSub

Use `PubSub` when one producer needs to broadcast to multiple consumers.

Good uses:

- domain events inside one process
- fan-out notifications
- in-process analytics or audit pipelines

## Running-project anchor

Consider these cases:

- enrich products in parallel
- retry transient payment failures
- poll for shipping updates
- broadcast `OrderPlaced` events to audit, email, and admin projections

## Common mistakes

- retrying everything blindly
- forgetting to distinguish retryable from non-retryable errors
- using PubSub where a direct function call is simpler
- treating concurrency as "just use Promise.all"

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/06_schedule/10_schedules.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/06_pubsub/10_pubsub.ts`

Answer for yourself:

- How does the schedule inspect the error?
- Why is a retry policy better than ad hoc retry loops?
- When does PubSub improve architecture, and when is it overkill?

## Exercise

Detailed exercise pack:

- [Exercise 7 · Concurrency, Retries, Schedules, PubSub](/exercises/07-concurrency-retries-schedules-pubsub)

Design three flows:

1. payment retry with exponential backoff
2. stock polling every 30 seconds
3. `OrderPlaced` event broadcast to three in-process subscribers

State:

- what should retry
- what should fail fast
- what should be interruptible

## Checkpoint questions

1. What should make an error retryable?
2. Why are schedules a better abstraction than manual loops?
3. What is interruption for?
4. When is PubSub the right tool?
5. Why is plain `Promise.all` not the full concurrency story?
