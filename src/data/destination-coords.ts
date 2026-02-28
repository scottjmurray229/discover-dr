// Shared destination coordinates — single source of truth
// Extracted from plan.astro geoMarkers. Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'punta-cana': { lat: 18.5601, lng: -68.3725, label: 'Punta Cana' },
  'santo-domingo': { lat: 18.4861, lng: -69.9312, label: 'Santo Domingo' },
  samana: { lat: 19.2055, lng: -69.3324, label: 'Saman\u00e1' },
  'puerto-plata': { lat: 19.7934, lng: -70.6884, label: 'Puerto Plata' },
  'la-romana': { lat: 18.4273, lng: -68.9728, label: 'La Romana' },
  cabarete: { lat: 19.7580, lng: -70.4183, label: 'Cabarete' },
  jarabacoa: { lat: 19.1197, lng: -70.6368, label: 'Jarabacoa' },
  constanza: { lat: 18.9096, lng: -70.7440, label: 'Constanza' },
  barahona: { lat: 18.2085, lng: -71.1045, label: 'Barahona' },
  'las-terrenas': { lat: 19.3117, lng: -69.5425, label: 'Las Terrenas' },
};
