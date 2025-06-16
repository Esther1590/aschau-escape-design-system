
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [12.1864, 47.7869] as [number, number], // Aschau coordinates
      zoom: 13,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add wellness and cultural markers
    const wellnessSpots = [
      { name: 'Spa Resort', coords: [12.1844, 47.7889] as [number, number] },
      { name: 'Mountain Wellness Center', coords: [12.1924, 47.7849] as [number, number] },
      { name: 'Thermal Baths', coords: [12.1804, 47.7859] as [number, number] }
    ];

    const culturalSpots = [
      { name: 'Historic Town Center', coords: [12.1864, 47.7869] as [number, number] },
      { name: 'Traditional Museum', coords: [12.1884, 47.7879] as [number, number] },
      { name: 'Alpine Chapel', coords: [12.1834, 47.7839] as [number, number] }
    ];

    map.current.on('load', () => {
      // Add wellness markers (green)
      wellnessSpots.forEach(spot => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-semibold text-wellness-sage">${spot.name}</h3><p class="text-sm">Wellness Location</p>`);

        new mapboxgl.Marker({ color: '#7FB069' })
          .setLngLat(spot.coords)
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add cultural markers (blue)
      culturalSpots.forEach(spot => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-semibold text-blue-600">${spot.name}</h3><p class="text-sm">Cultural Site</p>`);

        new mapboxgl.Marker({ color: '#3B82F6' })
          .setLngLat(spot.coords)
          .setPopup(popup)
          .addTo(map.current!);
      });

      setIsMapLoaded(true);
    });
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded && !mapboxToken) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8">
        <MapPin className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-4">Interactive Map</h3>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          To view the interactive map of Aschau, please enter your Mapbox public token. 
          Get your free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-wellness-sage underline">mapbox.com</a>
        </p>
        <div className="w-full max-w-md space-y-4">
          <div>
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwia..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-mono text-sm"
            />
          </div>
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken.trim()}
            className="w-full bg-wellness-sage hover:bg-wellness-sage/90"
          >
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      {!isMapLoaded && mapboxToken && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wellness-sage mx-auto mb-2"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      {isMapLoaded && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
            <span className="text-sm font-medium">Wellness Spots</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">Cultural Sites</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
