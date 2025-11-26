# DigiFarm Wireframes - Index

> **Complete wireframe documentation for the DigiFarm Web-Based Livestock Information Management System**

---

## 📋 Overview

This directory contains comprehensive wireframes for all major pages and features of the DigiFarm platform. Each wireframe includes:

- **ASCII Layout** - Visual representation of the page structure
- **React Component Breakdown** - Component hierarchy and props
- **Key Data Fields** - TypeScript interfaces and data models
- **UX Notes** - Interaction patterns, accessibility, and best practices

---

## 📄 Wireframe Documents

### [01-dashboard.md](./01-dashboard.md)
**Dashboard - Livestock Management Overview**

The main landing page showing:
- Welcome banner with sync status
- Key stats cards (total animals, health metrics, breeding activity)
- Recent alerts and notifications
- Quick action buttons
- Health trend charts
- Upcoming tasks list

**Key Features:**
- Real-time updates via WebSocket
- Color-coded health indicators
- Responsive grid layout
- Accessible alert notifications

---

### [02-livestock-list.md](./02-livestock-list.md)
**Livestock List - All Animals Overview**

Comprehensive animal listing with:
- Search and multi-filter system
- Sortable data table
- Bulk actions (export, delete, status change)
- Pagination with customizable page size
- Row actions (edit, view, delete)

**Key Features:**
- Server-side filtering and pagination
- Virtual scrolling for large datasets
- Responsive card view on mobile
- Keyboard navigation support

---

### [03-livestock-profile.md](./03-livestock-profile.md)
**Livestock Profile - Individual Animal Details**

Detailed animal profile with tabbed navigation:
- **Overview Tab:** Basic info, lineage, quick stats, recent activity
- **Health Tab:** Medical history (see Health Records wireframe)
- **Breeding Tab:** Reproduction data (see Breeding Records wireframe)
- **Activity Tab:** Activity logs (see Activity Logs wireframe)
- **Documents Tab:** Attached files and images

**Key Features:**
- Photo upload with crop/resize
- Linked lineage navigation
- Inline editing
- Rich notes system with tagging
- Print/export profile

---

### [04-health-records.md](./04-health-records.md)
**Health & Medical Records - Animal Health Tracking**

Complete health management:
- Health summary dashboard
- Timeline view of all health events
- Record types: checkups, vaccinations, treatments, lab tests
- Document attachments (PDFs, images)
- Reminder system for follow-ups

**Key Features:**
- Chronological timeline grouped by month
- Template support for common procedures
- Medication tracking with dosage info
- Lab result tracking with reference ranges
- Veterinarian integration

---

### [05-breeding-records.md](./05-breeding-records.md)
**Breeding Records - Reproduction & Lineage Management**

Breeding and pregnancy tracking:
- Current pregnancy status with progress bar
- Pregnancy check history
- Breeding history with outcomes
- Calving records
- Heat cycle tracking
- Sire selection and genetics

**Key Features:**
- Visual pregnancy progress
- Calving wizard for birth recording
- Heat cycle predictions
- Conception rate analytics
- Lineage tree visualization

---

### [06-activity-logs.md](./06-activity-logs.md)
**Activity Logs - Comprehensive Animal Activity Tracking**

Daily activity and task management:
- Activity timeline (feeding, health checks, location changes)
- Activity templates for quick entry
- Scheduled tasks and reminders
- Photo and voice memo attachments
- Activity linking and chains

**Key Features:**
- Voice-to-text logging
- Offline mode with auto-sync
- Batch logging for routine tasks
- Activity analytics
- Team collaboration with @mentions

---

### [07-reports.md](./07-reports.md)
**Reports & Analytics - Data-Driven Farm Insights**

Comprehensive reporting system:
- Report builder with custom filters
- Quick report templates
- Health statistics and trends
- Breeding performance metrics
- Financial summaries
- Growth and weight tracking

**Key Features:**
- Interactive charts and graphs
- Multiple export formats (PDF, Excel, CSV)
- Scheduled report generation
- Comparative analysis
- Real-time data updates

---

## 🎨 Design System Notes

### Color Palette
- **Primary:** Green (agriculture/growth theme)
- **Success/Healthy:** Green (#10B981)
- **Warning/Monitor:** Yellow (#F59E0B)
- **Error/Sick:** Red (#EF4444)
- **Info:** Blue (#3B82F6)
- **Neutral:** Slate shades

### Typography
- **Font Family:** Inter, system-ui, sans-serif
- **Headings:** Bold, larger sizes (2xl, 3xl)
- **Body:** Regular, 16px base
- **Code/IDs:** Monospace

### Spacing
- Base unit: 4px
- Common gaps: 4, 8, 12, 16, 24, 32px
- Section padding: 24px
- Card padding: 16px

### Icons
- Use consistent icon library (e.g., Lucide, Heroicons)
- Icon sizes: 16px (small), 20px (medium), 24px (large)
- Always pair icons with text labels for accessibility

---

## 🏗️ Implementation Guide

### Tech Stack (From Scaffold)
- **Framework:** React 18 + TypeScript
- **Routing:** React Router v6
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Testing:** Vitest + Testing Library

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── MainLayout.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Table.tsx
│   │   └── Modal.tsx
│   └── features/
│       ├── dashboard/
│       ├── livestock/
│       ├── health/
│       ├── breeding/
│       ├── activity/
│       └── reports/
├── pages/
│   ├── Dashboard.tsx
│   ├── LivestockList.tsx
│   ├── LivestockProfile.tsx
│   ├── HealthRecords.tsx
│   ├── BreedingRecords.tsx
│   ├── ActivityLogs.tsx
│   └── Reports.tsx
├── store/
│   ├── useStore.ts
│   └── slices/
└── types/
    └── models.ts
```

### Responsive Breakpoints
```css
/* Tailwind defaults */
sm: 640px   /* Mobile landscape, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

---

## ♿ Accessibility Checklist

- [ ] All interactive elements keyboard-navigable
- [ ] Focus indicators visible
- [ ] ARIA labels for icon buttons
- [ ] Screen reader announcements for dynamic content
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Form inputs have associated labels
- [ ] Error messages are descriptive
- [ ] Skip-to-content links provided
- [ ] Alt text for all images
- [ ] Semantic HTML (nav, main, section, article)

---

## 🔄 Next Steps

1. **Implement Core Components**
   - Start with UI primitives (Button, Input, Card)
   - Build layout components (Header, Sidebar)
   - Create data display components (Table, Stats)

2. **Build Pages Incrementally**
   - Dashboard (simplest, uses most components)
   - Livestock List (introduces filtering/pagination)
   - Livestock Profile (complex layout with tabs)
   - Specialized pages (Health, Breeding, Activity, Reports)

3. **Add State Management**
   - Wire Zustand stores to components
   - Implement data fetching layer
   - Add optimistic UI updates

4. **Integrate APIs**
   - Design REST or GraphQL API endpoints
   - Add authentication/authorization
   - Implement real-time updates (WebSocket)

5. **Testing & Refinement**
   - Write unit tests for components
   - Add integration tests for pages
   - User testing and feedback iteration

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [React Router Docs](https://reactrouter.com/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Version:** 1.0  
**Last Updated:** November 20, 2025  
**Maintainer:** DigiFarm Development Team
