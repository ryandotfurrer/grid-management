import { drivers, series, seasons } from '@/app/aimsData';
import Link from 'next/link';

export default function Aims() {
  return (
    <div>
      <h1>Apex International Motorsports Series</h1>
      <div className='p-4 rounded-md border'>
        <h2>Current Season</h2>
        <Link href={`/pages/aims/seasons/season-1`}>
          Season {seasons[0].seasonNumber}
        </Link>
      </div>
    </div>
  );
}
