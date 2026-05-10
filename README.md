# AnyHand

AnyHand is a React-based marketplace web app for connecting users with handymen and service providers. It includes a public landing site, a multi-step service request flow, job posting management, and protected user/handyman dashboards.

## Features

- Public marketing pages with sections for services, about, reviews, and FAQs
- Service request flow with step-based progress tracking
- Job posting details page with invitation actions
- Authentication pages for sign up and sign in
- Protected routes for user and handyman dashboard areas
- Centralized auth and progress state with React Context
- API integration through Axios

## Tech Stack

- React 18
- React Router DOM
- Axios
- Formik and Yup
- Material UI
- PrimeReact
- Tailwind CSS
- SweetAlert2

## Project Structure

- `src/pages` - top-level routes and page layouts
- `src/Components` - reusable UI sections and feature components
- `src/context` - auth and progress state providers
- `src/utils` - route guards and helpers
- `src/api` - Axios client setup
- `src/Assets` - images, icons, and static media

## Available Routes

- `/` - landing page
- `/services` - service request form
- `/signUp` - sign up page
- `/signIn` - sign in page
- `/jobPosting` - job posting details
- `/jobPosting/inviteHandyman` - invite handyman flow
- `/hero-dashboard` - protected handyman dashboard
- `/userProfile` - protected user profile

## Getting Started

### Prerequisites

- Node.js 16+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

The app runs at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## API Configuration

The app currently points to:

```js
https://anyhand.co/
```

This is configured in [`src/api/axios.js`](src/api/axios.js). If you move the backend or want environment-based configuration, update that file accordingly.

## Authentication

Authentication is currently handled with a JWT stored in `localStorage` under the `jwt` key. The route guards in `src/utils` redirect unauthenticated users away from protected pages.

## Notes

- This project was bootstrapped with Create React App.
- Tailwind CSS is available in the project, alongside component libraries such as MUI and PrimeReact.

