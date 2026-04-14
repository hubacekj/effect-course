import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Effect Course",
  description: "A repo-first, source-backed course for learning Effect v4",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: {
      light: "/mark-light.svg",
      dark: "/mark-dark.svg"
    },
    nav: [
      { text: "Start", link: "/start-here" },
      { text: "Syllabus", link: "/syllabus" },
      { text: "Modules", link: "/modules/01-effect-mental-model" },
      { text: "Exercises", link: "/exercises/" },
      { text: "Project Principles", link: "/meta/project-principles" }
    ],
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: "Start",
        collapsed: false,
        items: [
          { text: "Home", link: "/" },
          { text: "Start Here", link: "/start-here" },
          { text: "Syllabus", link: "/syllabus" }
        ]
      },
      {
        text: "Pass 1 Modules",
        collapsed: false,
        items: [
          { text: "Module 0 · How To Use This Course", link: "/modules/00-how-to-use-this-course" },
          { text: "Module 1 · Effect Mental Model", link: "/modules/01-effect-mental-model" },
          { text: "Module 2 · Errors As A Design Tool", link: "/modules/02-errors-as-a-design-tool" },
          { text: "Module 3 · Services And Requirements", link: "/modules/03-services-and-requirements" },
          { text: "Module 4 · Layers And Architecture", link: "/modules/04-layers-and-architecture" },
          { text: "Module 5 · Resource Safety And Scopes", link: "/modules/05-resource-safety-and-scopes" },
          { text: "Module 6 · Running Programs", link: "/modules/06-running-programs" },
          { text: "Module 7 · Concurrency, Retries, Schedules, PubSub", link: "/modules/07-concurrency-retries-schedules-pubsub" },
          { text: "Module 8 · Schema In Everyday Effect Code", link: "/modules/08-schema-in-everyday-effect-code" },
          { text: "Module 9 · Streams", link: "/modules/09-streams" },
          { text: "Module 10 · HTTP And Framework Integration", link: "/modules/10-http-and-framework-integration" },
          { text: "Module 11 · SQL And Batching", link: "/modules/11-sql-and-batching" },
          { text: "Module 12 · Testing And Observability", link: "/modules/12-testing-and-observability" }
        ]
      },
      {
        text: "Project And Meta",
        collapsed: false,
        items: [
          { text: "Exercise Packs", link: "/exercises/" },
          { text: "Running Project Principles", link: "/meta/project-principles" },
          { text: "Source Map", link: "/meta/source-map" },
          { text: "Progress", link: "/meta/progress" },
          { text: "Ready Checklist", link: "/meta/ready-checklist" },
          { text: "Session Template", link: "/meta/session-template" }
        ]
      },
      {
        text: "Exercises",
        collapsed: true,
        items: [
          { text: "Exercise 0 · Study Setup", link: "/exercises/00-study-setup" },
          { text: "Exercise 1 · Core Effect Mental Model", link: "/exercises/01-core-effect-mental-model" },
          { text: "Exercise 2 · Error Modeling", link: "/exercises/02-error-modeling" },
          { text: "Exercise 3 · Services And Requirements", link: "/exercises/03-services-and-requirements" },
          { text: "Exercise 4 · Layers And Architecture", link: "/exercises/04-layers-and-architecture" },
          { text: "Exercise 5 · Resource Safety And Scopes", link: "/exercises/05-resource-safety-and-scopes" },
          { text: "Exercise 6 · Running Programs", link: "/exercises/06-running-programs" },
          { text: "Exercise 7 · Concurrency, Retries, Schedules, PubSub", link: "/exercises/07-concurrency-retries-schedules-pubsub" },
          { text: "Exercise 8 · Schema In Everyday Effect Code", link: "/exercises/08-schema-in-everyday-effect-code" },
          { text: "Exercise 9 · Streams", link: "/exercises/09-streams" },
          { text: "Exercise 10 · HTTP And Framework Integration", link: "/exercises/10-http-and-framework-integration" },
          { text: "Exercise 11 · SQL And Batching", link: "/exercises/11-sql-and-batching" },
          { text: "Exercise 12 · Testing And Observability", link: "/exercises/12-testing-and-observability" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/hubacekj/effect-course" }
    ],
    editLink: {
      pattern: "https://github.com/hubacekj/effect-course/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },
    outline: {
      level: [2, 3]
    },
    footer: {
      message: "Source-backed learning for Effect v4 beta",
      copyright: "Course materials maintained in effect-course"
    }
  }
})
