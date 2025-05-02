import React from 'react';
import { useRouter } from 'next/router';

interface FastDraftAddinProps {
  screen?: number;
}

const FastDraftAddin: React.FC<FastDraftAddinProps> = ({ screen = 1 }) => {
  const router = useRouter();

  // Explicitly type the nextScreen parameter
  const handleClick = (nextScreen: number): void => {
    router.push(`/screen${nextScreen}`);
  };

  // Screen 1: Initial AddIn with AI Assistant
  if (screen === 1) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-6">
          <div 
            className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100"
            onClick={() => handleClick(2)}
          >
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
            <p className="text-sm text-gray-600">Get help drafting, reviewing, or analyzing your legal document</p>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    );
  }
  
  // Screen 2: AI Assistant with query 
  if (screen === 2) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
            <div className="p-3 bg-white rounded border border-gray-200">
              <p className="text-sm text-gray-800 italic">Generate a draft acquisition agreement based on term sheet, apply standard Illinois acquirer-favourable provisions, include California regulatory compliance modules</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => handleClick(3)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
  
  // Screen 3: Select deal database
  if (screen === 3) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-4">
          <div className="p-2 bg-blue-50 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Select Deal Database</h3>
          <div className="space-y-2">
            {['iManage On-Prem', 'OneDrive', 'NetDocuments', 'SharePoint', 'HighQ'].map((db) => (
              <div key={db} className="flex items-center">
                <input type="checkbox" id={db} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor={db} className="ml-2 block text-sm text-gray-700">{db}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => handleClick(4)}
          >
            Select
          </button>
        </div>
      </div>
    );
  }
  
  // Screen 4: Process steps with step 1 in progress
  if (screen === 4) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto" onClick={() => handleClick(5)}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-4">
          <div className="p-2 bg-blue-50 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Creating New Contract</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">1. Finding relevant past deals by industry, jurisdiction and current deal nuances</p>
            </div>
            <div className="flex items-center opacity-50">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
              </div>
              <p className="text-sm text-gray-700">2. Extracting acquirer-favorable and compliance clauses from past deals and Practical Law</p>
            </div>
            <div className="flex items-center opacity-50">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
              </div>
              <p className="text-sm text-gray-700">3. Generating Contract</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Screen 5: Top 5 deals in priority order
  if (screen === 5) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-4">
          <div className="p-2 bg-blue-50 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Relevant Past Deals</h3>
          <div className="space-y-4">
            {[
              { name: "TechCorp Illinois Acquisition", match: 5, summary: "Illinois acquirer with California compliance provisions" },
              { name: "Midwest Holdings M&A", match: 4, summary: "Similar Illinois acquirer-favorable terms" },
              { name: "CA Tech Merger 2023", match: 4, summary: "California compliance modules" },
              { name: "Illinois Manufacturing Acquisition", match: 3, summary: "Similar industry with Illinois provisions" },
              { name: "Tech Services Purchase", match: 3, summary: "Similar deal structure and compliance" }
            ].map((deal, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-md">
                <h4 className="font-medium text-sm">{deal.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{deal.summary}</p>
                <div className="flex mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < deal.match ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <button className="text-blue-600 text-sm flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Find additional deals
            </button>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => handleClick(6)}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
  
  // Screen 6: Step 1 completed, step 2 in progress
  if (screen === 6) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto" onClick={() => handleClick(7)}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-4">
          <div className="p-2 bg-blue-50 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Creating New Contract</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">1. Finding relevant past deals by industry, jurisdiction and current deal nuances</p>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">2. Extracting acquirer-favorable and compliance clauses from past deals and Practical Law</p>
            </div>
            <div className="flex items-center opacity-50">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
              </div>
              <p className="text-sm text-gray-700">3. Generating Contract</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Screen 7: Steps 1 & 2 completed, step 3 in progress
  if (screen === 7) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto" onClick={() => handleClick(8)}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="mb-4">
          <div className="p-2 bg-blue-50 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <h3 className="font-medium text-blue-700">AI Assistant</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Creating New Contract</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">1. Finding relevant past deals by industry, jurisdiction and current deal nuances</p>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">2. Extracting acquirer-favorable and compliance clauses from past deals and Practical Law</p>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-5 w-5 mr-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700">3. Generating Contract</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Add a final screen (screen 8) to handle the last navigation
  if (screen === 8) {
    return (
      <div className="w-96 h-full bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-blue-700">FastDraft</h2>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <svg className="w-12 h-12 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-lg font-medium text-green-800">Contract Generated</h3>
          </div>
          <p className="text-sm text-green-700 mb-4">Your acquisition agreement has been successfully created.</p>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mb-2">
            View Document
          </button>
          <button className="w-full px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-50">
            Create New Draft
          </button>
        </div>
      </div>
    );
  }
  
  return null;
};

export default FastDraftAddin;