
import { Category } from './types';

export const GAMES_DATA = [
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    category: Category.PUZZLE,
    url: 'https://play2048.co/',
    description: 'Join the numbers and get to the 2048 tile!',
    isHot: true
  },
  {
    id: 'hextris',
    title: 'Hextris',
    thumbnail: 'https://picsum.photos/seed/hextris/400/300',
    category: Category.ARCADE,
    url: 'https://hextris.io/',
    description: 'A fast-paced puzzle game inspired by Tetris.',
    isHot: true
  },
  {
    id: 'dino-run',
    title: 'Chrome Dino',
    thumbnail: 'https://picsum.photos/seed/dino/400/300',
    category: Category.ARCADE,
    url: 'https://chromedino.com/',
    description: 'The classic T-Rex runner game.',
  },
  {
    id: 'tower-blocks',
    title: 'Tower Blocks',
    thumbnail: 'https://picsum.photos/seed/tower/400/300',
    category: Category.ARCADE,
    url: 'https://www.towerblocks.io/',
    description: 'Stack blocks to build the highest tower.',
  },
  {
    id: 'little-alchemy',
    title: 'Little Alchemy',
    thumbnail: 'https://picsum.photos/seed/alchemy/400/300',
    category: Category.PUZZLE,
    url: 'https://littlealchemy.com/',
    description: 'Combine elements to discover new items.',
    isHot: true
  },
  {
    id: 'snake',
    title: 'Google Snake',
    thumbnail: 'https://picsum.photos/seed/snake/400/300',
    category: Category.ARCADE,
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    description: 'Classic arcade action.',
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    thumbnail: 'https://picsum.photos/seed/crossy/400/300',
    category: Category.ACTION,
    url: 'https://poki.com/en/g/crossy-road',
    description: 'Why did the chicken cross the road?',
  }
];
