# Livestock Profile Wireframe

## Page Title
**Livestock Profile** - Individual Animal Details

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  [← Back to List]                                       │
│  Stats   │                                                          │
│  Animals │  ┌─────────────────────────────────────────────────┐   │
│  Health  │  │  [Photo]        ID: A-001                       │   │
│  Breeding│  │   🐄           Tag: 🏷️234                      │   │
│  Reports │  │  [Upload]       Name: Bessie                    │   │
│  Settings│  │                 Species: Cattle (Holstein)      │   │
│          │  │                 Gender: Female                   │   │
│          │  │                 DOB: Jan 15, 2022 (Age: 3y)     │   │
│          │  │                 Status: 🟢 Healthy              │   │
│          │  │                 Location: Barn A, Pen 12        │   │
│          │  │                 Weight: 650 kg                   │   │
│          │  │                 [✏️ Edit] [🗑️ Delete] [📋 Print]│   │
│          │  └─────────────────────────────────────────────────┘   │
│          │                                                          │
│          │  ┌─ Tab Navigation ───────────────────────────────┐    │
│          │  │ [Overview] [Health] [Breeding] [Activity] [Docs]│   │
│          │  └────────────────────────────────────────────────┘    │
│          │                                                          │
│          │  ═══ OVERVIEW TAB ═══                                   │
│          │                                                          │
│          │  ┌─── Basic Information ──────┐ ┌─── Quick Stats ────┐ │
│          │  │ Breed: Holstein            │ │ Last Checkup:      │ │
│          │  │ Color: Black & White       │ │   Nov 10, 2025     │ │
│          │  │ Microchip: 123456789       │ │                    │ │
│          │  │ Acquisition Date: Jan 2022 │ │ Total Checkups: 12 │ │
│          │  │ Purchase Price: $1,200     │ │ Vaccinations: 8    │ │
│          │  │ Current Value: $1,500      │ │ Treatments: 3      │ │
│          │  └────────────────────────────┘ │ Last Weight: 650kg │ │
│          │                                  │   Nov 15, 2025     │ │
│          │  ┌─── Lineage ────────────────┐ └────────────────────┘ │
│          │  │ Sire: Bull #B-045          │                        │
│          │  │ Dam: Cow #A-012            │ ┌─── Recent Activity ─┐│
│          │  │ Offspring: 2 calves        │ │ Nov 20: Feeding     ││
│          │  │   - Calf #C-101 (2024)     │ │ Nov 19: Checkup     ││
│          │  │   - Calf #C-142 (2023)     │ │ Nov 18: Moved to    ││
│          │  └────────────────────────────┘ │         Pen 12      ││
│          │                                  │ Nov 17: Weight      ││
│          │  ┌─── Notes & Observations ───┐ │         recorded    ││
│          │  │ [+ Add Note]                │ └─────────────────────┘│
│          │  │                             │                        │
│          │  │ Nov 18: Moved to new pen    │                        │
│          │  │         after herd rotation │                        │
│          │  │ Nov 10: Annual checkup -    │                        │
│          │  │         all normal          │                        │
│          │  │ Oct 25: Slight limp noticed │                        │
│          │  │         - resolved Nov 1    │                        │
│          │  └────────────────────────────┘                        │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<LivestockProfilePage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <BackButton to="/livestock" />

      <ProfileHeader>
        <AnimalPhoto 
          src={animal.imageUrl} 
          alt={animal.name}
          onUpload={handlePhotoUpload}
        />
        <BasicInfo animal={animal} />
        <ActionButtons>
          <Button icon="✏️" onClick={handleEdit}>Edit</Button>
          <Button icon="🗑️" onClick={handleDelete}>Delete</Button>
          <Button icon="📋" onClick={handlePrint}>Print</Button>
        </ActionButtons>
      </ProfileHeader>

      <TabNavigation>
        <Tab id="overview" active>Overview</Tab>
        <Tab id="health">Health</Tab>
        <Tab id="breeding">Breeding</Tab>
        <Tab id="activity">Activity</Tab>
        <Tab id="documents">Documents</Tab>
      </TabNavigation>

      <TabContent active="overview">
        <div className="grid grid-cols-2 gap-4">
          <InfoCard title="Basic Information">
            <InfoRow label="Breed" value={animal.breed} />
            <InfoRow label="Color" value={animal.color} />
            <InfoRow label="Microchip" value={animal.microchip} />
            <InfoRow label="Acquisition Date" value={animal.acquisitionDate} />
            <InfoRow label="Purchase Price" value={animal.purchasePrice} />
            <InfoRow label="Current Value" value={animal.currentValue} />
          </InfoCard>

          <InfoCard title="Quick Stats">
            <StatItem label="Last Checkup" value={lastCheckupDate} />
            <StatItem label="Total Checkups" value={totalCheckups} />
            <StatItem label="Vaccinations" value={vaccinationCount} />
            <StatItem label="Treatments" value={treatmentCount} />
            <StatItem label="Last Weight" value={lastWeight} />
          </InfoCard>

          <InfoCard title="Lineage">
            <LineageItem label="Sire" animalId={animal.sireId} />
            <LineageItem label="Dam" animalId={animal.damId} />
            <OffspringList offspring={animal.offspring} />
          </InfoCard>

          <RecentActivityCard activities={recentActivities} />
        </div>

        <NotesCard 
          notes={animal.notes}
          onAddNote={handleAddNote}
        />
      </TabContent>
    </MainContent>
  </div>
</LivestockProfilePage>
```

---

## Key Data Fields / Inputs

### Animal Profile
```typescript
interface AnimalProfile {
  // Basic Info (from list)
  id: string;
  tagNumber: string;
  name: string;
  species: string;
  breed: string;
  gender: string;
  dateOfBirth: Date;
  status: string;
  
  // Extended Info
  color: string;
  microchipId: string;
  acquisitionDate: Date;
  purchasePrice: number;
  currentValue: number;
  location: {
    barn: string;
    pen: string;
  };
  weight: {
    value: number;
    unit: 'kg' | 'lbs';
    recordedAt: Date;
  };
  imageUrl?: string;
  
  // Lineage
  sireId?: string;
  damId?: string;
  offspringIds: string[];
  
  // Stats
  lastCheckupDate: Date;
  totalCheckups: number;
  vaccinationCount: number;
  treatmentCount: number;
  
  // Notes
  notes: Note[];
}

interface Note {
  id: string;
  date: Date;
  author: string;
  content: string;
  category?: 'observation' | 'treatment' | 'general';
}
```

### Tab Content Types
```typescript
type TabType = 'overview' | 'health' | 'breeding' | 'activity' | 'documents';

interface TabConfig {
  id: TabType;
  label: string;
  component: React.ComponentType;
  badge?: number; // notification count
}
```

---

## UX Notes

1. **Photo Management**
   - Upload via drag-drop or click
   - Support JPG, PNG (max 5MB)
   - Crop/resize before upload
   - Multiple photos in gallery (overview shows primary)

2. **Tab Navigation**
   - Persist tab state in URL query param
   - Badge indicators for pending items (e.g., "Health: 2 pending")
   - Lazy load tab content
   - Keyboard shortcuts (Alt+1 through Alt+5)

3. **Quick Actions**
   - Edit: Inline editing or modal form
   - Delete: Confirmation dialog with archive option
   - Print: Generate PDF with selected tabs

4. **Lineage Links**
   - Clickable parent/offspring links → navigate to their profiles
   - Visual family tree view (expandable)
   - Breeding history timeline

5. **Recent Activity**
   - Auto-updated from all actions
   - Filter by activity type
   - Click to view full details

6. **Notes System**
   - Rich text editor for formatting
   - Attach images/documents
   - Tag notes with categories
   - Search and filter notes
   - Pin important notes to top

7. **Status Indicators**
   - Visual badge with color coding
   - Tooltip with status details
   - Status change history

8. **Responsive Design**
   - Desktop: 2-column grid
   - Tablet: Single column, scrollable
   - Mobile: Stack all cards vertically, sticky tabs

9. **Accessibility**
   - Skip to content links
   - Screen reader announcements for status changes
   - High contrast mode
   - Keyboard-navigable tabs and actions

10. **Performance**
    - Cache profile data
    - Lazy load images and documents
    - Infinite scroll for activity feed
