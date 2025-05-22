import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button is in this path

const Anfahrt: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">ANFAHRT</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-4">
          Du findest uns in der Uhlandstraße 162, Berlin, Germany 10719.
        </p>
        <p>
          Direkt gegenüber des Salons findest du kostenpflichtige Parkmöglichkeiten.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Uhlandstraße+162,+10719+Berlin,+Germany" target="_blank" rel="noopener noreferrer">
              Route auf Google Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Anfahrt;