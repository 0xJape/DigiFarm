# Dashboard Wireframe

## Page Title
**Dashboard** - Livestock Management Overview

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  ┌──────────────────────────────────────────────────┐  │
│  Stats   │  │            Welcome back, [Username]              │  │
│  Animals │  │         Last sync: 2 minutes ago                 │  │
│  Health  │  └──────────────────────────────────────────────────┘  │
│  Breeding│                                                          │
│  Reports │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  Settings│  │  Total  │ │ Healthy │ │ Needs   │ │ Breeding│     │
│          │  │ Animals │ │ Animals │ │ Attention│ │ Active  │     │
│  -----   │  │  1,247  │ │  1,189  │ │    12   │ │   46    │     │
│  Logout  │  │  +3.2%  │ │  95.3%  │ │  ⚠️ -1   │ │  +8     │     │
│          │  └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
│          │                                                          │
│          │  ┌───────────────────────┐ ┌──────────────────────┐   │
│          │  │  Recent Alerts        │ │  Quick Actions       │   │
│          │  ├───────────────────────┤ ├──────────────────────┤   │
│          │  │ ⚠️  Cow #A-234 sick   │ │ [+ Add Animal]       │   │
│          │  │     2 hours ago       │ │ [📋 Record Health]   │   │
│          │  │ 🔔 Vaccine due: 8 cows│ │ [📊 View Reports]    │   │
│          │  │     Today             │ │ [🔍 Search Livestock]│   │
│          │  │ 📅 Breeding cycle end │ └──────────────────────┘   │
│          │  │     3 animals         │                             │
│          │  └───────────────────────┘                             │
│          │                                                          │
│          │  ┌──────────────────────────────────────────────────┐  │
│          │  │  Health Overview (Last 30 days)                  │  │
│          │  │  [Line Chart: Sick vs Healthy trend]             │  │
│          │  │  ─────────────────────────────────────────────   │  │
│          │  │                                             ╱╲    │  │
│          │  │                                        ╱───╱  ╲   │  │
│          │  │  ────────────────────────────────────╱───────  │  │
│          │  └──────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌──────────────────────────────────────────────────┐  │
│          │  │  Upcoming Tasks (This Week)                      │  │
│          │  ├──────────────────────────────────────────────────┤  │
│          │  │ □ Vaccinate 12 calves - Nov 21                   │  │
│          │  │ □ Health checkup: Herd B - Nov 22               │  │
│          │  │ □ Pregnancy scan: 15 cows - Nov 23              │  │
│          │  │ □ Feed inventory restock - Nov 24               │  │
│          │  └──────────────────────────────────────────────────┘  │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<DashboardPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <WelcomeBanner user={currentUser} lastSync={syncTime} />
      
      <StatsGrid>
        <StatCard title="Total Animals" value={1247} change="+3.2%" />
        <StatCard title="Healthy Animals" value={1189} percentage="95.3%" />
        <StatCard title="Needs Attention" value={12} alert={true} />
        <StatCard title="Breeding Active" value={46} change="+8" />
      </StatsGrid>

      <div className="grid grid-cols-2 gap-4">
        <RecentAlertsCard alerts={recentAlerts} />
        <QuickActionsCard actions={quickActions} />
      </div>

      <HealthOverviewChart data={last30DaysHealth} />
      
      <UpcomingTasksCard tasks={weeklyTasks} />
    </MainContent>
  </div>
</DashboardPage>
```

---

## Key Data Fields / Inputs

### Stats Cards
- `totalAnimals: number`
- `healthyCount: number`
- `needsAttentionCount: number`
- `breedingActiveCount: number`
- `percentageChange: string`

### Recent Alerts
- `alertId: string`
- `type: 'warning' | 'notification' | 'reminder'`
- `message: string`
- `timestamp: Date`
- `animalId?: string`

### Quick Actions
- `label: string`
- `icon: string`
- `action: () => void`

### Health Chart
- `date: Date`
- `healthyCount: number`
- `sickCount: number`

### Upcoming Tasks
- `taskId: string`
- `description: string`
- `dueDate: Date`
- `completed: boolean`
- `priority: 'low' | 'medium' | 'high'`

---

## UX Notes

1. **Color Coding**
   - Green for healthy/positive metrics
   - Red/Orange for alerts and attention needed
   - Blue for informational items

2. **Interaction**
   - All stat cards clickable → navigate to filtered list view
   - Alert items clickable → navigate to animal detail
   - Tasks have checkbox for quick completion

3. **Responsive**
   - Stats grid: 4 columns desktop, 2 columns tablet, 1 column mobile
   - Side-by-side sections stack vertically on mobile

4. **Accessibility**
   - All icons have text labels
   - Alerts have semantic meaning (aria-live regions)
   - High contrast mode support

5. **Real-time Updates**
   - WebSocket connection for live alert updates
   - Auto-refresh stats every 5 minutes
   - Visual indicator for data freshness

6. **Performance**
   - Lazy load chart data
   - Paginate tasks if > 10 items
   - Cache stat cards for 1 minute
