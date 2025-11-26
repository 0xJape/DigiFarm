# Livestock List Wireframe

## Page Title
**Livestock List** - All Animals Overview

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  ┌──────────────────────────────────────────────────┐  │
│  Stats   │  │  Livestock Management                            │  │
│  Animals │  │  [🔍 Search by ID, Tag, or Name...]              │  │
│  Health  │  └──────────────────────────────────────────────────┘  │
│  Breeding│                                                          │
│  Reports │  ┌─ Filters ──────────────────────────────────────┐    │
│  Settings│  │ Species: [All ▼]  Status: [All ▼]  Gender: [▼] │    │
│          │  │ Age: [Any]  Location: [All ▼]  [Clear Filters] │    │
│          │  └────────────────────────────────────────────────┘    │
│          │                                                          │
│          │  [+ Add New Animal]  [📥 Import CSV]  [📤 Export]      │
│          │                                                          │
│          │  ┌──────────────────────────────────────────────────┐  │
│          │  │ ID    │ Tag   │ Name   │ Species│ Age │ Status  │▲│ │
│          │  ├──────────────────────────────────────────────────┤  │
│          │  │ A-001 │ 🏷️234 │ Bessie │ Cattle │ 3y  │ 🟢 Healthy│ │
│          │  │ A-002 │ 🏷️235 │ Daisy  │ Cattle │ 5y  │ 🟢 Healthy│ │
│          │  │ A-003 │ 🏷️236 │ Molly  │ Cattle │ 2y  │ 🟡 Monitor│ │
│          │  │ A-004 │ 🏷️237 │ Luna   │ Goat   │ 1y  │ 🟢 Healthy│ │
│          │  │ A-005 │ 🏷️238 │ Spot   │ Cattle │ 4y  │ 🔴 Sick   │ │
│          │  │ A-006 │ 🏷️239 │ Bella  │ Cattle │ 6y  │ 🟢 Healthy│ │
│          │  │ A-007 │ 🏷️240 │ Max    │ Goat   │ 2y  │ 🟢 Healthy│ │
│          │  │ ...   │ ...   │ ...    │ ...    │ ... │ ...       │ │
│          │  └──────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  Showing 1-50 of 1,247 animals                          │
│          │  [◀ Previous]  [1] [2] [3] ... [25]  [Next ▶]          │
│          │                                                          │
│          │  [Each row clickable → Animal Profile]                 │
│          │  [Hover actions: Edit | View | Delete]                 │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<LivestockListPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <PageHeader title="Livestock Management" />
      
      <SearchBar 
        placeholder="Search by ID, Tag, or Name..."
        onSearch={handleSearch}
      />

      <FilterBar>
        <Select label="Species" options={speciesOptions} />
        <Select label="Status" options={statusOptions} />
        <Select label="Gender" options={genderOptions} />
        <Input label="Age" type="number" />
        <Select label="Location" options={locationOptions} />
        <Button onClick={clearFilters}>Clear Filters</Button>
      </FilterBar>

      <ActionBar>
        <Button icon="+" onClick={addAnimal}>Add New Animal</Button>
        <Button icon="📥" onClick={importCSV}>Import CSV</Button>
        <Button icon="📤" onClick={exportData}>Export</Button>
      </ActionBar>

      <DataTable
        columns={livestockColumns}
        data={filteredLivestock}
        sortable={true}
        onRowClick={navigateToProfile}
        rowActions={[
          { label: 'Edit', icon: '✏️', action: handleEdit },
          { label: 'View', icon: '👁️', action: handleView },
          { label: 'Delete', icon: '🗑️', action: handleDelete }
        ]}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={1247}
        itemsPerPage={50}
        onPageChange={handlePageChange}
      />
    </MainContent>
  </div>
</LivestockListPage>
```

---

## Key Data Fields / Inputs

### Livestock Item
```typescript
interface Livestock {
  id: string;              // A-001
  tagNumber: string;       // 234
  name: string;            // Bessie
  species: 'Cattle' | 'Goat' | 'Sheep' | 'Pig' | 'Chicken';
  breed?: string;
  age: number;             // in years
  ageUnit: 'months' | 'years';
  gender: 'Male' | 'Female';
  status: 'Healthy' | 'Monitor' | 'Sick' | 'Deceased';
  dateOfBirth: Date;
  location: string;        // Farm section/pen
  weight?: number;
  lastCheckup?: Date;
  imageUrl?: string;
}
```

### Filter Options
```typescript
interface Filters {
  species: string[];
  status: string[];
  gender: string[];
  ageMin?: number;
  ageMax?: number;
  location: string[];
  searchQuery: string;
}
```

### Table Configuration
```typescript
const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'tagNumber', label: 'Tag', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'species', label: 'Species', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'status', label: 'Status', sortable: true }
];
```

---

## UX Notes

1. **Search & Filter**
   - Real-time search with debounce (300ms)
   - Multi-select filters (can select multiple species)
   - Active filters shown as removable chips
   - Filter count badge on filter bar

2. **Table Interactions**
   - Click row → navigate to animal profile
   - Hover row → show quick actions
   - Sort by any column (click header)
   - Column resize & reorder (drag headers)
   - Sticky header on scroll

3. **Status Colors**
   - 🟢 Green: Healthy
   - 🟡 Yellow: Monitor/Watch
   - 🔴 Red: Sick/Critical
   - ⚫ Gray: Deceased

4. **Bulk Actions**
   - Checkbox on each row for selection
   - "Select All" checkbox in header
   - Bulk actions bar appears when items selected
   - Actions: Export selected, Delete selected, Change status

5. **Performance**
   - Virtual scrolling for 1000+ rows
   - Server-side pagination and filtering
   - Lazy load images
   - Cache filtered results

6. **Responsive**
   - Desktop: Full table
   - Tablet: Hide less critical columns (age, location)
   - Mobile: Card list view instead of table

7. **Accessibility**
   - Keyboard navigation (arrow keys, tab)
   - Screen reader support for status indicators
   - Focus indicators on interactive elements
   - ARIA labels for all actions

8. **Export Options**
   - CSV with selected columns
   - PDF report with filters applied
   - Excel with formatting
   - Print view
