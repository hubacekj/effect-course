# Exercise 7: Concurrency, Retries, Schedules, PubSub

Linked module:

- [Module 7 · Concurrency, Retries, Schedules, PubSub](/modules/07-concurrency-retries-schedules-pubsub)

Source tag: `Stable concept`

## Goal

Use concurrency deliberately instead of treating it as a generic async problem.

## Deliverables

Design three flows:

1. payment retry with exponential backoff
2. stock polling every 30 seconds
3. `OrderPlaced` event fan-out to three in-process subscribers

## Required Tasks

### Task 1: Retry flow

State:

- which errors are retryable
- what schedule you would use
- what must fail fast

### Task 2: Polling flow

State:

- what is being polled
- why it should be interruptible
- what owns the polling lifetime

### Task 3: PubSub flow

Define:

- one producer
- three subscribers
- why PubSub is justified here instead of direct calls

## Constraints

- do not retry all errors blindly
- do not use PubSub where direct composition is simpler

## Stretch Task

Compare one of these flows to a plain `Promise.all` or manual retry-loop
implementation and state what structure is missing.

## Review Checklist

- Did you define retry policy from error semantics?
- Is interruption part of the design?
- Is PubSub justified by fan-out needs?

## Ask Codex

- "Review my Module 7 concurrency design."
- "Tell me where my retry policy is sloppy."
- "Challenge whether PubSub is actually justified."
