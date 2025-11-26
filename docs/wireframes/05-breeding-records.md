# Breeding Records Wireframe

## Page Title
**Breeding Records** - Reproduction & Lineage Management

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  Breeding Records - Bessie (A-001)                      │
│  Stats   │  [← Back to Profile]                                    │
│  Animals │                                                          │
│  Health  │  ┌─ Breeding Status ─────────────────────────────────┐  │
│  Breeding│  │ Current Status: 🤰 Pregnant (Day 180/283)          │  │
│  Reports │  │ Expected Delivery: Dec 25, 2025 (45 days)          │  │
│  Settings│  │ Total Pregnancies: 3 | Successful: 3 | Live: 2    │  │
│          │  │ [Record Pregnancy Check] [Update Status]           │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌─ Current Pregnancy Details ───────────────────────┐  │
│          │  │ Conception Date: May 20, 2025                      │  │
│          │  │ Sire: Bull #B-012 (Angus)                          │  │
│          │  │ Method: Natural Breeding                           │  │
│          │  │ Last Pregnancy Check: Nov 15, 2025                 │  │
│          │  │   - Fetus: Healthy, normal development             │  │
│          │  │   - Dam: Good body condition                       │  │
│          │  │                                                     │  │
│          │  │ ◉━━━━━━━━━━━━━━━━━━━●━━━━━━  [Progress Bar]       │  │
│          │  │ Day 1          Day 180         Day 283             │  │
│          │  │ Conception     Today           Expected            │  │
│          │  │                                                     │  │
│          │  │ Upcoming Milestones:                               │  │
│          │  │ • Nov 28: Pregnancy check (scheduled)              │  │
│          │  │ • Dec 10: Move to calving pen                      │  │
│          │  │ • Dec 20: Prepare calving area                     │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  [+ New Breeding Record] [+ Pregnancy Check] [+ Calving]│
│          │                                                          │
│          │  ═══ BREEDING HISTORY ═══                               │
│          │                                                          │
│          │  ┌─ Pregnancy #3 (Current) ─────────────────────────┐   │
│          │  │ Status: 🤰 Pregnant (Day 180/283)                 │   │
│          │  │ Conception: May 20, 2025 | Due: Dec 25, 2025     │   │
│          │  │ Sire: Bull #B-012 (Angus) | Method: Natural      │   │
│          │  │ [View Timeline] [Edit] [Add Check]                │   │
│          │  └───────────────────────────────────────────────────┘   │
│          │                                                          │
│          │  ┌─ Pregnancy #2 (2024) ────────────────────────────┐   │
│          │  │ Status: ✅ Successful - Calf Born                 │   │
│          │  │ Conception: Mar 10, 2024 | Birth: Dec 15, 2024   │   │
│          │  │ Sire: Bull #B-008 | Method: AI                    │   │
│          │  │ Offspring: Calf #C-142 (Female, Healthy)          │   │
│          │  │ Birth Weight: 42 kg | Complications: None         │   │
│          │  │ [View Full Record] [View Offspring Profile]       │   │
│          │  └───────────────────────────────────────────────────┘   │
│          │                                                          │
│          │  ┌─ Pregnancy #1 (2023) ────────────────────────────┐   │
│          │  │ Status: ✅ Successful - Calf Born                 │   │
│          │  │ Conception: Feb 5, 2023 | Birth: Nov 10, 2023    │   │
│          │  │ Sire: Bull #B-005 | Method: Natural               │   │
│          │  │ Offspring: Calf #C-101 (Male, Sold)               │   │
│          │  │ Birth Weight: 45 kg | Complications: None         │   │
│          │  │ [View Full Record] [View Offspring Profile]       │   │
│          │  └───────────────────────────────────────────────────┘   │
│          │                                                          │
│          │  ┌─ Heat Cycle Tracking ────────────────────────────┐   │
│          │  │ Last Heat: May 18, 2025                           │   │
│          │  │ Cycle Length: 21 days (average)                   │   │
│          │  │ [View Heat Cycle History] [Record Heat]           │   │
│          │  └───────────────────────────────────────────────────┘   │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<BreedingRecordsPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <PageHeader 
        title="Breeding Records"
        subtitle="Bessie (A-001)"
      />
      <BackButton to={`/livestock/${animalId}`} />

      <BreedingStatusCard
        status="Pregnant"
        daysPregnant={180}
        totalDays={283}
        expectedDelivery={expectedDate}
        totalPregnancies={3}
        successfulBirths={3}
        liveOffspring={2}
        onRecordCheck={handlePregnancyCheck}
        onUpdateStatus={handleStatusUpdate}
      />

      {currentPregnancy && (
        <CurrentPregnancyCard
          pregnancy={currentPregnancy}
          progressPercent={63.6}
          upcomingMilestones={milestones}
        />
      )}

      <ActionBar>
        <Button icon="+" onClick={newBreedingRecord}>New Breeding Record</Button>
        <Button icon="🔍" onClick={pregnancyCheck}>Pregnancy Check</Button>
        <Button icon="👶" onClick={recordCalving}>Record Calving</Button>
      </ActionBar>

      <SectionHeader>Breeding History</SectionHeader>

      <BreedingHistoryList>
        {pregnancies.map(pregnancy => (
          <PregnancyCard
            key={pregnancy.id}
            pregnancy={pregnancy}
            onViewTimeline={() => viewTimeline(pregnancy.id)}
            onEdit={() => editPregnancy(pregnancy.id)}
            onAddCheck={() => addCheck(pregnancy.id)}
            onViewOffspring={() => viewOffspring(pregnancy.offspringId)}
          />
        ))}
      </BreedingHistoryList>

      <HeatCycleCard
        lastHeat={lastHeatDate}
        averageCycleLength={21}
        onViewHistory={viewHeatCycleHistory}
        onRecordHeat={recordHeat}
      />
    </MainContent>
  </div>
</BreedingRecordsPage>
```

---

## Key Data Fields / Inputs

### Breeding Record
```typescript
interface BreedingRecord {
  id: string;
  animalId: string;
  pregnancyNumber: number;
  
  // Breeding Info
  conceptionDate: Date;
  breedingMethod: 'Natural' | 'AI' | 'ET'; // Artificial Insemination, Embryo Transfer
  sireId: string;
  sireName: string;
  sireBreed: string;
  
  // Pregnancy Status
  status: 'Breeding' | 'Pregnant' | 'Calving' | 'Completed' | 'Failed';
  confirmedDate?: Date; // pregnancy confirmed
  expectedDeliveryDate: Date;
  actualDeliveryDate?: Date;
  gestationPeriod: number; // days
  
  // Pregnancy Checks
  checks: PregnancyCheck[];
  
  // Outcome
  outcome?: 'Successful' | 'Stillborn' | 'Aborted' | 'Reabsorbed';
  offspringIds: string[];
  complications?: string;
  notes: string;
  
  // Costs
  breedingCost?: number;
  veterinaryCosts?: number;
}

interface PregnancyCheck {
  id: string;
  date: Date;
  dayOfPregnancy: number;
  veterinarian: string;
  method: 'Palpation' | 'Ultrasound' | 'Blood Test';
  findings: string;
  fetusCount?: number;
  fetusHealth: 'Healthy' | 'Concerns' | 'Critical';
  damCondition: string;
  recommendations: string;
  nextCheckDate?: Date;
  images?: string[]; // ultrasound images
}

interface CalvingRecord {
  id: string;
  breedingRecordId: string;
  calvingDate: Date;
  calvingTime: string;
  
  // Process
  calvingEase: 'Easy' | 'Assisted' | 'Difficult' | 'Surgical';
  assistanceBy?: string;
  duration?: number; // minutes
  complications?: string[];
  
  // Offspring
  offspringCount: number;
  offspring: OffspringDetails[];
  
  // Dam Condition
  damConditionAfter: string;
  placentaExpelled: boolean;
  placentaExpelledTime?: string;
  postCalvingTreatment?: string;
}

interface OffspringDetails {
  id: string;
  gender: 'Male' | 'Female';
  birthWeight: number;
  vigor: 'Strong' | 'Weak' | 'Stillborn';
  abnormalities?: string;
  colostrum: boolean;
  colostrumTime?: string;
  tagNumber: string;
  name?: string;
}

interface HeatCycle {
  id: string;
  animalId: string;
  heatDate: Date;
  intensity: 'Weak' | 'Moderate' | 'Strong';
  signs: string[];
  bred: boolean;
  cycleDay?: number;
  notes: string;
}
```

---

## UX Notes

1. **Pregnancy Tracking**
   - Visual progress bar with key milestones
   - Countdown to expected delivery
   - Color-coded status (green: healthy, yellow: watch, red: concern)
   - Push notifications for upcoming checks/events

2. **Timeline View**
   - Interactive timeline for each pregnancy
   - Mark key events: conception, confirmation, checks, delivery
   - Attach notes, photos, documents to each event
   - Export timeline as PDF report

3. **Pregnancy Checks**
   - Quick entry form with common findings
   - Upload ultrasound images with date overlay
   - Compare measurements across checks
   - Auto-calculate estimated delivery date adjustments

4. **Calving Wizard**
   - Step-by-step form for recording birth
   - Real-time timer for calving duration
   - Quick photo capture for newborn
   - Auto-create offspring profile

5. **Heat Cycle Calendar**
   - Visual calendar with heat cycle predictions
   - Mark actual heat observations
   - Predict optimal breeding windows
   - Sync with breeding records

6. **Sire Selection**
   - Browse available sires with genetics info
   - View offspring history and success rates
   - Calculate expected offspring traits
   - Track AI straws inventory

7. **Alerts & Reminders**
   - Pregnancy check reminders
   - Expected delivery notifications (30, 7, 1 day before)
   - Heat cycle predictions
   - Breeding season reminders

8. **Reports & Analytics**
   - Conception rate by sire
   - Average gestation period
   - Birth weight trends
   - Seasonal breeding patterns
   - Calving ease statistics

9. **Genetics Tracking**
   - Lineage tree visualization
   - Inbreeding coefficient calculation
   - Trait inheritance tracking
   - Genetic diversity reports

10. **Responsive Design**
    - Desktop: Side-by-side current pregnancy and history
    - Tablet: Scrollable sections
    - Mobile: Card stack with swipe navigation

11. **Accessibility**
    - Status announcements for screen readers
    - Color-blind friendly status indicators
    - Keyboard navigation for all forms
    - Text alternatives for progress visuals

12. **Data Entry Optimization**
    - Templates for common scenarios
    - Bulk update for herd breeding
    - Voice input for field notes
    - Auto-fill from previous records
