# Module 9: Streams

Source tag: `Stable concept`

Primary sources:

- `resources/effect-smol/ai-docs/src/02_stream/index.md`
- `resources/effect-smol/ai-docs/src/02_stream/10_creating-streams.ts`
- `resources/effect-smol/ai-docs/src/02_stream/20_consuming-streams.ts`
- `resources/effect-smol/ai-docs/src/02_stream/30_encoding.ts`

## Goal

Learn when a single effect stops being the right abstraction and a stream
becomes the better one.

## Mental model

Use `Effect` for one computation.
Use `Stream` for an effectful sequence over time.

That sequence may be:

- finite
- infinite
- pull-based
- transformed incrementally

## Early stream skills

### Creation

Learn how to create streams from:

- iterables
- effect + schedule polling
- async iterables
- callback/event sources
- node streams

### Transformation

Learn:

- `map`
- `filter`
- `flatMap`
- `mapEffect`

### Consumption

Learn:

- `runCollect`
- `runDrain`
- `runForEach`
- `runFold`

## Encoding and decoding

The repo examples make this especially practical:

- NDJSON
- Msgpack
- schema-based decoding
- decode → transform → re-encode pipelines

## Running-project anchor

Use streams for:

- ingesting order events
- exporting admin reports
- processing NDJSON audit logs
- turning callback/event sources into structured flows

## Common mistakes

- using `Stream` when a single `Effect` is enough
- collecting everything eagerly when streaming would preserve memory
- treating streams as just arrays with async methods

## Source-reading assignment

Read:

1. `resources/effect-smol/ai-docs/src/02_stream/10_creating-streams.ts`
2. `resources/effect-smol/ai-docs/src/02_stream/20_consuming-streams.ts`
3. `resources/effect-smol/ai-docs/src/02_stream/30_encoding.ts`

Answer for yourself:

- When is `mapEffect` needed?
- When should you use `runFold` instead of collecting everything?
- Why are stream encoders/decoders useful at IO boundaries?

## Exercise

Detailed exercise pack:

- [Exercise 9 · Streams](/exercises/09-streams)

Design a stream pipeline that:

1. reads NDJSON order events
2. decodes them into typed values
3. filters for failed payments
4. re-encodes the filtered events

Also state when a plain `Effect` would be sufficient instead.

## Checkpoint questions

1. What makes a `Stream` different from an `Effect`?
2. When is `mapEffect` the right operator?
3. Why is streaming useful for backend workloads?
4. What is the point of schema-based stream decoding?
5. When should you avoid streams?
