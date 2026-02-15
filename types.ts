import React from 'react';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Design' | 'Development' | 'Strategy' | 'Marketing';
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export enum ProcessStep {
  Discovery = 'Discovery',
  Strategy = 'Strategy',
  Design = 'Design',
  Development = 'Development',
  Launch = 'Launch'
}