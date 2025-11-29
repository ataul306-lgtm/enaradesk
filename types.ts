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