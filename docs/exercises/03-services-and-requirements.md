# Exercise 3: Services And Requirements

Linked module:

- [Module 3 · Services And Requirements](/modules/03-services-and-requirements)

Source tag: `Stable concept`

## Goal

Make the `R` channel concrete by designing explicit service boundaries.

## Deliverables

Design:

1. `CatalogRepo`
2. `PricingService`
3. `AuthorizationService`
4. one `Context.Reference` value that belongs in the project

## Required Tasks

### Task 1: Service shapes

For each service:

- define its responsibilities
- define 1 to 3 methods
- define the error type per method

### Task 2: Decide service vs reference

Add one configuration-like dependency, such as:

- feature flag
- pricing mode
- admin policy mode

Decide whether it should be a service or a `Context.Reference`, and justify it.

### Task 3: Requirements analysis

For one workflow, such as `priceCart` or `assertAdminThenLoadCatalog`, write the
requirements it should carry in `R`.

## Constraints

- keep interfaces narrow
- use domain language
- avoid generic helper-style services

## Stretch Task

Sketch how these same concerns are usually hidden in constructor-based DI and
explain the tradeoff.

## Review Checklist

- Are the service boundaries small and explicit?
- Did you avoid over-centralized services?
- Are dependencies visible instead of hidden?

## Ask Codex

- "Review my Module 3 service boundaries."
- "Tell me where my service interfaces are too wide."
- "Check whether any of these should be a `Context.Reference` instead."
