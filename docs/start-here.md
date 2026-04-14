# Start Here

If you want to begin studying immediately, use this order:

1. Read [README.md](../README.md)
2. Read [docs/modules/00-how-to-use-this-course.md](modules/00-how-to-use-this-course.md)
3. Read [docs/syllabus.md](syllabus.md)
4. Start with [docs/modules/01-effect-mental-model.md](modules/01-effect-mental-model.md)
5. Keep [docs/meta/project-principles.md](meta/project-principles.md) open as the architecture policy for the running project

## Study Mode

This course is designed for interactive use with Codex.

For each module:

1. Read the module notes.
2. Read the linked sources in `resources/effect-smol`.
3. Open the matching exercise pack in `/exercises/`.
4. Attempt the exercise.
5. Come back to Codex for a checkpoint.

## Expectations

You do not need to memorize the whole library.

You do need to build a progressively sharper mental model of:

- `Effect<A, E, R>`
- services and layers
- resource safety
- concurrency
- boundary modules such as `Schema`, `Stream`, `HTTP`, `SQL`, and testing

## Confidence Rules

Every module is marked with a source-confidence tag:

- `Stable concept`
- `v4 beta shape`
- `Uncertain / sparse source`

If a topic is not strongly sourced, it should not be treated as settled API
knowledge.
