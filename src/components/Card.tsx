import React from 'react';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({ title, subtitle, children, footer, className = '', noPadding = false }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow hover:shadow-md transition-shadow ${className}`}>
      {(title || subtitle) && (
        <div className="p-6 border-b border-slate-200">
          {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      {footer && (
        <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
  icon?: string;
  onClick?: () => void;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  subtitle, 
  icon,
  onClick 
}: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-slate-600',
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={`p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left w-full ${
        onClick ? 'cursor-pointer hover:border-green-500 border-2 border-transparent' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-medium text-slate-600">{title}</h3>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
      {change && (
        <p className={`text-sm ${changeColors[changeType]} font-medium`}>{change}</p>
      )}
      {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
    </Component>
  );
}
