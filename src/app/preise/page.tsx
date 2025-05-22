import React from 'react';

const Preise: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Preise</h1>
      <div className="max-w-2xl mx-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white bg-opacity-70">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Leistung</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Preis ab (€)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ansatzfarbe</td>
              <td className="border border-gray-300 px-4 py-2">85</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Mini Fresh Up</td>
              <td className="border border-gray-300 px-4 py-2">150</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ansatzblondierung mit Glossing</td>
              <td className="border border-gray-300 px-4 py-2">150</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Fresh Up Strähnen/Balayage/Airtouch</td>
              <td className="border border-gray-300 px-4 py-2">250</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Neues Balayage/Strähnen/Airtouch inkl. Schnitt & Föhnen</td>
              <td className="border border-gray-300 px-4 py-2">450</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Aufwendiges Balayage/Strähnen/Airtouch (sehr langes und dickes Haar) inkl. Schnitt & Föhnen</td>
              <td className="border border-gray-300 px-4 py-2">750</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Farbkorrektur</td>
              <td className="border border-gray-300 px-4 py-2">600</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Glossing</td>
              <td className="border border-gray-300 px-4 py-2">35</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Root Shading & Glossing</td>
              <td className="border border-gray-300 px-4 py-2">65</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Haarbotox (kalt)</td>
              <td className="border border-gray-300 px-4 py-2">180</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Keratinbehandlung für dunkles Haar mit Glättungseffekt</td>
              <td className="border border-gray-300 px-4 py-2">350</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Haartresse Verdichtung</td>
              <td className="border border-gray-300 px-4 py-2">650</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tressen Verlängerung</td>
              <td className="border border-gray-300 px-4 py-2">1300</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tresse hochsetzen</td>
              <td className="border border-gray-300 px-4 py-2">120</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-2xl mx-auto mt-6 text-center">
        <p className="mb-2"><strong>Alle Preise in Euro incl 19% USt.</strong></p>
        <p className="mb-2">Die Preise richten sich nach Haarlänge, Dichte und Menge an Produktverbrauch.</p>
        <p>Alle Farbdienstleistungen enthalten eine Intensivhaarkur.</p>
      </div>
    </div>
  );
};

export default Preise;