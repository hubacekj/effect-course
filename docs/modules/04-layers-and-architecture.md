# Module 4: Layers And Application Architecture

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/02_services/20_layer-composition.ts`
- `resources/effect-smol/ai-docs/src/01_effect/02_services/20_layer-unwrap.ts`
- `resources/effect-smol/ai-docs/src/01_effect/04_resources/30_layer-map.ts`

## Goal

Understand how concrete implementations get attached to abstract requirements.

## Mental model

Services describe what is needed.
Layers provide how it is implemented.

That means:

- service definitions are architectural interfaces
- layers are dependency wiring plus lifecycle
- tests swap layers, not whole code paths

## Early layer patterns

### `Layer.effect`

Use when building a service implementation from an effect.

### `Layer.provide`

Use when one layer needs another and you only want to expose the outer service.

### `Layer.provideMerge`

Use when you want to expose both the provided dependency and the outer service.

### `Layer.unwrap`

Use when the actual layer depends on configuration or runtime decisions.

## Layer naming

The migration notes and examples suggest a clean naming style:

- `layer` for primary live implementation
- `layerNoDeps` for the service implementation before wiring dependencies
- `layerTest` for testing
- `layerInMemory` or `layerConfig` for explicit variants

## Running-project anchor

Architect these variants:

- `CatalogRepo.layerInMemory`
- `CatalogRepo.layerLive`
- `PricingService.layer`
- `OrderService.layerNoDeps`
- `OrderService.layerTest`

Your goal is to see that architecture is built from small replacements and
composition, not from giant app bootstrap files.

## Common mistakes

- defining layers too late in the design
- hiding too many dependencies inside one layer
- confusing service design with layer wiring
- building "live only" code with no test variants in mind

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/01_effect/02_services/20_layer-composition.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/02_services/20_layer-unwrap.ts`
3. `resources/effect-smol/ai-docs/src/01_effect/04_resources/30_layer-map.ts`

Answer for yourself:

- What is the difference between `provide` and `provideMerge`?
- Why is `layerNoDeps` useful?
- What kind of problem does `LayerMap` solve?

## Exercise

Detailed exercise pack:

- [Exercise 4 · Layers And Architecture](/exercises/04-layers-and-architecture)

Create a paper architecture for:

- `CatalogRepo`
- `PricingService`
- `OrderService`

Then specify:

1. each service's `layerNoDeps`
2. which dependencies are wired in with `Layer.provide`
3. what your `layerTest` versions would look like

## Checkpoint questions

1. What is a layer conceptually?
2. Why keep service design separate from wiring?
3. When is `provideMerge` the right choice?
4. Why are live and test layers a first-class pattern?
5. What is the value of `Layer.unwrap`?
