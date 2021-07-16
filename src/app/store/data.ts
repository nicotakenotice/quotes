import { Entry } from "./model";

export const collection: Entry[] = [
  {
    type: 'book',
    slug: 'rhythm-of-war',
    title: 'Rhythm of War',
    authors: ['Brandon Sanderson'],
    quotes: [
      {
        text: 'Yes, he knew he should be something more. But... somehow she brought out the monster in him. And he somehow brought out the weakness in her.',
        characters: ['Gavilar Kholin', 'Navani Kholin']
      },
      {
        text: 'Kaladin immediately burst alight with power. Death had come to visit Hearthstone today, despite Lirin\' every effort.',
        characters: ['Kaladin Stormblessed', 'Lirin']
      }
    ]
  },
  {
    type: 'manhwa',
    slug: 'tower-of-god',
    title: 'Tower of God',
    authors: ['SIU'],
    quotes: [
      {
        text: 'A monster has arrived.'
      }
    ]
  }
];
