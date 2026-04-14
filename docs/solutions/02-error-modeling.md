# Solution 2: Error Modeling

Linked exercise:

- [Exercise 2 · Error Modeling](/exercises/02-error-modeling)

Source tag: `Stable concept`

## Reference Error Model

```ts
import { Effect, Schema } from "effect"

class InvalidQuantity extends Schema.TaggedErrorClass<InvalidQuantity>()("InvalidQuantity", {
  qty: Schema.Number
}) {}

class ProductNotFound extends Schema.TaggedErrorClass<ProductNotFound>()("ProductNotFound", {
  productId: Schema.String
}) {}

class InsufficientInventory extends Schema.TaggedErrorClass<InsufficientInventory>()("InsufficientInventory", {
  productId: Schema.String,
  requested: Schema.Number,
  available: Schema.Number
}) {}

class PaymentDeclined extends Schema.TaggedErrorClass<PaymentDeclined>()("PaymentDeclined", {
  reason: Schema.String
}) {}

class CheckoutError extends Schema.TaggedErrorClass<CheckoutError>()("CheckoutError", {
  reason: Schema.Union([
    InvalidQuantity,
    ProductNotFound,
    InsufficientInventory,
    PaymentDeclined
  ])
}) {}

declare const checkout: Effect.Effect<string, CheckoutError>

export const recoverInventoryCase = checkout.pipe(
  Effect.catchReason(
    "CheckoutError",
    "InsufficientInventory",
    () => Effect.succeed("backorder-created")
  )
)
```

## Why This Is Good

- standalone tagged errors keep the domain precise
- the outer `CheckoutError` creates a stable workflow boundary
- `catchReason` lets you recover from one reason without flattening everything

## Design Principle

Model errors at the level where policy decisions are made. If a failure changes
how the workflow behaves, it deserves an explicit type.
