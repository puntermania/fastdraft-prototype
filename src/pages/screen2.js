import React from 'react';
import WordInterface from '../components/WordInterface';
import FastDraftAddin from '../components/FastDraftAddin';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Screen2() {
  return (
    <main className={`flex min-h-screen ${inter.className}`}>
      <WordInterface screen={2} />
      <FastDraftAddin screen={2} />
    </main>
  );
}