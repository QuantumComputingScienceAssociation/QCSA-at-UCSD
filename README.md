# QCSA at UCSD Website

Official website project for QCSA at UCSD.

## About QCSA at UCSD

QCSA at UCSD is a student-led quantum community focused on learning, events, and industry connection for students interested in quantum computing, quantum information, and related technologies.

This chapter originated from QCSA at UCLA, and this project continues that momentum at UCSD with a dedicated website for local members, partners, and visitors.

## Project Status

- Frontend is actively developed in this repository.
- Backend is not implemented yet.
- Backend implementation will be handled by the UCSD team.

## Current Website Areas

The app currently includes routes and sections for:

- Home and About
- Events and Gallery
- Join Us
- Resources
- Quantum classes and educational content
- QCF and QHackathon pages
- Sponsor flow pages (success and cancel)
- Newsletters

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or another compatible package manager)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Repository Structure

- `src/app`: Next.js app routes and pages
- `src/app/Components`: Reusable UI components
- `public`: Static assets (images and verification files)
- `src/types`: Shared type declarations

## Contribution Notes

- Keep UI updates consistent with existing component patterns.
- If adding backend-dependent features, gate them behind clear placeholders until backend services are ready.
- Coordinate API contracts with the UCSD backend team before integrating server-side functionality.

## License

See the LICENSE file in this repository.
