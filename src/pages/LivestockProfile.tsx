import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Weight, 
  Activity,
  Heart,
  Syringe,
  Baby,
  FileText,
  Edit,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  User,
  Phone,
  Home,
  DollarSign,
  Save,
  Plus,
  Download
} from 'lucide-react';

// Mock data - only A-001 for UI/UX demonstration
const mockAnimalData = {
  'A-001': {
    // Basic Information
    livestockId: 'A-001',
    species: 'Cattle',
    breed: 'Holstein',
    sex: 'Female',
    dateOfBirth: '2022-03-15',
    age: '3y 2m',
    birthType: 'Single',
    initialWeight: 35.5,
    currentWeight: 450.0,
    colorMarkings: 'Black and white spots',
    status: 'Active',
    notes: 'Excellent milk producer, gentle temperament',
    
    // Purchase Information
    isPurchased: true,
    sellerName: 'Juan dela Cruz',
    sellerContact: '0912-345-6789',
    sellerAddress: 'Brgy. Tambler, General Santos City',
    purchaseDate: '2022-03-20',
    purchasePrice: 25000.00,
    
    // Physical Condition & Assessment
    calfVigor: 'Strong',
    calvingProblem: 'None',
    bodyConditionScore: 3.5,
    pregnancyEligibility: 'Open (Ready for Breeding)',
    weaningDate: '2022-09-15',
    managementDecision: 'Keep',
    
    // Health Records
    lastCheckup: '2 days ago',
    healthStatus: 'Healthy',
    vaccinations: [
      { name: 'FMD Vaccine', date: '2024-10-15', nextDue: '2025-04-15', administeredBy: 'Dr. Santos' },
      { name: 'Brucellosis', date: '2024-09-20', nextDue: '2025-09-20', administeredBy: 'Dr. Cruz' },
    ],
    medications: [
      { name: 'Deworming (Ivermectin)', date: '2024-11-01', dosage: '10ml', withdrawalPeriod: '28 days' },
    ],
    
    // Activity History
    activities: [
      { type: 'Weight Check', date: '2024-11-15', description: 'Weight recorded: 450kg (Previous: 445kg, Gain: +5kg over 30 days)', by: 'Farm Staff - Marlo Gel' },
      { type: 'Vaccination', date: '2024-10-15', description: 'FMD Vaccine (Foot-and-Mouth Disease) administered - Dose: 5ml intramuscular, Batch #FM2024-087, Next due: April 15, 2025', by: 'Dr. Santos' },
      { type: 'Deworming', date: '2024-11-01', description: 'Ivermectin administered - Dose: 10ml subcutaneous, withdrawal period: 28 days, Next scheduled: November 29, 2025', by: 'Dr. Cruz' },
      { type: 'Breeding Check', date: '2024-10-01', description: 'Reproductive examination - Confirmed ready for breeding, body condition score adequate (3.5), estrus cycle normal', by: 'Dr. Cruz' },
      { type: 'Vaccination', date: '2024-09-20', description: 'Brucellosis vaccine administered - Dose: 2ml subcutaneous, Batch #BR2024-156, Next due: September 20, 2025', by: 'Dr. Cruz' },
      { type: 'Hoof Trimming', date: '2024-09-10', description: 'Hoof trimming performed - All hooves in good condition, no signs of lameness or infection', by: 'Farm Staff - Kyle' },
      { type: 'Weight Check', date: '2024-08-15', description: 'Weight recorded: 445kg (Previous: 438kg, Gain: +7kg over 30 days)', by: 'Farm Staff - Marlo Gel' },
    ]
  }
};

export default function LivestockProfile() {
  const { id } = useParams<{ id: string }>();
  const animal = mockAnimalData[id as keyof typeof mockAnimalData];
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showAddBreed, setShowAddBreed] = React.useState(false);
  const [newBreedName, setNewBreedName] = React.useState('');
  
  // Mock breed data - organized by species
  const [breedsBySpecies, setBreedsBySpecies] = React.useState({
    Cattle: ['Bull', 'Yearling Bull', 'Cow', 'Heifer'],
    Goat: ['Buck', 'Buckling', 'Doe', 'Maiden Doe'],
    Sheep: ['Ram', 'Buckling', 'Ewe', 'Maiden Ewe']
  });
  
  const [editFormData, setEditFormData] = React.useState({
    livestockId: '',
    species: '',
    breed: '',
    sex: '',
    dateOfBirth: '',
    birthType: '',
    currentWeight: '',
    colorMarkings: '',
    status: '',
    notes: '',
    bodyConditionScore: '',
    healthStatus: '',
  });

  // Initialize form data when animal is loaded or modal opens
  React.useEffect(() => {
    if (animal && isEditModalOpen) {
      setEditFormData({
        livestockId: animal.livestockId,
        species: animal.species,
        breed: animal.breed,
        sex: animal.sex,
        dateOfBirth: animal.dateOfBirth,
        birthType: animal.birthType,
        currentWeight: animal.currentWeight.toString(),
        colorMarkings: animal.colorMarkings,
        status: animal.status,
        notes: animal.notes,
        bodyConditionScore: animal.bodyConditionScore.toString(),
        healthStatus: animal.healthStatus,
      });
    }
  }, [animal, isEditModalOpen]);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setShowAddBreed(false);
    setNewBreedName('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Reset breed when species changes
    if (name === 'species') {
      setEditFormData({
        ...editFormData,
        [name]: value,
        breed: '' // Clear breed selection when species changes
      });
    } else {
      setEditFormData({
        ...editFormData,
        [name]: value
      });
    }
  };

  const handleAddNewBreed = () => {
    if (newBreedName.trim() && editFormData.species) {
      setBreedsBySpecies({
        ...breedsBySpecies,
        [editFormData.species]: [...breedsBySpecies[editFormData.species as keyof typeof breedsBySpecies], newBreedName.trim()]
      });
      setEditFormData({
        ...editFormData,
        breed: newBreedName.trim()
      });
      setNewBreedName('');
      setShowAddBreed(false);
    }
  };

  // Get available breeds based on selected species
  const availableBreeds = editFormData.species ? breedsBySpecies[editFormData.species as keyof typeof breedsBySpecies] || [] : [];

  const handleExportProfile = () => {
    if (!animal) return;
    
    // Create printable HTML content focused on vaccination history
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Livestock Vaccination Record - ${animal.livestockId}</title>
        <style>
          @page { margin: 2cm; }
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333;
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #059669;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #059669;
            margin: 0 0 5px 0;
            font-size: 24px;
          }
          .header p {
            margin: 5px 0;
            color: #666;
            font-size: 12px;
          }
          .section {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .section-title {
            background: #059669;
            color: white;
            padding: 10px 15px;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 20px;
          }
          .info-item {
            padding: 8px;
            background: #f9fafb;
            border-left: 3px solid #059669;
          }
          .info-label {
            font-weight: bold;
            color: #059669;
            font-size: 12px;
            text-transform: uppercase;
          }
          .info-value {
            color: #333;
            font-size: 14px;
          }
          .vaccine-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          .vaccine-table th {
            background: #059669;
            color: white;
            padding: 12px;
            text-align: left;
            font-size: 13px;
          }
          .vaccine-table td {
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
            font-size: 13px;
          }
          .vaccine-table tr:nth-child(even) {
            background: #f9fafb;
          }
          .vaccine-detail {
            background: white;
            border: 1px solid #e5e7eb;
            padding: 15px;
            margin-bottom: 15px;
            page-break-inside: avoid;
          }
          .vaccine-detail h3 {
            color: #059669;
            margin: 0 0 10px 0;
            font-size: 16px;
            border-bottom: 2px solid #059669;
            padding-bottom: 5px;
          }
          .vaccine-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .vaccine-info-item {
            font-size: 13px;
          }
          .vaccine-info-item strong {
            color: #059669;
            display: block;
            margin-bottom: 3px;
          }
          .activity-item {
            padding: 12px;
            border-left: 3px solid #059669;
            background: #f9fafb;
            margin-bottom: 10px;
            page-break-inside: avoid;
          }
          .activity-date {
            color: #059669;
            font-weight: bold;
            font-size: 13px;
          }
          .activity-type {
            font-weight: bold;
            color: #333;
            font-size: 14px;
            margin: 5px 0;
          }
          .activity-desc {
            color: #666;
            font-size: 13px;
            margin: 5px 0;
          }
          .activity-by {
            color: #666;
            font-size: 12px;
            font-style: italic;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #666;
            font-size: 11px;
          }
          .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
          }
          .status-healthy {
            background: #d1fae5;
            color: #065f46;
          }
          @media print {
            body { margin: 0; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>LIVESTOCK VACCINATION & HEALTH RECORD</h1>
          <p><strong>Livestock ID:</strong> ${animal.livestockId}</p>
          <p>Generated on ${new Date().toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>

        <div class="section">
          <div class="section-title">Basic Information</div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Species</div>
              <div class="info-value">${animal.species}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Breed</div>
              <div class="info-value">${animal.breed}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Sex</div>
              <div class="info-value">${animal.sex}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Date of Birth</div>
              <div class="info-value">${animal.dateOfBirth} (${animal.age})</div>
            </div>
            <div class="info-item">
              <div class="info-label">Current Weight</div>
              <div class="info-value">${animal.currentWeight} kg</div>
            </div>
            <div class="info-item">
              <div class="info-label">Health Status</div>
              <div class="info-value">
                <span class="status-badge status-healthy">${animal.healthStatus}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Vaccination History</div>
          ${animal.vaccinations.map((vacc, i) => `
            <div class="vaccine-detail">
              <h3>${i + 1}. ${vacc.name}</h3>
              <div class="vaccine-info">
                <div class="vaccine-info-item">
                  <strong>Date Administered</strong>
                  ${vacc.date}
                </div>
                <div class="vaccine-info-item">
                  <strong>Next Due Date</strong>
                  ${vacc.nextDue}
                </div>
                <div class="vaccine-info-item">
                  <strong>Administered By</strong>
                  ${vacc.administeredBy}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <div class="section-title">Medication History</div>
          <table class="vaccine-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Date</th>
                <th>Dosage</th>
                <th>Withdrawal Period</th>
              </tr>
            </thead>
            <tbody>
              ${animal.medications.map(med => `
                <tr>
                  <td><strong>${med.name}</strong></td>
                  <td>${med.date}</td>
                  <td>${med.dosage}</td>
                  <td>${med.withdrawalPeriod}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="section">
          <div class="section-title">Health & Vaccination Activity Log</div>
          ${animal.activities
            .filter(activity => 
              activity.type === 'Vaccination' || 
              activity.type === 'Deworming' || 
              activity.type === 'Health Check' ||
              activity.type === 'Breeding Check'
            )
            .map(activity => `
              <div class="activity-item">
                <div class="activity-date">${activity.date}</div>
                <div class="activity-type">${activity.type}</div>
                <div class="activity-desc">${activity.description}</div>
                <div class="activity-by">Performed by: ${activity.by}</div>
              </div>
            `).join('')}
        </div>

        <div class="footer">
          <p><strong>DigiFarm Livestock Management System</strong></p>
          <p>This is an official livestock health and vaccination record</p>
        </div>
      </body>
      </html>
    `;

    // Open print dialog
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Wait for content to load then trigger print dialog
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 250);
      };
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    console.log('Saving changes:', editFormData);
    
    // Log activity
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    console.log('Activity Log:', {
      type: 'Livestock Information Updated',
      livestockId: editFormData.livestockId,
      timestamp: timestamp,
      changes: editFormData,
      performedBy: 'Current User'
    });
    
    setIsEditModalOpen(false);
    setShowSuccessModal(true);
    
    // Auto-hide success modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
    // In a real app, you would update the animal data here
  };

  if (!animal) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertCircle size={48} className="text-slate-400 mb-4" />
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Animal Not Found</h2>
        <p className="text-slate-600 mb-6">The livestock record you're looking for doesn't exist.</p>
        <Link
          to="/livestock"
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Livestock</span>
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Active': return 'bg-primary-50 text-primary-700 border-primary-200';
      case 'Sold': return 'bg-slate-50 text-slate-700 border-slate-200';
      case 'Deceased': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Healthy':
      case 'Active':
        return CheckCircle;
      default:
        return AlertCircle;
    }
  };

  const StatusIcon = getStatusIcon(animal.healthStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/livestock"
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </Link>
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold text-slate-900">Livestock ID: {animal.livestockId}</h1>
              <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(animal.status)}`}>
                <StatusIcon size={12} />
                <span>{animal.status}</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {animal.breed} • {animal.species} • {animal.sex}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleExportProfile}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            <Download size={16} />
            <span>Export Profile</span>
          </button>
          <button 
            onClick={handleEditClick}
            className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Edit size={16} />
            <span>Edit</span>
          </button>
        </div>
      </div>

      {/* Health Alert Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-amber-900">Scheduled Deworming Due</h3>
            <p className="text-sm text-amber-800 mt-1">
              This animal is due for deworming treatment on <span className="font-semibold">November 29, 2025</span> (7 days from now)
            </p>
            <div className="mt-3 flex items-center space-x-3">
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Livestock ID</p>
                <p className="text-sm font-semibold text-slate-900">{animal.livestockId}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Species</p>
                <p className="text-sm text-slate-900">{animal.species}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Breed</p>
                <p className="text-sm text-slate-900">{animal.breed}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Sex</p>
                <p className="text-sm text-slate-900">{animal.sex}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Date of Birth</p>
                <p className="text-sm text-slate-900">{new Date(animal.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Age</p>
                <p className="text-sm text-slate-900">{animal.age}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Birth Type</p>
                <p className="text-sm text-slate-900">{animal.birthType}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Initial Weight</p>
                <p className="text-sm text-slate-900">{animal.initialWeight} kg</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Current Weight</p>
                <p className="text-sm font-semibold text-slate-900">{animal.currentWeight} kg</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Color / Markings</p>
                <p className="text-sm text-slate-900">{animal.colorMarkings}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Status</p>
                <p className="text-sm text-slate-900">{animal.status}</p>
              </div>
              {animal.notes && (
                <div className="col-span-2">
                  <p className="text-xs font-medium text-slate-500 mb-1">Notes</p>
                  <p className="text-sm text-slate-700">{animal.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Purchase Information Card (if applicable) */}
          {animal.isPurchased && (
            <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                <DollarSign size={20} className="text-amber-600" />
                <span>Purchase Information</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1 flex items-center space-x-1">
                    <User size={12} />
                    <span>Seller Name</span>
                  </p>
                  <p className="text-sm text-slate-900">{animal.sellerName}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1 flex items-center space-x-1">
                    <Phone size={12} />
                    <span>Contact Number</span>
                  </p>
                  <p className="text-sm text-slate-900">{animal.sellerContact}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-medium text-slate-500 mb-1 flex items-center space-x-1">
                    <Home size={12} />
                    <span>Address</span>
                  </p>
                  <p className="text-sm text-slate-900">{animal.sellerAddress}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">Purchase Date</p>
                  <p className="text-sm text-slate-900">{new Date(animal.purchaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">Purchase Price</p>
                  <p className="text-sm font-semibold text-slate-900">₱{animal.purchasePrice.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>
          )}

          {/* Physical Condition & Assessment Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Physical Condition & Assessment</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Calf Vigor</p>
                <p className="text-sm text-slate-900">{animal.calfVigor}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Calving Problem</p>
                <p className="text-sm text-slate-900">{animal.calvingProblem}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Body Condition Score</p>
                <p className="text-sm font-semibold text-slate-900">{animal.bodyConditionScore} / 6</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Pregnancy Status</p>
                <p className="text-sm text-slate-900">{animal.pregnancyEligibility}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Weaning Date</p>
                <p className="text-sm text-slate-900">{new Date(animal.weaningDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">Management Decision</p>
                <p className="text-sm font-medium text-primary-600">{animal.managementDecision}</p>
              </div>
            </div>
          </div>

          {/* Health Records Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
              <Heart size={20} className="text-red-500" />
              <span>Health Records</span>
            </h2>
            
            {/* Vaccinations */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Vaccinations</h3>
              <div className="space-y-3">
                {animal.vaccinations.map((vac, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{vac.name}</p>
                        <p className="text-xs text-slate-600 mt-1">
                          Administered: {new Date(vac.date).toLocaleDateString()} by {vac.administeredBy}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-primary-600">
                        Next: {new Date(vac.nextDue).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Recent Medications</h3>
              <div className="space-y-3">
                {animal.medications.map((med, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-medium text-slate-900">{med.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-slate-600">
                        Date: {new Date(med.date).toLocaleDateString()} • Dosage: {med.dosage}
                      </p>
                      <span className="text-xs font-medium text-amber-600">
                        Withdrawal: {med.withdrawalPeriod}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity History Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
              <Activity size={20} className="text-primary-600" />
              <span>Activity History</span>
            </h2>
            <div className="space-y-3">
              {animal.activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-3 border-b border-slate-100 last:border-0">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText size={14} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{activity.type}</p>
                        <p className="text-sm text-slate-700 mt-0.5">{activity.description}</p>
                        <p className="text-xs text-slate-500 mt-1">By {activity.by}</p>
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Quick Stats & Actions */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Health Status</p>
                  <p className="text-sm font-semibold text-slate-900">{animal.healthStatus}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Weight size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Current Weight</p>
                  <p className="text-sm font-semibold text-slate-900">{animal.currentWeight} kg</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-slate-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Weight Gain</p>
                  <p className="text-sm font-semibold text-slate-900">
                    +{(animal.currentWeight - animal.initialWeight).toFixed(1)} kg
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Last Checkup</p>
                  <p className="text-sm font-semibold text-slate-900">{animal.lastCheckup}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                to="/vaccination"
                className="w-full flex items-center space-x-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Syringe size={16} />
                <span>Add Vaccination</span>
              </Link>
              <button className="w-full flex items-center space-x-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                <Weight size={16} />
                <span>Update Weight</span>
              </button>
              <Link
                to="/breeding"
                className="w-full flex items-center space-x-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors"
              >
                <Baby size={16} />
                <span>Breeding Record</span>
              </Link>
            </div>
          </div>

          {/* Weight Progress Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Weight Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-600">Initial</span>
                  <span className="text-xs font-medium text-slate-900">{animal.initialWeight} kg</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-300 rounded-full"
                    style={{ width: '10%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-600">Current</span>
                  <span className="text-xs font-medium text-primary-600">{animal.currentWeight} kg</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-600 rounded-full"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">Growth Rate</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">
                  {((animal.currentWeight - animal.initialWeight) / animal.initialWeight * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Edit Livestock Information</h2>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveChanges} className="p-6 space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Livestock ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="livestockId"
                      value={editFormData.livestockId}
                      onChange={handleInputChange}
                      required
                      disabled
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500 cursor-not-allowed"
                    />
                    <p className="text-xs text-slate-500 mt-1">Livestock ID cannot be changed</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Species <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="species"
                      value={editFormData.species}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select species</option>
                      <option value="Cattle">Cattle</option>
                      <option value="Goat">Goat</option>
                      <option value="Sheep">Sheep</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Breed <span className="text-red-500">*</span>
                    </label>
                    {!editFormData.species ? (
                      <div className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-400 text-sm">
                        Please select a species first
                      </div>
                    ) : !showAddBreed ? (
                      <div className="flex space-x-2">
                        <select
                          name="breed"
                          value={editFormData.breed}
                          onChange={handleInputChange}
                          required
                          className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select breed</option>
                          {availableBreeds.map((breed) => (
                            <option key={breed} value={breed}>{breed}</option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => setShowAddBreed(true)}
                          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center space-x-1"
                        >
                          <Plus size={16} />
                          <span>Add</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newBreedName}
                          onChange={(e) => setNewBreedName(e.target.value)}
                          placeholder="Enter new breed name"
                          className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddNewBreed())}
                        />
                        <button
                          type="button"
                          onClick={handleAddNewBreed}
                          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowAddBreed(false);
                            setNewBreedName('');
                          }}
                          className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Sex <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sex"
                      value={editFormData.sex}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={editFormData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Birth Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="birthType"
                      value={editFormData.birthType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select birth type</option>
                      <option value="Single">Single</option>
                      <option value="Twin">Twin</option>
                      <option value="Triplet">Triplet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Current Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="currentWeight"
                      value={editFormData.currentWeight}
                      onChange={handleInputChange}
                      step="0.1"
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="status"
                      value={editFormData.status}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Active">Active</option>
                      <option value="Sold">Sold</option>
                      <option value="Deceased">Deceased</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Color & Markings
                    </label>
                    <input
                      type="text"
                      name="colorMarkings"
                      value={editFormData.colorMarkings}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Physical Assessment */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Physical Assessment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Body Condition Score (1-5)
                    </label>
                    <input
                      type="number"
                      name="bodyConditionScore"
                      value={editFormData.bodyConditionScore}
                      onChange={handleInputChange}
                      step="0.5"
                      min="1"
                      max="5"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Health Status
                    </label>
                    <select
                      name="healthStatus"
                      value={editFormData.healthStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Healthy">Healthy</option>
                      <option value="Monitor">Monitor</option>
                      <option value="Sick">Sick</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={editFormData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any additional notes or observations..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  <Save size={16} />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center animate-fade-in">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Changes Saved Successfully!
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Livestock information has been updated and activity has been logged.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
