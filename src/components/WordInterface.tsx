import React from 'react';
import FastDraftAddin from './FastDraftAddin';

interface WordInterfaceProps {
  screen?: number;
}

const WordInterface: React.FC<WordInterfaceProps> = ({ screen = 1 }) => {
  // Only render for valid screen range
  if (screen >= 1 && screen <= 7) {
    return (
      <div className="flex h-screen">
        {/* Word Document Area */}
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <div className="bg-white shadow-md rounded-md max-w-4xl mx-auto h-full flex flex-col">
            {/* Top bar */}
            <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
              <span className="ml-4 text-sm text-gray-700">
                Mergers & Acquisitions Termsheet.docx - Word
              </span>
            </div>

            {/* Word Menu */}
            <div className="bg-blue-800 text-white p-1 text-xs flex">
              {['File', 'Home', 'Insert', 'Design', 'Layout', 'References', 'Mailings', 'Review', 'View', 'Help'].map(tab => (
                <div key={tab} className={`px-3 py-1 ${tab === 'Home' ? 'bg-blue-900' : ''}`}>{tab}</div>
              ))}
            </div>

            {/* Document Content */}
            <div className="p-6 text-sm text-gray-800 leading-relaxed flex-1 overflow-y-auto">
              <h1 className="text-2xl font-bold mb-4">Mergers & Acquisitions Term Sheet</h1>
              <p className="mb-2">This term sheet summarizes the principal terms with respect to a potential acquisition of TargetCo by AcquirerCo.</p>
              <p className="mb-2">1. **Purchase Price:** $150,000,000, payable in cash upon closing.</p>
              <p className="mb-2">2. **Structure:** Acquisition of 100% of the outstanding shares of TargetCo.</p>
              <p className="mb-2">3. **Closing Conditions:** Regulatory approvals, satisfactory due diligence, board approvals.</p>
              <p className="mb-2">4. **Governing Law:** State of Illinois.</p>
              <p className="mb-2">5. **Confidentiality and Exclusivity:** This document is non-binding except for this section, which is binding for 90 days.</p>
              <p className="mt-4 italic text-gray-500">Draft prepared by legal counsel for internal review only.</p>
            </div>
          </div>
        </div>

        {/* Add-in Panel */}
        <FastDraftAddin screen={screen} />
      </div>
    );
  }

  return null;
};

export default WordInterface;
