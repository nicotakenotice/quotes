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
  },
  {
    type: 'book',
    slug: 'the-final-empire',
    title: 'The Final Empire',
    authors: ['Brandon Sanderson'],
    quotes: [
      {
        text: 'New tastes are like new ideas, young man - the older you get, the more difficult they are for you to stomach.',
        characters: ['Mennis']
      },
      {
        text: 'I consider myself to be a man of principle. But, what man does not? Even the cutthroat, I have noticed, considers his actions "moral" after a fashion. Perhaps another person, reading of my life, would name me a religious tyrant. He could call me arrogant. What is to make that man\'s opinion any less valid than my own? I guess it all comes down to one fact: in the end, I\'m the one with the armies.',
        characters: ['Lord Ruler']
      },
      {
        text: 'We\'re thieves, gentlemen - and we\'re extraordinarily good ones. We can rob the unrobbable and fool the unfoolable.',
        characters: ['Kelsier']
      },
      {
        text: 'You\'ve heard legends and stories. See the man for yourself, and be impressed.',
        characters: ['Breeze Ladrian']
      }
    ]
  }
];
