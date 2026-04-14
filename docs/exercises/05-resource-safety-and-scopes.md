# Exercise 5: Resource Safety And Scopes

Linked module:

- [Module 5 · Resource Safety And Scopes](/modules/05-resource-safety-and-scopes)
- [Solution 5 · Resource Safety And Scopes](/solutions/05-resource-safety-and-scopes)

Source tag: `Stable concept`

## Goal

Design resources and background work with explicit lifetime ownership.

## Deliverables

Design two scoped resources:

1. a `Mailer` backed by a transport that must be closed
2. a stock-sync background loop that runs until application shutdown

## Required Tasks

### Task 1: Mailer resource

Describe:

- acquisition step
- release step
- owning layer
- failure mode if acquisition fails

### Task 2: Background stock-sync loop

Describe:

- where it starts
- why it should be scoped
- how interruption should behave
- which layer should own it

### Task 3: Lifetime analysis

For both resources, answer:

- who owns the lifetime?
- when is the resource created?
- what event ends the lifetime?

## Constraints

- do not create long-lived resources in plain module scope
- treat background work as a resource, not as a loose task

## Stretch Task

Describe what would likely go wrong in a Promise-first implementation of the
same two resources.

## Review Checklist

- Is every resource’s owner explicit?
- Is cleanup guaranteed conceptually?
- Is background work tied to an actual scope?

## Ask Codex

- "Review my Module 5 resource model."
- "Tell me where my lifetimes are unclear."
- "Challenge my shutdown and interruption assumptions."
