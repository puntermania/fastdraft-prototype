import React from 'react';

const WordInterface = ({ screen = 1 }) => {
  // Screen 1-7: Show the term sheet
  if (screen >= 1 && screen <= 7) {
    return (
      <div className="flex-1 bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-md overflow-hidden max-w-4xl mx-auto">
          {/* Word top menu bar */}
          <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
            <span className="ml-4 text-sm text-gray-700">Mergers & Acquisitions Termsheet.docx - Word</span>
          </div>
          
          {/* Word ribbon */}
          <div className="bg-blue-800 text-white p-1 text-xs flex">
            <div className="px-3 py-1">File</div>
            <div className="px-3 py-1 bg-blue-900">Home</div>
            <div className="px-3 py-1">Insert</div>
            <div className="px-3 py-1">Design</div>
            <div className="px-3 py-1">Layout</div>
            <div className="px-3 py-1">References</div>
            <div className="px-3 py-1">Mailings</div>
            <div className="px-3 py-1">Review</div>
            <div className="px-3 py-1">View</div>
            <div className="px-3 py-1">Help</div>
          </div>
          
          <div className="flex">
            {/* Document content */}
            <div className="flex-1 p-6 min-h-screen">
              <h1 className="text-xl font-bold mb-4">MERGER & ACQUISITION TERM SHEET</h1>
              
              <p className="mb-4 text-sm">
                <strong>CONFIDENTIAL</strong><br />
                <strong>Date:</strong> May 2, 2025
              </p>
              
              <p className="mb-4 text-sm">
                <strong>This non-binding term sheet (the &quot;Term Sheet&quot;) summarizes the principal terms of a proposed acquisition transaction:</strong>
              </p>
              
              <table className="w-full mb-6 text-sm">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 w-36"><strong>Buyer:</strong></td>
                    <td className="border border-gray-300 p-2">Illinois Acquisition Corp., an Illinois corporation (&quot;Buyer&quot;)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Seller:</strong></td>
                    <td className="border border-gray-300 p-2">CalTech Solutions, Inc., a California corporation (&quot;Seller&quot;)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Transaction:</strong></td>
                    <td className="border border-gray-300 p-2">Acquisition of 100% of the outstanding capital stock of Seller</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Purchase Price:</strong></td>
                    <td className="border border-gray-300 p-2">$45,000,000 USD (&quot;Purchase Price&quot;), subject to adjustments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Payment Terms:</strong></td>
                    <td className="border border-gray-300 p-2">
                      • $40,000,000 payable in cash at closing<br />
                      • $5,000,000 held in escrow for 18 months
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Closing Date:</strong></td>
                    <td className="border border-gray-300 p-2">On or before August 15, 2025</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Due Diligence:</strong></td>
                    <td className="border border-gray-300 p-2">Buyer shall have 45 days to complete due diligence</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2"><strong>Governing Law:</strong></td>
                    <td className="border border-gray-300 p-2">Illinois</td>
                  </tr>
                </tbody>
              </table>
              
              <p className="mb-4 text-sm">
                <strong>Key Conditions:</strong>
              </p>
              
              <ul className="list-disc pl-5 mb-6 text-sm">
                <li className="mb-1">Required regulatory approvals from California Department of Business Oversight</li>
                <li className="mb-1">No material adverse change in Seller&apos;s business</li>
                <li className="mb-1">Key employee retention agreements</li>
                <li className="mb-1">Satisfactory completion of due diligence</li>
                <li className="mb-1">Board approvals from both Buyer and Seller</li>
              </ul>
              
              <p className="text-xs text-gray-500 mt-10">
                This Term Sheet is non-binding and is intended solely as a basis for further discussion and is not intended to be and does not constitute a legally binding obligation. No legally binding obligations will be created until definitive agreements are executed and delivered by all parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Screen 8: Show the generated contract
  if (screen === 8) {
    return (
      <div className="flex-1 bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-md overflow-hidden max-w-4xl mx-auto">
          {/* Word top menu bar */}
          <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
            <span className="ml-4 text-sm text-gray-700">Illinois Acquirer of California Company: M&A Agreement.docx - Word</span>
          </div>
          
          {/* Word ribbon */}
          <div className="bg-blue-800 text-white p-1 text-xs flex">
            <div className="px-3 py-1">File</div>
            <div className="px-3 py-1 bg-blue-900">Home</div>
            <div className="px-3 py-1">Insert</div>
            <div className="px-3 py-1">Design</div>
            <div className="px-3 py-1">Layout</div>
            <div className="px-3 py-1">References</div>
            <div className="px-3 py-1">Mailings</div>
            <div className="px-3 py-1">Review</div>
            <div className="px-3 py-1">View</div>
            <div className="px-3 py-1">Help</div>
          </div>
          
          <div className="flex">
            {/* Document content */}
            <div className="flex-1 p-6 min-h-screen">
              <h1 className="text-xl font-bold mb-4 text-center">STOCK PURCHASE AGREEMENT</h1>
              <h2 className="text-lg text-center mb-6">ILLINOIS ACQUIRER OF CALIFORNIA COMPANY</h2>
              
              <p className="mb-4 text-sm">
                <strong>THIS STOCK PURCHASE AGREEMENT</strong> (this &quot;Agreement&quot;) is made and entered into as of May 2, 2025, by and among Illinois Acquisition Corp., an Illinois corporation (&quot;Buyer&quot;), CalTech Solutions, Inc., a California corporation (the &quot;Company&quot;), and the shareholders of the Company identified on the signature pages hereto (each, a &quot;Seller&quot; and collectively, the &quot;Sellers&quot;).
              </p>
              
              <p className="mb-4 text-sm">
                <strong>RECITALS</strong>
              </p>
              
              <p className="mb-4 text-sm">
                WHEREAS, Sellers own all of the issued and outstanding capital stock of the Company (the &quot;Shares&quot;);
              </p>
              
              <p className="mb-4 text-sm">
                WHEREAS, Buyer desires to purchase from Sellers, and Sellers desire to sell to Buyer, all of the Shares in accordance with the terms and conditions set forth in this Agreement;
              </p>
              
              <p className="mb-4 text-sm">
                NOW, THEREFORE, in consideration of the premises and the mutual promises herein made, and in consideration of the representations, warranties, and covenants herein contained, the parties agree as follows:
              </p>
              
              <h2 className="text-base font-bold mt-6 mb-2">ARTICLE 1<br />DEFINITIONS</h2>
              
              <p className="mb-4 text-sm">
              &quot;Acquisition Proposal&quot; means any offer or proposal for, or indication of interest in, any acquisition of all or a portion of the Shares or assets of the Company...
              </p>
              
              <h2 className="text-base font-bold mt-6 mb-2">ARTICLE 2<br />PURCHASE AND SALE OF SHARES</h2>
              
              <p className="mb-4 text-sm">
                <strong>2.1 Basic Transaction.</strong> On and subject to the terms and conditions of this Agreement, Buyer agrees to purchase from Sellers, and Sellers agree to sell to Buyer, all of the Shares for the consideration specified in Section 2.2 below.
              </p>
              
              <p className="mb-4 text-sm">
                <strong>2.2 Purchase Price.</strong> Buyer agrees to pay to Sellers at the Closing $45,000,000 (the &quot;Purchase Price&quot;), subject to adjustment pursuant to Section 2.3, payable as follows: (i) $40,000,000 by wire transfer or delivery of other immediately available funds and (ii) $5,000,000 (the &quot;Escrow Amount&quot;) shall be withheld from the Purchase Price and deposited with the Escrow Agent...
              </p>
              
              <p className="text-xs text-gray-500 mt-10">
                [Document continues...]
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default WordInterface;
