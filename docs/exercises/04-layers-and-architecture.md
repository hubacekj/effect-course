# Exercise 4: Layers And Architecture

Linked module:

- [Module 4 · Layers And Architecture](/modules/04-layers-and-architecture)
- [Solution 4 · Layers And Architecture](/solutions/04-layers-and-architecture)

Source tag: `Stable concept`

## Goal

Practice separating abstract service design from concrete wiring.

## Deliverables

Produce a paper architecture for:

1. `CatalogRepo`
2. `PricingService`
3. `OrderService`

with explicit `layerNoDeps`, `layer`, and `layerTest` decisions where relevant.

## Required Tasks

### Task 1: Layer variants

For each service, state which of these should exist:

- `layerNoDeps`
- `layer`
- `layerInMemory`
- `layerLive`
- `layerTest`

### Task 2: Wiring plan

Explain:

- which dependencies each service needs
- which ones are provided with `Layer.provide`
- where `Layer.provideMerge` would be useful

### Task 3: Test replacement story

Show how you would replace at least one live dependency with a test layer
without changing the workflow code.

## Constraints

- do not hide all dependencies in one mega-layer
- keep service design and layer design conceptually separate

## Stretch Task

Add one environment-dependent decision that would justify `Layer.unwrap`.

## Review Checklist

- Are you using layers to wire implementations rather than define behavior?
- Is the test replacement story clean?
- Are live/test/in-memory boundaries explicit?

## Ask Codex

- "Review my Module 4 layer plan."
- "Tell me where I’m over-wiring or under-wiring."
- "Challenge my choice of `provide` vs `provideMerge`."
