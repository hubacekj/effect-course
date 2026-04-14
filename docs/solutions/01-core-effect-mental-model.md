# Solution 1: Core Effect Mental Model

Linked exercise:

- [Exercise 1 · Core Effect Mental Model](/exercises/01-core-effect-mental-model)

Source tag: `Stable concept`

## Reference Implementation

```ts
import { Effect, Schema } from "effect"

class EmptySkuError extends Schema.TaggedErrorClass<EmptySkuError>()("EmptySkuError", {}) {}

class ProductNotFound extends Schema.TaggedErrorClass<ProductNotFound>()("ProductNotFound", {
  id: Schema.String
}) {}

class ProductLookupError extends Schema.TaggedErrorClass<ProductLookupError>()("ProductLookupError", {
  id: Schema.String,
  cause: Schema.Defect
}) {}

type Product = {
  readonly id: string
  readonly sku: string
  readonly name: string
  readonly priceCents: number
}

type DraftOrder = {
  readonly productId: string
  readonly sku: string
  readonly qty: number
  readonly subtotalCents: number
}

const fakeProducts = new Map<string, Product>([
  ["p1", { id: "p1", sku: "TS-EFFECT-001", name: "Effect Handbook", priceCents: 4900 }]
])

export const parseSku = Effect.fn("parseSku")(function*(input: string): Effect.fn.Return<string, EmptySkuError> {
  const sku = input.trim().toUpperCase()
  if (sku.length === 0) {
    return yield* new EmptySkuError()
  }
  return sku
})

export const loadProduct = Effect.fn("loadProduct")(function*(id: string) {
  const product = yield* Effect.tryPromise({
    async try() {
      const found = fakeProducts.get(id)
      if (!found) {
        throw new Error("not-found")
      }
      return found
    },
    catch: (cause) => new ProductLookupError({ id, cause })
  }).pipe(
    Effect.catchTag("ProductLookupError", (error) =>
      String(error.cause).includes("not-found")
        ? Effect.fail(new ProductNotFound({ id }))
        : Effect.fail(error)
    )
  )

  return product
})

export const buildDraftOrder = Effect.fn("buildDraftOrder")(function*(productId: string, qty: number) {
  const product = yield* loadProduct(productId)
  const sku = yield* parseSku(product.sku)

  return {
    productId: product.id,
    sku,
    qty,
    subtotalCents: product.priceCents * qty
  } satisfies DraftOrder
})
```

## Channel Analysis

- `parseSku`
  - `A`: `string`
  - `E`: `EmptySkuError`
  - `R`: `never`
- `loadProduct`
  - `A`: `Product`
  - `E`: `ProductNotFound | ProductLookupError`
  - `R`: `never`
- `buildDraftOrder`
  - `A`: `DraftOrder`
  - `E`: `EmptySkuError | ProductNotFound | ProductLookupError`
  - `R`: `never`

## Why This Structure

- `Effect.fn("name")` is used for reusable functions.
- `Effect.tryPromise` wraps the Promise boundary.
- expected failures are modeled explicitly.
- there are no services yet, so `R` stays `never`.

## One Important Note

This is intentionally still small and in-memory. The goal of the exercise is to
learn the mental model, not to introduce service wiring too early.
