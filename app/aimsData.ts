export interface drivers {
  id: number;
  psnUsername: string;
  penaltyPoints: number;
  points: number;
  region: string;
  number: number;
}

export interface season {
  id: number;
  seasonNumber: number;
  seriesOpener?: object;
  seriesMain: object;
  seriesTertiary?: object;
}

export interface series {
  id: number;
  name: string;
  game: string;
  schedule: object;
}

export const drivers: drivers[] = [
  {
    id: 1,
    psnUsername: 'TonyCal',
    penaltyPoints: 0,
    points: 0,
    region: 'USA',
    number: 24,
  },
  {
    id: 2,
    psnUsername: 'FurrerW',
    penaltyPoints: 0,
    points: 0,
    region: 'USA',
    number: 4,
  },
  {
    id: 3,
    psnUsername: 'civ-racing',
    penaltyPoints: 0,
    points: 0,
    region: 'USA',
    number: 33,
  },
];

export const series: series[] = [
  {
    id: 1,
    name: 'AIMS GT3 Championship',
    game: 'Gran Turismo 7',
    schedule: {},
  },
];

export const seasons: season[] = [
  {
    id: 1,
    seasonNumber: 1,
    seriesMain: series[0],
  },
  {
    id: 2,
    seasonNumber: 2,
    seriesMain: series[0],
  },
  {
    id: 3,
    seasonNumber: 3,
    seriesMain: series[0],
  },
];
