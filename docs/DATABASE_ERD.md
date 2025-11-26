# DigiFarm Database ERD

## Overview

Database design for livestock management, health tracking, and breeding records.

---

## ERD Diagram

```mermaid
---
config:
  layout: elk
  theme: base
---
erDiagram
    %% =============================================
    %% LIVESTOCK CORE
    %% =============================================
    LIVESTOCK {
        VARCHAR tag_number PK "C-001, G-019, S-005"
        INT species_id FK
        INT breed_id FK
        VARCHAR sex "Male, Female"
        DATE date_of_birth
        VARCHAR birth_type "Natural, Assisted, C-Section"
        DECIMAL birth_weight
        DECIMAL current_weight
        VARCHAR color_marking
        INT status_id FK
        VARCHAR location "Barn/Pen"
        INT sire_id FK "Father (nullable)"
        INT dam_id FK "Mother (nullable)"
        DATE acquisition_date
        TEXT notes
    }

    SPECIES {
        INT species_id PK
        VARCHAR species_name UK "Cattle, Goat, Sheep"
        INT gestation_period_days "283 for cattle, 150 for goat/sheep"
    }

    BREEDS {
        INT breed_id PK
        INT species_id FK
        VARCHAR breed_name "Brahman, Boer, Dorper, Angus"
    }

    HEALTH_STATUS {
        INT status_id PK
        VARCHAR status_name UK "Healthy, Monitor, Sick, In Withdrawal"
        VARCHAR color_code "For UI badges"
    }

    %% =============================================
    %% PURCHASE INFO (Only if is_purchased = true)
    %% =============================================
    LIVESTOCK_PURCHASE_INFO {
        INT purchase_id PK
        INT livestock_id FK UK
        VARCHAR seller_name
        VARCHAR seller_contact
        VARCHAR seller_address
        DATE purchase_date
        DECIMAL purchase_price
        TEXT purchase_notes
    }

    SELLERS {
        INT seller_id PK
        VARCHAR seller_name UK
        VARCHAR contact_number
        VARCHAR email
        TEXT address
    }

    %% =============================================
    %% PHYSICAL ASSESSMENT
    %% =============================================
    LIVESTOCK_PHYSICAL_ASSESSMENT {
        INT assessment_id PK
        INT livestock_id FK
        DATE assessment_date
        INT body_condition_score "1-5 scale"
        INT status_id FK
        TEXT assessment_notes
    }

    %% =============================================
    %% VACCINATION & TREATMENT
    %% =============================================
    TREATMENT_RECORDS {
        VARCHAR treatment_id PK "VAC-001, VAC-002"
        INT livestock_id FK
        INT treatment_type_id FK
        INT vaccine_id FK "If vaccine treatment"
        VARCHAR treatment_name "FMD Vaccine, Oxytetracycline"
        INT treatment_category_id FK
        VARCHAR dosage "5ml, 10ml"
        INT dosage_unit_id FK
        INT administration_route_id FK
        DATE administered_date
        VARCHAR administered_by
        DATE next_due_date "Nullable for one-time treatments"
        INT withdrawal_period_days "From treatment type"
        DATE withdrawal_end_date "Calculated"
        BOOLEAN is_in_withdrawal
        VARCHAR status "completed, due-soon, overdue"
        TEXT notes
    }

    TREATMENT_TYPES {
        INT type_id PK
        VARCHAR type_name UK "Vaccine, Antibiotic, Vitamin, Anti-inflammatory, Dewormer"
        INT default_withdrawal_days "0, 7, 14, 21"
    }

    TREATMENT_CATEGORIES {
        INT category_id PK
        VARCHAR category_name UK "Viral, Bacterial, Nutritional, Antibiotic, Parasitic"
    }

    VACCINE_LIST {
        INT vaccine_id PK
        VARCHAR vaccine_name UK "FMD, Rabies, CDT, Brucellosis"
        INT treatment_category_id FK
        VARCHAR target_species "Cattle, Goat, Sheep, All"
    }

    DOSAGE_UNITS {
        INT unit_id PK
        VARCHAR unit_name UK "ml, mg, cc, tablets, g"
    }

    ADMINISTRATION_ROUTES {
        INT route_id PK
        VARCHAR route_name UK "Intramuscular, Subcutaneous, IV, Oral, Topical"
        VARCHAR route_code "IM, SC, IV, PO, TOP"
    }

    %% =============================================
    %% BREEDING MODULE
    %% =============================================
    BREEDING_RECORDS {
        INT breeding_id PK
        VARCHAR species "cattle, goat, sheep"
        DATE breeding_date
        TIME breeding_time
        VARCHAR method "Natural, AI"
        VARCHAR breeding_location "Breeding Pen 1, Goat Paddock, AI Station"
        VARCHAR handler_name
        VARCHAR recorded_by
        TEXT notes
    }

    DAM_INFO {
        INT dam_info_id PK
        INT breeding_id FK
        VARCHAR dam_id "C-023, G-019, S-005"
        VARCHAR dam_name "Brahman Heifer, Boer Doe"
        VARCHAR dam_breed "Brahman, Boer, Dorper"
        VARCHAR dam_age "4 years, 1.5 years"
        VARCHAR dam_health_status "Healthy, Monitor, Sick"
        DECIMAL dam_body_condition "1-5 scale (e.g., 3.5, 4)"
        TEXT heat_signs_observed "Standing heat, tail wagging"
    }

    SIRE_INFO {
        INT sire_info_id PK
        INT breeding_id FK
        VARCHAR sire_id "B-001, G-001, S-001"
        VARCHAR sire_name "Brahman Bull, Boer Buck"
        VARCHAR sire_breed "Brahman, Angus, Boer, Dorper"
        VARCHAR sire_age "5 years, 3 years"
        VARCHAR ai_technician "If AI method - Dr. Santos"
        VARCHAR semen_batch "If AI method - ANG2024-156"
        VARCHAR semen_source "If AI method - Premium Genetics Co."
    }

    ACTIVE_SIRES {
        VARCHAR sire_id PK
        VARCHAR name
        VARCHAR species
        VARCHAR breed
        VARCHAR age
        INT total_breedings
        INT success_rate "Percentage"
        DATE last_breeding
    }

    %% =============================================
    %% ALERTS & NOTIFICATIONS
    %% =============================================
    ALERTS {
        INT alert_id PK
        VARCHAR alert_type "vaccination_due, breeding_checkup, pregnancy_due, withdrawal_ending, overdue"
        VARCHAR entity_type "treatment, breeding, pregnancy"
        INT entity_id "ID of related record"
        INT livestock_id FK
        VARCHAR priority "high, medium, low"
        DATE alert_date
        DATE due_date
        BOOLEAN is_read
        BOOLEAN is_dismissed
        TEXT message
        TIMESTAMP created_at
    }

    %% =============================================
    %% RELATIONSHIPS
    %% =============================================
    
    %% Livestock Core
    SPECIES ||--o{ LIVESTOCK : "belongs_to"
    SPECIES ||--o{ BREEDS : "has_breeds"
    BREEDS ||--o{ LIVESTOCK : "is_breed"
    HEALTH_STATUS ||--o{ LIVESTOCK : "has_status"
    LIVESTOCK ||--o{ LIVESTOCK : "sire_of"
    LIVESTOCK ||--o{ LIVESTOCK : "dam_of"
    
    %% Purchase
    SELLERS ||--o{ LIVESTOCK_PURCHASE_INFO : "sold_to"
    LIVESTOCK ||--o| LIVESTOCK_PURCHASE_INFO : "has_purchase_info"
    
    %% Assessment
    LIVESTOCK ||--o{ LIVESTOCK_PHYSICAL_ASSESSMENT : "has_assessments"
    HEALTH_STATUS ||--o{ LIVESTOCK_PHYSICAL_ASSESSMENT : "status_at_assessment"
    
    %% Treatment
    TREATMENT_TYPES ||--o{ TREATMENT_RECORDS : "type_of"
    TREATMENT_CATEGORIES ||--o{ TREATMENT_RECORDS : "category_of"
    TREATMENT_CATEGORIES ||--o{ VACCINE_LIST : "category_of"
    VACCINE_LIST ||--o{ TREATMENT_RECORDS : "vaccine_used"
    DOSAGE_UNITS ||--o{ TREATMENT_RECORDS : "measured_in"
    ADMINISTRATION_ROUTES ||--o{ TREATMENT_RECORDS : "administered_via"
    LIVESTOCK ||--o{ TREATMENT_RECORDS : "receives_treatment"
    
    %% Breeding
    BREEDING_RECORDS ||--|| DAM_INFO : "has_dam"
    BREEDING_RECORDS ||--|| SIRE_INFO : "has_sire"
    
    %% Alerts
    LIVESTOCK ||--o{ ALERTS : "has_alerts"
    TREATMENT_RECORDS ||--o{ ALERTS : "triggers_treatment_alert"
    BREEDING_RECORDS ||--o{ ALERTS : "triggers_breeding_alert"
```

---

## Tables

### 1. Livestock

**LIVESTOCK** - Animal registry
- `tag_number` - Animal ID (C-001, G-019)
- `species_id` - Cattle/Goat/Sheep
- `breed_id` - Brahman, Boer, etc.
- `sex`, `date_of_birth`, `birth_weight`, `current_weight`
- `status_id` - Healthy, Monitor, Sick, In Withdrawal
- `sire_id`, `dam_id` - Parents
- `location`, `notes`

**SPECIES**
- Cattle (283 days gestation)
- Goat (150 days)
- Sheep (150 days)

**BREEDS**
- Brahman, Angus (Cattle)
- Boer, Anglo-Nubian (Goat)
- Dorper (Sheep)

**HEALTH_STATUS**
- Healthy, Monitor, Sick, In Withdrawal

**LIVESTOCK_PURCHASE_INFO** - Purchase details
- Seller name, contact, address
- Purchase date, price
- Only if animal was purchased

**SELLERS** - Vendor contacts

**LIVESTOCK_PHYSICAL_ASSESSMENT** - Health checkups
- Body condition score (1-5)
- Health status, notes

---

### 2. Health & Treatment

**TREATMENT_RECORDS** - Vaccinations/medications
- `treatment_id` (VAC-001, VAC-002)
- `livestock_id` - Which animal
- `treatment_name` - FMD Vaccine, Oxytetracycline
- `type` - Vaccine, Antibiotic, Vitamin, Anti-inflammatory, Dewormer
- `category` - Viral, Bacterial, Nutritional
- `dosage` + `unit` (ml, mg, cc)
- `method` - IM, SC, IV, Oral, Topical
- `administered_date`, `administered_by`
- `withdrawal_period_days` - 0, 7, 14, or 21 days
- `next_due_date` - For boosters
- `status` - completed, due-soon, overdue

**TREATMENT_TYPES**
- Vaccine (0 days withdrawal)
- Antibiotic (21 days)
- Vitamin (0 days)
- Anti-inflammatory (7 days)
- Dewormer (14 days)

**TREATMENT_CATEGORIES**
- Viral, Bacterial, Nutritional, Antibiotic, Parasitic

**VACCINE_LIST**
- FMD, Rabies, CDT, Brucellosis
- Target species

**DOSAGE_UNITS** - ml, mg, cc, tablets, g

**ADMINISTRATION_ROUTES** - IM, SC, IV, Oral, Topical

---

### 3. Breeding

**BREEDING_RECORDS** - Breeding events
- **species**: cattle, goat, sheep
- **breeding_date**: Date of breeding (e.g., '2025-09-15')
- **breeding_time**: Time of breeding (e.g., '09:30 AM')
- **method**: Natural or AI (Artificial Insemination)
- **breeding_location**: Specific location (e.g., "Breeding Pen 1", "Goat Paddock", "AI Station")
- **handler_name**: Person who handled/performed the breeding
- **recorded_by**: Person who recorded the event
- **notes**: Observations and additional details

**DAM_INFO**: Mother (female) complete details
- Primary Key: `dam_info_id`
**BREEDING_RECORDS** - Breeding events
- `breeding_id`
- `species` - cattle, goat, sheep
- `breeding_date` + `breeding_time`
- `method` - Natural or AI
- `breeding_location` - Breeding Pen 1, Goat Paddock, AI Station
- `handler_name`, `recorded_by`
- `notes`

**DAM_INFO** - Mother details
- `dam_id`, `dam_name`, `dam_breed`, `dam_age`
- `dam_health_status` - Healthy, Monitor, Sick
- `dam_body_condition` - 1-5 scale
- `heat_signs_observed` - Standing heat, tail wagging, etc.

**SIRE_INFO** - Father details
- `sire_id`, `sire_name`, `sire_breed`, `sire_age`
- `ai_technician` - (AI only)
- `semen_batch` - (AI only)
- `semen_source` - (AI only)

**ACTIVE_SIRES** - Sire performance
- Total breedings, success rate, last breeding date

---

### 4. Alerts

**ALERTS** - System notifications
- `alert_type` - vaccination_due, breeding_checkup, pregnancy_due, withdrawal_ending
- `entity_type` - treatment, breeding, pregnancy
  - `pregnancy_due` - Expected delivery date approaching
  - `withdrawal_ending` - AMR withdrawal period ending soon
  - `withdrawal_ended` - Animal cleared from withdrawal
- **entity_type**: What record type triggered this alert
  - `treatment` - Links to TREATMENT_RECORDS
  - `breeding` - Links to BREEDING_RECORDS
  - `pregnancy` - Links to pregnancy tracking (future)
- **entity_id**: ID of the related record (treatment_id, breeding_id, etc.)
- **priority**: `high`, `medium`, `low` for UI sorting
**ALERTS** - System notifications
- `alert_type` - vaccination_due, breeding_checkup, pregnancy_due, withdrawal_ending
- `entity_type` - treatment, breeding, pregnancy
- `livestock_id` - Which animal
- `priority` - high, medium, low
- `due_date`, `message`
- `is_read`, `is_dismissed`

---

## Sample Data

### Species
| ID | Name | Gestation Days |
|----|------|----------------|
| 1 | Cattle | 283 |
| 2 | Goat | 150 |
| 3 | Sheep | 150 |

### Breeds
| ID | Species | Breed |
|----|---------|-------|
| 1 | Cattle | Brahman |
| 2 | Cattle | Angus |
| 3 | Cattle | Red Sindhi |
| 4 | Goat | Boer |
| 5 | Goat | Anglo-Nubian |
| 6 | Sheep | Dorper |

### Health Status
| ID | Status | Color |
| 2 | Monitor | yellow |
| 3 | Sick | red |
| 4 | In Withdrawal | orange |

### Treatment Types Table
| type_id | type_name | default_withdrawal_days |
|---------|-----------|------------------------|
| 1 | Vaccine | 0 |
| 2 | Antibiotic | 21 |
|----|--------|-------|
| 1 | Healthy | green |
| 2 | Monitor | yellow |
| 3 | Sick | red |
| 4 | In Withdrawal | orange |

### Treatment Types
| ID | Type | Withdrawal Days |
|----|------|-----------------|
| 1 | Vaccine | 0 |
| 2 | Antibiotic | 21 |
| 3 | Vitamin | 0 |
| 4 | Anti-inflammatory | 7 |
| 5 | Dewormer | 14 |

### Treatment Categories
| ID | Category |
|----|----------|
| 1 | Viral |
| 2 | Bacterial |
| 3 | Nutritional |
| 4 | Antibiotic |
| 5 | Parasitic |

### Vaccines
| ID | Name | Category | Target |
|----|------|----------|--------|
| 1 | FMD Vaccine | Viral | Cattle |
| 2 | Rabies Vaccine | Viral | All |
| 3 | CDT Vaccine | Bacterial | Goat, Sheep |
| 4 | Brucellosis Vaccine | Bacterial | Cattle |

### Active Sires
| ID | Name | Species | Breed | Age | Breedings | Success % | Last Bred |
|----|------|---------|-------|-----|-----------|-----------|-----------|
| B-001 | Brahman Bull | Cattle | Brahman | 4y 2m | 8 | 87 | Nov 20 |
| B-002 | Angus Bull | Cattle | Angus | 5y 1m | 6 | 92 | Nov 10 |
| G-001 | Boer Buck | Goat | Boer | 3y 1m | 12 | 83 | Nov 18 |
| S-001 | Dorper Ram | Sheep | Dorper | 4y 0m | 9 | 89 | Nov 15 |

---

## Current Records

### 6 Treatment Records
1. VAC-001: FMD Vaccine (C-023, Brahman Heifer) - completed, no withdrawal
2. VAC-002: Vitamin B Complex (G-019, Boer Doe) - completed, due Dec 10
3. VAC-003: Oxytetracycline/AMR (C-015, Brahman Cow) - completed, 21-day withdrawal ending Dec 1
4. VAC-004: CDT Vaccine (S-005, Dorper Ewe) - completed, due Dec 8
5. VAC-005: Penicillin/AMR (C-008, Brahman Bull) - completed, 21-day withdrawal ending today
6. VAC-006: Rabies Vaccine (G-012, Boer Doe) - overdue

### 5 Breeding Records
1. **ID 1**: C-023 (Brahman Heifer, 4y) × B-001 (Brahman Bull, 5y) - Natural, Sep 15 09:30 AM, Breeding Pen 1, Handler: Marlo Gel
   - Dam: Body condition 3.5, Heat signs: "Standing heat, clear mucus discharge"
2. **ID 2**: G-019 (Boer Maiden Doe, 1.5y) × G-001 (Boer Buck, 3y) - Natural, Oct 5 02:15 PM, Goat Paddock, Handler: Kyle Stephen
   - Dam: Body condition 3, Heat signs: "Tail wagging, vocalization", Notes: "First breeding for maiden doe"
3. **ID 3**: S-005 (Dorper Ewe, 3y) × S-001 (Dorper Ram, 4y) - Natural, Nov 14 10:00 AM, Sheep Paddock, Handler: Laiza Limpin
   - Dam: Body condition 3.5, Heat signs: "Receptive to ram"
4. **ID 4**: C-015 (Brahman Cow, 5y) × B-002 (Angus Bull, 6y) - AI, Sep 20 08:45 AM, AI Station, Technician: Dr. Santos
   - Dam: Body condition 4, Heat signs: "Clear heat signs 12 hours prior"
   - AI Details: Semen batch ANG2024-156, Source: Premium Genetics Co.
5. **ID 5**: G-008 (Boer Doe, 2y) × G-001 (Boer Buck, 3y) - Natural, Nov 21 11:30 AM, Goat Paddock, Handler: Kyle Stephen
   - Dam: Body condition 3.5, Heat signs: "Strong vocalization, tail flagging"

### Alerts
| ID | Type | Animal | Priority | Due | Message |
|----|------|--------|----------|-----|---------|
| 1 | vaccination_overdue | G-012 | high | Nov 15 | Rabies Vaccine overdue |
| 2 | vaccination_due | G-019 | medium | Dec 10 | Vitamin B Complex due in 17 days |
| 3 | withdrawal_ending | C-008 | high | Nov 22 | Withdrawal ends today |
| 4 | pregnancy_due | C-023 | high | Jun 25 | Expected delivery in 7 days |
| 5 | breeding_checkup | G-019 | medium | Dec 4 | Pregnancy check recommended |

---

## Key Features

**Livestock**
- Complete animal records with lineage tracking
- Purchase history and physical assessments
- Health status monitoring

**Health & Treatment**
- Vaccination and medication tracking
- Withdrawal period enforcement (0-21 days)
- AMR compliance - prevents sale during withdrawal
- Auto-calculated withdrawal end dates
- Booster reminders

**Breeding**
- Complete dam/sire details with heat signs
- Body condition scoring (1-5)
- Natural and AI breeding support
- Sire performance tracking
- Expected delivery calculations
- Breeding location and handler tracking

**Alerts**
- Auto-generated notifications
- Vaccination reminders and overdue alerts
- Withdrawal period warnings
- Pregnancy checkup reminders
- Expected delivery alerts

### Alert System
- Automatic alert generation for:
  - Vaccination due dates (7-14 days before)
  - Overdue vaccinations
  - Withdrawal period ending (1-3 days before)
  - Pregnancy checkups (60 days post-breeding)
  - Expected delivery dates (7-14 days before)
- Priority levels for urgent actions
- Read/dismissed status tracking
- Polymorphic linking to treatment/breeding records
