# Module 5: Resource Safety And Scopes

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/04_resources/index.md`
- `resources/effect-smol/ai-docs/src/01_effect/04_resources/10_acquire-release.ts`
- `resources/effect-smol/ai-docs/src/01_effect/04_resources/20_layer-side-effects.ts`
- `resources/effect-smol/migration/scope.md`

## Goal

Understand why Effect is strong at long-running, failure-prone backend systems.

## Core idea

Resource safety means:

- acquire resources explicitly
- release them reliably
- do not leak on failure or interruption

This is one of the biggest reasons to use Effect instead of plain Promise code
for real backend work.

## `Effect.acquireRelease`

This is the early resource primitive to internalize.

Use it when you need to manage things like:

- DB connections
- SMTP clients
- event listeners
- sockets
- background workers that should stop with the owning scope

## Scope

You do not need all scope internals right away.

You do need this intuition:

- some effects create lifetime-managed resources
- those resources live inside a scope
- when the scope closes, finalizers run

## Scoped fibers

The repo examples show `Effect.forkScoped` for background work that should be
interrupted automatically when the surrounding scope ends.

This is a major safety upgrade over manually tracked background tasks.

## Running-project anchor

Think about these resources:

- SMTP transporter
- inventory-refresh loop
- metrics or event-log flusher
- tenant-specific DB pools

Ask for each one:

- who owns its lifetime?
- when should it start?
- when must it stop?

## Common mistakes

- creating resources in plain module scope
- forgetting that background tasks are resources too
- not thinking about interruption at all
- treating cleanup as optional application code

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/01_effect/04_resources/10_acquire-release.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/04_resources/20_layer-side-effects.ts`
3. `resources/effect-smol/migration/scope.md`

Answer for yourself:

- Why is `acquireRelease` better than ad hoc `try/finally` scattered around?
- Why should background loops usually be scoped?
- What does layer lifecycle buy you?

## Exercise

Detailed exercise pack:

- [Exercise 5 · Resource Safety And Scopes](/exercises/05-resource-safety-and-scopes)

Design two scoped resources:

1. a `Mailer` backed by a transport that must be closed
2. a background stock-sync loop that runs until application shutdown

Describe:

- the acquisition
- the release
- the owner layer

## Checkpoint questions

1. Why does resource safety matter in backend systems?
2. What does `Effect.acquireRelease` guarantee?
3. Why is `forkScoped` safer than unmanaged background work?
4. What ends a resource's lifetime?
5. Why is this hard to do reliably with plain Promise code?
