# apps

Date Started: 2024/7/23 11:34 AM

#  Commit

Progress Commits
I made regular commits throughout the project to demonstrate the development process. Each commit message reflects the specific tasks and features implemented.


# Technical Decisions


# Backend

* Prisma ORM: Selected Prisma as the ORM for database management due to its type safety, ease of use, and compatibility with NestJS. Prisma simplifies database interactions and migrations.

* Validation and Transformation: Used class-validator and class-transformer for request validation and data transformation, ensuring data integrity and reducing boilerplate code.

* Configuration Management: Utilized @nestjs/config for managing application configurations, enabling a clean separation of configuration from code and supporting different environments.


# Frontend

* Vite: Opted for Vite as the build tool for its fast development server and optimized build process. Vite’s hot module replacement (HMR) significantly speeds up development.

* React Hook Form: Implemented react-hook-form for form management due to its performance and simplicity. It integrates well with other libraries and provides excellent form validation capabilities.

* Tanstack React Query: Used @tanstack/react-query for data fetching and caching, ensuring efficient state management and minimizing unnecessary re-fetching of data.

* Tailwind CSS: Adopted Tailwind CSS for utility-first styling, enabling rapid UI development with a highly customizable design system.
External Libraries

* zod: A TypeScript-first schema declaration and validation library, ensuring data integrity and type safety throughout the application.

* axios: A promise-based HTTP client for making API requests, offering a simpler and more readable syntax compared to the native fetch API.





