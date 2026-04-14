# Exercise 12: Testing And Observability

Linked module:

- [Module 12 · Testing And Observability](/modules/12-testing-and-observability)
- [Solution 12 · Testing And Observability](/solutions/12-testing-and-observability)

Source tag: testing `Stable concept`, observability `v4 beta shape`

## Goal

Tie architecture, tests, and production visibility together.

## Deliverables

Design:

1. a test for a retrying checkout flow using virtual time
2. a `layerTest` replacement for one dependency
3. one span and one structured log annotation for order placement

## Required Tasks

### Task 1: Retry test

Describe:

- which service is being tested
- what failure happens first
- why virtual time is needed
- what the expected outcome is

### Task 2: Test replacement

Pick one dependency and define:

- the live version
- the test version
- how the workflow stays unchanged

### Task 3: Observability design

Add:

- one span around a meaningful workflow boundary
- one structured log annotation that would help production debugging

## Constraints

- keep logs and spans near workflows, not buried inside domain rules
- treat unstable observability APIs as beta-shaped

## Stretch Task

State what parts of the observability model are stable even if some APIs move in
later betas.

## Review Checklist

- Is the test architecture layer-friendly?
- Are you using time control where it matters?
- Is observability attached at the right level?

## Ask Codex

- "Review my Module 12 testing and observability design."
- "Tell me where my test seams are weak."
- "Challenge whether my spans and logs are in the right place."
