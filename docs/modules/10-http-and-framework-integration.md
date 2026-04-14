# Module 10: HTTP And Framework Integration

Source tag: `v4 beta shape`

Primary sources:

- `resources/effect-smol/ai-docs/src/03_integration/10_managed-runtime.ts`
- `resources/effect-smol/ai-docs/src/50_http-client/10_basics.ts`
- `resources/effect-smol/ai-docs/src/51_http-server/10_basics.ts`
- `resources/effect-smol/packages/effect/src/unstable/http/**`
- `resources/effect-smol/packages/effect/src/unstable/httpapi/**`

## Goal

Learn how Effect code meets HTTP boundaries without losing the architectural
benefits of services and layers.

## Source-confidence note

This module is intentionally marked `v4 beta shape`.

The concepts are solid.
The exact API surface in `unstable/http` and `unstable/httpapi` may change
between beta releases, so the repo version matters more than generic web
articles.

## Two integration patterns

### Managed runtime boundary

Use `ManagedRuntime` when integrating Effect services into an external
framework, such as Hono or other HTTP frameworks.

This keeps:

- domain logic inside Effect
- framework glue thin
- lifecycle and memoization explicit

### Effect-native HTTP stack

The repo also demonstrates:

- `HttpClient`
- `HttpRouter`
- `HttpApi`

This gives a more Effect-native end-to-end model.

## What to learn first

- keep domain services framework-agnostic
- use thin adapters at the edge
- understand typed clients and schema-first APIs conceptually
- avoid memorizing every `unstable/http` helper immediately

## Running-project anchor

Use HTTP only after the domain model exists.

Examples:

- admin product endpoints
- checkout API
- payment-provider client
- inventory-service client

## Common mistakes

- putting business logic directly into handlers
- learning HTTP helpers before understanding services and layers
- assuming unstable HTTP APIs are fully settled

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/03_integration/10_managed-runtime.ts`
2. `resources/effect-smol/ai-docs/src/50_http-client/10_basics.ts`
3. `resources/effect-smol/ai-docs/src/51_http-server/10_basics.ts`

Answer for yourself:

- Why is `ManagedRuntime` useful at framework boundaries?
- Why should API definitions stay separate from server implementation?
- What do typed HTTP clients buy you?

## Exercise

Sketch:

1. one admin endpoint implemented with an Effect service
2. one external client service for a shipping or payment provider
3. where the framework boundary ends and the Effect domain begins

## Checkpoint questions

1. Why keep business logic out of handlers?
2. When should you use `ManagedRuntime`?
3. What is attractive about schema-first `HttpApi`?
4. Why must you treat this module as beta-shaped?
5. What should remain framework-agnostic?
