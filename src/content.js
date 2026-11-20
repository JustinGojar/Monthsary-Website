// ✏️ EDIT EVERYTHING HERE — names, captions, the letter and the song.

export const content = {
  title: 'Happy Monthsary, baby!',
  subtitle: 'wanna see my gift?',
  yes: 'yes, love',
  no: 'no, thanks',

  sad: { line: "are you sure, baby? i'm sure you'll love it", back: 'back' },

  menu: {
    prompt: 'pick and click!',
    footer: "i hope you'll love them, baby <3",
    cards: { photos: 'photos', letter: 'letter', flowers: 'flowers' },
  },

  // Tap a picture on the page to add your own (kept on that device).
  photos: {
    heading: 'me when:',
    featured: ['us, always', 'my favorite place'],
    circles: ['you tease me', "you're busy", 'you reply so late', 'you compliment me', 'you make lambing'],
    hint: 'tap a picture to add yours',
  },

  letter: {
    opener: 'tap to open',
    greeting: 'happy monthsary, love!',
    body:
      "another month has passed, and i'm beyond grateful that i get to spend it with you. things aren't always perfect, but what matters most is that we always choose each other in the end.\n\n" +
      "you've shown me love in ways i never thought i deserved, and that makes me feel so lucky to have you. i love how you laugh, how you understand me even in silence, and how you remind me that i'm never alone.\n\n" +
      "thank you for staying, for trying, and for loving me through both the good and the tough days. you're my comfort, my safe place, and my partner in everything.\n\n" +
      "cheers to more months and years with you. i love you endlessly, and i'll never get tired of choosing you every single day.",
    signoff: 'yours, always',
  },

  flowers: {
    heading: 'flowers!',
    subheading: 'and a song 4 you',
    song: {
      title: "You're All I Want",
      artist: 'Cigarettes After Sex',
      // To play it inside the page: drop your mp3 in /public and set audio: './song.mp3'
      // Leave null and the play button opens the song on Spotify instead.
      audio: null,
      link: "https://open.spotify.com/search/You're%20All%20I%20Want%20Cigarettes%20After%20Sex",
    },
  },

  back: 'return',
};
