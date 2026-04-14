# Solution 11: SQL And Batching

Linked exercise:

- [Exercise 11 · SQL And Batching](/exercises/11-sql-and-batching)

Source tag: batching `Stable concept`, SQL `v4 beta shape`

## Reference Sketch

```ts
import { Context, Effect, Exit, Layer, Request, RequestResolver, Schema } from "effect"

class Product extends Schema.Class<Product>("Product")({
  id: Schema.String,
  sku: Schema.String
}) {}

class ProductNotFound extends Schema.TaggedErrorClass<ProductNotFound>()("ProductNotFound", {
  id: Schema.String
}) {}

class GetProductById extends Request.Class<
  { readonly id: string },
  Product,
  ProductNotFound,
  never
>() {}

export class ProductQueries extends Context.Service<ProductQueries, {
  getById(id: string): Effect.Effect<Product, ProductNotFound>
}>()("app/ProductQueries") {
  static readonly layer = Layer.effect(
    ProductQueries,
    Effect.gen(function*() {
      const table = new Map([["p1", new Product({ id: "p1", sku: "SKU-1" })]])

      const resolver = yield* RequestResolver.make<GetProductById>(
        Effect.fn(function*(entries) {
          for (const entry of entries) {
            const found = table.get(entry.request.id)
            entry.completeUnsafe(
              found
                ? Exit.succeed(found)
                : Exit.fail(new ProductNotFound({ id: entry.request.id }))
            )
          }
        })
      )

      return ProductQueries.of({
        getById: (id) => Effect.request(new GetProductById({ id }), resolver)
      })
    })
  )
}
```

## Why This Is Good

- the request type models one logical lookup
- the resolver owns batching and completion behavior
- callers depend on a service, not on batching or SQL details directly

## Caution

Batching patterns are strong and repo-backed. The SQL surface itself should
still be learned against the exact beta version in the repo.
