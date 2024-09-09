import useSWR from 'swr';
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, 
  });

  
  if (error) return <div>Error loading ISS coordinates</div>;

  const coords = {
    longitude: data?.longitude || 0,
    latitude: data?.latitude || 0,
  };

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />

      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()} 
      />
    </main>
  );
}
