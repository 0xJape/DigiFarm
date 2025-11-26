import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}

export interface StatusBadgeProps {
  status: 'Healthy' | 'Monitor' | 'Sick' | 'Deceased' | string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig: Record<string, { variant: BadgeProps['variant']; icon: string }> = {
    Healthy: { variant: 'success', icon: '🟢' },
    Monitor: { variant: 'warning', icon: '🟡' },
    Sick: { variant: 'error', icon: '🔴' },
    Deceased: { variant: 'default', icon: '⚫' },
  };

  const config = statusConfig[status] || { variant: 'default', icon: '⚪' };

  return (
    <Badge variant={config.variant}>
      <span className="mr-1">{config.icon}</span>
      {status}
    </Badge>
  );
}
