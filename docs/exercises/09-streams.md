# Exercise 9: Streams

Linked module:

- [Module 9 · Streams](/modules/09-streams)
- [Solution 9 · Streams](/solutions/09-streams)

Source tag: `Stable concept`

## Goal

Practice recognizing when an effectful sequence is the right abstraction.

## Deliverables

Design a stream pipeline that:

1. reads NDJSON order events
2. decodes them into typed values
3. filters for failed payments
4. re-encodes the filtered events

## Required Tasks

### Task 1: Source choice

State what the upstream source is:

- file
- socket
- callback/event source
- in-memory stream for testing

### Task 2: Pipeline stages

Name each stage in order:

- raw input
- decode
- validation
- filter
- re-encode
- output

### Task 3: Non-stream comparison

Explain when a plain `Effect` would be sufficient instead of a `Stream`.

## Constraints

- do not collect everything unless you actually need the whole output
- do not treat streams as just "async arrays"

## Stretch Task

Add one effectful enrichment step and explain why `mapEffect` is the right tool.

## Review Checklist

- Is a stream justified by the problem shape?
- Are the stages clear and incremental?
- Did you identify when not to use streams?

## Ask Codex

- "Review my Module 9 stream design."
- "Tell me whether this should really be a stream."
- "Challenge my use of `mapEffect` or collection."
