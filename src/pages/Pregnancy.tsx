import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart,
  Calendar,
  Search,
  Eye,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface PregnancyRecord {
  id: number;
  species: string;
  breedingDate: string;
  expectedDueDate: string;
  daysPregnant: number;
  gestationProgress: number;
  damId: string;
  damName: string;
  damBreed: string;
  sireId: string;
  sireName: string;
  pregnancyStatus: 'Early' | 'Mid' | 'Late' | 'Overdue';
  lastCheckup: string;
  healthStatus: 'Good' | 'Attention Needed' | 'Critical';
  notes: string;
}

export default function Pregnancy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock pregnancy data - Only CONFIRMED breeding records that have passed 3 months (90 days)
  // In production, this would filter breeding records where:
  // 1. status === 'Confirmed' 
  // 2. Days since breeding >= 90 days
  // 3. Not yet given birth
  const [pregnancies, setPregnancies] = useState<PregnancyRecord[]>([
    {
      id: 2, // From BreedingOverview - G-019 breeding record
      species: 'Goat',
      breedingDate: '2024-10-05', // Confirmed breeding from Oct 5
      expectedDueDate: '2025-03-05', // Goat gestation: ~150 days
      daysPregnant: 142, // 142 days since breeding (passed 3 months/90 days)
      gestationProgress: 95, // 142/150 = 95%
      damId: 'G-019',
      damName: 'Boer Maiden Doe',
      damBreed: 'Boer',
      sireId: 'G-001',
      sireName: 'Boer Buck',
      pregnancyStatus: 'Late',
      lastCheckup: '1 day ago',
      healthStatus: 'Good',
      notes: 'Confirmed pregnancy at 90 days. First pregnancy. Preparing for kidding. Moved to maternity pen.'
    }
  ]);

  // Filter pregnancies
  const filteredPregnancies = pregnancies.filter(pregnancy => {
    const matchesSearch = 
      pregnancy.damId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pregnancy.damName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pregnancy.sireId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecies = filterSpecies === 'all' || pregnancy.species.toLowerCase() === filterSpecies;
    const matchesStatus = filterStatus === 'all' || pregnancy.pregnancyStatus.toLowerCase() === filterStatus;

    return matchesSearch && matchesSpecies && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Early':
        return 'bg-blue-100 text-blue-800';
      case 'Mid':
        return 'bg-amber-100 text-amber-800';
      case 'Late':
        return 'bg-purple-100 text-purple-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'Good':
        return 'bg-emerald-100 text-emerald-800';
      case 'Attention Needed':
        return 'bg-amber-100 text-amber-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  // Summary stats
  const totalPregnancies = pregnancies.length;
  const earlyStage = pregnancies.filter(p => p.pregnancyStatus === 'Early').length;
  const midStage = pregnancies.filter(p => p.pregnancyStatus === 'Mid').length;
  const lateStage = pregnancies.filter(p => p.pregnancyStatus === 'Late').length;
  const overdue = pregnancies.filter(p => p.pregnancyStatus === 'Overdue').length;
  const needsAttention = pregnancies.filter(p => p.healthStatus !== 'Good').length;
  const dueThisMonth = pregnancies.filter(p => {
    const dueDate = new Date(p.expectedDueDate);
    const today = new Date();
    return dueDate.getMonth() === today.getMonth() && dueDate.getFullYear() === today.getFullYear();
  }).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Pregnancy Monitoring</h1>
          <p className="text-sm text-slate-600 mt-1">
            Track confirmed pregnancies (90+ days) and monitor expected birth dates
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">
            Gestation Periods: Cattle ~283 days | Goat ~150 days | Sheep ~147 days
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Confirmed</p>
              <p className="text-2xl font-semibold text-slate-900 mt-1">{totalPregnancies}</p>
            </div>
            <div className="p-3 bg-primary-50 rounded-lg">
              <Heart className="text-primary-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">90+ days pregnant</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Due This Month</p>
              <p className="text-2xl font-semibold text-purple-600 mt-1">{dueThisMonth}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Calendar className="text-purple-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Expected births</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Early Stage</p>
              <p className="text-2xl font-semibold text-blue-600 mt-1">{earlyStage}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Clock className="text-blue-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">3-6 months</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Mid Stage</p>
              <p className="text-2xl font-semibold text-amber-600 mt-1">{midStage}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Calendar className="text-amber-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">6-8 months</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Late Stage</p>
              <p className="text-2xl font-semibold text-purple-600 mt-1">{lateStage}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <CheckCircle className="text-purple-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Ready to birth</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Need Attention</p>
              <p className="text-2xl font-semibold text-red-600 mt-1">{needsAttention + overdue}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <AlertCircle className="text-red-600" size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Health or overdue</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by dam or sire ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Species Filter */}
          <select
            value={filterSpecies}
            onChange={(e) => setFilterSpecies(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Species</option>
            <option value="cattle">Cattle</option>
            <option value="goat">Goat</option>
            <option value="sheep">Sheep</option>
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Stages</option>
            <option value="early">Early Stage</option>
            <option value="mid">Mid Stage</option>
            <option value="late">Late Stage</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      {/* Pregnancy Records Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Dam Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Sire Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Breeding Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Expected Due
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Stage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Health
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Last Checkup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredPregnancies.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-sm text-slate-500">
                    No pregnancy records found
                  </td>
                </tr>
              ) : (
                filteredPregnancies.map((pregnancy) => (
                  <tr key={pregnancy.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-slate-900">{pregnancy.damId}</div>
                        <div className="text-sm text-slate-600">{pregnancy.damName}</div>
                        <div className="text-xs text-slate-500">{pregnancy.damBreed}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-slate-900">{pregnancy.sireId}</div>
                        <div className="text-sm text-slate-600">{pregnancy.sireName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">
                        {new Date(pregnancy.breedingDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="text-xs text-slate-500">{pregnancy.daysPregnant} days ago</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">
                        {new Date(pregnancy.expectedDueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-slate-200 rounded-full h-2 w-20">
                          <div
                            className={`h-2 rounded-full ${
                              pregnancy.gestationProgress >= 100 ? 'bg-red-500' : 'bg-primary-500'
                            }`}
                            style={{ width: `${Math.min(pregnancy.gestationProgress, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {pregnancy.gestationProgress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(pregnancy.pregnancyStatus)}`}>
                        {pregnancy.pregnancyStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getHealthStatusColor(pregnancy.healthStatus)}`}>
                        {pregnancy.healthStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-600">{pregnancy.lastCheckup}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={`/breeding/${pregnancy.id}`}
                        className="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700"
                      >
                        <Eye size={16} />
                        <span className="text-sm">View</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
