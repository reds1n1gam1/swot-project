# SWOT Online

![alt text](/public/og-image.jpg)

A lightweight SWOT analysis tool built with Vue 3 and Vite.

The application helps users organize strengths, weaknesses, opportunities, and threats in a clear visual format. Criteria can be added, filtered, reviewed, and presented using a dedicated presentation mode.

## Live Demo

[swot-online.com](https://swot-online.com/)

## Overview

SWOT Online is a personal frontend project created to explore the development of a complete interactive Vue application.

The project focuses on:

* component-based architecture;
* reactive state management;
* reusable UI components;
* responsive layouts;
* local data persistence;
* filtering and navigation;
* modal and form interactions;
* presentation of structured user data.

The current version works as a single local SWOT analysis workspace. User data is stored in the browser and remains available after the page is refreshed.

## Features

* Add SWOT criteria
* Assign criteria to one of four categories:

  * Strengths
  * Weaknesses
  * Opportunities
  * Threats
* Add a title and description to each criterion
* View criteria as cards or as a list
* Filter criteria by category
* View the number of items in each category
* Open criteria to read their full content
* Remove individual criteria
* Clear locally saved data
* Save application state in browser storage
* Switch between analysis and presentation views
* Responsive layout for desktop and mobile devices
* First-visit guidance and informational content
* Dynamic page titles and navigation
* Custom domain and analytics integration

## Presentation Mode

Presentation mode provides a cleaner view of the completed SWOT analysis.

It removes most editing controls and displays the four SWOT categories in a format suitable for reviewing or presenting the analysis.

## Tech Stack

* Vue 3
* TypeScript
* Vite
* Pinia
* PrimeVue
* SCSS
* Local Storage / IndexedDB
* Google Tag Manager

## Project Status

The core MVP is complete and available online.

The current version supports one locally stored SWOT analysis. Account registration, cloud synchronization, multiple analysis creation, sharing, and export are not implemented yet.

## Planned Improvements

* Edit existing criteria
* Improve criterion management from the main list
* Add statistics and chart visualization
* Add PDF or image export
* Add multiple SWOT analyses
* Add multilingual support
* Add linting and formatting tools
* Improve accessibility
* Add automated tests
* Explore optional AI-assisted suggestions

## Local Development

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Purpose

This project was built as a portfolio pet project to demonstrate the development of an interactive frontend application from initial idea and UI implementation to state persistence, responsive behavior, deployment, analytics, and custom domain configuration.

## License

This project is intended for educational and portfolio purposes.
