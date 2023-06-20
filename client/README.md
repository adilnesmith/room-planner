# Room planner frontend
This project is aimed at building a tool for a shared office to manage their rooms and desks. In this solution, I have implemented the feature: the list of rooms and booking and unbooking a room. The creation/editing(UI) of rooms.

# Table of Contents
[Getting Started](#getting-started)

[Prerequisites](#prerequisites)

[Installation](#installation)

[Usage](#usage)

[Folder Structure](#folder-structure)

[License](#license)

## Getting Started
Following are the steps required to set up the project locally. Include any prerequisites, installation instructions, and how to run the development server.

# Prerequisites
**Node.js:** Ensure that you have Node.js installed on your machine. Next.js requires Node.js to run the development server and build the project. You can download and install Node.js from the official website: `https://nodejs.org`

**Package Manager:** Choose a package manager of your preference, such as npm or Yarn. Both npm and Yarn are commonly used with Next.js and will be used to install project dependencies.

**npm:** npm is bundled with Node.js, so you don't need to install it separately. However, make sure you have a recent version of npm by running npm -v in your terminal.

**Yarn:** If you prefer using Yarn, you can install it by following the instructions on the official website: `https://yarnpkg.com`

That's it! With Node.js and a package manager installed, you should have the necessary prerequisites to set up and run a Next.js project.

# Installation
1. Clone the repository or download the project files.
    ```
    https://github.com/adilnesmith/room-planner.git
    ```
2. Navigate to the project directory.
    ```
    cd room-planner/client
    ```
3. Install the dependencies using npm or yarn.
    ```
    npm install
    ```
    OR

    ```
    yarn
    ```
# Usage
1. Start the development server.
    ```
    npm run dev
    ```
2. Open your web browser and visit `http://localhost:3000` to access the application.

3. To run tests:
    ```
    npm test
    ```
# Folder Structure
The project follows a structured folder organization to ensure a modular and organized codebase. Below is an overview of the main folders and their purposes:

**components:** Contains reusable UI components used throughout the application.

**components/card:** Includes the implementation of the List component, responsible for displaying information in a List format.

**components/common:** Contains common components shared across multiple pages or sections of the application.

**components/common/header:** Implements the Header component, which represents the application heading/title.

**components/common/main-body:** Contains the MainBody component, responsible for the main content area of the application.

**components/common/ui:** Holds various UI components such as badges, buttons, labels, and search components.

**components/lib:** Includes library-specific code or configuration files.

**components/lib/@types:** Contains TypeScript type definitions.

**components/lib/constants:** Holds constant values used throughout the application.

**components/lib/general-config.ts:** Implements general configuration settings used across the project.

**components/pages:** Contains page-specific components.

This folder structure helps maintain a clear separation of concerns, promotes code reusability, and facilitates easier navigation and maintenance of the codebase.

```
├── components
│   ├── card
│   │   |   ├── Card.module.scss
│   │   |   ├── index.tsx.ts
│   ├── common
│   │   |   ├── header
│   │   │   │   ├── Header.module.scss
│   │   │   │   ├── Header.test.tsx
│   │   │   │   ├── index.test.tsx
│   │   |   ├── main-body
│   │   │   │   ├── mainBody.module.scss
│   │   │   │   ├── mainBody.test.tsx
│   │   │   │   ├── index.test.tsx
│   │   |   ├── ui
│   │   │   │   ├── badge
│   │   │   │   ├── button
│   │   │   │   ├── label
│   │   │   │   ├── search
│   │   |   ├── lib
│   │   │   │   ├── @types
│   │   │   │   ├── constants
│   │   │   │   ├── general-config.ts
│   │   |   ├── pages
...

```
# License
This project is proprietary and not open source. All rights reserved.


