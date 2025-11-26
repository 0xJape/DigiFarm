# Activity Logs Wireframe

## Page Title
**Activity Logs** - Comprehensive Animal Activity Tracking

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  Activity Logs - Bessie (A-001)                         │
│  Stats   │  [← Back to Profile]                                    │
│  Animals │                                                          │
│  Health  │  ┌─ Activity Overview (Last 30 days) ────────────────┐  │
│  Breeding│  │ Total Activities: 127                              │  │
│  Reports │  │ Most Common: Feeding (42) | Health Check (8)       │  │
│  Settings│  │ Last Activity: 2 hours ago (Feeding)               │  │
│          │  │ [View Stats] [Export Logs]                         │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  [+ Log Activity] [+ Schedule Task] [+ Quick Note]      │
│          │                                                          │
│          │  ┌─ Filters & Search ────────────────────────────────┐  │
│          │  │ Activity Type: [All ▼]                             │  │
│          │  │ Date Range: [Last 7 days ▼]                        │  │
│          │  │ User: [All ▼]  Status: [All ▼]                     │  │
│          │  │ [🔍 Search logs...]                                │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ═══ ACTIVITY TIMELINE ═══                              │
│          │                                                          │
│          │  📅 Today - November 20, 2025                           │
│          │  ├─ 2:30 PM ──────────────────────────────────────────┐ │
│          │  │  🍽️ Feeding                                        │ │
│          │  │  Type: Hay + Grain mix                             │ │
│          │  │  Amount: 15 kg | Quality: Good                     │ │
│          │  │  Fed by: John Smith                                │ │
│          │  │  Location: Barn A, Pen 12                          │ │
│          │  │  Notes: Normal appetite, no issues                 │ │
│          │  │  [Edit] [Delete] [Add Follow-up]                   │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  ├─ 9:00 AM ──────────────────────────────────────────┐ │
│          │  │  💧 Water Check                                     │ │
│          │  │  Supply: Adequate | Quality: Clean                 │ │
│          │  │  Temperature: 15°C                                 │ │
│          │  │  Checked by: Sarah Johnson                         │ │
│          │  │  [Edit] [Delete]                                   │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  📅 Yesterday - November 19, 2025                       │
│          │  ├─ 4:00 PM ──────────────────────────────────────────┐ │
│          │  │  🏥 Health Observation                             │ │
│          │  │  Status: Healthy, active                           │ │
│          │  │  Behavior: Normal grazing and rumination           │ │
│          │  │  Observed by: Dr. Emily Chen                       │ │
│          │  │  [View Full Health Record] [Edit]                  │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  ├─ 2:30 PM ──────────────────────────────────────────┐ │
│          │  │  🍽️ Feeding                                        │ │
│          │  │  Type: Hay + Supplements                           │ │
│          │  │  Amount: 14 kg                                     │ │
│          │  │  Fed by: John Smith                                │ │
│          │  │  [Edit] [Delete]                                   │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  ├─ 8:30 AM ──────────────────────────────────────────┐ │
│          │  │  🚪 Location Change                                │ │
│          │  │  From: Pasture 3 → To: Barn A, Pen 12             │ │
│          │  │  Reason: Evening routine                           │ │
│          │  │  Moved by: Mike Wilson                             │ │
│          │  │  [Edit] [Delete]                                   │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  [Load More Activities...]                              │
│          │                                                          │
│          │  ┌─ Scheduled Activities (Upcoming) ─────────────────┐  │
│          │  │ Tomorrow, 9:00 AM - Health Checkup                 │  │
│          │  │ Nov 22, 2:00 PM - Vaccination                      │  │
│          │  │ Nov 25, 10:00 AM - Weight Recording                │  │
│          │  │ [View Full Schedule] [Add Scheduled Task]          │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<ActivityLogsPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <PageHeader 
        title="Activity Logs"
        subtitle="Bessie (A-001)"
      />
      <BackButton to={`/livestock/${animalId}`} />

      <ActivityOverviewCard
        totalActivities={127}
        mostCommon={['Feeding (42)', 'Health Check (8)']}
        lastActivity={{ type: 'Feeding', time: '2 hours ago' }}
        onViewStats={viewActivityStats}
        onExport={exportLogs}
      />

      <ActionBar>
        <Button icon="+" onClick={logActivity}>Log Activity</Button>
        <Button icon="📅" onClick={scheduleTask}>Schedule Task</Button>
        <Button icon="📝" onClick={quickNote}>Quick Note</Button>
      </ActionBar>

      <FilterBar>
        <Select 
          label="Activity Type" 
          options={activityTypes}
          value={selectedType}
          onChange={setSelectedType}
        />
        <Select 
          label="Date Range" 
          options={dateRanges}
          value={selectedRange}
          onChange={setSelectedRange}
        />
        <Select 
          label="User" 
          options={users}
          value={selectedUser}
          onChange={setSelectedUser}
        />
        <Select 
          label="Status" 
          options={statuses}
          value={selectedStatus}
          onChange={setSelectedStatus}
        />
        <SearchInput 
          placeholder="Search logs..."
          onChange={handleSearch}
        />
      </FilterBar>

      <ActivityTimeline>
        {groupedActivities.map(dayGroup => (
          <TimelineDay key={dayGroup.date}>
            <DayHeader date={dayGroup.date} />
            {dayGroup.activities.map(activity => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onEdit={() => editActivity(activity.id)}
                onDelete={() => deleteActivity(activity.id)}
                onAddFollowUp={() => addFollowUp(activity.id)}
              />
            ))}
          </TimelineDay>
        ))}
      </ActivityTimeline>

      <LoadMoreButton onClick={loadMoreActivities} />

      <ScheduledActivitiesCard
        scheduled={upcomingActivities}
        onViewSchedule={viewFullSchedule}
        onAddTask={addScheduledTask}
      />
    </MainContent>
  </div>
</ActivityLogsPage>
```

---

## Key Data Fields / Inputs

### Activity Log
```typescript
interface ActivityLog {
  id: string;
  animalId: string;
  timestamp: Date;
  type: ActivityType;
  status: 'Completed' | 'Scheduled' | 'Missed' | 'Cancelled';
  
  // Performed by
  performedBy: string; // user ID or name
  location?: string;
  
  // Type-specific details
  details: FeedingDetails | HealthObservation | LocationChange | 
           WeightRecord | BehaviorNote | MedicationAdmin | 
           GroomingRecord | ExerciseLog;
  
  // Media & notes
  notes: string;
  images?: string[];
  documents?: string[];
  
  // Linking
  relatedActivityIds?: string[];
  relatedHealthRecordId?: string;
  relatedBreedingRecordId?: string;
  
  // Tracking
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

type ActivityType = 
  | 'Feeding'
  | 'Water Check'
  | 'Health Observation'
  | 'Health Treatment'
  | 'Vaccination'
  | 'Weight Recording'
  | 'Location Change'
  | 'Behavior Note'
  | 'Medication'
  | 'Grooming'
  | 'Exercise'
  | 'Breeding'
  | 'Pregnancy Check'
  | 'Calving'
  | 'General Note'
  | 'Maintenance'
  | 'Other';

interface FeedingDetails {
  feedType: string;
  amount: number;
  unit: 'kg' | 'lbs' | 'bales';
  quality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  appetite: 'Normal' | 'Increased' | 'Decreased' | 'None';
  supplements?: string[];
  cost?: number;
}

interface HealthObservation {
  overallStatus: 'Healthy' | 'Concerns' | 'Sick';
  temperature?: number;
  behavior: string;
  appetite: string;
  mobility: string;
  abnormalities?: string[];
  actionRequired?: string;
  followUpDate?: Date;
}

interface LocationChange {
  fromLocation: string;
  toLocation: string;
  reason: string;
  transportMethod?: string;
  duration?: number; // minutes
  stress?: 'None' | 'Mild' | 'Moderate' | 'High';
}

interface WeightRecord {
  weight: number;
  unit: 'kg' | 'lbs';
  method: 'Scale' | 'Tape' | 'Estimate';
  bodyConditionScore?: number; // 1-5
  weightChange?: number; // from last measurement
  weightChangePercent?: number;
}

interface BehaviorNote {
  behaviorType: 'Normal' | 'Aggressive' | 'Lethargic' | 'Anxious' | 'Other';
  description: string;
  severity?: 'Low' | 'Medium' | 'High';
  triggers?: string[];
  duration?: string;
  actionTaken?: string;
}

interface MedicationAdmin {
  medicationName: string;
  dosage: string;
  route: 'Oral' | 'Injection' | 'Topical' | 'Other';
  reason: string;
  prescribedBy?: string;
  sideEffects?: string;
  nextDose?: Date;
}

interface ScheduledActivity {
  id: string;
  animalId: string;
  activityType: ActivityType;
  scheduledDate: Date;
  scheduledTime: string;
  assignedTo?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  recurrence?: 'Once' | 'Daily' | 'Weekly' | 'Monthly' | 'Custom';
  reminder?: boolean;
  reminderBefore?: number; // minutes
  instructions?: string;
  status: 'Pending' | 'Completed' | 'Overdue' | 'Cancelled';
}
```

---

## UX Notes

1. **Quick Logging**
   - FAB (Floating Action Button) for instant log entry
   - Voice-to-text for field notes
   - Common activities have quick-add templates
   - Batch logging for routine tasks (e.g., feed entire herd)

2. **Timeline Navigation**
   - Infinite scroll with lazy loading
   - Jump to date picker
   - Filter by activity type with icon chips
   - Visual separators for day boundaries

3. **Activity Templates**
   - Save custom templates for recurring activities
   - Pre-fill forms from last similar activity
   - Bulk apply template to multiple animals
   - Template library sharing across farm

4. **Smart Suggestions**
   - Suggest next activity based on patterns
   - Remind about overdue tasks
   - Flag unusual gaps in routine activities
   - Predict feed/medication needs

5. **Photo & Document Capture**
   - In-app camera for quick photos
   - Voice memos attachment
   - Barcode scanner for medications/feed
   - OCR for paper log digitization

6. **Activity Linking**
   - Link related activities (cause & effect)
   - Auto-link health activities to health records
   - Create activity chains for procedures
   - Timeline view of linked activities

7. **Scheduled Tasks**
   - Calendar view of upcoming activities
   - Assign tasks to team members
   - Push notifications for due tasks
   - Check off completed tasks
   - Reschedule with drag-and-drop

8. **Analytics & Insights**
   - Activity frequency charts
   - Time-of-day patterns
   - User activity reports
   - Cost tracking per activity type
   - Compare activity levels across animals

9. **Export & Reporting**
   - Export filtered logs to CSV/PDF
   - Generate activity summary reports
   - Veterinary record compilation
   - Compliance documentation

10. **Offline Mode**
    - Log activities offline
    - Auto-sync when connection restored
    - Conflict resolution for concurrent edits
    - Local storage fallback

11. **Collaboration**
    - @mention team members in notes
    - Comment threads on activities
    - Activity approval workflow
    - Share specific activity logs with vets

12. **Responsive Design**
    - Desktop: Side panel for details
    - Tablet: Modal overlay for activity entry
    - Mobile: Bottom sheet for quick logs, swipe actions

13. **Accessibility**
    - Voice control for hands-free logging
    - High contrast activity type icons
    - Screen reader support for timeline
    - Keyboard shortcuts for common actions

14. **Performance**
    - Paginated API calls (50 activities per load)
    - Cache recent activities locally
    - Optimistic UI updates
    - Background sync for offline logs
