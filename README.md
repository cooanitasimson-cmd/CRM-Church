# Devinarch — Church CRM

This repository contains the monorepo scaffolding for Devinarch, a Church CRM platform. It provides a starting point for the NestJS API, Next.js admin/member applications, shared packages, and infrastructure tooling.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker

### Installation
```bash
pnpm install
```

### Local Development
Start the backing services and application:
```bash
docker compose -f infra/docker-compose.yml up -d
pnpm dev
```

### Scripts
- `pnpm dev` – run all apps in development mode with Turborepo
- `pnpm build` – build all workspaces
- `pnpm lint` – lint all packages
- `pnpm format` – format files with Prettier

### Seeded Credentials
- Admin: `admin@devinarch.app` / `Admin@123`

## Structure
- `apps/api` – NestJS backend API
- `apps/admin` – Next.js admin portal
- `apps/member` – Next.js member portal
- `packages/ui` – shared UI components
- `packages/types` – shared schemas and API client types
- `packages/config` – shared configuration
- `infra` – Docker compose and infrastructure helpers
- `prisma` – Prisma schema and migrations
- `scripts` – utility scripts

## License
MIT
