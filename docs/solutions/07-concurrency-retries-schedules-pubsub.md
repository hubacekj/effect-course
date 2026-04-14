# Solution 7: Concurrency, Retries, Schedules, PubSub

Linked exercise:

- [Exercise 7 · Concurrency, Retries, Schedules, PubSub](/exercises/07-concurrency-retries-schedules-pubsub)

Source tag: `Stable concept`

## Reference Snippet

```ts
import { Effect, PubSub, Schedule, Schema } from "effect"

class PaymentError extends Schema.TaggedErrorClass<PaymentError>()("PaymentError", {
  retryable: Schema.Boolean
}) {}

declare const chargeCard: Effect.Effect<void, PaymentError>

export const retryPayment = chargeCard.pipe(
  Effect.retry(($) =>
    $(Schedule.exponential("250 millis")).pipe(
      Schedule.while(({ input }) => input.retryable)
    )
  )
)

export const orderEvents = Effect.gen(function*() {
  const bus = yield* PubSub.unbounded<{ readonly _tag: "OrderPlaced"; readonly orderId: string }>()

  yield* Effect.forkScoped(
    PubSub.subscribe(bus).pipe(
      Effect.flatMap((queue) => Effect.logInfo("audit-subscriber-attached")),
      Effect.asVoid
    )
  )

  yield* PubSub.publish(bus, { _tag: "OrderPlaced", orderId: "ord_1" })
})
```

## Why This Is Good

- retry policy is driven by error semantics
- the schedule is reusable and explicit
- PubSub is used for actual fan-out instead of as a default messaging hammer

## Design Rule

Concurrency should express operational intent, not just parallelism for its own
sake.
