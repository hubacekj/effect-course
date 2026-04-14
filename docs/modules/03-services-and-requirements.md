# Module 3: Services And Requirements

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/02_services/index.md`
- `resources/effect-smol/ai-docs/src/01_effect/02_services/01_service.ts`
- `resources/effect-smol/ai-docs/src/01_effect/02_services/10_reference.ts`
- `resources/effect-smol/ai-docs/src/01_effect/02_services/20_layer-composition.ts`
- `resources/effect-smol/migration/services.md`

## Goal

Make the `R` channel feel concrete.

## Mental shift

In Effect, dependencies are not hidden behind constructors, globals, or DI
magic. They are part of the program's required context.

This means:

- functions can state what they need
- requirements can be composed
- tests can replace dependencies cleanly

## `Context.Service`

This is the repo's standard way to define services in v4.

Use it for things like:

- `CatalogRepo`
- `PricingService`
- `AuthorizationService`
- `PaymentGateway`

## `Context.Reference`

Use `Context.Reference` for context values that behave more like configurable
defaults than rich service interfaces.

Good examples:

- feature flags
- current environment settings
- log level or policy values

## Access patterns

The migration guide is explicit: prefer `yield*` service access in generators
for most code. `Service.use(...)` exists, but should not become the default way
you structure everything.

Why:

- generator access keeps dependencies visible
- it is easier to read multi-step logic
- it reduces accidental hiding of requirements

## Running-project anchor

Define these services conceptually:

- `CatalogRepo`
- `InventoryRepo`
- `PricingService`
- `OrderService`
- `FeatureFlag`

For each one, ask:

- is this a service or a reference?
- what methods belong here?
- what errors should those methods expose?

## Common mistakes

- making every value a service
- hiding large amounts of logic inside one god-service
- using services before understanding their error model
- treating `R` as something to eliminate immediately instead of something to
  model correctly first

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/01_effect/02_services/01_service.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/02_services/10_reference.ts`
3. `resources/effect-smol/migration/services.md`

Answer for yourself:

- Why did v4 consolidate service APIs around `Context.Service`?
- When is a `Reference` better than a full service?
- Why does `yield*` make requirements easier to reason about?

## Exercise

Design the following as v4 services:

1. `CatalogRepo` with `findBySku`
2. `PricingService` with `priceCart`
3. `AuthorizationService` with `assertAdmin`

For each:

- define the service shape
- define at least one tagged error
- decide whether a static `layer` or `layerNoDeps` would make sense

## Checkpoint questions

1. What is the purpose of the `R` channel?
2. What does `Context.Service` replace in older Effect versions?
3. When should you use `Context.Reference`?
4. Why is explicit dependency modeling useful in backend code?
5. Why should `yield*` usually be your default service access style?
