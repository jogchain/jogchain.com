# 🧠 JogChain Technology — Official Website

Welcome to the **JogChain.com** repository!
This is a **Next.js 16 (App Router)**–based web application designed for Jog Chain Technology — a modern technology company bridging web development, data science, and AI solutions.

This README explains how to **set up**, **run**, and **contribute** to the project, and documents how the folder structure is organized for scalability, clarity, and collaboration.

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed:

* **Node.js** ≥ 18.x(recommended 20+)
* **npm** ≥ 10
* **Git**

Optional:

* **Prisma CLI** (`npm install prisma --save-dev`)
* **Tailwind CSS IntelliSense** (VSCode extension)

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/jogchain.com.git
cd jogchain.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Variables

Create a `.env` file in the project root with the following (adjust as needed):

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/jogchain
NEXT_PUBLIC_BASE_URL=https://jogchain.com
EMAIL_SERVER=smtp.resend.com
EMAIL_FROM=hello@jogchain.com
```

### 5. Run Database (if applicable)

```bash
npx prisma migrate dev
```

### 6. Run the Development Server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🏗️ Project Structure Overview

The project follows a **modular, feature-first architecture** — balancing UI modularity with domain-based logic separation.
Here’s what each major directory does:

---

### 📂 **app/**

Next.js App Router folder — contains all routes, layouts, and API endpoints.

* `layout.tsx`: Root layout with `<Navbar />`, `<Footer />`, and global wrappers.
* `page.tsx`: Landing (Home) page.
* `about/`, `services/`, `contact/`, `careers/`: Individual route directories, each with their own `page.tsx`.
* `api/`: Next.js serverless API routes for contact, job, and subscription forms.

> Use this folder to define **all routes** and **API handlers** — no `pages/` directory is used since this project is built with the **App Router** system.

---

### 🧩 **components/**

Shared UI building blocks.

* **layout/**: Global layout components — `Navbar`, `Footer`, and `SEOHead`.
* **ui/**: Atomic visual components like `Button`, `Input`, `Card`, `Badge`, and `Spinner`.
* **sections/**: Reusable page sections for the landing page (`HeroSection`, `FeaturesSection`, etc.).
* **forms/**: Controlled form components (`ContactForm`, `NewsletterForm`).

> All components here should be **presentational** and **stateless** — business logic lives elsewhere.

---

### ⚙️ **features/**

Combines UI + business logic for specific domains.

* `auth/`: Authentication forms and services (e.g. login, register, hooks).
* `careers/`: Job-related logic (`JobCard`, `useJobs` hook).
* `contact/`: Contact form handling and custom hook.

> Each feature is **self-contained** — making it easier to scale without breaking unrelated modules.

---

### 🧠 **hooks/**

Custom reusable React hooks for global logic.

Examples:

* `useScrollPosition.ts`: Tracks scroll depth.
* `useTheme.ts`: Handles dark/light theme switching.
* `useWindowSize.ts`: Responsive behavior hook.
* `useIntersectionObserver.ts`: Lazy-load or animation triggers.
* `useLocalStorage.ts`: Persistent state management.

---

### 🧰 **lib/**

Core libraries and app-wide utilities.

* `prisma.ts`: Prisma ORM client instance.
* `api-client.ts`: Axios or fetch wrapper for API requests.
* `mailer.ts`: Email handler (Resend/Nodemailer).
* `analytics.ts`: Integrations for GA, Meta Pixel, etc.
* `seo.ts`: SEO metadata definitions.
* `constants.ts`: Global constant variables.

---

### 🗃️ **prisma/**

Database configuration and schema management.

* `schema.prisma`: Database model definitions.
* `migrations/`: Auto-generated migration files.

Run migrations with:

```bash
npx prisma migrate dev
```

---

### 🌍 **public/**

Static assets served directly via `/`.

* **images/**: Logos, team photos, and section backgrounds.
* **downloads/**: Files such as the company profile PDF.
* `robots.txt`: SEO configuration file.

---

### 🧱 **server/**

(Optional) For extended backend functionality beyond Next.js API routes.

* `controllers/`: Handles advanced server-side operations like sending emails or managing job listings.
* `db/`: Manual database connections if needed (e.g., non-Prisma scripts).

---

### 🧬 **services/**

Business logic and data abstraction layer.

* `contactService.ts`: Contact form submission logic.
* `jobService.ts`: Job listing data handler.
* `emailService.ts`: Email sender wrapper.
* `cmsService.ts`: Fetch content from headless CMS.
* `analyticsService.ts`: Track and report site analytics.

> Use this layer for **API communication**, **business rules**, and **data transformations**.

---

### 🎨 **styles/**

Custom CSS, variables, and overrides.

* `variables.css`: Global color/theme variables.
* `animations.css`: Reusable keyframes.
* `typography.css`: Font and text style presets.
* `Button.module.css`: Example of a component-level CSS module.

> Tailwind CSS handles most styling, but this folder supports **custom global overrides**.

---

### 🧾 **types/**

TypeScript interfaces for data and props.

* `contact.ts`, `job.ts`, `service.ts`: Domain-specific data types.
* `api.ts`: API response/request interfaces.
* `index.ts`: Type exports for convenience.

---

### 🛠️ **utils/**

Stateless helper functions.

Examples:

* `formatDate.ts`: Format timestamps.
* `slugify.ts`: Convert titles to URL-friendly slugs.
* `validateEmail.ts`: Email regex validator.
* `generateMeta.ts`: Dynamically generate SEO meta tags.
* `randomId.ts`: Generate unique IDs.

> Keep these pure — no React, no external side effects.

---

### 📄 **content/**

Static JSON or Markdown content.

* `team.json`: Team member data.
* `services.json`: List of services.
* `testimonials.json`: Customer reviews.

Useful for **mocking CMS data** during development.

---

### 🧪 **tests/**

Testing setup (Jest / Playwright).

* `components/`: Unit tests for UI.
* `hooks/`: Hook logic tests.
* `pages/`: Page-level or integration tests.

Run tests with:

```bash
npm test
```

---

### 🧩 Configuration Files

| File                 | Purpose                           |
| -------------------- | --------------------------------- |
| `.env`               | Environment variables             |
| `.gitignore`         | Ignored files for version control |
| `next.config.ts`     | Next.js app configuration         |
| `tailwind.config.ts` | Tailwind customization            |
| `tsconfig.json`      | TypeScript compiler options       |
| `eslint.config.mjs`  | Linting rules                     |
| `postcss.config.mjs` | PostCSS setup                     |
| `package.json`       | Dependencies and scripts          |

---

## 💡 Development Guidelines

* Use **TypeScript** for all new files.
* Keep **components small and reusable**.
* Avoid logic in UI components — move it to `hooks/` or `features/`.
* Commit messages should follow [Conventional Commits](https://www.conventionalcommits.org/).
* Run `npm run lint` before pushing changes.

---

## 📬 Contact

For any questions or onboarding help, contact:
**Team JogChain Technology**
📧 [hello@jogchain.com](mailto:hello@jogchain.com)
🌐 [https://jogchain.com](https://jogchain.com)