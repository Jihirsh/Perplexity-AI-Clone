# Perplexity-AI-Clone

## Overview

**Perplexity-AI-Clone** is a web application built with Next.js, designed to replicate core functionalities inspired by Perplexity AI. It leverages modern web technologies to provide a seamless user experience with features like user authentication, dynamic content rendering, and database integration.

The project uses **Supabase** for backend services, **Clerk** for authentication, and **uuidv4** for generating unique identifiers.

## Features

- **User Authentication:** Secure sign-in and sign-up functionality powered by Clerk.
- **Dynamic Frontend:** Built with Next.js for server-side rendering and static site generation.
- **Database Integration:** Uses Supabase for scalable and real-time database management.
- **Unique ID Generation:** Implements uuidv4 for generating unique identifiers for data records.
- **Font Optimization:** Utilizes Geist font with Next.js's font optimization.

## Tech Stack

- **Frontend & Framework:** Next.js  
- **Backend & Database:** Supabase  
- **Authentication:** Clerk  
- **Utilities:** uuidv4  
- **Font:** Geist (via `next/font`)  
- **Deployment:** Vercel (recommended)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- npm, yarn, pnpm, or bun
- A [Supabase](https://supabase.com/) account and project set up
- A [Clerk](https://clerk.dev/) account for authentication
- A [Vercel](https://vercel.com/) account for deployment (optional)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Jihirsh/Perplexity-AI-Clone.git
cd Perplexity-AI-Clone
```


## Install Dependencies
```npm install```

or

```yarn install```

or

```pnpm install```

or

```bun install```


## Set Up Environment Variables

- NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
- NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
- CLERK_SECRET_KEY=your-clerk-secret-key


## Deployment

The easiest way to deploy this Next.js application is through the **Vercel Platform**:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel via the Vercel dashboard.
3. Configure the environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Deploy the application.

> For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Explore Next.js features and APIs.
- [Supabase Documentation](https://supabase.com/docs) – Learn about Supabase for database and backend services.
- [Clerk Documentation](https://clerk.dev/docs) – Understand Clerk's authentication system.
- [Vercel Documentation](https://vercel.com/docs) – Guide to deploying on Vercel.
- [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Jihirsh/Perplexity-AI-Clone).

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

© 2025 Jihirsh Credits- TubeGuruji YouTube Channel