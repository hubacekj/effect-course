# Solution 8: Schema In Everyday Effect Code

Linked exercise:

- [Exercise 8 · Schema In Everyday Effect Code](/exercises/08-schema-in-everyday-effect-code)

Source tag: `Stable concept` with partial `v4 beta shape`

## Reference Models

```ts
import { Schema } from "effect"

export class Money extends Schema.Class<Money>("Money")({
  amountCents: Schema.Number,
  currency: Schema.String
}) {}

export class Product extends Schema.Class<Product>("Product")({
  id: Schema.String,
  sku: Schema.String,
  name: Schema.String,
  price: Money
}) {}

export class CreateProductPayload extends Schema.Class<CreateProductPayload>("CreateProductPayload")({
  sku: Schema.String,
  name: Schema.String,
  amountCents: Schema.Number,
  currency: Schema.String
}) {}

export class ProductNotFound extends Schema.TaggedErrorClass<ProductNotFound>()("ProductNotFound", {
  productId: Schema.String
}) {}
```

## Why This Is Good

- domain models are explicit and typed
- transport payloads are distinct from domain objects
- domain errors fit the same modeling style

## Caution

Schema basics are strong here. More advanced or migration-sensitive APIs should
still be checked against the exact `effect-smol` version you are using.
