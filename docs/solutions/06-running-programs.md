# Solution 6: Running Programs

Linked exercise:

- [Exercise 6 · Running Programs](/exercises/06-running-programs)

Source tag: `Stable concept`

## Reference Entrypoints

```ts
import { NodeRuntime } from "@effect/platform-node"
import { Effect, Layer } from "effect"

const WorkerLayer = Layer.effectDiscard(
  Effect.logInfo("worker-started")
)

export const workerMain = Layer.launch(WorkerLayer)

NodeRuntime.runMain(workerMain)
```

```ts
import { NodeRuntime } from "@effect/platform-node"
import { Effect } from "effect"

export const serverMain = Effect.logInfo("server-started")

NodeRuntime.runMain(serverMain)
```

## Why This Is Good

- entrypoints stay thin
- actual application behavior stays in Effect programs and layers
- execution is clearly at the process boundary

## Practical Rule

If you find yourself writing business logic directly in `main.ts`, the
architecture is probably drifting.
