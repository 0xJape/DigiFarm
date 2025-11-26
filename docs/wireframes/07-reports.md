# Reports Wireframe

## Page Title
**Reports & Analytics** - Data-Driven Farm Insights

---

## Layout Structure (ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [DigiFarm Logo]  Dashboard  Livestock  Reports  Settings  [User ▼]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────────────────┐
│          │                                                          │
│  [Home]  │  Reports & Analytics                                    │
│  Stats   │                                                          │
│  Animals │  ┌─ Report Builder ──────────────────────────────────┐  │
│  Health  │  │ Report Type: [Health Summary ▼]                   │  │
│  Breeding│  │ Date Range: [📅 Nov 1 - Nov 30, 2025]             │  │
│  Reports │  │ Animals: [All (1,247) ▼]                           │  │
│  Settings│  │ Group By: [Species ▼]  Format: [PDF ▼]            │  │
│          │  │ [Generate Report] [Save as Template]               │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌─ Quick Reports ───────────────────────────────────┐  │
│          │  │ [📊 Herd Health]  [🐄 Breeding Performance]       │  │
│          │  │ [💰 Financial]    [📈 Growth & Weight]            │  │
│          │  │ [💉 Vaccination]  [🍽️ Feeding Summary]           │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ═══ REPORT SECTIONS ═══                                │
│          │                                                          │
│          │  ┌─ 1. Herd Overview ────────────────────────────────┐  │
│          │  │ Total Animals: 1,247                               │  │
│          │  │ By Species:                                        │  │
│          │  │   • Cattle: 890 (71%)                              │  │
│          │  │   • Goats: 245 (20%)                               │  │
│          │  │   • Sheep: 112 (9%)                                │  │
│          │  │                                                     │  │
│          │  │ [Bar Chart: Species Distribution]                  │  │
│          │  │ ████████████████████ Cattle                        │  │
│          │  │ ████ Goats                                         │  │
│          │  │ ██ Sheep                                           │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌─ 2. Health Statistics (Last 30 Days) ─────────────┐  │
│          │  │ Overall Health Status:                             │  │
│          │  │   • Healthy: 1,189 (95.3%) 🟢                      │  │
│          │  │   • Monitor: 46 (3.7%) 🟡                          │  │
│          │  │   • Sick: 12 (1.0%) 🔴                             │  │
│          │  │                                                     │  │
│          │  │ Health Interventions:                              │  │
│          │  │   • Checkups: 342                                  │  │
│          │  │   • Treatments: 58                                 │  │
│          │  │   • Vaccinations: 125                              │  │
│          │  │                                                     │  │
│          │  │ [Line Chart: Health Trend Over Time]               │  │
│          │  │    Healthy ─────────────────────────                │  │
│          │  │                                                     │  │
│          │  │    Sick ────  ─  ───  ──                           │  │
│          │  │    Day 1   Day 10  Day 20  Day 30                  │  │
│          │  │                                                     │  │
│          │  │ Top Health Issues:                                 │  │
│          │  │   1. Respiratory (8 cases)                         │  │
│          │  │   2. Digestive (4 cases)                           │  │
│          │  │   3. Lameness (3 cases)                            │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌─ 3. Breeding Performance (2025) ──────────────────┐  │
│          │  │ Total Pregnancies: 287                             │  │
│          │  │ Successful Births: 245 (85.4%)                     │  │
│          │  │ Expected Deliveries (Next 60 days): 42             │  │
│          │  │                                                     │  │
│          │  │ [Stacked Bar: Breeding Outcomes]                   │  │
│          │  │ ████████ Successful                                │  │
│          │  │ ██ Ongoing                                         │  │
│          │  │ █ Failed                                           │  │
│          │  │                                                     │  │
│          │  │ Conception Rate by Method:                         │  │
│          │  │   • Natural: 92% (175/190)                         │  │
│          │  │   • AI: 78% (62/80)                                │  │
│          │  │   • ET: 88% (8/9)                                  │  │
│          │  │                                                     │  │
│          │  │ Top Sires by Offspring Count:                      │  │
│          │  │   1. Bull #B-012: 34 offspring                     │  │
│          │  │   2. Bull #B-008: 28 offspring                     │  │
│          │  │   3. Bull #B-015: 22 offspring                     │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  ┌─ 4. Financial Summary ────────────────────────────┐  │
│          │  │ Period: Jan 1 - Nov 30, 2025                       │  │
│          │  │                                                     │  │
│          │  │ Expenses:                                          │  │
│          │  │   • Feed: $125,450                                 │  │
│          │  │   • Veterinary: $42,320                            │  │
│          │  │   • Breeding: $18,900                              │  │
│          │  │   • Facilities: $35,200                            │  │
│          │  │   Total: $221,870                                  │  │
│          │  │                                                     │  │
│          │  │ Revenue:                                           │  │
│          │  │   • Animal Sales: $342,500                         │  │
│          │  │   • Milk/Produce: $89,200                          │  │
│          │  │   Total: $431,700                                  │  │
│          │  │                                                     │  │
│          │  │ Net Profit: $209,830                               │  │
│          │  │ ROI: 94.5%                                         │  │
│          │  │                                                     │  │
│          │  │ [Pie Chart: Expense Breakdown]                     │  │
│          │  └────────────────────────────────────────────────────┘  │
│          │                                                          │
│          │  [📥 Download PDF] [📧 Email Report] [🔗 Share Link]   │
│          │                                                          │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## React Component Breakdown

```tsx
<ReportsPage>
  <TopNavBar />
  <div className="flex">
    <Sidebar />
    <MainContent>
      <PageHeader title="Reports & Analytics" />

      <ReportBuilder>
        <Select 
          label="Report Type"
          options={reportTypes}
          value={selectedReport}
          onChange={setSelectedReport}
        />
        <DateRangePicker 
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
        />
        <MultiSelect
          label="Animals"
          options={animalOptions}
          value={selectedAnimals}
          onChange={setSelectedAnimals}
        />
        <Select 
          label="Group By"
          options={groupByOptions}
          value={groupBy}
          onChange={setGroupBy}
        />
        <Select 
          label="Format"
          options={['PDF', 'Excel', 'CSV']}
          value={format}
          onChange={setFormat}
        />
        <ButtonGroup>
          <Button onClick={generateReport}>Generate Report</Button>
          <Button onClick={saveTemplate}>Save as Template</Button>
        </ButtonGroup>
      </ReportBuilder>

      <QuickReports>
        <ReportCard 
          icon="📊" 
          title="Herd Health"
          onClick={() => generateQuickReport('health')}
        />
        <ReportCard 
          icon="🐄" 
          title="Breeding Performance"
          onClick={() => generateQuickReport('breeding')}
        />
        <ReportCard 
          icon="💰" 
          title="Financial"
          onClick={() => generateQuickReport('financial')}
        />
        <ReportCard 
          icon="📈" 
          title="Growth & Weight"
          onClick={() => generateQuickReport('growth')}
        />
        <ReportCard 
          icon="💉" 
          title="Vaccination"
          onClick={() => generateQuickReport('vaccination')}
        />
        <ReportCard 
          icon="🍽️" 
          title="Feeding Summary"
          onClick={() => generateQuickReport('feeding')}
        />
      </QuickReports>

      <ReportContent>
        <ReportSection title="1. Herd Overview">
          <StatGrid>
            <Stat label="Total Animals" value={1247} />
            <SpeciesBreakdown data={speciesData} />
          </StatGrid>
          <BarChart 
            data={speciesData}
            title="Species Distribution"
          />
        </ReportSection>

        <ReportSection title="2. Health Statistics">
          <HealthStatusGrid statuses={healthStatuses} />
          <InterventionStats interventions={interventions} />
          <LineChart 
            data={healthTrendData}
            title="Health Trend Over Time"
          />
          <TopIssuesList issues={topHealthIssues} />
        </ReportSection>

        <ReportSection title="3. Breeding Performance">
          <BreedingStats stats={breedingStats} />
          <StackedBarChart 
            data={breedingOutcomes}
            title="Breeding Outcomes"
          />
          <ConceptionRateTable rates={conceptionRates} />
          <TopSiresTable sires={topSires} />
        </ReportSection>

        <ReportSection title="4. Financial Summary">
          <PeriodHeader period="Jan 1 - Nov 30, 2025" />
          <ExpenseSummary expenses={expenses} />
          <RevenueSummary revenue={revenue} />
          <ProfitMetrics profit={profit} roi={roi} />
          <PieChart 
            data={expenseBreakdown}
            title="Expense Breakdown"
          />
        </ReportSection>
      </ReportContent>

      <ReportActions>
        <Button icon="📥" onClick={downloadPDF}>Download PDF</Button>
        <Button icon="📧" onClick={emailReport}>Email Report</Button>
        <Button icon="🔗" onClick={shareLink}>Share Link</Button>
      </ReportActions>
    </MainContent>
  </div>
</ReportsPage>
```

---

## Key Data Fields / Inputs

### Report Configuration
```typescript
interface ReportConfig {
  id: string;
  name: string;
  type: ReportType;
  dateRange: {
    start: Date;
    end: Date;
  };
  filters: ReportFilters;
  groupBy?: 'species' | 'location' | 'status' | 'age-group';
  format: 'PDF' | 'Excel' | 'CSV' | 'HTML';
  sections: ReportSection[];
  schedule?: ReportSchedule;
}

type ReportType = 
  | 'Health Summary'
  | 'Breeding Performance'
  | 'Financial'
  | 'Growth & Weight'
  | 'Vaccination'
  | 'Feeding Summary'
  | 'Activity Log'
  | 'Inventory'
  | 'Custom';

interface ReportFilters {
  animalIds?: string[];
  species?: string[];
  locations?: string[];
  statuses?: string[];
  ageMin?: number;
  ageMax?: number;
}

interface ReportSchedule {
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Annually';
  dayOfWeek?: number;
  dayOfMonth?: number;
  time: string;
  recipients: string[];
  enabled: boolean;
}
```

### Report Data Structures
```typescript
interface HerdOverview {
  totalAnimals: number;
  bySpecies: {
    species: string;
    count: number;
    percentage: number;
  }[];
  byLocation: {
    location: string;
    count: number;
  }[];
  byAgeGroup: {
    group: string;
    count: number;
  }[];
}

interface HealthStatistics {
  overall: {
    healthy: number;
    monitor: number;
    sick: number;
    deceased: number;
  };
  interventions: {
    checkups: number;
    treatments: number;
    vaccinations: number;
    surgeries: number;
  };
  trend: {
    date: Date;
    healthy: number;
    sick: number;
  }[];
  topIssues: {
    issue: string;
    count: number;
    severity: 'Low' | 'Medium' | 'High';
  }[];
  costSummary: {
    veterinary: number;
    medication: number;
    procedures: number;
  };
}

interface BreedingPerformance {
  totalPregnancies: number;
  successful: number;
  ongoing: number;
  failed: number;
  successRate: number;
  expectedDeliveries: number;
  conceptionRates: {
    method: string;
    rate: number;
    total: number;
    successful: number;
  }[];
  topSires: {
    id: string;
    name: string;
    offspringCount: number;
    successRate: number;
  }[];
  seasonalTrends: {
    month: string;
    conceptions: number;
    births: number;
  }[];
}

interface FinancialSummary {
  period: {
    start: Date;
    end: Date;
  };
  expenses: {
    feed: number;
    veterinary: number;
    breeding: number;
    facilities: number;
    labor: number;
    utilities: number;
    other: number;
    total: number;
  };
  revenue: {
    animalSales: number;
    milkProduce: number;
    breeding: number;
    other: number;
    total: number;
  };
  profit: number;
  roi: number;
  costPerAnimal: number;
  revenuePerAnimal: number;
}

interface GrowthWeightReport {
  averageWeight: {
    bySpecies: { species: string; weight: number }[];
    byAgeGroup: { group: string; weight: number }[];
  };
  weightGainTrends: {
    animalId: string;
    name: string;
    measurements: { date: Date; weight: number }[];
    averageGainPerDay: number;
  }[];
  bodyConditionScores: {
    score: number;
    count: number;
    percentage: number;
  }[];
}
```

---

## UX Notes

1. **Report Builder**
   - Drag-and-drop report sections
   - Live preview as you configure
   - Save custom report templates
   - Share templates with team

2. **Quick Reports**
   - One-click generation for common reports
   - Pre-configured with best practice filters
   - Customizable after generation
   - Mobile-optimized quick views

3. **Interactive Charts**
   - Hover for detailed tooltips
   - Click to drill down into data
   - Export charts as images
   - Zoom and pan for large datasets

4. **Data Export**
   - Multiple format options (PDF, Excel, CSV)
   - Include/exclude specific sections
   - Custom branding and headers
   - Batch export multiple reports

5. **Scheduled Reports**
   - Auto-generate and email on schedule
   - Distribute to multiple recipients
   - Attach to calendar invites
   - Webhook integration for external systems

6. **Comparative Analysis**
   - Compare periods (this month vs last month)
   - Year-over-year comparisons
   - Benchmark against industry standards
   - Herd-to-herd comparison

7. **Real-time Updates**
   - Live data refresh option
   - Show "data as of" timestamp
   - Highlight recent changes
   - Auto-update on dashboard

8. **Filtering & Segmentation**
   - Advanced filter builder
   - Save filter combinations
   - Apply filters across all sections
   - Filter by custom fields

9. **Annotations**
   - Add notes to specific data points
   - Mark significant events on charts
   - Collaborative commenting
   - Version control for report edits

10. **Performance Optimization**
    - Lazy load chart data
    - Cache generated reports
    - Background processing for large datasets
    - Progressive rendering for long reports

11. **Accessibility**
    - Screen reader-friendly data tables
    - Text descriptions for charts
    - Keyboard navigation for report builder
    - High contrast mode

12. **Mobile Experience**
    - Simplified mobile reports
    - Swipeable chart gallery
    - Download for offline viewing
    - Share via mobile apps

13. **Integration**
    - Export to accounting software
    - Share with veterinary systems
    - API for external dashboards
    - Connect to business intelligence tools
