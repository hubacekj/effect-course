# Exercise 1: Core Effect Mental Model

Linked module:

- [Module 1 · The Core Effect Mental Model](/modules/01-effect-mental-model)
- [Solution 1 · Core Effect Mental Model](/solutions/01-core-effect-mental-model)

Source tag: `Stable concept`

## Goal

Move from abstract reading to concrete intuition about `Effect<A, E, R>`.

## Deliverables

Implement:

1. `parseSku(input: string)`
2. `loadProduct(id: string)`
3. `buildDraftOrder(productId: string, qty: number)`

Then write a short explanation of the `A`, `E`, and `R` channels for each.

## Constraints

- keep everything in-memory
- do not introduce services yet
- use `Effect.gen` and `Effect.fn("name")` where appropriate
- use typed errors for expected failures

## Required Tasks

### Task 1: `parseSku`

Behavior:

- trims the input
- uppercases the result
- fails with a tagged error if the final value is empty

### Task 2: `loadProduct`

Behavior:

- wraps a fake Promise-based lookup
- returns a typed not-found error if the product is missing
- does not leak raw thrown exceptions from the fake API

### Task 3: `buildDraftOrder`

Behavior:

- uses `parseSku` and `loadProduct`
- computes a simple subtotal from product price and quantity
- returns a draft order object

## Written Reflection

For each function, state:

- success type
- error type
- requirement type

If the requirement type is `never`, say why.

## Stretch Task

Rewrite one of the functions in Promise style and explain what structure you
lose compared to the Effect version.

## Review Checklist

- Are you using `Effect.gen` for workflow logic?
- Are expected failures in the error channel?
- Are you clear on why `R` is `never` here?

## Ask Codex

- "Review my Module 1 exercise."
- "Point out every mistake in my `A/E/R` analysis."
- "Compare my Effect version to a Promise version."
