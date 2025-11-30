import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  imageSrc: string;
}

export interface Post {
  id: string;
  title: string;
  categoryId: string; // matches the ID in ResourcesGrid (e.g., 'marketing-tools')
  categoryName: string; // Display name (e.g., 'Marketing Tools')
  status: 'Published' | 'Draft';
  date: string;
}
