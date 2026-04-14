# Exercise 10: HTTP And Framework Integration

Linked module:

- [Module 10 · HTTP And Framework Integration](/modules/10-http-and-framework-integration)
- [Solution 10 · HTTP And Framework Integration](/solutions/10-http-and-framework-integration)

Source tag: `v4 beta shape`

## Goal

Design thin HTTP boundaries that keep business logic inside Effect services.

## Deliverables

Sketch:

1. one admin endpoint implemented with an Effect service
2. one external client service for a shipping or payment provider
3. one integration boundary using `ManagedRuntime` or the Effect-native HTTP stack

## Required Tasks

### Task 1: Admin endpoint

Define:

- route purpose
- request payload
- service method it calls
- error mapping boundary

### Task 2: External client service

Define:

- what capability it wraps
- what typed errors it should expose
- what provider-specific details should remain hidden

### Task 3: Boundary discipline

State clearly:

- what belongs in the handler
- what belongs in the service
- what must remain framework-agnostic

## Constraints

- treat this module as beta-shaped
- do not memorize unstable helper APIs instead of learning the architectural pattern

## Stretch Task

Explain when you would choose `ManagedRuntime` over a more Effect-native HTTP
stack in a real project.

## Review Checklist

- Is the framework boundary thin?
- Are provider details hidden behind a service?
- Did you keep business logic out of handlers?

## Ask Codex

- "Review my Module 10 HTTP design."
- "Tell me where framework concerns are leaking inward."
- "Challenge my use of `ManagedRuntime`."
