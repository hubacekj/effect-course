# Solution 10: HTTP And Framework Integration

Linked exercise:

- [Exercise 10 · HTTP And Framework Integration](/exercises/10-http-and-framework-integration)

Source tag: `v4 beta shape`

## Reference Sketch

```ts
import { Context, Effect, Layer, Schema } from "effect"

export class AdminUnauthorized extends Schema.TaggedErrorClass<AdminUnauthorized>()("AdminUnauthorized", {
  userId: Schema.String
}) {}

export class AdminProducts extends Context.Service<AdminProducts, {
  createProduct(input: { readonly sku: string; readonly name: string }): Effect.Effect<{ readonly id: string }, AdminUnauthorized>
}>()("app/AdminProducts") {
  static readonly layer = Layer.effect(
    AdminProducts,
    Effect.succeed(AdminProducts.of({
      createProduct: (input) => Effect.succeed({ id: `prod_${input.sku}` })
    }))
  )
}

export const handleCreateProduct = Effect.gen(function*() {
  const service = yield* AdminProducts
  return yield* service.createProduct({ sku: "ABC-1", name: "Notebook" })
})
```

## Why This Is Good

- the handler should call a service like this rather than embed business rules
- provider or transport concerns remain outside the domain logic

## Caution

The exact HTTP API helpers under `effect/unstable/http` and `httpapi` are still
beta-shaped. The architectural pattern is the main thing to learn here.
