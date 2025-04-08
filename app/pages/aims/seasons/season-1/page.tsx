import { drivers, series, seasons } from '@/app/aimsData';
import Link from 'next/link';

export default function Aims() {
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
        <h2>Series Opener Standings</h2>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 border'>Region</th>
              <th className='px-4 py-2 border'>Driver</th>
              <th className='px-4 py-2 border'>Number</th>
              <th className='px-4 py-2 border'>Points</th>
              <th className='px-4 py-2 border'>Penalty Points</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr
                key={driver.id}
                className='hover:bg-gray-50'
              >
                <td className='px-4 py-2 border'>{driver.region}</td>
                <td className='px-4 py-2 border'>{driver.psnUsername}</td>
                <td className='px-4 py-2 border'>
                  {driver.number < 10 ? `0${driver.number}` : driver.number}
                </td>
                <td className='px-4 py-2 border'>{driver.points}</td>
                <td className='px-4 py-2 border'>{driver.penaltyPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
