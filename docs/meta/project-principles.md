# Running Project Principles

This file defines the architecture and design principles for the long-running
course project.

The goal is not to imitate one book mechanically. The goal is to combine a set
of constraints that keep the codebase:

- easy to extend
- easy to test
- easy to reason about
- resistant to accidental coupling
- suitable for long-term growth

## 1. Organize primarily by feature or domain

The default top-level shape should be vertical slices such as:

- `catalog`
- `pricing`
- `inventory`
- `orders`
- `checkout`
- `admin`

Why:

- it keeps related behavior together
- it reduces cross-project hunting for "the other half" of a feature
- it maps better to real product evolution than top-level technical folders

## 2. Keep domain language stable

Names should come from the business domain, not from implementation details.

Prefer:

- `OrderService`
- `PricingPolicy`
- `InventoryReservation`

Over:

- `OrderHelpers`
- `OrderUtils`
- `OrderManager`

Why:

- stable business language ages better than technical convenience names
- it reduces vague modules that become dumping grounds

## 3. Separate domain, application, and infrastructure concerns

A feature can still contain multiple subareas, but they should have different
responsibilities:

- domain: core business rules and domain models
- application: workflows and orchestration
- infrastructure: SQL, HTTP, external providers, persistence adapters

Why:

- business rules should survive technology changes
- infrastructure should remain replaceable
- tests become much easier to write

## 4. Keep frameworks and IO at the edges

HTTP handlers, SQL drivers, queues, and SDK adapters should not define the core
shape of the system.

The system should read like:

- business workflow first
- infrastructure attached later

Why:

- framework-first systems become hard to refactor
- core logic becomes hostage to transport and vendor choices

## 5. Depend inward, not sideways

Feature internals can have layers, but dependency direction should stay
disciplined:

- application depends on domain
- infrastructure depends on domain/application contracts
- domain should not depend on infrastructure

Also avoid wide sideways dependencies between unrelated features unless there is
an explicit contract.

Why:

- sideways coupling is where codebases quietly rot

## 6. Prefer narrow interfaces and explicit contracts

Services should be small, intention-revealing, and use domain language.

Avoid:

- giant repository interfaces
- vague service APIs
- "god" modules with too many reasons to change

Why:

- smaller interfaces are easier to test
- smaller interfaces create less incidental coupling

## 7. Make side effects obvious

In Effect terms:

- business logic should declare requirements explicitly
- infrastructure should be visible in the `R` channel or layer wiring
- IO should not be hidden in surprising places

Why:

- hidden side effects destroy local reasoning
- explicit effects improve refactoring safety

## 8. Model errors explicitly and locally

Do not let the project collapse into generic `Error` handling.

Prefer:

- tagged domain errors
- explicit failure boundaries
- local recovery where the policy actually belongs

Why:

- vague error models couple unrelated workflows together
- explicit errors make module boundaries honest

## 9. Prefer cohesion over reuse

Do not create shared abstractions too early just because two modules look
similar.

Prefer:

- a little duplication first
- abstraction only after the stable common shape is visible

Why:

- premature sharing creates the worst kind of coupling: false coupling

This principle is especially important for:

- helper libraries
- generic repositories
- "base service" abstractions

## 10. Optimize for local reasoning

A good module should be understandable without mentally simulating half the
codebase.

Ask:

- can I understand this feature in one pass?
- are the important dependencies obvious?
- are responsibilities crisp?

Why:

- local reasoning is one of the strongest predictors of maintainability

## 11. Keep data ownership clear

Each feature should have clear ownership over its concepts and invariants.

Examples:

- pricing owns price calculation rules
- inventory owns stock reservation rules
- checkout orchestrates but should not redefine pricing logic

Why:

- unclear ownership causes duplicated logic and semantic drift

## 12. Use anti-corruption boundaries for external systems

External providers should not leak raw concepts everywhere.

Wrap:

- payment SDKs
- shipping APIs
- admin identity providers
- database-specific details

Why:

- vendor APIs change
- raw provider shapes create deep coupling

## 13. Prefer immutable domain data and explicit transformations

Mutable shared state should be minimized.

Prefer:

- value-like domain models
- explicit transformation steps
- clearly modeled state transitions

Why:

- state mutation across modules makes workflows hard to reason about

## 14. Make testing a first-class design constraint

Do not ask "how do we test this?" after the design is done.

Ask during design:

- can I replace this dependency with a test layer?
- can I test the workflow without HTTP?
- can I control time, retries, and external interactions?

Why:

- testability is an architecture property, not a testing-tool property

## 15. Keep observability close to workflows, but not inside domain rules

Add logs, spans, and metrics around application workflows and infrastructure
edges, not inside every domain function.

Why:

- observability matters
- but observability noise can also pollute domain logic

## 16. Favor explicit module APIs

Each feature should export a small intentional surface.

Avoid exposing every internal file as part of the feature contract.

Why:

- broad exports create accidental dependency webs
- small public surfaces make refactoring safer

## 17. Let the system evolve in vertical slices

When adding capabilities, prefer end-to-end slices over horizontal
"architecture-only" work whenever possible.

Why:

- vertical slices exercise the real architecture
- they reveal coupling problems early

## 18. Document important architectural decisions

If the project chooses a strong rule, such as:

- feature-first layout
- service/layer boundary style
- where schemas live
- how errors are modeled

then document it once and keep following it.

Why:

- consistency matters more than cleverness

## 19. Avoid magic and hidden conventions

The project should prefer explicitness over framework-style magic.

Why:

- hidden conventions make learning and maintenance harder
- explicit structure fits the teaching goal of the course

## 20. Build for change, not for speculative perfection

The project should be easy to reshape as we learn more.

That means:

- clear boundaries
- low coupling
- stable module contracts
- no premature mega-abstractions

Why:

- long-running codebases survive through controlled change, not by getting the
  first design "perfect"

## Practical summary

If we compress this down to the highest-value rules for the course project:

1. Organize by feature/domain.
2. Keep core business logic independent from frameworks and vendors.
3. Use small explicit services and layers.
4. Keep module boundaries honest through typed errors and explicit requirements.
5. Prefer local reasoning, low coupling, and replaceable infrastructure.
6. Design for tests, observability, and evolution from the start.

## How this affects the course project

The long-running project should eventually be shaped something like:

- `features/catalog`
- `features/pricing`
- `features/inventory`
- `features/orders`
- `features/checkout`
- `features/admin`
- `shared/kernel` only for truly stable cross-domain building blocks
- `platform` or `infrastructure` only for edge adapters and runtime wiring

Even this should not be treated as frozen. The principle matters more than the
exact folder names.
