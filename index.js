const Twitter = require("twitter");
require("dotenv").config();

const userHandle = "dantheflam";

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});

(async () => {
  const getUserId = userName => {
    return new Promise((resolve, reject) => {
      const handleUserLookup = (error, data) => {
        if (!error) {
          resolve(data[0].id);
          console.log(data);
        } else {
          reject(error);
        }
      };

      client.get("users/lookup", { screen_name: userName }, handleUserLookup);
    });
  };

  const id = await getUserId(userHandle);
  console.log("id - " + id);

  const stream = client.stream("statuses/filter", { follow: id });
  stream.on("data", function(event) {
    console.log(event);
  });

  stream.on("error", function(error) {
    throw error;
  });
})();

/*
{
  created_at: 'Wed Sep 25 00:59:02 +0000 2019',
  id: 1176662359055556600,
  id_str: '1176662359055556608',
  text: 'RT @Becca9941: Learning strategy for video tutorials.\n' +
    '\n' +
    'Watch them on triple speed the first time. You will only have time to capture the ov…',
  source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
  truncated: false,
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 60107391,
    id_str: '60107391',
    name: 'Daniel Robertson',
    screen_name: 'dantheflam',
    location: 'Austin, TX',
    url: 'http://www.danielrobertson.me',
    description: 'Software engineer 💻 Musician 🥁 Longhorn 🤘🏼',
    translator_type: 'none',
    protected: false,
    verified: false,
    followers_count: 326,
    friends_count: 540,
    listed_count: 21,
    favourites_count: 1031,
    statuses_count: 2345,
    created_at: 'Sat Jul 25 17:44:03 +0000 2009',
    utc_offset: null,
    time_zone: null,
    geo_enabled: true,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    profile_background_color: 'C6E2EE',
    profile_background_image_url: 'http://abs.twimg.com/images/themes/theme2/bg.gif',
    profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme2/bg.gif',
    profile_background_tile: false,
    profile_link_color: '1F98C7',
    profile_sidebar_border_color: 'C6E2EE',
    profile_sidebar_fill_color: 'DAECF4',
    profile_text_color: '663B12',
    profile_use_background_image: true,
    profile_image_url: 'http://pbs.twimg.com/profile_images/958746273946812417/VC2BaV_Q_normal.jpg',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/958746273946812417/VC2BaV_Q_normal.jpg',
    profile_banner_url: 'https://pbs.twimg.com/profile_banners/60107391/1517417875',
    default_profile: false,
    default_profile_image: false,
    following: null,
    follow_request_sent: null,
    notifications: null
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  retweeted_status: {
    created_at: 'Wed Sep 25 00:08:18 +0000 2019',
    id: 1176649593359982600,
    id_str: '1176649593359982592',
    text: 'Learning strategy for video tutorials.\n' +
      '\n' +
      'Watch them on triple speed the first time. You will only have time to captu… https://t.co/ecB6EWxpJT',
    source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    truncated: true,
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2316760164,
      id_str: '2316760164',
      name: 'Becca Williams',
      screen_name: 'Becca9941',
      location: 'Sydney, NSW (expat Wales UK)',
      url: 'https://becca9941.github.io/',
      description: 'Grateful to have picked up that coding book by accident 😍\n' +
        '\n' +
        '💡Aiming to be language agnostic (principle-driven [TDD, SOLID..])\n' +
        '💻Software Eng ~ QA-Chef\n' +
        '\n' +
        'Yay! 🌈',
      translator_type: 'none',
      protected: false,
      verified: false,
      followers_count: 5190,
      friends_count: 60,
      listed_count: 45,
      favourites_count: 7166,
      statuses_count: 4190,
      created_at: 'Wed Jan 29 08:27:25 +0000 2014',
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      profile_background_color: 'C0DEED',
      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_link_color: '981CEB',
      profile_sidebar_border_color: 'C0DEED',
      profile_sidebar_fill_color: 'DDEEF6',
      profile_text_color: '333333',
      profile_use_background_image: true,
      profile_image_url: 'http://pbs.twimg.com/profile_images/1156185342107455488/Pom7gLRd_normal.jpg',
      profile_image_url_https: 'https://pbs.twimg.com/profile_images/1156185342107455488/Pom7gLRd_normal.jpg',
      profile_banner_url: 'https://pbs.twimg.com/profile_banners/2316760164/1563482205',
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    extended_tweet: {
      full_text: 'Learning strategy for video tutorials.\n' +
        '\n' +
        'Watch them on triple speed the first time. You will only have time to capture the overarching concepts.\n' +
        '\n' +
        'This lets you recap basics quickly and dive deeper into the parts that are less familiar and experiment with them more efficiently :)',
      display_text_range: [Array],
      entities: [Object]
    },
    quote_count: 0,
    reply_count: 0,
    retweet_count: 4,
    favorite_count: 7,
    entities: { hashtags: [], urls: [Array], user_mentions: [], symbols: [] },
    favorited: false,
    retweeted: false,
    filter_level: 'low',
    lang: 'en'
  },
  is_quote_status: false,
  quote_count: 0,
  reply_count: 0,
  retweet_count: 0,
  favorite_count: 0,
  entities: { hashtags: [], urls: [], user_mentions: [ [Object] ], symbols: [] },
  favorited: false,
  retweeted: false,
  filter_level: 'low',
  lang: 'en',
  timestamp_ms: '1569373142385'
} 
*/
