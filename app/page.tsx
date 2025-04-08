import './home.css';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main>
        <h1>Grid Management</h1>
        <div>
          <h2>Leagues</h2>
          <Link href='/pages/aims'>
            Apex International Motorsports Series (AIMS)
          </Link>
        </div>
      </main>
    </>
  );
}
