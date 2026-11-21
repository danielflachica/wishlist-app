# Christmas Wishlist

A simple, no-login Christmas wishlist for friends and family. Type your name, add the things you'd like, and share a link so people know what to get you. Built mobile-first.

## Features

- **No accounts.** Your name becomes your list's URL (`/u/your-name`).
- **Add, edit and delete** wishes, each with an optional link and note.
- **Browse everyone's lists** from the "Everyone" tab.
- **Shareable view-only link** for anyone, no sign-in needed.
- **Add to home screen** instructions for iOS (the app opens full screen).

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev) + TypeScript
- [Chakra UI v3](https://chakra-ui.com) for components and theming
- [React Router](https://reactrouter.com) for routing
- [Supabase](https://supabase.com) (Postgres) for storage

## Getting started

### 1. Install

```bash
npm install
```

### 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run the schema below.
3. Copy your Project URL and publishable (anon) key from **Settings → API**.

```sql
create table wishlist (
  id          bigint generated always as identity primary key,
  owner_slug  text    not null,
  item        text    not null,
  link        text,
  note        text,
  is_claimed  boolean not null default false,
  updated_at  timestamptz not null default now()
);

create index wishlist_owner_idx on wishlist (owner_slug);

alter table wishlist enable row level security;

create policy "anyone can read"   on wishlist for select to anon using (true);
create policy "anyone can add"    on wishlist for insert to anon with check (true);
create policy "anyone can edit"   on wishlist for update to anon using (true) with check (true);
create policy "anyone can delete" on wishlist for delete to anon using (true);
```

> Adjust column names and types if your table differs. The app reads the fields `id`, `owner_slug`, `item`, `link`, `note`, `is_claimed` and `updated_at`.

### 3. Configure environment variables

Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Restart the dev server after changing `.env`. Vite only reads it at startup.

### 4. Run

```bash
npm run dev
```

To try it on your phone, run `npm run dev -- --host` and open the Network URL on the same Wi-Fi.

## Scripts

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |

## Routes

| Path                     | Page                                                   |
| ------------------------ | ------------------------------------------------------ |
| `/`                      | Welcome: enter your name to open your list             |
| `/u/:user`               | Your list (owner view: add, edit, delete)              |
| `/u/:user/wish/new`      | Add a wish                                             |
| `/u/:user/wish/edit/:id` | Edit a wish                                            |
| `/list/:owner`           | Public, view-only list (the shareable link)            |
| `/list/:owner?me=<you>`  | Viewing someone else's list as a signed-in-by-URL user |
| `/install`               | How to add the app to an iPhone home screen            |

The same list page renders in three modes, worked out from the URL: `owner`, `viewer` and `public`.

## Theme

Colors, fonts and radii live in `src/theme.ts`. Fonts (Montserrat for headings, Mulish for body) load from Google Fonts in `index.html`. After changing tokens, regenerate the types:

```bash
npx @chakra-ui/cli typegen src/theme.ts
```

## Deployment

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

1. Set the build command to `npm run build` and the output directory to `dist`.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the host's environment settings. `.env` is not committed.
3. Add a single-page-app fallback so routes like `/u/dan` don't return 404:
   - **Netlify:** `public/_redirects` containing `/* /index.html 200`
   - **Vercel:** `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
   - **Cloudflare Pages:** works by default if there's no `404.html`

## Security note

There's no authentication. Your name in the URL is your identity, and the database policies above let anyone with the app's URL read, add, edit and delete any wish. That's fine for a small circle of friends and family, but don't store anything sensitive, and don't use this model for a public app.

If you outgrow it, the usual next steps are Supabase anonymous sign-in with row-level security tied to the user, or a secret edit key per list.
