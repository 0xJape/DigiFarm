import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Plus, CheckCircle } from 'lucide-react';

export default function AddLivestock() {
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = React.useState(false);
  const [showAddBreed, setShowAddBreed] = React.useState(false);
  const [newBreedName, setNewBreedName] = React.useState('');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  
  // Mock breed data - organized by species
  const [breedsBySpecies, setBreedsBySpecies] = React.useState({
    Cattle: ['Bull', 'Yearling Bull', 'Cow', 'Heifer'],
    Goat: ['Buck', 'Buckling', 'Doe', 'Maiden Doe'],
    Sheep: ['Ram', 'Buckling', 'Ewe', 'Maiden Ewe']
  });

  const [formData, setFormData] = React.useState({
    // Basic Registration Information
    livestockId: '',
    species: '',
    breed: '',
    sex: '',
    dateOfBirth: '',
    birthWeight: '',
    currentWeight: '',
    colorMarkings: '',
    status: 'Active',
    notes: '',
    // Purchase Information (if bought from others)
    isPurchased: false,
    sellerName: '',
    sellerContact: '',
    sellerAddress: '',
    purchaseDate: '',
    purchasePrice: '',
    // Physical Assessment (applicable for all)
    bodyConditionScore: '',
    healthStatus: '',
    assessmentNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Reset breed when species changes
    if (name === 'species') {
      setFormData({
        ...formData,
        [name]: value,
        breed: '' // Clear breed selection when species changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddNewBreed = () => {
    if (newBreedName.trim() && formData.species) {
      setBreedsBySpecies({
        ...breedsBySpecies,
        [formData.species]: [...breedsBySpecies[formData.species as keyof typeof breedsBySpecies], newBreedName.trim()]
      });
      setFormData({
        ...formData,
        breed: newBreedName.trim()
      });
      setNewBreedName('');
      setShowAddBreed(false);
    }
  };

  // Get available breeds based on selected species
  const availableBreeds = formData.species ? breedsBySpecies[formData.species as keyof typeof breedsBySpecies] || [] : [];

  const handlePurchaseToggle = () => {
    setIsPurchased(!isPurchased);
    setFormData({
      ...formData,
      isPurchased: !isPurchased
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
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
      type: 'New Livestock Added',
      livestockId: formData.livestockId,
      species: formData.species,
      breed: formData.breed,
      timestamp: timestamp,
      data: formData,
      performedBy: 'Current User'
    });
    
    setShowSuccessModal(true);
    
    // Auto-navigate after 2 seconds
    setTimeout(() => {
      navigate('/livestock');
    }, 2000);
  };

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
            <h1 className="text-2xl font-semibold text-slate-900">Add New Livestock</h1>
            <p className="text-sm text-slate-600 mt-1">Enter the details of the new animal</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Livestock Basic Information */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Livestock ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="livestockId"
                value={formData.livestockId}
                onChange={handleInputChange}
                placeholder="A-001"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Species <span className="text-red-500">*</span>
              </label>
              <select
                name="species"
                value={formData.species}
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
              {!formData.species ? (
                <div className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-400 text-sm">
                  Please select a species first
                </div>
              ) : !showAddBreed ? (
                <div className="flex space-x-2">
                  <select
                    name="breed"
                    value={formData.breed}
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
                value={formData.sex}
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
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Birth Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="birthWeight"
                value={formData.birthWeight}
                onChange={handleInputChange}
                placeholder="35.5"
                step="0.1"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Current Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="currentWeight"
                value={formData.currentWeight}
                onChange={handleInputChange}
                placeholder="450.0"
                step="0.1"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Color/Markings
              </label>
              <input
                type="text"
                name="colorMarkings"
                value={formData.colorMarkings}
                onChange={handleInputChange}
                placeholder="Black and white spots"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="Active">Active</option>
                <option value="Sold">Sold</option>
                <option value="Culled">Culled</option>
                <option value="Deceased">Deceased</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                placeholder="Additional information about the animal..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section 1.5: Purchase Information */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Purchase Information</h2>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPurchased}
                onChange={handlePurchaseToggle}
                className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-2 focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-slate-700">Purchased from external seller</span>
            </label>
          </div>

          {isPurchased ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Seller Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleInputChange}
                  placeholder="Juan dela Cruz"
                  required={isPurchased}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Seller Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="sellerContact"
                  value={formData.sellerContact}
                  onChange={handleInputChange}
                  placeholder="0912-345-6789"
                  required={isPurchased}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Seller Address
                </label>
                <input
                  type="text"
                  name="sellerAddress"
                  value={formData.sellerAddress}
                  onChange={handleInputChange}
                  placeholder="Brgy. Tambler, General Santos City"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Purchase Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleInputChange}
                  required={isPurchased}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Purchase Price (PHP ₱)
                </label>
                <input
                  type="number"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleInputChange}
                  placeholder="25000.00"
                  step="0.01"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">
              Check the box above if this animal was purchased from an external seller
            </p>
          )}
        </div>

        {/* Physical Assessment (applicable for all animals) */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Physical Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Body Condition Score (1-6)
              </label>
              <input
                type="number"
                name="bodyConditionScore"
                value={formData.bodyConditionScore}
                onChange={handleInputChange}
                placeholder="3.5"
                min="1"
                max="6"
                step="0.5"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-xs text-slate-500 mt-1">1=Very Thin, 3=Average, 6=Very Fat</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                General Health Status
              </label>
              <select
                name="healthStatus"
                value={formData.healthStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select health status</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Physical Assessment Notes
              </label>
              <textarea
                name="assessmentNotes"
                value={formData.assessmentNotes}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any notable physical characteristics, visible health conditions, or observations..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pb-6">
          <Link
            to="/livestock"
            className="px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
          >
            <Save size={18} />
            <span>Save Livestock</span>
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center animate-fade-in">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Livestock Added Successfully!
            </h3>
            <p className="text-sm text-slate-600 mb-1">
              <span className="font-semibold">{formData.livestockId}</span> has been registered
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Activity has been logged and you will be redirected shortly.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => navigate('/livestock')}
                className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                Go to Livestock List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
