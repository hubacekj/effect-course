# Module 11: SQL And Batching

Source tag: batching `Stable concept`, SQL `v4 beta shape`

Primary sources:

- `resources/effect-smol/ai-docs/src/05_batching/10_request-resolver.ts`
- `resources/effect-smol/packages/effect/src/Request.ts`
- `resources/effect-smol/packages/effect/src/RequestResolver.ts`
- `resources/effect-smol/packages/effect/src/unstable/sql/**`
- `resources/effect-smol/packages/sql/sqlite-node/README.md`

## Goal

Learn how Effect handles scalable data access patterns rather than just simple
repository calls.

## Batching first

Batching is easier to teach with confidence than the full beta SQL surface.

The key repo pattern is:

- model one lookup as a request
- resolve many requests in batches
- cache or deduplicate where useful

This is valuable for:

- product lookup
- admin analytics
- enrichment calls
- cross-service joins

## SQL second

The SQL side is important, but should be taught with caution because the v4
surface is still beta-shaped.

Use the repo as primary source for:

- SQL client services
- repository patterns
- driver layering

Do not assume older package structures match v4.

## Running-project anchor

Potential use cases:

- batched product ID lookups
- admin report queries
- customer/order joins
- projection rebuilds

## Common mistakes

- going straight to ORM-style thinking
- missing the value of batched request modeling
- teaching unstable SQL APIs as if they are already fully settled

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/05_batching/10_request-resolver.ts`
2. inspect `RequestResolver` usage in the repo
3. inspect the SQL package structure in the repo

Answer for yourself:

- What problem does request batching solve?
- Why is deduplication valuable?
- Why must the SQL portion be treated as beta-shaped?

## Exercise

Design a batched lookup flow for product IDs:

1. one request type
2. one resolver
3. a service method that uses the resolver
4. one place where caching would help

Then outline how a SQL-backed implementation would likely fit under that
service boundary.

## Checkpoint questions

1. What is the point of `RequestResolver`?
2. Why is batching a first-class architectural pattern?
3. Where should SQL details live relative to services?
4. What part of this module is stable, and what part is beta-shaped?
5. Why is this more than "just call the database"?
