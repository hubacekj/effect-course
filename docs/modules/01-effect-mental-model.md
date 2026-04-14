# Module 1: The Core Effect Mental Model

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/01_basics/index.md`
- `resources/effect-smol/ai-docs/src/01_effect/01_basics/01_effect-gen.ts`
- `resources/effect-smol/ai-docs/src/01_effect/01_basics/02_effect-fn.ts`
- `resources/effect-smol/ai-docs/src/01_effect/01_basics/10_creating-effects.ts`

## Goal

Understand what `Effect<A, E, R>` means and why it changes the way you design
TypeScript programs.

If this module lands properly, the rest of the course becomes much easier.

## The shortest correct intuition

An `Effect<A, E, R>` is a description of a computation that:

- may succeed with a value of type `A`
- may fail with a typed error `E`
- may require services or context `R`

The important part is "description". An Effect value is not the running
computation itself. It is a program value that can be composed, transformed,
provided with dependencies, retried, timed out, observed, and finally run at
the edge.

## Why this is not just a Promise

`Promise<A>` flattens several concerns together:

- no typed error channel
- no typed dependency channel
- execution often starts eagerly
- resource/lifetime structure is external to the type

Effect separates those concerns.

That separation is the platform:

- error handling becomes explicit
- dependency management becomes explicit
- lifetimes become explicit
- concurrency becomes structured

## Read the type from right to left

When you see:

```ts
Effect.Effect<Order, PaymentError | InventoryError, PricingService | CatalogRepo>
```

read it as:

"A computation that needs pricing and catalog services, might fail with payment
or inventory errors, and if it succeeds yields an order."

For backend architecture, this is one of the biggest mindset shifts.

## The repo's preferred authoring style

The repo is very explicit about this:

- use `Effect.gen` for effect bodies
- use `Effect.fn("name")` for named effectful functions
- attach extra behavior afterward with combinators

This is not just style preference. It improves readability, stack traces, and
trace/span naming.

## `Effect.gen`

Use `Effect.gen` when you want to write effectful logic in a linear style.

```ts
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const a = yield* Effect.succeed(1)
  const b = yield* Effect.succeed(2)
  return a + b
})
```

You should read `yield*` as:

"Run this effect here and bind its success value."

## `Effect.fn("name")`

Use `Effect.fn("name")` when defining reusable effectful functions.

This is the repo-preferred replacement for ad hoc functions that return
`Effect.gen(...)`.

```ts
import { Effect } from "effect"

export const reserveInventory = Effect.fn("reserveInventory")(function*(sku: string, qty: number) {
  if (qty <= 0) {
    return false
  }

  yield* Effect.logInfo("reserving inventory", { sku, qty })
  return true
})
```

## Creating effects from common sources

From the repo examples, these are the early constructors you actually need:

- `Effect.succeed`: wrap a pure value you already have
- `Effect.sync`: wrap synchronous side effects that should not throw
- `Effect.try`: wrap synchronous code that might throw
- `Effect.tryPromise`: wrap Promise-based APIs safely
- `Effect.fromNullishOr`: turn nullable values into a typed failure
- `Effect.callback`: wrap callback-style async APIs

Do not try to memorize everything else yet.

## The three channels in practice

### Success channel `A`

This is the useful output of the computation.

Examples:

- `Cart`
- `Order`
- `ReadonlyArray<Product>`
- `void`

### Error channel `E`

This is for expected, modeled failures.

Examples:

- `ProductNotFound`
- `PaymentDeclined`
- `InvalidCoupon`

This is not where random defects or programmer bugs belong by default.

### Requirement channel `R`

This is the set of services the computation needs.

Examples:

- `CatalogRepo`
- `PricingService`
- `PaymentGateway`

At first, `R` often feels abstract. It becomes concrete once you start using
`Context.Service` and `Layer`.

## The running project anchor

In this course, the running project is a commerce-engine core. In this module,
you should think in terms of small isolated computations:

- calculate line-item totals
- load catalog data
- validate stock availability
- build a draft order

Do not bring HTTP or SQL into the picture yet.

## Comparison to common backend code

### Promise-first style

Typical Promise code hides several design questions:

- what errors are expected?
- what dependencies does this function require?
- what resources need cleanup?

Those concerns exist anyway, but they are handled informally.

### DI-container style

Typical DI setups hide dependencies in object construction and runtime wiring.

Effect makes dependencies part of the computation type. That can feel verbose
initially, but it becomes much easier to refactor safely.

## What to internalize now

- Effects are values that describe computations.
- The three channels matter.
- `gen` is for writing effect bodies.
- `fn("name")` is for reusable effectful functions.
- Avoid transport and framework concerns in your first mental model.

## What not to internalize yet

- runtime internals
- fiber implementation details
- advanced combinator catalog
- unstable module APIs

## Source-reading assignment

Read these carefully:

1. `resources/effect-smol/ai-docs/src/01_effect/01_basics/index.md`
2. `resources/effect-smol/ai-docs/src/01_effect/01_basics/01_effect-gen.ts`
3. `resources/effect-smol/ai-docs/src/01_effect/01_basics/02_effect-fn.ts`
4. `resources/effect-smol/ai-docs/src/01_effect/01_basics/10_creating-effects.ts`

Answer for yourself:

- Why does the repo prefer `Effect.fn` over functions returning `Effect.gen`?
- Which constructors are used for which kinds of side effects?
- Where do typed errors appear even in simple examples?

## Exercise

Implement these as Effect values or `Effect.fn` functions:

1. `parseSku(input: string)`:
   - trims input
   - uppercases it
   - fails with a tagged error if empty

2. `loadProduct(id: string)`:
   - wraps a fake Promise API with `Effect.tryPromise`
   - returns a typed not-found error

3. `buildDraftOrder(productId: string, qty: number)`:
   - uses the two functions above inside `Effect.gen`
   - returns a draft order object

Keep everything in-memory.
Do not use services yet.

## Checkpoint questions

You should be able to answer these without guessing:

1. What does `Effect<A, E, R>` mean?
2. Why is an Effect not equivalent to a Promise?
3. When should you use `Effect.gen`?
4. When should you use `Effect.fn("name")`?
5. Why is the `R` channel valuable in backend architecture?

## If you are stuck

Ask Codex:

- to quiz you on this module
- to review your exercise solution
- to compare your code to Promise-based code
- to point out wrong assumptions explicitly
