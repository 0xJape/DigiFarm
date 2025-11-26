# 🌾 DigiFarm - Livestock Information Management System

A modern, web-based livestock management platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Windows PowerShell (or any terminal)

### Installation & Development

```powershell
# Clone or navigate to project directory
cd C:\Users\User\DigiFarm

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Other Commands

```powershell
# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📦 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Routing:** React Router v6
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint + Prettier

---

## 📄 Features

### Implemented
✅ Project scaffold with Vite + React + TypeScript  
✅ Tailwind CSS configuration  
✅ React Router setup  
✅ Zustand store skeleton  
✅ Basic pages (Home, Dashboard)  
✅ Header component  
✅ Complete wireframes for all pages

### Planned
- [ ] Livestock list with filtering and search
- [ ] Individual animal profiles
- [ ] Health & medical records tracking
- [ ] Breeding management system
- [ ] Activity logs
- [ ] Reports & analytics
- [ ] User authentication
- [ ] Real-time notifications

---

## 📐 Wireframes

Complete wireframe documentation is available in [`docs/wireframes/`](./docs/wireframes/):

1. **[Dashboard](./docs/wireframes/01-dashboard.md)** - Overview with stats, alerts, and quick actions
2. **[Livestock List](./docs/wireframes/02-livestock-list.md)** - Searchable, filterable animal listing
3. **[Livestock Profile](./docs/wireframes/03-livestock-profile.md)** - Individual animal details with tabs
4. **[Health Records](./docs/wireframes/04-health-records.md)** - Medical history and treatment tracking
5. **[Breeding Records](./docs/wireframes/05-breeding-records.md)** - Reproduction and lineage management
6. **[Activity Logs](./docs/wireframes/06-activity-logs.md)** - Daily activities and task tracking
7. **[Reports](./docs/wireframes/07-reports.md)** - Analytics and data exports

Each wireframe includes:
- ASCII layout diagrams
- React component breakdown
- TypeScript data models
- UX/accessibility notes

---

## 🎨 Design System

### Colors
- **Primary:** Green (agriculture theme)
- **Success:** `#10B981` (healthy status)
- **Warning:** `#F59E0B` (monitor status)
- **Error:** `#EF4444` (sick/critical status)
- **Info:** `#3B82F6`

### Typography
- **Font:** Inter, system-ui, sans-serif
- **Base size:** 16px

### Spacing
- Base unit: 4px (Tailwind defaults)

---

## 📁 Project Structure

```
DigiFarm/
├── docs/
│   └── wireframes/          # UI/UX wireframes
├── src/
│   ├── components/          # React components
│   │   └── Header.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   └── Dashboard.tsx
│   ├── store/               # Zustand state management
│   │   └── useStore.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.cjs      # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

---

## 🧪 Testing

```powershell
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run with coverage
npm run test -- --coverage
```

---

## 🤝 Contributing

1. Follow the component structure in `src/components/`
2. Use TypeScript for type safety
3. Follow Tailwind utility-first approach
4. Write tests for new features
5. Run `npm run lint` and `npm run format` before committing

---

## 📝 License

Private project - All rights reserved

---

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Zustand Docs](https://zustand-demo.pmnd.rs/)
