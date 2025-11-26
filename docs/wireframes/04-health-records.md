# Health & Medical Records Wireframe

## Page Title
**Health & Medical Records** - Animal Health Tracking

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  Health & Medical Records - Bessie (A-001)              │
│  Stats   │  [← Back to Profile]                                    │
│  Animals │                                                          │
│  Health  │  ┌─ Quick Summary ────────────────────────────────────┐ │
│  Breeding│  │ Overall Health: 🟢 Healthy                         │ │
│  Reports │  │ Last Checkup: Nov 10, 2025                         │ │
│  Settings│  │ Next Due: Vaccination - Dec 5, 2025                │ │
│          │  │ Total Records: 23 | Alerts: 0                      │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  [+ Record Checkup] [+ Add Vaccination] [+ Add Treatment]│
│          │                                                          │
│          │  ┌─ Filter & Sort ───────────────────────────────────┐  │
│          │  │ Type: [All ▼] Date: [Last 6 months ▼] [Search...] │  │
│          │  └───────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ═══ HEALTH TIMELINE ═══                                │
│          │                                                          │
│          │  📅 November 2025                                       │
│          │  ├─ Nov 10 ───────────────────────────────────────────┐ │
│          │  │  ✅ Routine Checkup                                │ │
│          │  │  Veterinarian: Dr. Sarah Johnson                   │ │
│          │  │  Weight: 650 kg | Temp: 38.5°C                     │ │
│          │  │  Notes: All vitals normal. Healthy condition.      │ │
│          │  │  [View Details] [Edit] [Download Report]           │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  📅 October 2025                                        │
│          │  ├─ Oct 25 ───────────────────────────────────────────┐ │
│          │  │  ⚠️ Minor Treatment                                 │ │
│          │  │  Issue: Slight limp on right hind leg              │ │
│          │  │  Treatment: Rest + Anti-inflammatory               │ │
│          │  │  Follow-up: Nov 1 (Resolved ✓)                     │ │
│          │  │  [View Details] [Edit]                             │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  ├─ Oct 5 ────────────────────────────────────────────┐ │
│          │  │  💉 Vaccination                                     │ │
│          │  │  Type: Annual Booster (Clostridial)                │ │
│          │  │  Batch #: VAC-2025-10-A                            │ │
│          │  │  Next Due: Oct 2026                                │ │
│          │  │  [View Details] [Edit] [Set Reminder]              │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  📅 September 2025                                      │
│          │  ├─ Sep 15 ───────────────────────────────────────────┐ │
│          │  │  🔬 Lab Test                                        │ │
│          │  │  Type: Blood work (routine screening)              │ │
│          │  │  Results: All parameters normal                    │ │
│          │  │  [View Lab Report PDF] [Edit]                      │ │
│          │  └────────────────────────────────────────────────────┘ │
│          │                                                          │
│          │  [Load More Records...]                                 │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<HealthRecordsPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <PageHeader 
        title="Health & Medical Records"
        subtitle="Bessie (A-001)"
      />
      <BackButton to={`/livestock/${animalId}`} />

      <HealthSummaryCard
        overallStatus="Healthy"
        lastCheckup={lastCheckupDate}
        nextDue={nextDueItem}
        totalRecords={23}
        alertCount={0}
      />

      <ActionBar>
        <Button icon="+" onClick={recordCheckup}>Record Checkup</Button>
        <Button icon="💉" onClick={addVaccination}>Add Vaccination</Button>
        <Button icon="💊" onClick={addTreatment}>Add Treatment</Button>
      </ActionBar>

      <FilterBar>
        <Select 
          label="Type" 
          options={recordTypes}
          value={selectedType}
          onChange={setSelectedType}
        />
        <Select 
          label="Date Range" 
          options={dateRanges}
          value={selectedRange}
          onChange={setSelectedRange}
        />
        <SearchInput 
          placeholder="Search records..."
          onChange={handleSearch}
        />
      </FilterBar>

      <HealthTimeline>
        {groupedRecords.map(monthGroup => (
          <TimelineMonth key={monthGroup.month}>
            <MonthHeader>{monthGroup.month}</MonthHeader>
            {monthGroup.records.map(record => (
              <HealthRecordCard
                key={record.id}
                record={record}
                onViewDetails={() => viewDetails(record.id)}
                onEdit={() => editRecord(record.id)}
                onDownload={() => downloadReport(record.id)}
              />
            ))}
          </TimelineMonth>
        ))}
      </HealthTimeline>

      <LoadMoreButton onClick={loadMoreRecords} />
    </MainContent>
  </div>
</HealthRecordsPage>
```

---

## Key Data Fields / Inputs

### Health Record
```typescript
interface HealthRecord {
  id: string;
  animalId: string;
  date: Date;
  type: 'checkup' | 'vaccination' | 'treatment' | 'lab-test' | 'surgery' | 'observation';
  status: 'completed' | 'scheduled' | 'in-progress';
  
  // Common fields
  veterinarian?: string;
  notes: string;
  attachments?: Attachment[];
  cost?: number;
  
  // Type-specific fields
  checkupDetails?: CheckupDetails;
  vaccinationDetails?: VaccinationDetails;
  treatmentDetails?: TreatmentDetails;
  labTestDetails?: LabTestDetails;
}

interface CheckupDetails {
  weight?: number;
  temperature?: number;
  heartRate?: number;
  respiratoryRate?: number;
  bodyConditionScore?: number; // 1-5 scale
  findings: string;
  recommendations: string;
  nextCheckupDate?: Date;
}

interface VaccinationDetails {
  vaccineName: string;
  vaccineType: string;
  batchNumber: string;
  manufacturer: string;
  administrationMethod: 'injection' | 'oral' | 'nasal';
  dosage: string;
  nextDueDate: Date;
  reactions?: string;
}

interface TreatmentDetails {
  diagnosis: string;
  symptoms: string[];
  medication: Medication[];
  procedure?: string;
  startDate: Date;
  endDate?: Date;
  followUpDate?: Date;
  outcome?: 'resolved' | 'ongoing' | 'referred';
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  administrationRoute: string;
}

interface LabTestDetails {
  testType: string;
  laboratory: string;
  sampleType: string;
  results: LabResult[];
  reportUrl?: string;
}

interface LabResult {
  parameter: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: 'normal' | 'abnormal' | 'critical';
}
```

---

## UX Notes

1. **Record Creation**
   - Modal forms for each record type
   - Pre-fill date/time with current
   - Auto-save drafts
   - Template support for common procedures
   - Photo attachment (before/after treatment)

2. **Timeline View**
   - Chronological order (newest first)
   - Group by month with collapsible sections
   - Color-coded icons by record type
   - Visual indicators for urgent/critical items

3. **Quick Actions**
   - Inline edit for minor corrections
   - Duplicate record for similar entries
   - Share record via email/export
   - Print individual or batch records

4. **Filtering & Search**
   - Multi-select record types
   - Date range presets (7 days, 30 days, 6 months, 1 year, all)
   - Full-text search across all fields
   - Save custom filter presets

5. **Reminders & Alerts**
   - Auto-generate reminders for follow-ups
   - Notification 7 days before vaccination due
   - Warning for overdue checkups
   - Integration with calendar

6. **Document Management**
   - Upload PDF reports, images, X-rays
   - OCR for scanning paper records
   - Version history for edited records
   - Secure storage with encryption

7. **Data Visualization**
   - Weight trend chart
   - Temperature history graph
   - Treatment frequency overview
   - Vaccination schedule calendar

8. **Veterinarian Integration**
   - Share records with vet clinic via secure link
   - Request vet review/signature
   - Import records from vet management system
   - Contact vet directly from record

9. **Compliance & Audit**
   - Timestamp all changes
   - Log who created/edited records
   - Export for regulatory compliance
   - Generate vaccination certificates

10. **Responsive Design**
    - Desktop: Full timeline with side-by-side details
    - Tablet: Scrollable timeline, modal for details
    - Mobile: Card list, swipe for actions

11. **Accessibility**
    - Screen reader support for timeline navigation
    - Keyboard shortcuts for quick record creation
    - High contrast icons and status indicators
    - Alt text for all medical images
