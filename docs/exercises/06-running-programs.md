# Exercise 6: Running Programs

Linked module:

- [Module 6 · Running Programs](/modules/06-running-programs)

Source tag: `Stable concept`

## Goal

Make the process boundary explicit and keep execution at the edge.

## Deliverables

Sketch two entrypoints:

1. `checkout-worker`
2. `admin-http-server`

## Required Tasks

### Task 1: Worker entrypoint

Describe:

- what the main Effect program is
- which layers it needs
- whether `NodeRuntime.runMain` or `Layer.launch` is the better fit

### Task 2: Server entrypoint

Describe:

- what the server is exposing
- how the app is wired
- how shutdown should behave

### Task 3: Boundary discipline

State which parts of your application:

- should remain pure descriptions
- should remain framework-agnostic
- are allowed to actually execute effects

## Constraints

- do not put business logic in the entrypoint
- do not scatter effect execution across the codebase

## Stretch Task

Explain why v4 removing `Runtime<R>` should not change how you structure the
main application architecture.

## Review Checklist

- Is execution clearly at the edge?
- Is the entrypoint thin?
- Are services and layers doing the real work?

## Ask Codex

- "Review my Module 6 entrypoint design."
- "Tell me where I’m leaking execution into the wrong places."
- "Challenge my use of `runMain` vs `Layer.launch`."
