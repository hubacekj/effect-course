# Solution 0: Study Setup And Workflow

Linked exercise:

- [Exercise 0 · Study Setup And Workflow](/exercises/00-study-setup)

Source tag: `Stable concept`

## Recommended Outcome

A good Module 0 outcome is not "I wrote a lot." It is:

- you know your weekly study rhythm
- you have written down your current assumptions
- you know how you will use Codex between modules

## Sample Session Note

```md
Current module: Module 1
Time budget: 90 minutes
Goal for this session: understand `Effect<A, E, R>` well enough to explain it
Source files to read:
- ai-docs/src/01_effect/01_basics/index.md
- ai-docs/src/01_effect/01_basics/01_effect-gen.ts
- ai-docs/src/01_effect/01_basics/02_effect-fn.ts
One thing I currently do not understand:
- how `R` differs from normal dependency injection
```

## Baseline Mental Model

A reasonable starting statement would be:

> I think Effect is a typed way to describe async and side-effecting programs,
> with explicit success, failure, and dependency channels. I expect it to be
> more structured than Promise-based code, especially for errors, dependency
> management, and long-running workflows.

## Example Effect Snippet

Even in a workflow-planning exercise, it helps to anchor the course in code:

```ts
import { Effect } from "effect"

export const studyKickoff = Effect.gen(function*() {
  yield* Effect.logInfo("Starting Effect course session")
  return {
    module: 1,
    focus: "Effect<A, E, R>"
  } as const
})
```

## Why This Is Enough

The point of Module 0 is not library mastery. It is to make the learning
workflow explicit before the technical load increases.
