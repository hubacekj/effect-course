# Exercise 11: SQL And Batching

Linked module:

- [Module 11 · SQL And Batching](/modules/11-sql-and-batching)
- [Solution 11 · SQL And Batching](/solutions/11-sql-and-batching)

Source tag: batching `Stable concept`, SQL `v4 beta shape`

## Goal

Design a scalable data-access pattern instead of a pile of ad hoc lookups.

## Deliverables

Design a batched product-lookup flow with:

1. one request type
2. one resolver
3. one service method that uses the resolver
4. one likely SQL-backed implementation boundary

## Required Tasks

### Task 1: Request modeling

State:

- what one request represents
- what the success type is
- what the error type is

### Task 2: Resolver behavior

Describe:

- batching window
- deduplication
- caching opportunity
- failure handling

### Task 3: Service boundary

Show how the rest of the application would depend on a service rather than on
SQL or batching details directly.

## Constraints

- batching concerns should not leak everywhere
- SQL should remain behind service boundaries
- treat the SQL API surface as beta-shaped

## Stretch Task

Describe one reporting query where batching would help and one where plain SQL
query composition is likely enough.

## Review Checklist

- Did you model the lookup as a request instead of as raw SQL everywhere?
- Is the resolver behavior explicit?
- Are SQL details hidden from callers?

## Ask Codex

- "Review my Module 11 batching design."
- "Tell me where my resolver is underspecified."
- "Challenge my service boundary around SQL."
