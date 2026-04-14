# Module 8: Schema In Everyday Effect Code

Source tag: `Stable concept` with partial `v4 beta shape`

Primary sources:

- `resources/effect-smol/packages/effect/src/Schema.ts`
- repo examples using `Schema.Class` and `Schema.TaggedErrorClass`
- `resources/effect-smol/migration/schema.md`
- official Schema docs only when they still match the repo

## Goal

Understand why Schema becomes central once your Effect code touches real
boundaries.

## Why Schema matters here

Schema is not just validation sugar.
In Effect-style applications, it often becomes the way you define:

- domain models
- input/output boundaries
- transformed representations
- error types
- test data generation in some workflows

## First-pass usage

You should start by being comfortable with:

- `Schema.Class`
- `Schema.Struct`
- `Schema.Array`
- `Schema.Union`
- `Schema.TaggedErrorClass`

Do not start with advanced transformations unless needed.

## Relationship to the rest of the course

Schema connects directly to:

- domain modeling
- HTTP request/response boundaries
- SQL models
- error modeling
- tests

This is why it appears earlier in this course than it might in a generic TS
learning path.

## Source confidence note

Schema basics are strongly supported.
Some migration-sensitive or advanced APIs should be treated as `v4 beta shape`
until confirmed directly in the repo version you are using.

## Running-project anchor

Model:

- `Money`
- `Product`
- `CartLine`
- `DraftOrder`
- `AdminUser`
- `CreateProductPayload`

Ask:

- which ones are domain classes?
- which ones are transport payloads?
- where do tagged errors belong?

## Common mistakes

- skipping Schema and relying on raw object types at boundaries
- mixing domain and transport shapes carelessly
- trying to master advanced Schema APIs before using the basics fluently

## Source-reading assignment

Read:

1. examples in the repo that use `Schema.Class`
2. examples in the repo that use `Schema.TaggedErrorClass`
3. `resources/effect-smol/migration/schema.md`

Optional source exploration:

- inspect `resources/effect-smol/packages/effect/src/Schema.ts` to see the
  public API shape, but do not try to read the whole file deeply yet

## Exercise

Define Schema-based models for:

1. `Money`
2. `Product`
3. `CreateProductPayload`
4. `ProductNotFound`

Then describe where each one would appear in:

- domain logic
- HTTP boundaries
- persistence boundaries

## Checkpoint questions

1. Why is Schema more central in Effect code than in many TS codebases?
2. What should you model first: domain classes, payloads, or transformations?
3. Why are tagged errors part of the Schema story?
4. Which Schema topics are safe to learn now, and which should wait?
5. Where should you be cautious because v4 is still beta-shaped?
