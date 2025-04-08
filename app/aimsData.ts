import { tracks } from './data/gran-turismo-7.json';

export interface drivers {
  id: number;
  number: number;
  penaltyPoints: number;
  points: number;
  psnUsername: string;
  country: string;
  reserve?: boolean;
  team?: string;
}

export interface seasons {
  id: number;
  endDate: Date;
  seasonNumber: number;
  seriesMain: series;
  seriesOpener?: series;
  seriesTertiary?: series;
  startDate: Date;
}

export interface series {
  id: number;
  game: string;
  name: string;
  schedule: schedule[];
}

export interface schedule {
  id: number;
  date: Date;
  track: tracks;
}

export interface tracks {
  id: string;
  name: string;
  location: string;
  length: string;
  type: string;
  variations: {
    name: string;
    length: string;
  }[];
}

export const drivers: drivers[] = [
  {
    id: 1,
    psnUsername: 'TonyCal',
    penaltyPoints: 0,
    points: 0,
    country: 'USA',
    number: 24,
  },
  {
    id: 2,
    psnUsername: 'FurrerW',
    penaltyPoints: 0,
    points: 0,
    country: 'USA',
    number: 4,
  },
  {
    id: 3,
    psnUsername: 'civ-racing',
    penaltyPoints: 0,
    points: 0,
    country: 'USA',
    number: 33,
  },
];

export const series: series[] = [
  {
    id: 1,
    name: 'AIMS GT3 Championship',
    game: 'Gran Turismo 7',
    schedule: [],
  },
];

export const seasons: seasons[] = [
  {
    id: 1,
    seasonNumber: 1,
    seriesMain: {
      ...series[0],
      schedule: [
        {
          id: 1,
          date: new Date('2024-01-07'),
          track: tracks.find((t) => t.id === 'suzuka')!,
        },
        {
          id: 2,
          date: new Date('2024-01-21'),
          track: tracks.find((t) => t.id === 'fuji')!,
        },
        {
          id: 3,
          date: new Date('2024-02-04'),
          track: tracks.find((t) => t.id === 'spa')!,
        },
        {
          id: 4,
          date: new Date('2024-02-18'),
          track: tracks.find((t) => t.id === 'monza')!,
        },
        {
          id: 5,
          date: new Date('2024-03-03'),
          track: tracks.find((t) => t.id === 'nurburgring')!,
        },
        {
          id: 6,
          date: new Date('2024-03-17'),
          track: tracks.find((t) => t.id === 'daytona')!,
        },
        {
          id: 7,
          date: new Date('2024-03-31'),
          track: tracks.find((t) => t.id === 'tokyo-expressway')!,
        },
        {
          id: 8,
          date: new Date('2024-04-14'),
          track: tracks.find((t) => t.id === 'autopolis')!,
        },
        {
          id: 9,
          date: new Date('2024-04-28'),
          track: tracks.find((t) => t.id === 'deep-forest')!,
        },
        {
          id: 10,
          date: new Date('2024-05-12'),
          track: tracks.find((t) => t.id === 'trial-mountain')!,
        },
      ],
    },
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
  },
  {
    id: 2,
    seasonNumber: 2,
    seriesMain: {
      ...series[0],
      schedule: [
        {
          id: 1,
          date: new Date('2025-01-07'),
          track: tracks.find((t) => t.id === 'suzuka')!,
        },
        {
          id: 2,
          date: new Date('2025-01-21'),
          track: tracks.find((t) => t.id === 'fuji')!,
        },
        {
          id: 3,
          date: new Date('2025-02-04'),
          track: tracks.find((t) => t.id === 'spa')!,
        },
        {
          id: 4,
          date: new Date('2025-02-18'),
          track: tracks.find((t) => t.id === 'monza')!,
        },
        {
          id: 5,
          date: new Date('2025-03-03'),
          track: tracks.find((t) => t.id === 'nurburgring')!,
        },
        {
          id: 6,
          date: new Date('2025-03-17'),
          track: tracks.find((t) => t.id === 'daytona')!,
        },
        {
          id: 7,
          date: new Date('2025-03-31'),
          track: tracks.find((t) => t.id === 'tokyo-expressway')!,
        },
        {
          id: 8,
          date: new Date('2025-04-14'),
          track: tracks.find((t) => t.id === 'autopolis')!,
        },
        {
          id: 9,
          date: new Date('2025-04-28'),
          track: tracks.find((t) => t.id === 'deep-forest')!,
        },
        {
          id: 10,
          date: new Date('2025-05-12'),
          track: tracks.find((t) => t.id === 'trial-mountain')!,
        },
      ],
    },
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31'),
  },
  {
    id: 3,
    seasonNumber: 3,
    seriesMain: {
      ...series[0],
      schedule: [
        {
          id: 1,
          date: new Date('2026-01-07'),
          track: tracks.find((t) => t.id === 'suzuka')!,
        },
        {
          id: 2,
          date: new Date('2026-01-21'),
          track: tracks.find((t) => t.id === 'fuji')!,
        },
        {
          id: 3,
          date: new Date('2026-02-04'),
          track: tracks.find((t) => t.id === 'spa')!,
        },
        {
          id: 4,
          date: new Date('2026-02-18'),
          track: tracks.find((t) => t.id === 'monza')!,
        },
        {
          id: 5,
          date: new Date('2026-03-03'),
          track: tracks.find((t) => t.id === 'nurburgring')!,
        },
        {
          id: 6,
          date: new Date('2026-03-17'),
          track: tracks.find((t) => t.id === 'daytona')!,
        },
        {
          id: 7,
          date: new Date('2026-03-31'),
          track: tracks.find((t) => t.id === 'tokyo-expressway')!,
        },
        {
          id: 8,
          date: new Date('2026-04-14'),
          track: tracks.find((t) => t.id === 'autopolis')!,
        },
        {
          id: 9,
          date: new Date('2026-04-28'),
          track: tracks.find((t) => t.id === 'deep-forest')!,
        },
        {
          id: 10,
          date: new Date('2026-05-12'),
          track: tracks.find((t) => t.id === 'trial-mountain')!,
        },
      ],
    },
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
  },
];
