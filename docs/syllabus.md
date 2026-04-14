# Personalized Syllabus

## Learner Profile

- Advanced TypeScript background
- No prior Effect experience
- Minimal interest in FP theory beyond what helps understanding
- Backend-oriented, but wants to learn Effect generally as a platform
- Wants interactive tutoring while progressing through the course

## Course Strategy

The course is split into two passes:

1. Concept pass: learn the core programming model and the stable architectural
   patterns.
2. Deep-dive pass: study the details, internals-facing tradeoffs, unstable
   modules, and implementation patterns.

The running project is a small commerce-engine core with admin features. It is
used as a continuity device, not as the definition of the course.

The architecture policy for that project is documented in
`docs/meta/project-principles.md`.

## Pass 1: Concept First

### Module 0. How to use this course

- Goal: understand the study loop and source policy
- Type: orientation
- Source tag: `Stable concept`

### Module 1. The core Effect mental model

- Goal: understand `Effect<A, E, R>`
- Focus:
  - success, failure, requirements
  - why Effect is not just a Promise
  - `Effect.gen`, `yield*`, `Effect.fn`
- Running project:
  - cart pricing and inventory reservation effects
- Source tag: `Stable concept`

### Module 2. Errors as a design tool

- Goal: model domain failures explicitly
- Focus:
  - tagged errors
  - typed failure vs defect
  - recovery combinators
  - reason-based errors
- Running project:
  - pricing, inventory, payment, and auth errors
- Source tag: `Stable concept`

### Module 3. Services and requirements

- Goal: understand `R` through `Context.Service`
- Focus:
  - services
  - references
  - explicit dependencies
  - service access patterns
- Running project:
  - `CatalogRepo`, `PricingService`, `AuthorizationService`
- Source tag: `Stable concept`

### Module 4. Layers and application architecture

- Goal: assemble programs from implementations
- Focus:
  - `Layer.effect`
  - `provide`
  - `provideMerge`
  - live vs test layers
- Running project:
  - in-memory vs live wiring
- Source tag: `Stable concept`

### Module 5. Resource safety and scopes

- Goal: reason about lifetimes correctly
- Focus:
  - `Scope`
  - `Effect.acquireRelease`
  - scoped background work
  - safe teardown
- Running project:
  - mailer, stock sync, managed workers
- Source tag: `Stable concept`

### Module 6. Running programs

- Goal: understand entrypoints and runtime boundaries
- Focus:
  - `NodeRuntime.runMain`
  - `Layer.launch`
  - process lifecycle
  - v4 runtime changes
- Running project:
  - worker and server entrypoints
- Source tag: `Stable concept`

### Module 7. Concurrency, retries, schedules, pubsub

- Goal: use Effect's concurrency model productively
- Focus:
  - fibers
  - interruption
  - parallel composition
  - retries and schedules
  - pubsub
- Running project:
  - order enrichment, payment retries, domain events
- Source tag: `Stable concept`

### Module 8. Schema in everyday Effect code

- Goal: use Schema for modeling and boundaries
- Focus:
  - `Schema.Class`
  - validation and decoding
  - tagged errors
  - domain modeling
- Running project:
  - `Product`, `Money`, `Order`, `AdminUser`, payload models
- Source tag: `Stable concept` / partial `v4 beta shape`

### Module 9. Streams

- Goal: move from single computations to effectful flows
- Focus:
  - creating streams
  - transforming streams
  - consuming streams
  - encoding/decoding pipelines
- Running project:
  - order-event ingestion pipeline
- Source tag: `Stable concept`

### Module 10. HTTP and framework integration

- Goal: expose and consume typed network boundaries
- Focus:
  - `ManagedRuntime`
  - `HttpClient`
  - `HttpRouter`
  - `HttpApi`
- Running project:
  - product/admin APIs
- Source tag: `v4 beta shape`

### Module 11. SQL and batching

- Goal: scale data access patterns
- Focus:
  - request batching
  - request resolvers
  - SQL client structure
  - repository patterns
- Running project:
  - catalog lookup batching and admin reporting
- Source tag: batching `Stable concept`, SQL `v4 beta shape`

### Module 12. Testing and observability

- Goal: make the architecture real in production and tests
- Focus:
  - `@effect/vitest`
  - `TestClock`
  - shared test layers
  - logging
  - tracing
- Running project:
  - checkout flow tests and telemetry
- Source tag: testing `Stable concept`, observability `v4 beta shape`

## Pass 2: Deep Dive

### Module 13. Reading the source strategically

- Goal: learn how to navigate `effect-smol` without getting lost
- Focus:
  - public exports
  - module boundaries
  - examples vs internals

### Module 14. Runtime and Cause details

- Goal: understand what is happening below the ergonomic surface
- Focus:
  - `Cause`
  - interruption semantics
  - when defects appear

### Module 15. Layer memoization, scope sharing, managed runtimes

- Goal: understand lifecycle sharing and performance-sensitive wiring

### Module 16. Advanced Schema and transformations

- Goal: model richer boundaries and transformations

### Module 17. Advanced Stream, Channel, and Sink

- Goal: deepen dataflow intuition

### Module 18. Optional capstones

- `httpapi` deeper pass
- observability deeper pass
- cluster overview
- workflow overview

These capstones must be taught with explicit caution when source confidence is
weaker.

## What Is Ready Right Now

The repository is currently ready for the full Pass 1 study flow:

- Module 0 through Module 12 all have lesson notes
- each Pass 1 module has source pointers, key ideas, an exercise, and checkpoint questions
- the course has a source-confidence policy and non-assumption rule
- the course is designed for interactive study with Codex between modules

## Recommended Pace

- Main pace: 5 to 7 hours per week
- Typical module rhythm:
  - 1 reading session
  - 1 source-reading session
  - 1 exercise session
  - 1 interactive checkpoint with Codex

## Interaction Protocol

For each module:

1. Read the module notes.
2. Read the assigned repo sources.
3. Attempt the exercise without help.
4. Ask Codex for:
   - a checkpoint quiz
   - exercise review
   - misconceptions check
   - readiness for the next module

## Non-Assumption Rule

If a concept is not strongly supported by either:

- `effect-smol` examples or source, or
- current official public docs that still match the repo

then it must be marked explicitly as uncertain instead of being taught as fact.
