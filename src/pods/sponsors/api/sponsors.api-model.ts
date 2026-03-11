import type { Media } from '@content-island/api-client';

export type SponsorTierApiModel = 'Platinium' | 'Gold' | 'Silver';

export interface SponsorItemApiModel {
  id: string;
  language: 'en';
  lastUpdate: string;
  name: string;
  logo?: Media;
  websiteUrl: string;
  tier: SponsorTierApiModel;
}

export interface SponsorsSectionApiModel {
  id: string;
  title: string;
  description: string;
  SponsorItems: SponsorItemApiModel[];
  ctaText: string;
  ctaUrl: string;
}

