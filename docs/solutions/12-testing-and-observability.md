# Solution 12: Testing And Observability

Linked exercise:

- [Exercise 12 · Testing And Observability](/exercises/12-testing-and-observability)

Source tag: testing `Stable concept`, observability `v4 beta shape`

## Reference Snippet

```ts
import { Effect } from "effect"

export const placeOrder = Effect.gen(function*() {
  yield* Effect.logInfo("placing order", { workflow: "checkout", orderId: "ord_1" })

  yield* Effect.sleep("250 millis").pipe(
    Effect.withSpan("checkout.charge-card"),
    Effect.annotateSpans({
      "checkout.order_id": "ord_1",
      "checkout.step": "charge-card"
    })
  )

  return { orderId: "ord_1" } as const
})
```

## Test Design Answer

A good retry test would:

- replace the live payment dependency with a test layer
- fail the first one or two attempts
- advance virtual time with `TestClock`
- assert that the final result succeeds after the expected retry schedule

## Why This Is Good

- observability is attached at the workflow level
- the test seam is architectural, not ad hoc
- time control makes retry tests deterministic

## Caution

The testing model is high-confidence. Some observability integration details are
still `v4 beta shape`.
