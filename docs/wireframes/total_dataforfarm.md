goat 
KIND / TYPE	DATE   OF ACQUISITION	Average weight per Head (kg)	Price per kg.     (Php P)	BALANCE  LAST		CHANGES THIS MONTH				BALANCE ON 		REMARKS
                MONTH		ADDITION		DEDUCTION		HAND		
                QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	
BUCK		30	200	1						1	6000	
BUCKLING		15	200	0						0	0	
DOE		20	200	19				8		11	44000	deduct 8 hds (swapped 8 hds doe to 8 hds maiden doe from Mr. Boyet Salansang)
MAIDEN DOE		15	200	3		8				11	33000	add 8 hds (swapped 8 hds doe to 8 hds maiden doe from Mr. Boyet Salansang)
KID				3						3		
TOTAL				26						26	83000	


sheep
KIND / TYPE	DATE   OF ACQUISITION	Average weight per Head (kg)	Price per kg. (Php P)	BALANCE  LAST		CHANGES THIS MONTH				BALANCE ON 		REMARKS
                MONTH		ADDITION		DEDUCTION		HAND		
                QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	
RAM		30	200	1						1	6000	
BUCKLING		15	200	0						0	0	
EWE		20	200	8						8	32000	
MAIDEN EWE		15	200	3						3	9000	
LAMB				4						4	-	
TOTAL				16						16	47000	

KIND / TYPE	DATE   OF ACQUISITION	Average  weight per Head (kg)	Price per kg. (Php P)	BALANCE  LAST		CHANGES THIS MONTH				BALANCE ON 		REMARKS
                MONTH		ADDITION		DEDUCTION		HAND		
                QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	QTY.	VALUE	
BULL		350	130	2						2	91000	
YEARLING BULL		180	130	-		5		4		1	23400	sold 4 hds yearling bulls to Mr. Boyet Salansang
COW		250	130	11						11	357500	
HEIFER		150	130	5		3				8	156000	
CALF		10000/hd		11				8		3	30000	
TOTAL				29						25	657900	


ERD CHECK PLS
---
config:
  layout: elk
---
erDiagram
    %% ===============================
    %% USERS MODULE
    %% ===============================
    USERS {
        INT user_id PK
        VARCHAR name
        VARCHAR email
        VARCHAR password_hash
        INT role_id FK
    }

    ROLES {
        INT role_id PK
        VARCHAR role_name
        VARCHAR description
    }

    ALERT_TYPES {
        INT alert_type_id PK
        VARCHAR alert_name
    }

    ALERTS {
        INT alert_id PK
        INT livestock_id FK
        INT user_id FK
        INT alert_type_id FK
        TEXT message
        DATETIME date_issued
        VARCHAR status
    }

    %% ===============================
    %% LIVESTOCK MODULE
    %% ===============================
    SPECIES {
        INT species_id PK
        VARCHAR species_name
    }

    BREEDS {
        INT breed_id PK
        INT species_id FK
        VARCHAR breed_name
    }

    HEALTH_STATUS {
        INT status_id PK
        VARCHAR status_name
    }

    LIVESTOCK {
        INT livestock_id PK
        INT species_id FK
        INT breed_id FK
        VARCHAR sex
        DATE date_of_birth
        VARCHAR birth_type
        DECIMAL birth_weight
        DECIMAL current_weight
        VARCHAR color_marking
        INT status_id FK
        TEXT notes
    }

    SELLERS {
        INT seller_id PK
        VARCHAR seller_name
        VARCHAR seller_contact
        VARCHAR seller_address
    }

    LIVESTOCK_PURCHASE_INFO {
        INT purchase_id PK
        INT livestock_id FK
        INT seller_id FK
        DATE purchase_date
        DECIMAL purchase_price
    }

    LIVESTOCK_PHYSICAL_ASSESSMENT {
        INT assessment_id PK
        INT livestock_id FK
        INT body_condition_score
        INT status_id FK
        TEXT assessment_notes
    }

    ACTIVITY_TYPES {
        INT activity_type_id PK
        VARCHAR activity_name
    }

    LIVESTOCK_ACTIVITY_HISTORY {
        INT activity_id PK
        INT livestock_id FK
        INT activity_type_id FK
        TEXT details
        INT performed_by FK
        DATETIME date_performed
    }

    LIVESTOCK_WEIGHT_CHECKS {
        INT weight_check_id PK
        INT livestock_id FK
        DECIMAL previous_weight
        DECIMAL current_weight
        DECIMAL weight_gain
        DATE check_date
        INT checked_by FK
    }

    DEWORMING_TYPES {
        INT deworming_id PK
        VARCHAR deworming_name
    }

    LIVESTOCK_DEWORMING_RECORDS {
        INT deworming_record_id PK
        INT livestock_id FK
        INT deworming_id FK
        DATE date_administered
        VARCHAR dosage
        INT administered_by FK
    }

    VACCINE_LIST {
        INT vaccine_id PK
        VARCHAR vaccine_name
    }

    LIVESTOCK_VACCINATION_RECORDS {
        INT vaccination_record_id PK
        INT livestock_id FK
        INT vaccine_id FK
        DATE date_administered
        VARCHAR dosage
        INT administered_by FK
    }

    BREEDING_CHECKS {
        INT breeding_check_id PK
        VARCHAR check_name
    }

    BREEDING_LOCATIONS {
        INT location_id PK
        VARCHAR location_name
    }

    LIVESTOCK_BREEDING_CHECKS {
        INT breeding_record_id PK
        INT livestock_id FK
        INT breeding_check_id FK
        INT location_id FK
        DATE check_date
        INT checked_by FK
    }

    LIVESTOCK_HOOF_TRIMMING_RECORDS {
        INT hoof_trim_id PK
        INT livestock_id FK
        DATE trim_date
        INT trimmed_by FK
    }

    %% ===============================
    %% TREATMENT MODULE
    %% ===============================
    TREATMENT_TYPES {
        INT type_id PK
        VARCHAR type_name
    }

    TREATMENT_CATEGORIES {
        INT category_id PK
        VARCHAR category_name
    }

    DOSAGE_UNITS {
        INT unit_id PK
        VARCHAR unit_name
    }

    ADMINISTRATION_ROUTES {
        INT route_id PK
        VARCHAR route_name
    }

    TREATMENT_RECORDS {
        INT treatment_id PK
        INT livestock_id FK
        INT type_id FK
        INT vaccine_id FK
        INT category_id FK
        INT route_id FK
        VARCHAR dosage
        INT dosage_unit FK
        DATE date_administered
        INT administered_by FK
        TEXT notes
    }

    TREATMENT_REMINDERS {
        INT reminder_id PK
        INT treatment_id FK
        DATE next_due_date
        INT remind_before_days
    }

    TREATMENT_BATCH_ITEMS {
        INT batch_item_id PK
        INT treatment_id FK
        INT livestock_id FK
    }

    %% ===============================
    %% BREEDING MODULE
    %% ===============================
    BREEDING_METHODS {
        INT method_id PK
        VARCHAR method_name
    }

    BREEDING_RECORDS {
        INT breeding_id PK
        INT species_id FK
        DATE breeding_date
        VARCHAR type
        INT method_id FK
        INT location_id FK
        INT handler FK
        INT recorder_id FK
        TEXT notes
        VARCHAR status
        DATE expected_check_date
        DATETIME created_at
    }

    DAM_INFO {
        INT dam_info_id PK
        INT breeding_id FK
        INT livestock_id FK
        INT breed_id FK
        INT age
        INT status_id FK
        INT body_condition_score
        VARCHAR heat_signs
    }

    SIRE_INFO {
        INT sire_info_id PK
        INT breeding_id FK
        INT livestock_id FK
        INT breed_id FK
        INT age
    }

    PREGNANCY_CHECKS {
        INT check_id PK
        INT breeding_id FK
        DATE check_date
        VARCHAR result
        INT confirmed_by FK
        TEXT notes
    }

    %% ===============================
    %% RELATIONSHIPS
    %% ===============================
    USERS ||--o{ ALERTS : "creates"
    LIVESTOCK ||--o{ ALERTS : "has"
    ALERT_TYPES ||--o{ ALERTS : "type_of"
    ROLES ||--o{ USERS : "assigned_to"

    SPECIES ||--o{ LIVESTOCK : "type_of"
    BREEDS ||--o{ LIVESTOCK : "breed_of"
    HEALTH_STATUS ||--o{ LIVESTOCK : "health_status"
    HEALTH_STATUS ||--o{ LIVESTOCK_PHYSICAL_ASSESSMENT : "health_status"
    SELLERS ||--o{ LIVESTOCK_PURCHASE_INFO : "seller"
    LIVESTOCK ||--o{ LIVESTOCK_PURCHASE_INFO : "purchase_info"
    ACTIVITY_TYPES ||--o{ LIVESTOCK_ACTIVITY_HISTORY : "activity_type"
    LIVESTOCK ||--o{ LIVESTOCK_ACTIVITY_HISTORY : "activities"
    LIVESTOCK ||--o{ LIVESTOCK_WEIGHT_CHECKS : "weight_checks"
    USERS ||--o{ LIVESTOCK_WEIGHT_CHECKS : "checked_by"
    DEWORMING_TYPES ||--o{ LIVESTOCK_DEWORMING_RECORDS : "deworming_type"
    LIVESTOCK ||--o{ LIVESTOCK_DEWORMING_RECORDS : "dewormings"
    VACCINE_LIST ||--o{ LIVESTOCK_VACCINATION_RECORDS : "vaccine_used"
    LIVESTOCK ||--o{ LIVESTOCK_VACCINATION_RECORDS : "vaccinations"
    BREEDING_CHECKS ||--o{ LIVESTOCK_BREEDING_CHECKS : "check_type"
    BREEDING_LOCATIONS ||--o{ LIVESTOCK_BREEDING_CHECKS : "breeding_location"
    LIVESTOCK ||--o{ LIVESTOCK_BREEDING_CHECKS : "breeding_checks"
    LIVESTOCK ||--o{ LIVESTOCK_HOOF_TRIMMING_RECORDS : "hoof_trims"
    USERS ||--o{ LIVESTOCK_ACTIVITY_HISTORY : "performed_by"
    USERS ||--o{ LIVESTOCK_DEWORMING_RECORDS : "administered_by"
    USERS ||--o{ LIVESTOCK_VACCINATION_RECORDS : "administered_by"
    USERS ||--o{ LIVESTOCK_BREEDING_CHECKS : "checked_by"
    USERS ||--o{ LIVESTOCK_HOOF_TRIMMING_RECORDS : "trimmed_by"
    USERS ||--o{ TREATMENT_RECORDS : "administered_by"
    TREATMENT_TYPES ||--o{ TREATMENT_RECORDS : "type_of"
    VACCINE_LIST ||--o{ TREATMENT_RECORDS : "vaccine_used"
    TREATMENT_CATEGORIES ||--o{ TREATMENT_RECORDS : "category_of"
    DOSAGE_UNITS ||--o{ TREATMENT_RECORDS : "measured_in"
    ADMINISTRATION_ROUTES ||--o{ TREATMENT_RECORDS : "administered_via"
    TREATMENT_RECORDS ||--o{ TREATMENT_REMINDERS : "reminded_by"
    TREATMENT_RECORDS ||--o{ TREATMENT_BATCH_ITEMS : "batch_item"

    BREEDING_METHODS ||--o{ BREEDING_RECORDS : "method_used"
    BREEDING_RECORDS ||--o{ DAM_INFO : "has_dam"
    BREEDING_RECORDS ||--o{ SIRE_INFO : "has_sire"
    BREEDING_RECORDS ||--o{ PREGNANCY_CHECKS : "checked_by"
    LIVESTOCK ||--o{ DAM_INFO : "is_dam"
    LIVESTOCK ||--o{ SIRE_INFO : "is_sire"
    USERS ||--o{ BREEDING_RECORDS : "handler"
    USERS ||--o{ BREEDING_RECORDS : "recorder_id"
    USERS ||--o{ PREGNANCY_CHECKS : "confirmed_by"
