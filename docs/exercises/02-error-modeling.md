# Exercise 2: Error Modeling

Linked module:

- [Module 2 · Errors As A Design Tool](/modules/02-errors-as-a-design-tool)
- [Solution 2 · Error Modeling](/solutions/02-error-modeling)

Source tag: `Stable concept`

## Goal

Practice designing failures as part of the system rather than as an afterthought.

## Deliverables

Produce:

1. a set of standalone tagged domain errors
2. one outer `CheckoutError` with a tagged `reason` field
3. one effect that catches one specific reason while leaving the others intact

## Required Tasks

### Task 1: Standalone domain errors

Define at least four:

- one input validation error
- one lookup error
- one business rule error
- one authorization or payment error

### Task 2: Outer boundary error

Create `CheckoutError` whose `reason` is a union of more specific reason types.

Use this to model a workflow boundary where you want one top-level error family
but still need internal distinctions.

### Task 3: Targeted recovery

Write one effect that:

- may fail with `CheckoutError`
- catches one reason specifically
- recovers only from that case
- leaves the others untouched

## Reflection

Answer in writing:

- why are tags useful here?
- which failures should stay standalone?
- which failures make sense as nested reasons?

## Stretch Task

Describe what would go wrong if you collapsed everything into plain `Error`.

## Review Checklist

- Are your errors domain-specific instead of vague?
- Are you distinguishing expected failures from defects?
- Are you recovering at the right boundary?

## Ask Codex

- "Review my Module 2 error model."
- "Tell me where my tags or boundaries are weak."
- "Challenge my decision about nested reasons."
