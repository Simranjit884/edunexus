## EduNexus — Modern School Management Platform

Streamlined administration for schools: manage teachers, students, classes, subjects, schedules, exams, results, announcements, and more — all in one responsive dashboard.

### What this project does

EduNexus is a full‑stack, role‑aware school management dashboard built with Next.js. It enables administrators and staff to:

- Manage teachers, students, parents, subjects, classes, and grades
- Create and update lessons, exams, assignments, results, and attendance
- Browse data with searchable, paginated tables and charts
- Upload profile images (Cloudinary) and view media via optimized `next/image`
- Authenticate and manage users via Clerk (admin/teacher/parent/student roles)
- Visualize calendars, counts, and performance using charts

### Core features

- Teacher and Subject CRUD (server actions + optimistic UI)
- Student, Class, Grade management
- Calendar (events, lessons, exams) and attendance tracking
- Announcements and messaging placeholders
- Image uploads via Cloudinary
- Form validation with Zod + React Hook Form
- Data visualization with Recharts and calendar components

---

## Architecture Overview

- Frontend/UI: Next.js App Router (React 18), Tailwind CSS for styling, reusable components under `src/components` (tables, forms, modals, charts)
- Server Actions: Mutations and data operations live in `src/lib/actions.ts` using Next.js Server Actions
- Authentication/Users: Clerk (`@clerk/nextjs`), with server‑side `clerkClient()` for user provisioning
- Database: PostgreSQL via Prisma ORM (`prisma/schema.prisma` with models for Teacher, Student, Class, Subject, etc.)
- Storage/Media: Cloudinary for image uploads (via `next-cloudinary`), delivered with `next/image`
- Configuration: `next.config.ts` configured for external images (`images.remotePatterns`)

```text
app/ (routes, layouts, pages)
└── (dashboard)/...            # role-specific dashboards and lists
src/
├── components/                # UI building blocks (forms, tables, charts)
├── lib/
│   ├── actions.ts             # server actions (CRUD)
│   ├── prisma.ts              # Prisma client
│   ├── data.ts, utils.ts      # helpers and data mappers
│   └── formValidationSchemas.ts# Zod schemas & types
├── generated/                 # Prisma generated client output
└── middleware.ts              # auth/middleware (if applicable)
prisma/
├── schema.prisma              # DB schema (PostgreSQL)
└── migrations/                # migration history
```

---

## Getting Started (Local Development)

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)
- PostgreSQL instance (local or Docker)
- Cloudinary account (for uploads)
- Clerk account (for authentication)

### 1) Clone the repository

```bash
git clone https://github.com/your-org/edunexus.git
cd edunexus
```

### 2) Install dependencies

```bash
npm install
# or
pnpm install
```

### 3) Configure environment variables

Create `.env` (or `.env.local`) in the project root:

```bash
cp .env.example .env.local # if you keep an example file
```

Fill in the values:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Cloudinary (Uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
# Optional preset if you use unsigned uploads
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="school"
```

### 4) Database: generate client and run migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5) (Optional) Seed the database

`package.json` is configured to use TypeScript seeds. Run:

```bash
npx prisma db seed
```

### 6) Start the development server

```bash
npm run dev
```

Visit `http://localhost:3000`.

---

## Deployment

Coming soon.

<!-- Add your platform-specific steps (Vercel, Docker, etc.) when ready. -->

---

## Technologies & Rationale

- **Next.js (App Router)**: Full‑stack React framework with server actions for ergonomic data mutations
- **React 18**: Modern component model and performance improvements
- **TypeScript**: Static types for safer, maintainable code
- **Tailwind CSS**: Utility‑first styling for rapid UI development
- **Prisma ORM + PostgreSQL**: Type‑safe database access with a robust relational store
- **Clerk**: Developer‑friendly authentication and user management
- **Cloudinary + next/image**: Efficient image uploads and optimized delivery
- **React Hook Form + Zod**: Lightweight forms with runtime validation
- **Recharts / React Big Calendar**: Visualization for counts, charts, and schedules
- **React Toastify**: Non‑blocking, accessible notifications

---

## Screenshots

In progress. Placeholders below — replace with real screenshots when available:

![Dashboard](docs/screenshots/dashboard.png)
![Teachers List](docs/screenshots/teachers-list.png)
![Create/Update Teacher](docs/screenshots/teacher-form.png)
![Calendar](docs/screenshots/calendar.png)

---

## Future Improvements

- Role‑based access control (fine‑grained permissions per role)
- Bulk import/export (CSV/Excel) for roster and results
- Attendance automation (QR/RFID), and richer reporting
- Email/SMS notifications for announcements, exams, and assignments
- Caching and pagination via server components and data layer
- E2E and unit tests (Playwright/Jest) with CI pipelines
- Internationalization (i18n) and improved accessibility (a11y)
- Offline support and optimistic UI for key flows
- Audit logs and activity history per entity

---

## Contributing

Issues and PRs are welcome. Please open an issue to discuss substantial changes first.

## License

MIT — use freely for learning and internal projects. For commercial use, review license terms and dependencies.
