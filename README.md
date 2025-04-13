
<h1 align="center" style="bold">Tek Talent Africa Community Site</h1>

<p align="center">
  <img src="/uploads/" alt="Tek Talent Africa Logo" width="200" />
</p>

<p align="center">
  <strong>A vibrant tech community website</strong><br/>
  Connecting individuals, sharing knowledge and driving technological advancements.
</p>

<p align="center">
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🧰 Tech Stack</a> •
  <a href="#project-structure">📁 Project Structure</a> •
  <a href="#content-management">📝 Content Management</a> •
  <a href="#deployment">🚀 Deployment</a> •
  <a href="#getting-started">⚙️ Getting Started</a> •
  <a href="#contributing">🤝 Contributing</a>
</p>

---

## ✨ Features

- 🎨 **Responsive Design** – Fully optimized for all screen sizes
- 📱 **Mobile-First** – Prioritized experience for mobile users
- 🌙 **Dark/Light Mode** – Auto-detect and toggle themes
- 📝 **Blog System** – Supports categories, authors, and markdown
- 📅 **Events Module** – Highlight past & upcoming events
- 📊 **Project Showcase** – Display community tech projects
- 🚀 **Performance Optimized** – Fast load times & lightweight assets
- 💫 **Smooth Animations** – Enhancing user experience
- ♿ **Accessibility-Focused** – Inclusive and user-friendly
- 💡 **Project Suggestion Form** – Community-driven idea submission
- 📲 **WhatsApp Integration** – Easy group joining via direct link

---

## 🧰 Tech Stack

| Tech | Description |
|------|-------------|
| **React** | Frontend library for UI development |
| **TypeScript** | Typed JavaScript for better maintainability |
| **Tailwind CSS** | Utility-first, responsive styling |
| **Shadcn/UI** | Accessible, modern UI components |
| **React Router** | Routing with `HashRouter` support |
| **React Query** | Asynchronous data handling |
| **Gray Matter** | Markdown frontmatter parsing |
| **React Markdown** | Markdown content renderer |
| **Lucide Icons** | Clean and beautiful SVG icons |

---

## 📁 Project Structure

```bash
tektalentafrica.github.io/
├── content/                # Markdown content
│   ├── blog/               # Blog posts
│   ├── events/             # Events
│   └── projects/           # Project overviews
├── public/
│   └── uploads/            # Images and static assets
└── src/
    ├── components/         # UI components
    │   ├── ui/             # Shadcn components
    │   ├── BackToTop.tsx
    │   ├── BlogPost.tsx
    │   ├── EventCard.tsx
    │   ├── Footer.tsx
    │   ├── ImageCarousel.tsx
    │   ├── MarkdownRenderer.tsx
    │   ├── NavBar.tsx
    │   ├── ProjectCard.tsx
    │   ├── SkeletonCard.tsx
    │   ├── SuggestProjectForm.tsx
    │   └── ThemeToggle.tsx
    ├── data/
    │   └── projects.ts     # Project entries
    ├── hooks/
    │   └── use-mobile.tsx
    ├── lib/
    │   └── utils.ts
    ├── pages/
    │   ├── Home.tsx
    │   ├── Blog.tsx
    │   ├── BlogDetail.tsx
    │   ├── Events.tsx
    │   ├── EventDetail.tsx
    │   ├── Projects.tsx
    │   ├── ProjectDetail.tsx
    │   └── NotFound.tsx
    ├── utils/
    │   ├── markdownLoader.ts
    │   └── projectLoader.ts
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

---

## 📝 Content Management

All content is markdown-based or managed through static `.ts` files:

### 📚 Blog Posts

Markdown location: `content/blog/*.md`

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
slug: "post-slug"
description: "Short summary"
author: "Author Name"
image: "url-to-image"
category: "Tech/Events/Other"
---
```

### 📆 Events

Markdown location: `content/events/*.md`

```yaml
---
title: "Event Title"
date: "YYYY-MM-DD"
slug: "event-slug"
description: "Event summary"
image: "url-to-image"
location: "City, Country"
---
```

### 🔧 Projects

Managed in `src/data/projects.ts`:

```ts
{
  id: "unique-id",
  slug: "project-slug",
  title: "Project Name",
  description: "Short description",
  status: "In Progress / Completed",
  image: "url-to-image",
  featured: true,
  tags: ["React", "API"],
  date: "YYYY-MM-DD"
}
```

---

## 🚀 Deployment

The site is designed for **GitHub Pages** using `HashRouter` to handle routing.

### 🛠 Build & Deploy Steps

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages** manually or via Actions.

### ⚙️ GitHub Actions Workflow

`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- npm or Yarn

### 🖥 Installation

```bash
# Clone the repo
git clone https://github.com/TekTalentAfrica/tektalentafrica.github.io.git
cd tektalentafrica.github.io

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open your browser at: [http://localhost:8080](http://localhost:8080)

---

## 🤝 Contributing

We 💖 contributions!

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add awesome feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/awesome-feature
   ```
5. Create a Pull Request and let's grow together!

---
