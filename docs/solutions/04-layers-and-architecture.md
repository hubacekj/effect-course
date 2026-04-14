# Solution 4: Layers And Architecture

Linked exercise:

- [Exercise 4 · Layers And Architecture](/exercises/04-layers-and-architecture)

Source tag: `Stable concept`

## Reference Architecture Sketch

```ts
import { Context, Effect, Layer, Schema } from "effect"

class CatalogRepo extends Context.Service<CatalogRepo, {
  findBySku(sku: string): Effect.Effect<{ readonly sku: string; readonly priceCents: number }>
}>()("app/CatalogRepo") {}

class PricingService extends Context.Service<PricingService, {
  priceCart(lines: ReadonlyArray<{ readonly sku: string; readonly qty: number }>): Effect.Effect<number>
}>()("app/PricingService") {
  static readonly layerNoDeps = Layer.effect(
    PricingService,
    Effect.gen(function*() {
      const repo = yield* CatalogRepo
      return PricingService.of({
        priceCart: Effect.fn("PricingService.priceCart")(function*(lines) {
          let total = 0
          for (const line of lines) {
            const product = yield* repo.findBySku(line.sku)
            total += product.priceCents * line.qty
          }
          return total
        })
      })
    })
  )
}

const CatalogRepoInMemory = Layer.effect(
  CatalogRepo,
  Effect.succeed(CatalogRepo.of({
    findBySku: (sku) => Effect.succeed({ sku, priceCents: 4900 })
  }))
)

export const PricingServiceLive = PricingService.layerNoDeps.pipe(
  Layer.provide(CatalogRepoInMemory)
)
```

## Layer Decisions

- `CatalogRepo`
  - `layerInMemory`
  - later `layerLive`
- `PricingService`
  - `layerNoDeps`
  - `layer`
- `OrderService`
  - `layerNoDeps`
  - `layerTest`

## Why This Is Good

- service design stays separate from wiring
- test replacements become straightforward
- dependencies are explicit in the layer graph
