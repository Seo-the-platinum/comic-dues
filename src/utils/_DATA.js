//Data file where redux will retrieve initial data for app.

let imgs= {
  advTime: {
    url: 'images/adventure_time_resized.jpg',
    character: 'Finn',
    series: 'Adventure Time',
    cosplayer: 'unknown',
    handle: 'unknown_handle',
    alt: 'Cosplay of finn from adventure time',
  },
  marioBros: {
    url: 'images/mario_bros_crop.jpg',
    character: 'Mario and Luigi',
    series: 'Mario Bros.',
    cosplayer: 'unknown',
    handle: 'unknown_handle',
    alt: 'Cosplay of mario and luigi from mario brothers',
  },
  narutoKid: {
    url: 'images/naruto_crop.jpg',
    character: 'Naruto',
    series: 'Naruto',
    cosplayer: 'unknown',
    handle: 'unknown_handle',
    alt: 'Cosplay of Naruto from Naruto',
  },
  rogue: {
    url: 'images/rogue-resized.jpg',
    character: 'Rogue',
    series: 'X-men',
    cosplayer: 'unknown',
    handle: 'unknown_handle',
    alt: 'Cosplay of Rogue from X-men',
  }
}

let reviews= {
  starWarsTros: {
    date: '10 Jan 2020',
    title: 'Star Wars: The Rise of Skywalker',
    product: 'Movie',
    review: 'Lorem ipsum dolor sit amet, pri ex dicit placerat. Omnium labitur ne.',
    critic: 'Jesse Sosa',
    rating: 3,
    imgUrl: 'images/star-wars-banner.jpg',
  },
  spidermanFarfromHome: {
    date: '08 Jul 2019',
    tile: 'Spider-Man: Far From Home',
    product: 'Movie',
    review: 'Lorem ipsum dolor sit amet, pri ex dicit placerat. Omnium labitur ne.',
    critic: 'Robert Mejia',
    rating: 5,
    imgUrl: 'images/spidermanfar.jpg',
  },
}

let articles= {
  article1: {
    alt: 'sephiroth banner',
    author: 'Eliseo Flores',
    img: 'images/ff7remake.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    posted: '21 Dec 2019',
    title: 'Final Fantasy 7 Remake breaks the internet!',
  },
  article2: {
    alt: 'byleth reveal',
    author:  'Eliseo Flores',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'images/byleth.jpg',
    posted: '02 Feb 2020',
    title: 'Super Smash Bros Ultimate adds another Fire Emblem character',

  }
}

let cow= {
  img: 'images/adventure_time_resized.jpg',
  talent: 'unknown',
  character: 'Finn',
  series: 'Adventure Time',
  handle: 'unknown',
  alt: 'Cosplay of Finn from adventure time',
}

let events= {
  wc20: {
    event: 'WonderCon',
    dates: [ '10 Apr 2020', '11 Apr 2020', '11 Apr 2020'],
    img: 'images/wondercon.jpg',
    loc: 'Anaheim, Ca',
    venue: 'Anaheim Convention Center',
  },
  cc20: {
    event: 'ComicCon',
    dates: ['20 Jul 2020','21 Jul 2020','22 Jul 2020'],
    img: 'images/sdcc.jpg',
    loc: 'San Diego, Ca',
    venue: 'San Diego Convention Center',
  },
  ae20: {
    event: 'Anime Expo',
    dates: ['18 Aug 2020','19 Aug 2020','20 Aug 2020'],
    img: 'images/ax20.jpg',
    loc: 'Los Angeles, Ca',
    venue: 'Los Angeles Convention Center',
  },
}

export function _getImgs() {
  return new Promise((res, rej)=> {
    setTimeout(()=> res({...imgs}),1000)
  })
}

export function _getReviews() {
  return new Promise ((res, rej)=> {
    setTimeout(()=> res({...reviews}), 1000)
  })
}

export function _getArticles() {
  return new Promise ((res, rej)=> {
    setTimeout(()=> res({...articles}),1000)
  })
}

export function _getCosplayer() {
  return new Promise ((res, rej)=> {
    setTimeout(()=> res({...cow}), 1000)
  })
}

export function _getEvents() {
  return new Promise ((res, rej)=> {
    setTimeout(()=> res({...events}, 1000))
  })
}
