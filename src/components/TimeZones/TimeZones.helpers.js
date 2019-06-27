export const formatName = timeZone => {
  const zoneNameSegments = timeZone.split('/');
  const city = zoneNameSegments
    .slice(-1)[0]
    .split('_')
    .join(' ');
  const region = zoneNameSegments[0];
  return `${city} (${region})`;
};
export const getLocalTime = (time, timeZone) => time.toLocaleTimeString('en-US', { timeZone });
export const getLocalDateTime = (time, timeZone) =>
  time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone
  });
export const filterTimeZones = (input, timeZones = []) => {
  if (!input) return [];
  const matches = timeZones.filter(zone =>
    formatName(zone)
      .toLowerCase()
      .startsWith(input.toLowerCase())
  );
  return matches.sort((a, b) => (formatName(a) > formatName(b) ? 1 : -1));
};
