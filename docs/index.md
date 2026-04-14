---
layout: home

hero:
  name: "Effect Course"
  text: "A repo-first study path for Effect v4"
  tagline: "Learn the platform through source-backed modules, explicit confidence levels, and an architecture-first long-running project."
  actions:
    - theme: brand
      text: Start Studying
      link: /start-here
    - theme: alt
      text: View Syllabus
      link: /syllabus
    - theme: alt
      text: Project Principles
      link: /meta/project-principles

features:
  - title: Repo-First
    details: The course treats `effect-smol` as the primary source for v4 beta behavior and uses public docs only where they still match the repo.
  - title: Confidence-Labeled
    details: Every area is marked as `Stable concept`, `v4 beta shape`, or `Uncertain / sparse source` so you know what is trustworthy.
  - title: Interactive
    details: Each module is built for a loop of reading, source study, exercises, and live checkpoints with Codex.
  - title: Architecture-Driven
    details: The long-running commerce-engine project follows explicit rules for feature-first structure, low coupling, testability, and replaceable infrastructure.
---

## Start Path

If you are beginning from scratch, go in this order:

1. [Start Here](/start-here)
2. [How To Use This Course](/modules/00-how-to-use-this-course)
3. [Syllabus](/syllabus)
4. [Module 1: The Core Effect Mental Model](/modules/01-effect-mental-model)

## What Is Ready

- Full Pass 1 study flow
- Module 0 through Module 12
- Source map and confidence policy
- Running-project architecture principles
- Interactive session template

## Long-Running Project

The course uses a commerce-engine core with admin capabilities as a continuity
device.

The project is governed by an explicit architecture policy:

- feature/domain-first structure
- domain/application/infrastructure separation
- explicit services and layers
- low coupling and local reasoning
- tests and observability treated as design constraints

Read [Running Project Principles](/meta/project-principles) before implementing
the project as code.
