# Module 2: Errors As A Design Tool

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/01_effect/03_errors/index.md`
- `resources/effect-smol/ai-docs/src/01_effect/03_errors/01_error-handling.ts`
- `resources/effect-smol/ai-docs/src/01_effect/03_errors/10_catch-tags.ts`
- `resources/effect-smol/ai-docs/src/01_effect/03_errors/20_reason-errors.ts`
- `resources/effect-smol/migration/error-handling.md`

## Goal

Learn to treat failures as part of the program design instead of as ad hoc
exceptions.

## What changes with Effect

In normal TypeScript backend code, many failures are:

- thrown
- undocumented
- flattened into `Error`
- recovered at arbitrary boundaries

Effect encourages a different discipline:

- expected failures live in the `E` channel
- defects stay distinct
- recovery is explicit and local
- error types become part of architecture

## Core ideas

### Typed failure vs defect

Use the error channel for expected business failures.

Examples:

- product not found
- invalid coupon
- insufficient stock
- payment declined

Do not model programmer mistakes or unexpected thrown exceptions as domain
errors unless you are deliberately mapping them.

### Tagged errors

The repo strongly favors `Schema.TaggedErrorClass`.

Why:

- consistent runtime tag
- typed fields
- better pattern matching and recovery
- fits naturally with Schema-based modeling

### Recovery combinators

Early set to learn:

- `Effect.catch`
- `Effect.catchTag`
- `Effect.catchTags`
- `Effect.catchReason`
- `Effect.catchReasons`

Do not try to memorize niche recovery APIs yet.

## Reason-based errors

The repo examples show an important pattern:

- one outer domain error
- one tagged `reason` field containing a union of more specific reasons

This is useful when you want one stable top-level boundary error but still want
fine-grained recovery logic inside the program.

## Running-project anchor

Model these for the commerce-engine core:

- `ProductNotFound`
- `InvalidQuantity`
- `InsufficientInventory`
- `CouponRejected`
- `PaymentDeclined`
- `AdminUnauthorized`

Then decide which ones should stay separate and which ones should become
reasons under a broader error like `CheckoutError`.

## Common mistakes

- throwing plain `Error` from domain code
- putting every possible problem into one giant union immediately
- catching too early and erasing useful distinctions
- confusing defects with expected failures

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/01_effect/03_errors/01_error-handling.ts`
2. `resources/effect-smol/ai-docs/src/01_effect/03_errors/10_catch-tags.ts`
3. `resources/effect-smol/ai-docs/src/01_effect/03_errors/20_reason-errors.ts`
4. `resources/effect-smol/migration/error-handling.md`

Answer for yourself:

- Why are tags important?
- When should you catch one error vs many?
- What does reason-based handling buy you?

## Exercise

Define a checkout-domain error model with:

1. standalone tagged errors for input and lookup failures
2. one outer `CheckoutError` with a tagged `reason` union
3. one effect that:
   - may fail with `CheckoutError`
   - catches one reason specifically
   - leaves the others untouched

## Checkpoint questions

1. What belongs in the error channel?
2. What is a defect?
3. Why use `Schema.TaggedErrorClass`?
4. When is `catchTag` enough, and when is `catchReason` better?
5. What information do you lose if you catch too broadly?
