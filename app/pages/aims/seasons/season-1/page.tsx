import { drivers, series, seasons } from '@/app/aimsData';
import Link from 'next/link';

export default function Aims() {
  const season = seasons[0];
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Season 1</h1>
      <p>
        <span className='font-bold'>Series Opener:</span> {series[0].name}
      </p>
      <p>
        <span className='font-bold'>Series Main:</span> {series[0].name}
      </p>
      <div className='overflow-x-auto py-12'>
        <h2 className='text-xl font-bold mb-4'>Schedule</h2>
        <table className='min-w-full bg-card text-card-foreground border border-border rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-muted'>
              <th className='px-4 py-2 border-b border-border'>Round</th>
              <th className='px-4 py-2 border-b border-border'>Date</th>
              <th className='px-4 py-2 border-b border-border'>Track</th>
              <th className='px-4 py-2 border-b border-border'>Location</th>
              <th className='px-4 py-2 border-b border-border'>Length</th>
              <th className='px-4 py-2 border-b border-border'>Variation</th>
            </tr>
          </thead>
          <tbody>
            {season.seriesMain.schedule.map((race) => (
              <tr
                key={race.id}
                className='hover:bg-muted/50 transition-colors'
              >
                <td className='px-4 py-2 border-b border-border'>{race.id}</td>
                <td className='px-4 py-2 border-b border-border'>
                  {race.date.toLocaleDateString()}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {race.track.name}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {race.track.location}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {race.track.length}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {race.track.variations[0].name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='text-xl font-bold mb-4 mt-12'>
          Series Opener Standings
        </h2>
        <table className='min-w-full bg-card text-card-foreground border border-border rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-muted'>
              <th className='px-4 py-2 border-b border-border'>Region</th>
              <th className='px-4 py-2 border-b border-border'>Driver</th>
              <th className='px-4 py-2 border-b border-border'>Number</th>
              <th className='px-4 py-2 border-b border-border'>Points</th>
              <th className='px-4 py-2 border-b border-border'>
                Penalty Points
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr
                key={driver.id}
                className='hover:bg-muted/50 transition-colors'
              >
                <td className='px-4 py-2 border-b border-border'>
                  {driver.country}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {driver.psnUsername}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {driver.number < 10 ? `0${driver.number}` : driver.number}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {driver.points}
                </td>
                <td className='px-4 py-2 border-b border-border'>
                  {driver.penaltyPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
