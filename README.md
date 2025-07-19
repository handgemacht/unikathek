# Unikathek – The Virtual Showcase for Handmade Uniques

Unikathek is a web platform for the presentation and digital archiving of handcrafted everyday and utility objects from the Upper Palatinate region of Germany. The project originated as part of the hand.gemacht research initiative and serves as an open-access virtual collection where users can explore unique 3D objects and discover the stories behind them. Unikathek is intended as a freely accessible virtual cultural memory for the region.

## Background and Goals
The hand.gemacht project (running from 07/2022–06/2025) aims to preserve cultural heritage in digital form and make it accessible to everyone. Rather than storing physical objects in a museum, 3D scans are created and enriched with background information. Through qualitative interviews with the owners or creators, the object histories are documented, ensuring that not only the object itself, but also its creation and usage context, are preserved and communicated.

Through the Unikathek web app, these digitally preserved items and their stories can be interactively explored. Each object can be virtually inspected from all sides; accompanying texts provide cultural and historical context and highlight the connections to the people who created or used them. Additional photos, audio recordings, and detailed information bring the presentation to life. The 3D models—enriched with personal stories—act as “virtual memory objects” that safeguard the region’s intangible heritage. Unikathek also highlights connections between the objects: Seven thematic contexts link the exhibits by their manufacturing and usage stories, while distinctive characteristics showcase typical features of handmade items. Two curated guided tours offer special user experiences by connecting multiple objects in a narrative arc—for example, relating to the history of the WAA Wackersdorf or the Kirchweih (Kirwa) tradition in Upper Palatinate.

In short: Unikathek creates a virtual environment where handmade uniques from the Upper Palatinate—and their stories—can be explored anytime, anywhere. This helps preserve traditional knowledge and personal memories, making them accessible to a wide audience now and in the future.

## This repository
Unikathek consists of several main modules that together provide its core functionality:

- Backend & API: A central RESTful API that manages all data for the Unikathek. This API handles object information, 3D and media files, as well as curated stories, storing everything in a PostgreSQL database and providing data to the frontend apps
- Editor: An internal web app for media and asset management. This admin frontend enables the project team to upload new 3D models, add descriptions, images, audio clips, and edit content. The editor offers a user-friendly interface to expand and curate the digital collection.
- Explorer: The 3D frontend for end users. In this application, visitors can interactively explore virtual objects. The explorer allows users to rotate, zoom, and examine 3D models, and access associated stories, contexts, and media. This is the virtual “exhibition space” for the Unikathek.
- Documentation: A documentation platform for developers and contributors.
- Website: An informative companion website.

## Tech Stack and Architecture
The Unikathek codebase is managed as a monorepo (using [Turborepo](https://turborepo.com/)). This means all modules are developed together in a single repository, allowing for tight integration and code sharing. 

- `apps/api`: The backend uses [NestJS](https://nestjs.com/)and [Prisma ORM](https://www.prisma.io/). Data is stored in [PostgreSQL](https://www.postgresql.org/).
- `apps/editor`: The editor is built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), allowing for shared UI components and libraries with the Web/Docs modules. [Tailwind CSS](https://tailwindcss.com/) ensures a consistent and user-friendly interface.
- `apps/explorer`: The explorer uses a slightly different stack, optimized for real-time 3D browser rendering: [Vite](https://vite.dev/) as build tool, [React](https://react.dev/), [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), and [drei](https://drei.docs.pmnd.rs/getting-started/introduction) for helpful 3D abstractions. [Tailwind CSS](https://tailwindcss.com/) is used for UI overlays. This combination enables smooth, interactive 3D experiences directly in the browser.
- `apps/web` + `apps/docs`: Both the information website and documentation are built with [Next.js](https://nextjs.org/), which supports server-side rendering and static site generation—resulting in fast load times and good SEO. Both use [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/) for styling.

All applications communicate through clearly defined interfaces like a centralized library for utilities and types. 

[Turborepo](https://turborepo.com/) has some additional tools already set up:

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

### Outlook and Upcoming Additions
This README is a work in progress. Future updates will include detailed installation instructions (how to run Unikathek locally), contribution guidelines for open-source collaborators, a feature roadmap, and more. Stay tuned—the documentation will evolve alongside the project.

## Useful Links
Learn more about project hand.gemacht:

- [Project Website (German)](https://www.handgemacht.bayern)
- [Unikathek (German)](https://app.handgemacht.bayern)