import type { JSX } from 'react';

export interface FeatureCard {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface TipItem {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface GameItem {
  icon: JSX.Element;
  title: string;
  desc: string;
  tag: string;
}
