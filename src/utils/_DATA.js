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
  title: 'Star Wars: The Rise of Skywalker',
  format: 'Motion Picture',
  review: 'Lorem ipsum dolor sit amet, pri ex dicit placerat. Omnium labitur ne.',
  critic: 'Jesse Sosa',
  rating: 5,
  imgUrl: 'images/star-wars-banner.webp'
  }
}

let articles= {
  article1: {
    title: 'Final Fantasy 7 Remake breaks the internet!',
    writtenBy: 'Eliseo Flores',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    posted: `21 Dec 2019`,
  }
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
