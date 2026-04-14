# Solution 5: Resource Safety And Scopes

Linked exercise:

- [Exercise 5 · Resource Safety And Scopes](/exercises/05-resource-safety-and-scopes)

Source tag: `Stable concept`

## Reference Design

```ts
import { Context, Effect, Layer } from "effect"

type MailTransport = {
  readonly send: (to: string, subject: string, body: string) => Promise<void>
  readonly close: () => void
}

export class Mailer extends Context.Service<Mailer, {
  sendWelcome(to: string): Effect.Effect<void>
}>()("app/Mailer") {
  static readonly layer = Layer.effect(
    Mailer,
    Effect.gen(function*() {
      const transport = yield* Effect.acquireRelease(
        Effect.sync((): MailTransport => ({
          send: async () => {},
          close: () => {}
        })),
        (transport) => Effect.sync(() => transport.close())
      )

      return Mailer.of({
        sendWelcome: (to) =>
          Effect.tryPromise({
            try: () => transport.send(to, "Welcome", "Hello from Effect"),
            catch: () => new Error("mail-failed")
          })
      })
    })
  )
}

export const StockSyncLayer = Layer.effectDiscard(
  Effect.gen(function*() {
    yield* Effect.forkScoped(
      Effect.forever(
        Effect.sleep("30 seconds").pipe(
          Effect.zipRight(Effect.logInfo("syncing stock"))
        )
      )
    )
  })
)
```

## Why This Is Good

- the mail transport is acquired and released inside a managed lifetime
- the stock sync loop is scoped, so it dies with the owning layer
- both resources have explicit owners

## Key Principle

If something starts and must later stop, it is a resource.
