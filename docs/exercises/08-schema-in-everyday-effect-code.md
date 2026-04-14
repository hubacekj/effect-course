# Exercise 8: Schema In Everyday Effect Code

Linked module:

- [Module 8 · Schema In Everyday Effect Code](/modules/08-schema-in-everyday-effect-code)
- [Solution 8 · Schema In Everyday Effect Code](/solutions/08-schema-in-everyday-effect-code)

Source tag: `Stable concept` with partial `v4 beta shape`

## Goal

Use Schema to define real boundaries and domain models instead of raw object
types.

## Deliverables

Define Schema-based models for:

1. `Money`
2. `Product`
3. `CreateProductPayload`
4. `ProductNotFound`

## Required Tasks

### Task 1: Domain models

Model:

- `Money`
- `Product`

Decide whether they should be classes or simple structural schemas.

### Task 2: Boundary model

Model:

- `CreateProductPayload`

State whether this is a transport payload, a domain object, or both.

### Task 3: Error model

Model:

- `ProductNotFound`

State why it belongs in the Schema story rather than being a plain `Error`.

## Reflection

For each model, say where it belongs:

- domain logic
- HTTP boundaries
- persistence boundaries

## Constraints

- do not collapse everything into one layer of raw JSON-shaped types
- do not overuse advanced Schema APIs in this exercise

## Stretch Task

List which parts of Schema you are confident about and which parts should still
be treated as beta-shaped until checked directly in the repo version you use.

## Review Checklist

- Are you distinguishing domain from transport shapes?
- Are tagged errors modeled explicitly?
- Did you avoid premature advanced Schema complexity?

## Ask Codex

- "Review my Module 8 Schema exercise."
- "Tell me where my domain and transport boundaries are muddy."
- "Challenge my choice of Schema classes vs simpler shapes."
