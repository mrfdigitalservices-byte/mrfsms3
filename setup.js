const fs = require('fs');
const path = require('path');

const CATS = [
  "50% Off Discount Services",
  "Tiktok Views [ For-You Sponsored ]",
  "Tiktok Video Views [ Pakistani ]",
  "Tiktok Views [ For Monetization ]",
  "TikTok Likes + Views [ Updated ]",
  "TikTok Likes [ Market Cheapest ]",
  "TikTok Video Views [ Updated ]",
  "TikTok Views [ Lifetime Refill ]",
  "TikTok Likes [ Pakistan ]",
  "TikTok Likes [ USA & UK ]",
  "TikTok Likes [ High Quality ]",
  "TikTok Save [ Cheapest ]",
  "Tiktok Reposts [ Updated ]",
  "TikTok Shares [ Cheapest ]",
  "TikTok Battle Points [ Updated ]",
  "TikTok Followers [ Low Quality ]",
  "Tiktok Followers [ High Quality ]",
  "TikTok Followers [ Lifetime Refill ]",
  "Instagram Followers [ Updated ]",
  "Instagram All In One [ Combo ]",
  "Instagram Views [ Pakistan ]",
  "Instagram Reposts [ Updated ]",
  "Instagram Views [ Updated ]",
  "Instagram Likes [ Updated ]",
  "Instagram Share [ Updated ]",
  "Instagram Poll Votes [ Story ]",
  "Instagram Story Views [ Cheap ]",
  "Instagram Comments [ Updated ]",
  "Instagram Post Save [ Cheapest ]",
  "Instagram Services [ Impressions ]",
  "Facebook Likes + Followers [ Page ]",
  "Facebook Followers [ Updated ]",
  "Facebook Post Likes [ Updated ]",
  "Facebook Reactions [ Post ]",
  "Facebook Reactions [ Story ]",
  "Facebook Views [ Updated ]",
  "Facebook Story Views [ Cheap ]",
  "Facebook Comments [ Updated ]",
  "Facebook Members [ For Group ]",
  "Youtube Watch Time [ RDP Method ]",
  "Youtube Watchtime [ Cheapest ]",
  "YouTube Subscribers [ Updated ]",
  "YouTube Subscribers [ No Refill ]",
  "Youtube Views [ Best Quality ]",
  "Youtube Views [ Updated ]",
  "Youtube Likes [ Updated ]",
  "YouTube Shares [ Updated ]",
  "Youtube Comments [ Updated ]",
  "YouTube Live Stream [ Views + Likes ]",
  "Telegram Members [ Updated ]",
  "Telegram Post View [ Updated ]",
  "Telegram Reactions [ Updated ]",
  "X / Twitter Followers [ Updated ]",
  "X / Twitter Tweet Likes [ Updated ]",
  "X / Twitter Tweet Views [ Updated ]",
  "Whatsapp Poll Votes [ Updated ]",
  "Whatsapp Post Reactions [ Cheap ]",
  "Whatsapp Channel Followers [ Cheap ]",
  "Whatsapp Channel Followers [ Targeted ]",
  "Tools Subscriptions [ Premium ]"
];

const R = [
[49,0,"Facebook Followers [ Page & Profile ] | HQ Accounts | StartTime 0-3 Hours | No Refill",50.40,100,100000],
[48,0,"Instagram Followers [ LQ Profiles & Mix Profils] | Start Time 0-50 Minutes | No Refill",54.16,100,100000],
[161,0,"Instagram Followers [ LQ Profiles & Bot Profils] | Start Time 0-50 Minutes | No Refill",58.33,100,100000],
[281,1,"TikTok Video Views For-Your - | Minimum 100K | 0-72 Hours Start | Non Drop | Lifetime Guaranteed",20.02,100000,10000000],
[282,1,"TikTok Video Views For-Your - | Minimum 10K | 0-72 Hours Start | Non Drop | Lifetime Guaranteed",105.55,10000,100000],
[249,2,"Tiktok Video Views [ Pakistani ] [ Max Unlimited ] | StartTime: 0-30 Minutes | Speed: 1M/Day | Lifetime Refill",17.64,100,2147483647],
[125,3,"TikTok Views Monetizable - | Minimum 100K | 0-72 Hours Start | Non Drop | Lifetime Guaranteed",9.46,100000,1000000],
[124,3,"TikTok Views Monetizable - | Minimum 50K | 0-72 Hours Start | Non Drop | Lifetime Guaranteed",16.38,50000,10000000],
[126,3,"TikTok Views Monetizable - | Minimum 10K | 0-72 Hours Start | Non Drop | Lifetime Guaranteed",20.38,10000,10000000],
[268,4,"TikTok Likes + Views [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | No Refill",78.12,50,1000000],
[269,4,"TikTok Likes + Views [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | 30 Days Refill",152.37,50,1000000],
[270,4,"TikTok Likes + Views [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | Lifetime Refill",187.48,50,1000000],
[184,5,"TikTok Likes [ Cheapest ] | StartTime: 0-50 Minutes | Speed: 10K/Day | No Refill",58.33,50,1000000],
[181,5,"TikTok Likes [ Cheapest ] | StartTime: 0-50 Minutes | Speed: 3K/Day | No Refill",67.70,10,1000000],
[182,5,"TikTok Likes [ Cheapest ] | StartTime: 0-50 Minutes | Speed: 5K/Day | No Refill",72.91,10,1000000],
[183,5,"TikTok Likes [ Cheapest ] | StartTime: 0-50 Minutes | Speed: 10K/Day | No Refill",80.20,10,1000000],
[7,6,"TikTok Video Views [ Max Unlimited ] | StartTime: 0-30 Min | Speed: 10M/Day | No Refill",1.35,100,100000000],
[9,6,"TikTok Video Views [ Max Unlimited ] | StartTime: 0-30 Min | Speed: 10M/Day | 30 Days Refill",17.92,100,2147483647],
[10,7,"Tiktok Video Views [ Max Unlimited ] | StartTime: 0-30 Minutes | Speed: 1M/Day | Lifetime Refill",16.38,100,2147483647],
[175,8,"TikTok Likes Pakistani [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K-50K/Day | No Refill",109.19,5,10000000],
[176,8,"TikTok Likes Pakistani [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K-50K/Day | 30 Days Refill",199.63,5,10000000],
[177,8,"TikTok Likes Pakistani [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K-50K/Day | Lifetime Refill",223.99,5,10000000],
[178,9,"TikTok Likes USA & UK Mixed [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K-50K/Day | No Refill",80.08,50,100000],
[179,9,"TikTok Likes USA & UK Mixed [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K-50K/Day | 30 Days Refill",148.11,50,100000],
[4,10,"TikTok Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | No Refill",53.51,10,1000000],
[5,10,"TikTok Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | 3 Days Refill",62.24,10,1000000],
[6,10,"TikTok Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | 7 Days Refill",67.03,10,1000000],
[22,11,"TikTok Video Save [ Max Unlimited ] | StartTime: 0-30 Min | Speed: 10M/Day | No Refill",0.0392,10,2147483647],
[23,11,"TikTok Video Save [ Max Unlimited ] | StartTime: 0-30 Min | Speed: 10M/Day | Lifetime Refill",0.168,10,2147483647],
[172,12,"TikTok Reposts [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 5K/Day | No Refill",218.39,1,5000],
[173,12,"TikTok Reposts [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 10K/Day | 30 Days Refill",254.79,1,5000],
[18,13,"TikTok Video Shares [ Max Unlimited ] | StartTime: 0-30 Min | Speed: 10M/Day | No Refill",4.37,10,2147483647],
[21,14,"Tiktok Live Stream PK Battle Points [ Unlimited ] [ Speed: 10M/Day ] | No Refill",42.00,10,2147483647],
[164,15,"TikTok Followers [ LQ Profiles ] | StartTime: 0-50 Minutes | Day 1K-5K | No Refill",672.81,10,100000],
[27,16,"TikTok Followers [ HQ Profiles ] | StartTime: 0-50 Minutes | Day 1K-5K | No Refill",697.72,10,100000],
[165,17,"TikTok Followers [ ForYou Via TikTok Ad ] [ Target: Pakistani ] | Non-Drop | Start Time: 0-72 Hours | Lifetime Refill",2234.97,500,50000000],
[1,18,"Instagram Followers [ HQ Profiles ] | Start Time 0-50 Minutes | Speed: 30K+/Day | No Refill",76.44,10,100000],
[2,18,"Instagram Followers [ HQ Profiles ] | Start Time 0-50 Minutes | Speed: 30K+/Day | 30 Days Refill",160.71,10,1000000],
[265,19,"Instagram Views + 10% Likes + 5% Shares + 5% Saves + 10% Comments + 3% Reposts",54.22,1000,100000],
[266,19,"Instagram Views + 50% Likes + 5% Shares + 5% Saves + 10% Comments + 3% Reposts",75.81,1000,100000],
[267,19,"Instagram Views + 100% Likes + 5% Shares + 5% Saves + 10% Comments + 3% Reposts",102.81,1000,100000],
[250,20,"Instagram Views Pakistan | [ Max Unlimited ] | Start Time 0-30 Minutes | Speed 500K-10M/Day | Lifetime Refill",0.84,100,217545811],
[257,21,"Instagram Repost | [ HQ Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | No Refill",102.07,100,10000000],
[258,21,"Instagram Repost | [ HQ Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | 30 Days Refill",239.56,1,1000000],
[259,21,"Instagram Repost | [ HQ Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",260.39,1,1000000],
[16,22,"Instagram Video Views | [ Max Unlimited ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | No Refill",0.2352,100,217545811],
[17,22,"Instagram Video Views | [ Max Unlimited ] | Start Time 0-30 Minutes | Speed 500K-10M/Day | Lifetime Refill",0.504,10,217545811],
[13,23,"Instagram Likes | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | No Refill",21.87,10,1000000],
[14,23,"Instagram Likes | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | 30 Days Refill",39.05,10,1000000],
[15,23,"Instagram Likes | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",44.80,30,10000000],
[28,24,"Instagram Shares | [ Max Unlimited ] | Start Time 0-30 Minutes | Speed 100K/Day | No Refill",2.91,100,2147483647],
[29,24,"Instagram Shares | [ Max Unlimited ] | Start Time 0-30 Minutes | Speed 100K/Day | Lifetime Refill",5.81,100,1000000],
[51,25,"Instagram Story Votes | HQ Profiles | Start Time 0-3 Hours | [ For the First Answer - 1 ] | No Refill",335.98,100,10000000],
[52,25,"Instagram Story Votes | HQ Profiles | Start Time 0-3 Hours | [ For the First Answer - 2 ] | No Refill",335.98,100,10000000],
[53,25,"Instagram Story Votes | HQ Profiles | Start Time 0-3 Hours | [ For the First Answer - 3 ] | No Refill",335.98,100,10000000],
[60,26,"Instagram Story Views | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | No Refill",21.00,50,200000],
[61,26,"Instagram Story Views | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",35.00,50,200000],
[31,27,"Instagram Custom Comments | [ HQ Profiles ] | Start Time 0-30 Minutes | Speed 10K/Day | No Refill",131.03,10,10000],
[30,27,"Instagram Random Comments | [ HQ Profiles ] | Start Time 0-30 Minutes | Speed 10K/Day | No Refill",154.69,10,10000],
[33,27,"Instagram Custom Comments | [ HQ Profiles ] | Start Time 0-30 Minutes | Speed 10K/Day | Lifetime Refill",302.38,10,10000],
[32,27,"Instagram Random Comments | [ HQ Profiles ] | Start Time 0-30 Minutes | Speed 10K/Day | Lifetime Refill",356.98,10,10000],
[54,28,"Instagram Post Save | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | No Refill",14.70,10,400000],
[55,28,"Instagram Post Save | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",24.50,10,400000],
[56,29,"Instagram Post Impressions | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",19.60,100,10000000],
[57,29,"Instagram Story Impressions | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",42.00,100,10000000],
[58,29,"Instagram Story Views+Impressions | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",45.50,10,400000],
[59,29,"Instagram Post Save+Impressions | [ HQ Old Accounts ] | Start Time 0-30 Minutes | Speed 5K-50K/Day | Lifetime Refill",70.00,50,200000],
[128,30,"Facebook Followers [ Page & Profile ] | HQ Accounts | Speed: 3K+/Day | StartTime 0-50 Min | No Refill",65.62,100,100000],
[129,30,"Facebook Page Likes + Followers | HQ Accounts | Speed: 10K+/Day | StartTime 0-50 Min | 30 Days Refill",111.02,100,100000],
[130,30,"Facebook Page Likes + Followers | HQ Accounts | Speed: 10K+/Day | StartTime 0-50 Min | Lifetime Refill",123.68,100,100000],
[34,31,"Facebook Page Likes + Followers | HQ Accounts | Speed: 10K+/Day | StartTime 0-50 Min | No Refill",56.67,10,500000],
[35,31,"Facebook Page Likes + Followers | HQ Accounts | Speed: 10K+/Day | StartTime 0-50 Min | 30 Days Refill",64.40,10,500000],
[36,31,"Facebook Followers [ Page & Profile ] | HQ Accounts | Speed: 3K+/Day | StartTime 0-50 Min | Lifetime Refill",81.20,10,500000],
[44,32,"Facebook Post Likes | [ HQ Accounts ] | Start Time: 0-50 Minutes | No Refill",41.86,10,1000000],
[45,32,"Facebook Post Likes | [ HQ Accounts ] | Start Time: 0-50 Minutes | 30 Days Refill",77.28,10,1000000],
[46,32,"Facebook Post Likes | [ HQ Accounts ] | Start Time: 0-50 Minutes | Lifetime Refill",87.50,10,1000000],
[37,33,"Facebook Post Reaction [ Like ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[38,33,"Facebook Post Reaction [ Love ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[39,33,"Facebook Post Reaction [ Care ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[40,33,"Facebook Post Reaction [ Haha ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[41,33,"Facebook Post Reaction [ Wow ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[42,33,"Facebook Post Reaction [ Sad ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[43,33,"Facebook Post Reaction [ Angry ] [ HQ & Mix Profiles ] | Cancel Enable | No Refill",17.40,10,100000],
[65,34,"Facebook Story Reactions | [ Like ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[66,34,"Facebook Story Reactions | [ Love ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[67,34,"Facebook Story Reactions | [ Care ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[68,34,"Facebook Story Reactions | [ Wow ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[69,34,"Facebook Story Reactions | [ Haha ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[70,34,"Facebook Story Reactions | [ Sad ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[71,34,"Facebook Story Reactions | [ Angry ] | Start Time 0-50 Minutes | Speed: 10K-20K/Day | No Refill",72.80,10,1000000],
[72,34,"Facebook Story Reactions | [ Like + Love ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[73,34,"Facebook Story Reactions | [ Like + Love + Care ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[74,34,"Facebook Story Reactions | [ Like + Love + Care + Haha ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[75,34,"Facebook Story Reactions | [ Like + Love + Care + Haha + Wow ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[76,34,"Facebook Story Reactions | [ Like + Love + Care + Haha + Wow + Sad ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[77,34,"Facebook Story Reactions | [ All Reactions ] | Start Time 0-50 Minutes | No Refill",72.80,10,1000000],
[62,35,"Facebook Views [ Reel/Videos ] | StartTime: 0-50 Min | Speed: 1K-3K/Day | Lifetime Refill",11.90,100,2147483647],
[63,35,"Facebook Views [ Reel/Videos ] | StartTime: 0-50 Min | Speed: 1K-5K/Day | Lifetime Refill",13.30,100,2147483647],
[64,35,"Facebook Views [ Reel/Videos ] | StartTime: 0-50 Min | Speed: 1K-10K/Day | Lifetime Refill",13.65,1,2147483647],
[78,36,"Facebook Story Views | [ HQ Accounts ] | Start Time 0-50 Minutes | Speed 2K/Day | No Refill",209.99,50,3000],
[79,36,"Facebook Story Views | [ HQ Accounts ] | Start Time 0-50 Minutes | Speed 10K/Day | No Refill",419.98,100,10000],
[279,37,"Facebook Random Comments | [ HQ Profiles ] | Start Time 0-50 Minutes | Speed 1K-10K/Day | No Refill",67.70,10,100000],
[280,37,"Facebook Custom Comments | [ HQ Profiles ] | Start Time 0-50 Minutes | Speed 1K-10K/Day | No Refill",118.48,10,100000],
[251,38,"Facebook Groups Members [ HQ Accounts ] | Speed: 10K-50K/Day | StartTime 0-50 Min | No Refill",70.98,100,100000],
[252,38,"Facebook Groups Members [ HQ Accounts ] | Speed: 10K-50K/Day | StartTime 0-50 Min | 30 Days Refill",104.99,10,100000],
[253,38,"Facebook Groups Members [ HQ Accounts ] | Speed: 10K-50K/Day | StartTime 0-50 Min | Lifetime Refill",118.99,10,100000],
[283,39,"Youtube Watchtime | [ RDP Method ] | 1000 Qty = 1000 Hours | 30 Days Refill",4521.77,500,10000],
[160,40,"Youtube Watchtime | [ CopyRight Method ] | 1000 Qty = 1000 Hours | No Refill",699.96,4000,10000000],
[174,41,"YouTube Subscribers [ Daily Speed: 30-50 ] | Start time: 0-36 Hours | Lifetime Refill",6131.19,50,50000],
[152,42,"YouTube Subscribers [ For Demo ] | After Drop 80% to 100% | Speed: 10K/Day | No Refill",181.99,10,30000],
[150,43,"Youtube Video Views [ Premium Quality ] | StartTime: 0-6 Hours | Speed: 1K-5K/Day | Lifetime Refill",411.58,100,1000000],
[151,43,"Youtube Video Views [ Premium Quality ] | StartTime: 0-6 Hours | Speed: 5K-10K/Day | Lifetime Refill",431.18,100,5000000],
[136,44,"Youtube Video Views | StartTime: 0-3 Hours | Speed: 1000-5000/Day | Lifetime Refill",263.66,100,10000000],
[131,45,"YouTube Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 30K/Day | No Refill",691.56,10,100000],
[132,45,"YouTube Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 30K/Day | 30 Days Refill",1231.94,10,100000],
[133,45,"YouTube Likes [ HQ Profile ] | StartTime: 0-30 Minutes | Speed: 30K/Day | Lifetime Refill",1469.92,10,100000],
[137,46,"YouTube Shares from Social Share | StartTime: 0-50 Minutes | Speed: 50K/Day | Lifetime Refill",96.59,50,500000000],
[138,46,"YouTube Shares from E-Mail | StartTime: 0-50 Minutes | Speed: 50K/Day | Lifetime Refill",96.59,50,500000000],
[139,46,"YouTube Social Shares from Facebook | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[140,46,"YouTube Social Shares from Twitter | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[141,46,"YouTube Social Shares from Reddit | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[142,46,"YouTube Social Shares from Linkedin | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[143,46,"YouTube Social Shares from Pinterest | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[144,46,"YouTube Social Shares from Whatsapp | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[145,46,"YouTube Social Shares from Blogger | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[146,46,"YouTube Social Shares from Tumblr | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[147,46,"YouTube Social Shares from Yahoo Japan! | StartTime: 0-50 Minutes | Lifetime Refill",96.59,50,500000000],
[148,47,"Youtube Custom Comments [ HQ Profile ] | Non-Drop | StartTime: 0-30 Minutes | No Refill",727.96,10,50000],
[149,47,"Youtube Custom Comments [ HQ Profile ] | Non-Drop | StartTime: 0-30 Minutes | Lifetime Refill",1287.93,10,50000],
[153,48,"Youtube Live Stream Views + Likes [ 15 Minutes ] | HQ | 100% Concurrent | No Refill",14.56,50,5000000],
[154,48,"Youtube Live Stream Views + Likes [ 30 Minutes ] | HQ | 100% Concurrent | No Refill",29.12,50,5000000],
[157,48,"Youtube Live Stream Views + Likes [ 360 Minutes ] | HQ | 100% Concurrent | No Refill",349.42,50,5000000],
[185,49,"Telegram Members [ HQ Accounts ] | Start: 0-50 Minutes | 30 Days Refill",94.43,1,1000000],
[186,49,"Telegram Members [ HQ Accounts ] | Start: 0-50 Minutes | Lifetime Refill",140.61,1,1000000],
[239,50,"Telegram Post Views [ Max Unlimited ] | Cancel Enable | Last 1 Post",0.588,10,2147483647],
[240,50,"Telegram Post Views [ Max Unlimited ] | Cancel Enable | Last 5 Post",2.67,10,2147483647],
[241,50,"Telegram Post Views [ Max Unlimited ] | Cancel Enable | Last 10 Post",5.37,10,2147483647],
[187,51,"Telegram Reactions + Free Views | Positive Mixed",4.73,10,1000000],
[188,51,"Telegram Reactions + Free Views | Negative Mixed",4.73,10,1000000],
[189,51,"Telegram Reactions + Free Views | Heart on Fire",4.73,10,1000000],
[190,51,"Telegram Reactions + Free Views | Heart",4.73,10,1000000],
[191,51,"Telegram Reactions + Free Views | Love Struck",4.73,10,1000000],
[192,51,"Telegram Reactions + Free Views | Broken Heart",4.73,10,1000000],
[193,51,"Telegram Reactions + Free Views | Fire",4.73,10,1000000],
[194,51,"Telegram Reactions + Free Views | Thumbs Up",4.73,10,1000000],
[195,51,"Telegram Reactions + Free Views | Thumbs Down",4.73,10,1000000],
[196,51,"Telegram Reactions + Free Views | Poop",4.73,10,1000000],
[197,51,"Telegram Reactions + Free Views | Lightning",4.73,10,1000000],
[198,51,"Telegram Reactions + Free Views | Snowman",4.73,10,1000000],
[199,51,"Telegram Reactions + Free Views | Writing Hand",4.73,10,1000000],
[200,51,"Telegram Reactions + Free Views | Speak No Evil",4.73,10,1000000],
[201,51,"Telegram Reactions + Free Views | Pill",4.73,10,1000000],
[202,51,"Telegram Reactions + Free Views | Cool",4.73,10,1000000],
[203,51,"Telegram Reactions + Free Views | Kiss",4.73,10,1000000],
[204,51,"Telegram Reactions + Free Views | Unicorn",4.73,10,1000000],
[205,51,"Telegram Reactions + Free Views | Hear No Evil",4.73,10,1000000],
[206,51,"Telegram Reactions + Free Views | Cool 2",4.73,10,1000000],
[207,51,"Telegram Reactions + Free Views | Alien Monster",4.73,10,1000000],
[208,51,"Telegram Reactions + Free Views | Moai",4.73,10,1000000],
[209,51,"Telegram Reactions + Free Views | Zany",4.73,10,1000000],
[210,51,"Telegram Reactions + Free Views | Nail Polish",4.73,10,1000000],
[211,51,"Telegram Reactions + Free Views | Christmas Tree",4.73,10,1000000],
[212,51,"Telegram Reactions + Free Views | Santa Claus",4.73,10,1000000],
[213,51,"Telegram Reactions + Free Views | Hugging Face",4.73,10,1000000],
[214,51,"Telegram Reactions + Free Views | Handshake",4.73,10,1000000],
[215,51,"Telegram Reactions + Free Views | Fearful Face",4.73,10,1000000],
[216,51,"Telegram Reactions + Free Views | Person Shrugging",4.73,10,1000000],
[217,51,"Telegram Reactions + Free Views | Smiling Halo",4.73,10,1000000],
[218,51,"Telegram Reactions + Free Views | Saluting Face",4.73,10,1000000],
[219,51,"Telegram Reactions + Free Views | See-No-Evil",4.73,10,1000000],
[220,51,"Telegram Reactions + Free Views | Jack-O-Lantern",4.73,10,1000000],
[221,51,"Telegram Reactions + Free Views | Eyes",4.73,10,1000000],
[222,51,"Telegram Reactions + Free Views | Ghost",4.73,10,1000000],
[223,51,"Telegram Reactions + Free Views | Nerd Face",4.73,10,1000000],
[224,51,"Telegram Reactions + Free Views | Loudly Crying",4.73,10,1000000],
[225,51,"Telegram Reactions + Free Views | Sleeping Face",4.73,10,1000000],
[226,51,"Telegram Reactions + Free Views | Angry Face",4.73,10,1000000],
[227,51,"Telegram Reactions + Free Views | Smiling Horns",4.73,10,1000000],
[228,51,"Telegram Reactions + Free Views | Middle Finger",4.73,10,1000000],
[229,51,"Telegram Reactions + Free Views | Kiss Mark",4.73,10,1000000],
[230,51,"Telegram Reactions + Free Views | Champagne",4.73,10,1000000],
[231,51,"Telegram Reactions + Free Views | Strawberry",4.73,10,1000000],
[232,51,"Telegram Reactions + Free Views | Tears of Joy",4.73,10,1000000],
[233,51,"Telegram Reactions + Free Views | Neutral Face",4.73,10,1000000],
[234,51,"Telegram Reactions + Free Views | Raised Eyebrow",4.73,10,1000000],
[235,51,"Telegram Reactions + Free Views | Trophy",4.73,10,1000000],
[236,51,"Telegram Reactions + Free Views | Banana",4.73,10,1000000],
[237,51,"Telegram Reactions + Free Views | Yawning Face",4.73,10,1000000],
[238,51,"Telegram Reactions + Free Views | Rolling Laughing",4.73,10,1000000],
[275,52,"X / Twitter Followers [ HQ Profiles ] | StartTime: 0-50 Minutes | Day 1K-5K | No Refill",619.72,100,5000000],
[276,52,"X / Twitter Followers [ HQ Profiles ] | StartTime: 0-50 Minutes | Day 1K-5K | 30 Days Refill",1771.67,100,100000],
[278,53,"X / Twitter Likes [ HQ ] | Start Time 0-50 Minutes | 15 Days Refill",1778.70,100,1000000],
[277,53,"X / Twitter Likes [ HQ ] | Start Time 0-50 Minutes | No Refill",1886.50,10,5000],
[271,54,"X / Twitter Tweet - Video Views [ HQ ] | Start Time 0-50 Minutes | No Refill",0.7056,100,2147483647],
[272,54,"X / Twitter Tweet - Video Views [ HQ ] | Start Time 0-50 Minutes | 30 Days Refill",1.22,100,2147483647],
[273,54,"X / Twitter Tweet - Video Views [ HQ ] | Start Time 0-50 Minutes | Lifetime Refill",1.40,100,2147483647],
[80,55,"Whatsapp Poll Votes [ For Votes : A ] | No Refill",1819.91,10,100000],
[81,55,"Whatsapp Poll Votes [ For Votes : B ] | No Refill",1819.91,10,100000],
[82,55,"Whatsapp Poll Votes [ For Votes : C ] | No Refill",1819.91,10,100000],
[83,55,"Whatsapp Poll Votes [ For Votes : D ] | No Refill",1819.91,10,100000],
[84,55,"Whatsapp Poll Votes [ For Votes : E ] | No Refill",1819.91,10,100000],
[99,56,"Whatsapp Channel Post Emoji Reactions | Random Mix | HQ Profiles | No Refill",291.18,10,100000],
[100,56,"Whatsapp Channel Post Emoji Reactions | Like | HQ Profiles | No Refill",291.18,10,100000],
[101,56,"Whatsapp Channel Post Emoji Reactions | Love | HQ Profiles | No Refill",291.18,10,100000],
[102,56,"Whatsapp Channel Post Emoji Reactions | Laugh | HQ Profiles | No Refill",291.18,10,100000],
[103,56,"Whatsapp Channel Post Emoji Reactions | Wow | HQ Profiles | No Refill",291.18,10,100000],
[104,56,"Whatsapp Channel Post Emoji Reactions | Sad | HQ Profiles | No Refill",291.18,10,100000],
[105,56,"Whatsapp Channel Post Emoji Reactions | Pray | HQ Profiles | No Refill",291.18,10,100000],
[106,56,"Whatsapp Channel Post Emoji Reactions | Fire | HQ Profiles | No Refill",291.18,10,100000],
[107,56,"Whatsapp Channel Post Emoji Reactions | Trophy | HQ Profiles | No Refill",291.18,10,100000],
[108,56,"Whatsapp Channel Post Emoji Reactions | Party | HQ Profiles | No Refill",291.18,10,100000],
[109,56,"Whatsapp Channel Post Emoji Reactions | Clap | HQ Profiles | No Refill",291.18,10,100000],
[110,56,"Whatsapp Channel Post Emoji Reactions | Cool | HQ Profiles | No Refill",291.18,10,100000],
[111,56,"Whatsapp Channel Post Emoji Reactions | Angry | HQ Profiles | No Refill",291.18,10,100000],
[112,56,"Whatsapp Channel Post Emoji Reactions | Shocked | HQ Profiles | No Refill",291.18,10,100000],
[113,56,"Whatsapp Channel Post Emoji Reactions | Middle Finger | HQ Profiles | No Refill",291.18,10,100000],
[114,56,"Whatsapp Channel Post Emoji Reactions | Poop | HQ Profiles | No Refill",291.18,10,100000],
[115,56,"Whatsapp Channel Post Emoji Reactions | Thumbs Down | HQ Profiles | No Refill",291.18,10,100000],
[116,56,"Whatsapp Channel Post Emoji Reactions | Strong | HQ Profiles | No Refill",291.18,10,100000],
[117,56,"Whatsapp Channel Post Emoji Reactions | Broken Heart | HQ Profiles | No Refill",291.18,10,100000],
[118,56,"Whatsapp Channel Post Emoji Reactions | Nausea | HQ Profiles | No Refill",291.18,10,100000],
[119,56,"Whatsapp Channel Post Emoji Reactions | Money Fly | HQ Profiles | No Refill",291.18,10,100000],
[120,56,"Whatsapp Channel Post Emoji Reactions | Skull | HQ Profiles | No Refill",291.18,10,100000],
[121,56,"Whatsapp Channel Post Emoji Reactions | Dollar | HQ Profiles | No Refill",291.18,10,100000],
[85,57,"Whatsapp Channel Followers | HQ Profiles | Speed: 100-200/Day | No Refill",673.37,10,10000],
[86,57,"Whatsapp Channel Followers | HQ Profiles | Speed: 1000-5000/Day | No Refill",873.55,10,5000],
[87,57,"Whatsapp Channel Followers | HQ Profiles | Speed: 1000+/Day | No Refill",1273.93,10,500000],
[88,58,"Whatsapp Channel Members [ India ] | HQ Profiles | No Refill",1091.94,10,100000],
[89,58,"Whatsapp Channel Members [ Arab ] | HQ Profiles | No Refill",1091.94,10,100000],
[90,58,"Whatsapp Channel Members [ Turkey ] | HQ Profiles | No Refill",1091.94,10,100000],
[91,58,"Whatsapp Channel Members [ USA ] | HQ Profiles | No Refill",1091.94,10,100000],
[92,58,"Whatsapp Channel Members [ Europe ] | HQ Profiles | No Refill",1091.94,10,100000],
[93,58,"Whatsapp Channel Members [ Brazil ] | HQ Profiles | No Refill",1091.94,10,100000],
[94,58,"Whatsapp Channel Members [ Pakistan ] | HQ Profiles | No Refill",1091.94,10,100000],
[95,58,"Whatsapp Channel Members [ Philippines ] | HQ Profiles | No Refill",1091.94,10,100000],
[96,58,"Whatsapp Channel Members [ Vietnam ] | HQ Profiles | No Refill",1091.94,10,100000],
[97,58,"Whatsapp Channel Members [ Thailand ] | HQ Profiles | No Refill",1091.94,10,100000],
[98,58,"Whatsapp Channel Members [ Nigeria ] | HQ Profiles | No Refill",1091.94,10,100000],
[168,59,"Canva Pro Subscription | Put Your Email In Link Section",36.45,1000,1000],
[170,59,"Prime Video Premium Account | Put Your Email In Link Section | 25 Days Refill",126.00,1,1],
[171,59,"IPTV Monthly Subscription | 4K HD | Put Your Email In Link Section | 25 Days Refill",378.01,1,1],
[261,59,"YouTube Monthly Premium Account | Put Your Email In Link Section | 25 Days Refill",513.21,1,1],
[264,59,"Pak Pin Approved Adsense - [ YT HOSTED ] | Put Your Email In Link Section",7598.64,1,1],
[263,59,"Pak Approved Adsense - [ YT HOSTED ] | Put Your Email In Link Section",855.36,1,1]
];

const S = R.map(function(x){return{id:x[0],cat:CATS[x[1]],name:x[2],rate:x[3],price:+(x[3]*1.25).toFixed(2),min:x[4],max:x[5]>=2147483647?'Unlimited':x[5]};});
const CATS_UNIQ = [...new Set(S.map(function(s){return s.cat;}))];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>MRFSMM - Best & Cheapest SMM Panel</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Plus Jakarta Sans',sans-serif;background:#f0f4f8;color:#1a202c;overflow-x:hidden}
#sidebar{position:fixed;left:0;top:0;bottom:0;width:260px;background:linear-gradient(180deg,#0c1222,#111b33);z-index:50;display:flex;flex-direction:column;overflow-y:auto;transition:transform .3s}
.brand{padding:24px 20px;border-bottom:1px solid rgba(255,255,255,.06)}
.brand h1{font-size:1.6rem;font-weight:800;background:linear-gradient(135deg,#f97316,#fbbf24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.brand p{font-size:.7rem;color:#64748b;margin-top:2px;letter-spacing:1px;text-transform:uppercase}
#nav{flex:1;padding:12px 10px}
#nav a{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;color:#94a3b8;font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s;margin-bottom:2px;text-decoration:none;position:relative}
#nav a:hover{color:#e2e8f0;background:rgba(255,255,255,.04)}
#nav a.active{color:#f97316;background:rgba(249,115,22,.08);font-weight:600}
#nav a.active::before{content:'';position:absolute;left:0;top:15%;height:70%;width:3px;background:#f97316;border-radius:0 3px 3px 0}
#nav a i{width:20px;text-align:center}
.sf{padding:16px 20px;border-top:1px solid rgba(255,255,255,.06)}
.sf p{font-size:.68rem;color:#475569;text-align:center}
#main{margin-left:260px;min-height:100vh}
#topbar{position:sticky;top:0;height:64px;background:#fff;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;padding:0 28px;z-index:40;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.bb{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;padding:6px 16px;border-radius:20px;font-size:.85rem;font-weight:700;display:flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(249,115,22,.3)}
.av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#f97316,#fbbf24);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.8rem}
#content{padding:24px 28px 40px}
.page{display:none;animation:fu .35s ease}.page.active{display:block}
@keyframes fu{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.sc{background:#fff;border-radius:14px;padding:20px 22px;border:1px solid #e2e8f0;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s}
.sc:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,.06)}
.sc .ib{position:absolute;right:-8px;top:-8px;width:64px;height:64px;border-radius:50%;opacity:.08}
.sl{font-size:.78rem;color:#64748b;font-weight:500;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}
.sv{font-size:1.35rem;font-weight:800;color:#0f172a}
.fc{background:#fff;border-radius:16px;border:1px solid #e2e8f0;padding:24px 28px}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:0 24px}
.fg1{margin-bottom:18px}
.fg1 label{display:block;font-size:.82rem;font-weight:600;color:#374151;margin-bottom:6px}
.fg1 select,.fg1 input{width:100%;padding:10px 14px;border:1.5px solid #d1d5db;border-radius:10px;font-size:.875rem;font-family:inherit;transition:border .2s,box-shadow .2s;background:#fff;outline:none}
.fg1 select:focus,.fg1 input:focus{border-color:#f97316;box-shadow:0 0 0 3px rgba(249,115,22,.1)}
.cd{background:#f8fafc!important;font-weight:700!important;color:#f97316!important}
.hint{font-size:.75rem;color:#9ca3af;margin-top:4px}
.bp{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;border:none;padding:12px 32px;border-radius:10px;font-size:.95rem;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(249,115,22,.3)}
.bp:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(249,115,22,.4)}
.bp.sm{padding:6px 14px;font-size:.78rem;border-radius:8px}
.bs{background:#fff;color:#374151;border:1.5px solid #d1d5db;padding:8px 20px;border-radius:10px;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit}
.bs:hover{border-color:#f97316;color:#f97316}
.bs.sm{padding:6px 14px;font-size:.78rem;border-radius:8px}
.wa{width:42px;height:42px;border-radius:10px;background:#25d366;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.2rem;text-decoration:none;transition:transform .2s}
.wa:hover{transform:scale(1.05)}
.oc{background:#fff;border-radius:14px;border:1px solid #e2e8f0;padding:18px 20px;margin-bottom:12px;transition:box-shadow .2s}
.oc:hover{box-shadow:0 4px 16px rgba(0,0,0,.06)}
.badge{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:20px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px}
.b-pen{background:#fef3c7;color:#92400e}.b-prog{background:#e0e7ff;color:#3730a3}.b-done{background:#d1fae5;color:#065f46}.b-part{background:#fce7f3;color:#9d174d}.b-can{background:#fee2e2;color:#991b1b}
.tabs{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:20px;background:#f1f5f9;padding:4px;border-radius:12px}
.tb{padding:8px 18px;border-radius:8px;font-size:.82rem;font-weight:600;color:#64748b;cursor:pointer;border:none;background:transparent;transition:all .2s;font-family:inherit}
.tb:hover{color:#334155}.tb.active{background:#fff;color:#f97316;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.dt{width:100%;border-collapse:separate;border-spacing:0;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0}
.dt thead{background:linear-gradient(135deg,#f8fafc,#f1f5f9)}
.dt th{padding:12px 16px;font-size:.78rem;font-weight:700;color:#475569;text-align:left;text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid #e2e8f0}
.dt td{padding:12px 16px;font-size:.84rem;color:#374151;border-bottom:1px solid #f1f5f9;vertical-align:middle}
.dt tbody tr:hover{background:#fefce8}
.dt tbody tr:last-child td{border-bottom:none}
.ch{background:linear-gradient(135deg,#fff7ed,#ffedd5)!important;padding:10px 16px!important;font-size:.82rem!important;font-weight:700!important;color:#9a3412!important;border-left:3px solid #f97316}
.etd{background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden}
.eth{padding:16px 20px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between}
.eth h3{font-size:.95rem;font-weight:700;color:#0f172a;margin:0}
.tw{overflow-x:auto}
.empty{font-size:.78rem;color:#94a3b8;text-align:center;padding:30px}
.es{text-align:center;padding:60px 20px;color:#94a3b8}
.es i{font-size:3rem;margin-bottom:12px;display:block}.es p{font-size:.95rem;font-weight:500}.es span{font-size:.82rem;margin-top:4px;display:block}
.sb{position:relative}.sb input{padding-left:42px}.sb i{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#9ca3af;font-size:.9rem}
.wb{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:start;gap:10px}
.wb i{color:#d97706;margin-top:2px;flex-shrink:0}
.wb p{font-size:.84rem;color:#92400e;line-height:1.5}
.fg2{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px}
.pc{background:linear-gradient(135deg,#065f46,#047857);border-radius:16px;padding:28px;color:#fff;position:relative;overflow:hidden}
.pc::before{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.06)}
.pc::after{content:'';position:absolute;bottom:-40px;left:-20px;width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,.04)}
.pl{font-size:.75rem;text-transform:uppercase;letter-spacing:1px;opacity:.7;margin-bottom:12px}
.pc h3{font-size:1.15rem;font-weight:700;margin-bottom:20px;color:#fff}
.pd2{margin-bottom:16px;position:relative;z-index:1}
.dl{display:block;font-size:.75rem;opacity:.6;margin-bottom:4px}
.dv{font-size:1.1rem;font-weight:600}
.dv.big{font-size:1.5rem;font-weight:800;letter-spacing:1px}
.rh{background:linear-gradient(135deg,#f97316,#ea580c);border-radius:20px;padding:40px;text-align:center;color:#fff;margin-bottom:24px}
.rh i{font-size:3rem;margin-bottom:16px;opacity:.9}
.rh h2{font-size:1.4rem;font-weight:800;margin-bottom:8px}
.rh p{font-size:.9rem;opacity:.85;line-height:1.6}
.rig{display:flex;gap:8px}.rig input{flex:1}
.ibx{margin-top:20px;padding:20px;border-radius:12px}
.ibx.g{background:#f0fdf4;border:1px solid #bbf7d0}
.ibx.b{background:#f0f9ff;border:1px solid #bae6fd;margin-top:8px}
.ibx.g h4{font-size:.9rem;font-weight:700;margin-bottom:8px;color:#065f46}
.ibx.b p{font-size:.8rem;color:#0369a1;line-height:1.6}
.ibx.g ol{font-size:.82rem;color:#047857;line-height:2;padding-left:18px}
.rg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.rvc{background:#fff;border-radius:14px;border:1px solid #e2e8f0;padding:20px}
.rvh{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.rva{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#f97316,#fbbf24);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.85rem;flex-shrink:0}
.rvn{font-size:.88rem;font-weight:700;color:#0f172a}
.rvd{font-size:.72rem;color:#94a3b8}
.rvs{margin-bottom:8px}.rvs i{color:#fbbf24;font-size:.8rem}.rvs .em{color:#d1d5db}
.rvt{font-size:.84rem;color:#475569;line-height:1.6}
.pt{font-size:1.2rem;font-weight:700;margin-bottom:16px;color:#0f172a}
.pt i{margin-right:8px}
.aeb{background:#0f172a;border-radius:12px;padding:20px;margin-bottom:16px;overflow-x:auto}
.ael{color:#94a3b8;font-size:.78rem;margin-bottom:8px}
.aeb code{color:#fbbf24;font-size:.9rem;word-break:break-all}
.st2{font-size:.95rem;font-weight:700;margin:20px 0 12px;color:#0f172a}
.aal{display:flex;flex-direction:column;gap:8px}
.aai{padding:12px 16px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0}
.mb{font-size:.75rem;font-weight:700;color:#f97316;text-transform:uppercase}
.aai code{font-size:.84rem;color:#334155;margin-left:8px}
.ad{font-size:.78rem;color:#64748b;margin-left:8px}
.tc{background:#fff;border-radius:16px;border:1px solid #e2e8f0;padding:28px;line-height:1.8;color:#374151;font-size:.88rem}
.tc h3{font-weight:700;margin:20px 0 8px;color:#0f172a}
.ag{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.dr{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:.84rem}
.dr span:first-child{color:#64748b}.dr span:last-child{font-weight:600}
.tbc{color:#f97316!important;font-weight:700!important}
.iwb{display:flex;gap:8px}.iwb input{flex:1}
.mi{font-family:'Courier New',monospace!important;font-size:.82rem!important;background:#f8fafc!important}
#toast-container{position:fixed;top:80px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px}
.toast{padding:14px 20px;border-radius:12px;font-size:.85rem;font-weight:500;color:#fff;box-shadow:0 8px 30px rgba(0,0,0,.15);animation:si .3s ease;min-width:280px;display:flex;align-items:center;gap:10px}
.toast-success{background:rgba(16,185,129,.95)}
.toast-error{background:rgba(239,68,68,.95)}
.toast-info{background:rgba(6,182,212,.95)}
.toast-warning{background:rgba(245,158,11,.95)}
@keyframes si{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
@keyframes so{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(40px)}}
.pd-dot{width:8px;height:8px;border-radius:50%;display:inline-block;background:#10b981;animation:pl 2s infinite}
@keyframes pl{0%,100%{opacity:1}50%{opacity:.3}}
#mobile-toggle{display:none;position:fixed;top:16px;left:16px;z-index:60;width:40px;height:40px;border-radius:10px;background:#0c1222;color:#fff;border:none;cursor:pointer;font-size:1.1rem;align-items:center;justify-content:center}
#overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:45}
@media(max-width:1024px){.sg{grid-template-columns:repeat(2,1fr)!important}.rg{grid-template-columns:repeat(2,1fr)!important}.ag{grid-template-columns:1fr!important}}
@media(max-width:768px){#sidebar{transform:translateX(-100%)}#sidebar.open{transform:translateX(0)}#main{margin-left:0}#mobile-toggle{display:flex}#overlay.show{display:block}#topbar{padding-left:60px}#content{padding:16px}.sg{grid-template-columns:1fr 1fr!important;gap:10px!important}.sv{font-size:1.1rem}.fg{grid-template-columns:1fr!important;gap:0!important}.fg2{grid-template-columns:1fr!important}.dt th,.dt td{padding:8px 10px;font-size:.75rem}.rg{grid-template-columns:1fr!important}}
@media(max-width:480px){.sg{grid-template-columns:1fr!important}.tabs{gap:2px}.tb{padding:6px 12px;font-size:.76rem}}
</style>
</head>
<body>
<button id="mobile-toggle" onclick="toggleSidebar()"><i class="fas fa-bars"></i></button>
<div id="overlay" onclick="toggleSidebar()"></div>
<aside id="sidebar">
<div class="brand"><h1>MRFSMM</h1><p>Cheapest SMM Panel</p></div>
<nav id="nav">
<a data-page="new-order" class="active"><i class="fas fa-plus-circle"></i> New Order</a>
<a data-page="my-orders"><i class="fas fa-list-alt"></i> My Orders</a>
<a data-page="add-funds"><i class="fas fa-wallet"></i> Add Funds</a>
<a data-page="services"><i class="fas fa-th-list"></i> Our Services</a>
<a data-page="refer"><i class="fas fa-gift"></i> Refer & Earn</a>
<a data-page="reviews"><i class="fas fa-star"></i> Clients Reviews</a>
<a data-page="api"><i class="fas fa-plug"></i> Connect API</a>
<a data-page="terms"><i class="fas fa-file-contract"></i> Terms & Policy</a>
<a data-page="account"><i class="fas fa-user-cog"></i> Account & API</a>
</nav>
<div class="sf"><p>MRFSMM &copy; 2025 - All Rights Reserved</p></div>
</aside>
<div id="main">
<header id="topbar">
<div><span style="font-size:.85rem;color:#64748b;font-weight:500"><i class="fas fa-coins" style="color:#f97316;margin-right:4px"></i> PKR Rs</span></div>
<div style="display:flex;align-items:center;gap:16px">
<div class="bb"><i class="fas fa-wallet"></i> Rs <span id="top-balance">4.45</span></div>
<div style="display:flex;align-items:center;gap:8px"><div class="av" id="av-init">K</div><span style="font-size:.85rem;font-weight:600;color:#1e293b" id="top-uname">kutta</span></div>
</div>
</header>
<div id="content">
<section class="page active" id="page-new-order">
<div class="sg" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px">
<div class="sc"><div class="ib" style="background:#f97316"></div><div class="sl"><i class="fas fa-hand-sparkles" style="color:#f97316;margin-right:4px"></i> Welcome Dear</div><div class="sv" id="st-uname">kutta</div></div>
<div class="sc"><div class="ib" style="background:#3b82f6"></div><div class="sl"><i class="fas fa-shopping-cart" style="color:#3b82f6;margin-right:4px"></i> Total Orders</div><div class="sv" id="st-ords">0</div></div>
<div class="sc"><div class="ib" style="background:#10b981"></div><div class="sl"><i class="fas fa-chart-line" style="color:#10b981;margin-right:4px"></i> Total Spent</div><div class="sv">Rs <span id="st-spent">0.00</span></div></div>
<div class="sc"><div class="ib" style="background:#8b5cf6"></div><div class="sl"><i class="fas fa-wallet" style="color:#8b5cf6;margin-right:4px"></i> Your Balance</div><div class="sv">Rs <span id="st-bal">4.45</span></div></div>
</div>
<div class="fc">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px"><h2 style="font-size:1.1rem;font-weight:700;color:#0f172a"><i class="fas fa-bolt" style="color:#f97316;margin-right:6px"></i>Place New Order</h2><div style="font-size:.8rem;color:#64748b;display:flex;align-items:center;gap:6px"><span class="pd-dot"></span> Session: <span id="stimer">0m 0s</span></div></div>
<div class="fg">
<div class="fg1"><label>Category</label><select id="o-cat" onchange="onCatChange()"><option value="">-- Select Category --</option></select></div>
<div class="fg1"><label>Service</label><select id="o-svc" onchange="onSvcChange()" disabled><option value="">-- Select Service --</option></select></div>
</div>
<div class="fg1"><label>Link</label><input type="url" id="o-link" placeholder="Enter your post/profile/video link here..."></div>
<div class="fg">
<div class="fg1"><label>Quantity</label><input type="number" id="o-qty" placeholder="Enter quantity" oninput="calcCharge()" disabled><div class="hint" id="q-hint">Select a service first</div></div>
<div class="fg1"><label>Charge</label><input type="text" id="o-charge" value="Rs 0.00" readonly class="cd"></div>
</div>
<div style="display:flex;align-items:center;gap:12px;margin-top:6px;flex-wrap:wrap">
<button class="bp" onclick="submitOrder()"><i class="fas fa-paper-plane"></i> Submit</button>
<a href="https://wa.me/923439898333" target="_blank" class="wa" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
</div>
</div>
</section>
<section class="page" id="page-my-orders">
<h2 class="pt"><i class="fas fa-list-alt" style="color:#f97316"></i> My Orders</h2>
<div class="tabs" id="o-tabs">
<button class="tb active" data-filter="all">All</button>
<button class="tb" data-filter="Pending">Pending</button>
<button class="tb" data-filter="In Progress">In Progress</button>
<button class="tb" data-filter="Completed">Completed</button>
<button class="tb" data-filter="Partial">Partial</button>
<button class="tb" data-filter="Canceled">Canceled</button>
</div>
<div id="ord-list"><div class="es"><i class="fas fa-inbox"></i><p>No orders yet</p><span>Place your first order from the New Order page</span></div></div>
</section>
<section class="page" id="page-add-funds">
<h2 class="pt"><i class="fas fa-wallet" style="color:#f97316"></i> Add Funds</h2>
<div class="wb"><i class="fas fa-exclamation-triangle"></i><p><strong>Before Depositing Read Our Terms And Instructions</strong> - Send payment to the given number, then submit your transaction details below. Your payment will be added after verification.</p></div>
<div class="fg2">
<div class="pc"><div style="position:relative;z-index:1"><p class="pl">Payment Method</p><h3><i class="fas fa-mobile-alt"></i> EasyPaisa</h3><div class="pd2"><span class="dl">Account Number</span><span class="dv big">0343-9898333</span></div><div class="pd2"><span class="dl">Account Name</span><span class="dv">Nihayat Begum</span></div></div></div>
<div class="fc"><h3 style="font-size:.95rem;font-weight:700;margin-bottom:16px;color:#0f172a">Submit Payment Proof</h3>
<div class="fg1"><label>Amount (PKR)</label><input type="number" id="f-amt" placeholder="Enter deposit amount" min="1"></div>
<div class="fg1"><label>Transaction ID</label><input type="text" id="f-txn" placeholder="Enter your transaction ID"></div>
<div class="fg1"><label>Sending Number</label><input type="text" id="f-snd" placeholder="Your EasyPaisa/JazzCash number"></div>
<button class="bp" onclick="submitFund()"><i class="fas fa-paper-plane"></i> Submit Payment</button>
</div>
</div>
<div class="etd"><div class="eth"><h3><i class="fas fa-clock" style="color:#f59e0b;margin-right:6px"></i> Pending Payments</h3><span class="badge b-pen" id="pen-cnt">0 Pending</span></div>
<div class="tw"><table class="dt"><thead><tr><th>ID</th><th>Date</th><th>Amount</th><th>Txn ID</th><th>Status</th></tr></thead><tbody id="pen-tb"><tr><td colspan="5" class="empty">No pending payments</td></tr></tbody></table></div></div>
</section>
<section class="page" id="page-services">
<h2 class="pt"><i class="fas fa-th-list" style="color:#f97316"></i> Our Services</h2>
<div class="sb" style="margin-bottom:20px;max-width:400px"><i class="fas fa-search"></i><input type="text" id="svc-search" placeholder="Search services..." oninput="filterSvc()"></div>
<div class="tw"><table class="dt"><thead><tr><th style="width:60px">ID</th><th>Service Name</th><th style="width:110px">Price/1K</th><th style="width:80px">Min</th><th style="width:100px">Max</th><th style="width:100px">Action</th></tr></thead><tbody id="svc-tb"></tbody></table></div>
</section>
<section class="page" id="page-refer">
<div style="max-width:600px;margin:0 auto">
<div class="rh"><i class="fas fa-gift"></i><h2>Refer & Earn</h2><p>Invite friends to MRFSMM and earn commission on every order they place.</p></div>
<div class="fc"><label style="font-size:.82rem;font-weight:600;color:#374151;display:block;margin-bottom:8px">Your Referral Link</label><div class="rig"><input type="text" id="ref-link" readonly style="flex:1;padding:10px 14px;border:1.5px solid #d1d5db;border-radius:10px;font-size:.84rem;background:#f8fafc"><button class="bp sm" onclick="cpRef()"><i class="fas fa-copy"></i> Copy</button></div>
<div class="ibx g"><h4>How It Works</h4><ol><li>Share your unique referral link with friends</li><li>They register using your link</li><li>You earn commission on every order they place</li><li>Commission is added to your balance automatically</li></ol></div></div>
</div>
</section>
<section class="page" id="page-reviews">
<h2 class="pt"><i class="fas fa-star" style="color:#f97316"></i> Clients Reviews</h2>
<div class="rg" id="rev-grid"></div>
</section>
<section class="page" id="page-api">
<h2 class="pt"><i class="fas fa-plug" style="color:#f97316"></i> Connect API</h2>
<div class="fc">
<p style="font-size:.88rem;color:#475569;line-height:1.7;margin-bottom:20px">Use our API to integrate MRFSMM services into your own platform.</p>
<div class="aeb"><p class="ael">API Endpoint</p><code>https://tajammalsmmpanel.com/api/v2</code></div>
<div class="fg1"><label>API Key</label><div class="iwb"><input type="text" value="c7601e01af8aa62ca2518e89d88c4d45" readonly class="mi"><button class="bs sm" onclick="cpT('c7601e01af8aa62ca2518e89d88c4d45')"><i class="fas fa-copy"></i></button></div></div>
<h3 class="st2">Available Actions</h3>
<div class="aal">
<div class="aai"><span class="mb">POST</span><code>action=services</code><span class="ad">- Get service list</span></div>
<div class="aai"><span class="mb">POST</span><code>action=add</code><span class="ad">- Place new order</span></div>
<div class="aai"><span class="mb">POST</span><code>action=status</code><span class="ad">- Check order status</span></div>
<div class="aai"><span class="mb">POST</span><code>action=balance</code><span class="ad">- Check balance</span></div>
</div></div>
</section>
<section class="page" id="page-terms">
<h2 class="pt"><i class="fas fa-file-contract" style="color:#f97316"></i> Terms & Policy</h2>
<div class="tc"><h3>1. General Terms</h3><p>By using MRFSMM, you agree to these terms. We reserve the right to modify terms at any time.</p><h3>2. Services</h3><p>All services are provided as described. Start times and delivery speeds are estimates and may vary. Partial deliveries may occur - remaining amount refunded to balance.</p><h3>3. Payments & Refunds</h3><p>Payments processed manually via EasyPaisa. No refunds for completed orders. Partial orders get remaining balance credited back.</p><h3>4. Account Responsibility</h3><p>You are responsible for your account security. Do not share your credentials.</p><h3>5. Prohibited Use</h3><p>Using our services for illegal activities is strictly prohibited. We reserve the right to cancel orders and suspend accounts.</p><h3>6. Fund Deposits</h3><p>Send payment only to the official number displayed on Add Funds page. Funds added after manual verification.</p></div>
</section>
<section class="page" id="page-account">
<h2 class="pt"><i class="fas fa-user-cog" style="color:#f97316"></i> Account & API</h2>
<div class="ag">
<div class="fc"><h3 style="font-size:.95rem;font-weight:700;margin-bottom:16px;color:#0f172a">Account Details</h3>
<div class="dr"><span>Username</span><span id="ac-uname">kutta</span></div>
<div class="dr"><span>Email</span><span>-</span></div>
<div class="dr"><span>Balance</span><span class="tbc" id="ac-bal">Rs 4.45</span></div>
<div class="dr"><span>Total Orders</span><span id="ac-ords">0</span></div>
<div class="dr"><span>Total Spent</span><span>Rs <span id="ac-spent">0.00</span></span></div>
</div>
<div class="fc"><h3 style="font-size:.95rem;font-weight:700;margin-bottom:16px;color:#0f172a">API Configuration</h3>
<div class="fg1"><label>API Key</label><div class="iwb"><input type="text" value="c7601e01af8aa62ca2518e89d88c4d45" readonly class="mi"><button class="bs sm" onclick="cpT('c7601e01af8aa62ca2518e89d88c4d45')"><i class="fas fa-copy"></i></button></div></div>
<div class="fg1"><label>API URL</label><input type="text" value="https://tajammalsmmpanel.com/api/v2" readonly class="mi"></div>
<div class="ibx b"><p><i class="fas fa-info-circle" style="margin-right:4px"></i> Use these credentials to connect external applications. All API calls require your API key.</p></div>
</div>
</div>
</section>
</div></div>
<div id="toast-container"></div>
<script>
var SVC=${JSON.stringify(S)};
var CATS=${JSON.stringify(CATS_UNIQ)};
var SK='c7601e01af8aa62ca2518e89d88c4d45';
var AU='https://tajammalsmmpanel.com/api/v2';
var ST=JSON.parse(localStorage.getItem('mrf_st'))||{u:'kutta',b:4.45,o:[],p:[],sp:0,no:100001,np:1};
function sv(){localStorage.setItem('mrf_st',JSON.stringify(ST));}
function fN(n){return n==='Unlimited'?'Unlimited':Number(n).toLocaleString();}
function fP(p){return'Rs '+Number(p).toFixed(2);}
function gBC(s){return{Pending:'b-pen','In Progress':'b-prog',Completed:'b-done',Partial:'b-part',Canceled:'b-can'}[s]||'b-pen';}
function toast(m,t){var c=document.getElementById('toast-container');var d=document.createElement('div');d.className='toast toast-'+(t||'info');var ic={success:'fa-check-circle',error:'fa-times-circle',info:'fa-info-circle',warning:'fa-exclamation-circle'};d.innerHTML='<i class="fas '+(ic[t]||ic.info)+'"></i><span>'+m+'</span>';c.appendChild(d);setTimeout(function(){d.style.animation='so .3s ease forwards';setTimeout(function(){d.remove();},300);},3500);}
function cpT(t){navigator.clipboard.writeText(t).then(function(){toast('Copied!','success');});}
function cpRef(){cpT(document.getElementById('ref-link').value);}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('show');}
function navTo(pg){document.querySelectorAll('#nav a').forEach(function(n){n.classList.remove('active');});var al=document.querySelector('#nav a[data-page="'+pg+'"]');if(al)al.classList.add('active');document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});var tp=document.getElementById('page-'+pg);if(tp)tp.classList.add('active');if(pg==='my-orders')renderOrd();if(pg==='services')renderSvc();if(pg==='add-funds')renderPen();if(pg==='reviews')renderRev();if(pg==='refer')document.getElementById('ref-link').value=location.origin+location.pathname+'?ref='+ST.u;}
function updUI(){var b=ST.b.toFixed(2);document.getElementById('top-balance').textContent=b;document.getElementById('top-uname').textContent=ST.u;document.getElementById('av-init').textContent=ST.u.charAt(0).toUpperCase();document.getElementById('st-uname').textContent=ST.u;document.getElementById('st-ords').textContent=ST.o.length;document.getElementById('st-spent').textContent=ST.sp.toFixed(2);document.getElementById('st-bal').textContent=b;document.getElementById('ac-uname').textContent=ST.u;document.getElementById('ac-bal').textContent='Rs '+b;document.getElementById('ac-ords').textContent=ST.o.length;document.getElementById('ac-spent').textContent=ST.sp.toFixed(2);}
var curF='all';
function initTabs(){document.querySelectorAll('#o-tabs .tb').forEach(function(btn){btn.addEventListener('click',function(){document.querySelectorAll('#o-tabs .tb').forEach(function(b){b.classList.remove('active');});btn.classList.add('active');curF=btn.dataset.filter;renderOrd();});});}
function renderOrd(){var c=document.getElementById('ord-list');var ords=ST.o;if(curF!=='all')ords=ords.filter(function(o){return o.st===curF;});if(!ords.length){c.innerHTML='<div class="es"><i class="fas fa-inbox"></i><p>'+(curF==='all'?'No orders yet':'No '+curF+' orders')+'</p><span>Place your first order from the New Order page</span></div>';return;}c.innerHTML=ords.map(function(o){var ls=o.lk.length>50?o.lk.substring(0,50)+'...':o.lk;return'<div class="oc"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:12px;flex-wrap:wrap;gap:8px"><div><span style="font-size:.78rem;color:#64748b">Order #'+o.id+'</span> <span class="badge '+gBC(o.st)+'" style="margin-left:8px">'+o.st+'</span></div><span style="font-size:.85rem;font-weight:700;color:#f97316">Rs '+o.ch+'</span></div><div style="font-size:.84rem;font-weight:600;color:#1e293b;margin-bottom:8px;line-height:1.4">'+o.sn+'</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;font-size:.78rem;color:#64748b"><div><i class="fas fa-clock" style="width:14px;color:#94a3b8"></i> '+o.ds+'</div><div><i class="fas fa-link" style="width:14px;color:#94a3b8"></i> <a href="'+o.lk+'" target="_blank" style="color:#3b82f6;text-decoration:none">'+ls+'</a></div><div><i class="fas fa-hashtag" style="width:14px;color:#94a3b8"></i> Qty: '+fN(o.qty)+'</div><div><i class="fas fa-play" style="width:14px;color:#94a3b8"></i> Start: '+fN(o.sc)+'</div><div><i class="fas fa-hourglass-half" style="width:14px;color:#94a3b8"></i> Remains: '+fN(o.rm)+'</div></div></div>';}).join('');}
function simOrd(){var ch=false;var now=Date.now();ST.o.forEach(function(o){var el=now-new Date(o.dt).getTime();if(o.st==='Pending'&&el>15000){o.st='In Progress';o.sc=Math.floor(o.qty*0.1);o.rm=o.qty-o.sc;ch=true;}if(o.st==='In Progress'&&el>60000){if(Math.random()>0.1){o.st='Completed';o.sc=o.qty;o.rm=0;}else{o.st='Partial';o.sc=Math.floor(o.qty*0.85);o.rm=o.qty-o.sc;var sv=SVC.find(function(s){return s.id===o.sid;});if(sv){var rf=(o.rm/1000)*sv.price;ST.b+=rf;toast('Partial refund: '+fP(rf)+' added','info');}}ch=true;}});if(ch){sv();updUI();if(document.getElementById('page-my-orders').classList.contains('active'))renderOrd();}}
setInterval(simOrd,5000);
function initForm(){var cs=document.getElementById('o-cat');CATS.forEach(function(c){var op=document.createElement('option');op.value=c;op.textContent=c;cs.appendChild(op);});}
function onCatChange(){var cat=document.getElementById('o-cat').value;var ss=document.getElementById('o-svc');var qi=document.getElementById('o-qty');ss.innerHTML='<option value="">-- Select Service --</option>';qi.value='';qi.disabled=true;document.getElementById('o-charge').value='Rs 0.00';document.getElementById('q-hint').textContent='Select a service first';if(!cat){ss.disabled=true;return;}ss.disabled=false;SVC.filter(function(s){return s.cat===cat;}).forEach(function(s){var op=document.createElement('option');op.value=s.id;op.textContent='#'+s.id+' - '+s.name+' [ Price Per 1000 >> '+fP(s.price)+' ]';ss.appendChild(op);});}
function onSvcChange(){var sid=parseInt(document.getElementById('o-svc').value);var qi=document.getElementById('o-qty');qi.value='';document.getElementById('o-charge').value='Rs 0.00';if(!sid){qi.disabled=true;return;}var sv=SVC.find(function(s){return s.id===sid;});if(!sv)return;qi.disabled=false;qi.min=sv.min;qi.max=sv.max==='Unlimited'?'':sv.max;qi.placeholder='Min: '+sv.min+' - Max: '+sv.max;document.getElementById('q-hint').textContent='Min: '+sv.min+' - Max: '+sv.max;}
function calcCharge(){var sid=parseInt(document.getElementById('o-svc').value);var qty=parseInt(document.getElementById('o-qty').value);var ci=document.getElementById('o-charge');if(!sid||!qty||qty<=0){ci.value='Rs 0.00';return;}var sv=SVC.find(function(s){return s.id===sid;});if(!sv)return;ci.value=fP((qty/1000)*sv.price);}
function submitOrder(){var cat=document.getElementById('o-cat').value;var sid=parseInt(document.getElementById('o-svc').value);var lk=document.getElementById('o-link').value.trim();var qty=parseInt(document.getElementById('o-qty').value);if(!cat)return toast('Please select a category','warning');if(!sid)return toast('Please select a service','warning');if(!lk)return toast('Please enter a link','warning');if(!qty||qty<=0)return toast('Please enter a valid quantity','warning');var sv=SVC.find(function(s){return s.id===sid;});if(!sv)return toast('Service not found','error');if(qty<sv.min)return toast('Minimum quantity is '+sv.min,'warning');if(sv.max!=='Unlimited'&&qty>sv.max)return toast('Maximum quantity is '+sv.max,'warning');var ch=(qty/1000)*sv.price;if(ch>ST.b)return toast('Insufficient balance! Please add funds.','error');ST.b-=ch;ST.sp+=ch;var ord={id:ST.no++,sid:sv.id,sn:sv.name,cat:cat,lk:lk,qty:qty,ch:ch.toFixed(2),st:'Pending',sc:0,rm:qty,dt:new Date().toISOString(),ds:new Date().toLocaleString('en-PK')};ST.o.unshift(ord);sv();updUI();apiAdd(sv.id,lk,qty,ord.id);toast('Order #'+ord.id+' placed! Charge: '+fP(ch),'success');document.getElementById('o-cat').value='';document.getElementById('o-svc').innerHTML='<option value="">-- Select Service --</option>';document.getElementById('o-svc').disabled=true;document.getElementById('o-link').value='';document.getElementById('o-qty').value='';document.getElementById('o-qty').disabled=true;document.getElementById('o-charge').value='Rs 0.00';document.getElementById('q-hint').textContent='Select a service first';}
function renderSvc(fl){var tb=document.getElementById('svc-tb');var q=(fl||'').toLowerCase();var fl2=SVC;if(q)fl2=SVC.filter(function(s){return s.name.toLowerCase().indexOf(q)!==-1||s.cat.toLowerCase().indexOf(q)!==-1||String(s.id).indexOf(q)!==-1;});var h='';var lc='';fl2.forEach(function(s){if(s.cat!==lc){lc=s.cat;h+='<tr><td colspan="6" class="ch">'+s.cat+'</td></tr>';}h+='<tr><td style="font-weight:700;color:#64748b">'+s.id+'</td><td style="max-width:400px;line-height:1.4">'+s.name+'</td><td style="font-weight:700;color:#f97316;white-space:nowrap">'+fP(s.price)+'</td><td>'+fN(s.min)+'</td><td>'+fN(s.max)+'</td><td><button class="bs sm" onclick="ordFromSvc('+s.id+')">Order Now</button></td></tr>';});if(!fl2.length)h='<tr><td colspan="6" class="empty">No services found</td></tr>';tb.innerHTML=h;}
function filterSvc(){renderSvc(document.getElementById('svc-search').value);}
function ordFromSvc(id){var sv=SVC.find(function(s){return s.id===id;});if(!sv)return;navTo('new-order');document.getElementById('o-cat').value=sv.cat;onCatChange();setTimeout(function(){document.getElementById('o-svc').value=sv.id;onSvcChange();},50);toast('Service #'+id+' selected','info');}
function submitFund(){var amt=parseFloat(document.getElementById('f-amt').value);var txn=document.getElementById('f-txn').value.trim();var snd=document.getElementById('f-snd').value.trim();if(!amt||amt<=0)return toast('Please enter a valid amount','warning');if(!txn)return toast('Please enter your transaction ID','warning');if(!snd)return toast('Please enter your sending number','warning');ST.p.unshift({id:ST.np++,amt:amt.toFixed(2),txn:txn,snd:snd,dt:new Date().toISOString(),ds:new Date().toLocaleString('en-PK'),st:'Pending'});sv();renderPen();document.getElementById('f-amt').value='';document.getElementById('f-txn').value='';document.getElementById('f-snd').value='';toast('Payment submitted! Please wait for verification.','info');}
function renderPen(){var tb=document.getElementById('pen-tb');document.getElementById('pen-cnt').textContent=ST.p.length+' Pending';if(!ST.p.length){tb.innerHTML='<tr><td colspan="5" class="empty">No pending payments</td></tr>';return;}tb.innerHTML=ST.p.map(function(p){return'<tr><td style="font-weight:600">#'+p.id+'</td><td>'+p.ds+'</td><td style="font-weight:700;color:#f97316">'+fP(p.amt)+'</td><td><code style="font-size:.78rem;background:#f1f5f9;padding:2px 6px;border-radius:4px">'+p.txn+'</code></td><td><span class="badge b-pen">'+p.st+'</span></td></tr>';}).join('');}
function renderRev(){var rv=[{n:'Ahmed Khan',t:'Best SMM panel in Pakistan! Very fast delivery and cheapest rates. Highly recommended.',r:5,d:'2025-01-15'},{n:'Sarah Ali',t:'Using MRFSMM for 3 months. TikTok views are amazing and non-drop. Love it!',r:5,d:'2025-01-12'},{n:'Bilal Raza',t:'Good service for Instagram followers. Delivery started within minutes. Will order again.',r:4,d:'2025-01-10'},{n:'Fatima Noor',t:'Facebook page likes delivered perfectly. Support is also very responsive on WhatsApp.',r:5,d:'2025-01-08'},{n:'Usman Sheikh',t:'YouTube views quality is top-notch. My videos are getting monetized thanks to MRFSMM!',r:5,d:'2025-01-05'},{n:'Ayesha Malik',t:'Telegram members added quickly. Great prices compared to other panels. Keep it up!',r:4,d:'2025-01-03'}];document.getElementById('rev-grid').innerHTML=rv.map(function(r){var stars='';for(var i=0;i<5;i++)stars+='<i class="fas fa-star'+(i<r.r?'':' em')+'"></i>';return'<div class="rvc"><div class="rvh"><div class="rva">'+r.n.charAt(0)+'</div><div><div class="rvn">'+r.n+'</div><div class="rvd">'+r.d+'</div></div></div><div class="rvs">'+stars+'</div><p class="rvt">"'+r.t+'"</p></div>';}).join('');}
function apiAdd(sid,lk,qty,lid){try{var fd=new FormData();fd.append('key',SK);fd.append('action','add');fd.append('service',sid);fd.append('link',lk);fd.append('quantity',qty);fetch(AU,{method:'POST',body:fd}).then(function(r){return r.json();}).then(function(d){if(d.order){var o=ST.o.find(function(x){return x.id===lid;});if(o){o.aid=d.order;sv();}console.log('API order: #'+d.order);}}).catch(function(){});}catch(e){}}
function apiCheck(){var ao=ST.o.filter(function(o){return o.aid&&o.st!=='Completed'&&o.st!=='Canceled';});if(!ao.length)return;ao.forEach(function(o){try{var fd=new FormData();fd.append('key',SK);fd.append('action','status');fd.append('order',o.aid);fetch(AU,{method:'POST',body:fd}).then(function(r){return r.json();}).then(function(d){if(d.status){var sm={'Pending':'Pending','Processing':'In Progress','In progress':'In Progress','Completed':'Completed','Partial':'Partial','Canceled':'Canceled'};var ns=sm[d.status]||d.status;if(o.st!==ns){o.st=ns;if(d.start_count)o.sc=parseInt(d.start_count);if(d.remains!==undefined)o.rm=parseInt(d.remains);sv();updUI();if(document.getElementById('page-my-orders').classList.contains('active'))renderOrd();}}}).catch(function(){});}catch(e){}});}
setInterval(apiCheck,30000);
function adminAddFunds(amt){ST.b+=amt;sv();updUI();renderPen();console.log('[ADMIN] Added '+fP(amt)+'. New balance: '+fP(ST.b));}
var ss=Date.now();
function uT(){var e=Math.floor((Date.now()-ss)/1000);document.getElementById('stimer').textContent=Math.floor(e/60)+'m '+(e%60)+'s';}
setInterval(uT,1000);
document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){navTo(a.dataset.page);if(window.innerWidth<=768)toggleSidebar();});});
initTabs();initForm();renderSvc();renderPen();renderRev();updUI();
var pr=new URLSearchParams(location.search);if(pr.get('ref'))toast('Referred by: '+pr.get('ref'),'info');
console.log('%c MRFSMM Panel Loaded ','background:#f97316;color:#fff;font-size:14px;font-weight:bold;padding:4px 8px;border-radius:4px');
console.log('%c Admin: adminAddFunds(amount) ','color:#64748b;font-size:11px');
<\/script>
</body></html>`;

fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), html, 'utf8');
console.log('DONE! public/index.html created successfully.');
console.log('Run: npm start');