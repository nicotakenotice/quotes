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
        text: 'Kaladin immediately burst alight with power. Death had come to visit Hearthstone today, despite Lirin\'s every effort.',
        characters: ['Kaladin Stormblessed', 'Lirin']
      },
      {
        text: 'Kaladin envied the way they moved with the winds. They did it naturally, as if they hadn\'t merely claimed the sky - as he had - but had instead been born to it.',
        characters: ['Kaladin Stormblessed', 'The Fused']
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
        text: 'What do you desire? Money and wealth? Honor and pride? Authority and power? Revenge? Or something that transcends all these? Whatever you desire... is here.'
      },
      {
        text: 'The fear of losing the one he\'s looking for... is swallowing his other fears.',
        characters: ['Evan Edrock']
      }
    ]
  }
];
