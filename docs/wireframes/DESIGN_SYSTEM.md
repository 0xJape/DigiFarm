# DigiFarm UI/UX Design System

## 🎨 Design Overview

A modern, professional livestock management platform featuring:

- **Professional Dark Sidebar Navigation** - Fixed sidebar with collapsible functionality
- **Clean, Modern Interface** - Soft shadows, rounded corners, smooth transitions
- **Professional Color Palette** - Agriculture-focused green primary with accent colors
- **Formal Typography** - Inter for body text, Lexend for headings
- **Responsive Design** - Mobile-first approach with Tailwind CSS utilities

---

## 🎯 Design Principles

### Visual Hierarchy
- Clear separation between navigation, content, and actions
- Strategic use of whitespace for readability
- Consistent spacing (using Tailwind's spacing scale)

### Professional Aesthetics
- Gradient accents for visual interest
- Soft shadows for depth (shadow-soft, shadow-soft-lg)
- Subtle animations and hover effects
- Color-coded status indicators

### Accessibility
- High contrast ratios for text
- Keyboard navigation support
- Focus indicators on interactive elements
- Semantic HTML structure

---

## 🌈 Color Palette

### Primary (Green - Agriculture)
```
50:  #f0fdf4
100: #dcfce7
200: #bbf7d0
300: #86efac
400: #4ade80
500: #22c55e ← Main brand color
600: #16a34a
700: #15803d
800: #166534
900: #14532d
```

### Accent (Amber - Warmth)
```
400: #f59e0b
500: #d97706 ← Accent highlights
600: #b45309
```

### Neutrals (Slate)
```
50:  #f8fafc ← Background
100: #f1f5f9
200: #e2e8f0
300: #cbd5e1
600: #475569
700: #334155
800: #1e293b ← Sidebar
900: #0f172a
```

### Status Colors
- **Healthy**: Emerald (#10b981)
- **Monitor**: Amber (#f59e0b)
- **Critical**: Red (#ef4444)
- **Info**: Blue (#3b82f6)

---

## 🔤 Typography

### Font Families
```css
font-display: Lexend    /* Headings, stats, key numbers */
font-sans: Inter        /* Body text, UI elements */
```

### Scale
- **Headings**: 2xl - 7xl (32px - 72px)
- **Body**: sm - lg (14px - 18px)
- **UI Elements**: xs - sm (12px - 14px)

---

## 🧩 Component Library

### Layout Components

#### **Sidebar**
- Fixed left navigation
- Collapsible (72px ↔ 288px)
- Grouped navigation sections
- Active state highlighting
- User profile section
- Badge counts for notifications

#### **Header (App Bar)**
- Sticky top position
- Glass morphism effect (backdrop-blur)
- Search bar
- Notification bell with indicator
- User menu dropdown

### UI Components

#### **StatCard**
```tsx
<StatCard
  title="Total Animals"
  value="1,247"
  change="+3.2%"
  changeType="positive"
  icon="🐄"
  iconBg="bg-primary-100"
/>
```
Features:
- Icon with custom background
- Large value display
- Change indicator with color
- Hover animations

#### **AlertItem**
```tsx
<AlertItem
  type="critical"
  message="Cow #A-234 requires attention"
  timestamp="2 hours ago"
  animalId="A-234"
/>
```
Features:
- Color-coded by severity
- Animated status dot
- Clickable with navigation
- Icon indicators

#### **TaskItem**
```tsx
<TaskItem
  task="Vaccinate 12 calves"
  dueDate="Nov 21"
  priority="high"
  completed={false}
  onToggle={handleToggle}
/>
```
Features:
- Priority border colors
- Checkbox interaction
- Strike-through for completed
- Date display

### Form Components
- **Input**: Text, search, email with labels
- **Select**: Dropdown with custom styling
- **Textarea**: Multi-line input
- **Button**: 5 variants, 3 sizes, icon support

---

## 📐 Layout Structure

### Dashboard Layout
```
┌─────────────────────────────────────┐
│ Sidebar (72px/288px)  │  App Header │
│                       │             │
│   Navigation          │  Content    │
│   - Dashboard         │  Area       │
│   - Livestock         │             │
│   - Health            │             │
│   - Reports           │             │
│                       │             │
│   User Profile        │             │
└─────────────────────────────────────┘
```

### Content Grid Patterns
- **4-Column Stats**: Grid cols-4 for metrics
- **2-Column Split**: XL:2/1 for alerts/actions
- **Full Width Tables**: Responsive overflow-x-auto

---

## 🎭 Interactive States

### Hover Effects
```css
/* Cards */
hover:shadow-soft-lg hover:border-primary-200

/* Buttons */
hover:from-primary-700 hover:to-primary-600

/* Nav Items */
hover:bg-slate-800 hover:text-white
```

### Active States
- Sidebar: `bg-primary-600` with shadow
- Buttons: Gradient shift on hover
- Tables: Row highlight `hover:bg-slate-50`

### Focus States
```css
focus:ring-2 focus:ring-primary-500 focus:border-transparent
```

---

## 📱 Responsive Breakpoints

```
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Mobile Adaptations
- Sidebar collapses to icons only
- Stats grid: 4 cols → 2 cols → 1 col
- Tables: Horizontal scroll enabled
- Search bar: Full width on mobile

---

## 🚀 Animation & Transitions

### Durations
- **Fast**: 150ms (hover feedback)
- **Normal**: 200-300ms (state changes)
- **Slow**: 500ms (page transitions)

### Easing
```css
transition-all duration-300 ease-in-out
```

### Key Animations
- Sidebar expand/collapse
- Card hover lift
- Alert pulse indicators
- Button scale on hover

---

## 🛠 Utility Classes

### Custom Utilities (index.css)
```css
.scrollbar-thin      /* Custom scrollbar styling */
.glass               /* Frosted glass effect */
.card-modern         /* Pre-styled card */
```

### Common Patterns
```css
/* Rounded corners */
rounded-lg: 8px
rounded-xl: 12px
rounded-2xl: 16px

/* Shadows */
shadow-soft: subtle elevation
shadow-soft-lg: prominent elevation

/* Gradients */
bg-gradient-to-r from-primary-600 to-primary-500
```

---

## 📊 Data Visualization

### Health Chart
- Bar chart with gradient fills
- Responsive height
- Hover effects on bars
- Legend with status indicators
- Time-based x-axis labels

### Color Coding
- Green: Healthy metrics
- Amber: Warning states
- Red: Critical alerts
- Blue: Informational

---

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast text (WCAG AA)
- ✅ Focus visible indicators
- ✅ Screen reader friendly structure

---

## 🎯 Best Practices

### Component Composition
```tsx
// ✅ Good: Composable, reusable
<Card>
  <CardHeader title="Stats" />
  <CardBody>{content}</CardBody>
</Card>

// ❌ Avoid: Monolithic components
<StatsCardWithHeaderAndBody {...allProps} />
```

### Consistent Spacing
```tsx
// Use Tailwind's spacing scale consistently
space-y-6    // Vertical spacing between sections
space-x-4    // Horizontal spacing in flex containers
p-6          // Padding inside cards
```

### Color Usage
```tsx
// Primary: Main actions, brand elements
// Accent: Highlights, special features
// Slate: UI chrome, borders, backgrounds
// Semantic: Success, warning, error states
```

---

## 🔍 Component Examples

### Full Dashboard Card
```tsx
<div className="bg-white rounded-xl shadow-soft border border-slate-200/60">
  <div className="p-6 border-b border-slate-200">
    <h3 className="text-lg font-display font-bold text-slate-900">
      Title
    </h3>
  </div>
  <div className="p-4 space-y-3">
    {/* Content */}
  </div>
  <div className="p-4 border-t border-slate-200 bg-slate-50/50 rounded-b-xl">
    <Link className="text-primary-600 hover:text-primary-700">
      View all →
    </Link>
  </div>
</div>
```

### Gradient Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
  Action Button
</button>
```

---

## 📦 Files Structure

```
src/
├── components/
│   ├── Sidebar.tsx          ← Main navigation
│   ├── Button.tsx           ← Reusable button
│   ├── Card.tsx             ← Card containers
│   ├── Badge.tsx            ← Status badges
│   ├── FormControls.tsx     ← Form inputs
│   └── Modal.tsx            ← Dialog overlays
├── pages/
│   ├── Home.tsx             ← Landing page
│   ├── Dashboard.tsx        ← Main dashboard
│   └── Livestock.tsx        ← Data table example
├── index.css                ← Global styles + custom utilities
└── App.tsx                  ← Layout & routing
```

---

## 🎨 Design Tokens

Export these for design consistency:

```js
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: { primary, accent },
      fontFamily: { sans, display },
      boxShadow: { soft, 'soft-lg' },
    }
  }
}
```

---

## 🚦 Status & Health Indicators

### Visual Language
- 🟢 **Green Circle**: Healthy, operational
- 🟡 **Amber Circle**: Monitor, caution
- 🔴 **Red Circle**: Critical, needs attention
- ⚪ **Gray Circle**: Inactive, deceased

### Usage in UI
```tsx
<StatusBadge status="Healthy" />
// Renders: [🟢 Healthy] with emerald styling
```

---

## 💡 Future Enhancements

- [ ] Dark mode toggle
- [ ] Advanced data visualizations (charts library)
- [ ] Real-time updates with WebSocket
- [ ] Export reports to PDF
- [ ] Mobile app (React Native)
- [ ] Offline mode with PWA
- [ ] Multi-language support (i18n)

---

**Last Updated**: November 20, 2025  
**Design System Version**: 1.0.0
