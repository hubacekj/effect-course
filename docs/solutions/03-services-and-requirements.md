# Solution 3: Services And Requirements

Linked exercise:

- [Exercise 3 · Services And Requirements](/exercises/03-services-and-requirements)

Source tag: `Stable concept`

## Reference Design

```ts
import { Context, Effect, Layer, Schema } from "effect"

class CatalogLookupError extends Schema.TaggedErrorClass<CatalogLookupError>()("CatalogLookupError", {
  sku: Schema.String
}) {}

class AdminUnauthorized extends Schema.TaggedErrorClass<AdminUnauthorized>()("AdminUnauthorized", {
  userId: Schema.String
}) {}

export class CatalogRepo extends Context.Service<CatalogRepo, {
  findBySku(sku: string): Effect.Effect<{ readonly sku: string; readonly priceCents: number }, CatalogLookupError>
}>()("app/CatalogRepo") {}

export class PricingService extends Context.Service<PricingService, {
  priceCart(lines: ReadonlyArray<{ readonly sku: string; readonly qty: number }>): Effect.Effect<number, CatalogLookupError>
}>()("app/PricingService") {}

export class AuthorizationService extends Context.Service<AuthorizationService, {
  assertAdmin(userId: string): Effect.Effect<void, AdminUnauthorized>
}>()("app/AuthorizationService") {}

export const FeatureFlag = Context.Reference<boolean>("app/FeatureFlag", {
  defaultValue: () => false
})

export const CatalogRepoLive = Layer.effect(
  CatalogRepo,
  Effect.succeed(CatalogRepo.of({
    findBySku: (sku) => Effect.succeed({ sku, priceCents: 4900 })
  }))
)
```

## Why This Is Good

- each service has a narrow responsibility
- the reference is used for a config-like concern
- the `R` channel becomes meaningful once workflows require these services

## Example Requirement

`priceCart` should likely require `CatalogRepo`, while an admin-only workflow
could require `PricingService | AuthorizationService`.
