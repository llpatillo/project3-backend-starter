'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [
      {
       name:"Joe Biden",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/17a0c0f/2147483647/strip/true/crop/1024x671+0+0/resize/1024x671!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fe0%2Ff5%2F837073dc436cb03abc7306fff07c%2Fcandidates-gallery-biden-getty-042519.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"None",
       official_website:"https://www.bidenfoundation.org",
       facebook:"https://www.facebook.com/joebiden",
       instagram:"https://www.instagram.com/joebiden/",
       twitter:"https://twitter.com/joebiden",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Cory Booker",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/2fbb835/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F82%2Fd6%2F469a74db48ca92c01f75f102fd1b%2F2020-candidate-gallery-booker.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator",
       official_website:"https://corybooker.com",
       facebook:"https://www.facebook.com/corybooker",
       instagram:"https://www.instagram.com/corybooker/",
       twitter:"https://twitter.com/corybooker",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Pete Buttigieg",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/4f975ff/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F08%2F44%2F6bc858cd45fea2598f12ce208317%2Fcandidates-gallery-buttegeig-pete-042519.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"Mayor, South Bend, IN",
       official_website:"https://www.peteforamerica.com/",
       facebook:"https://www.facebook.com/petebuttigieg1",
       instagram:"https://www.instagram.com/pete.buttigieg/",
       twitter:"https://twitter.com/petebuttigieg",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Rocky De La Fuente",
       candidate_img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaQsQ0GgttvjMzN8n_E47Ydsu3CaIf1VUB3WJn24ucQj9Z_ir&s",
       political_party:"Republican",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
       current_office:"None",
       official_website:"https://rocky101.com/en_us/en/",
       facebook:"https://www.facebook.com/JoinRocky/",
       instagram:"https://www.instagram.com/joinrocky/",
       twitter:"https://twitter.com/JoinRocky",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Tulsi Gabbard",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/6b8c682/2147483647/strip/true/crop/3046x2031+0+0/resize/2160x1440!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fc7%2F34%2Fd39a1cef4318a8b5511e1eb2d978%2F2020-candidate-gallery-tulsi-gabbard.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. State Representative, Hawaii",
       official_website:"http://gabbard.house.gov",
       facebook:"https://www.facebook.com/RepTulsiGabbard",
       instagram:"https://www.instagram.com/tulsigabbard/",
       twitter:"https://twitter.com/tulsigabbard",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Kamala Harris",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/78ba77d/2147483647/strip/true/crop/3200x2133+0+0/resize/2160x1440!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fb2%2Ff6%2F8deabf8c493ba132ef1decc91704%2F2020-candidate-gallery-kamala-harris.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, California",
       official_website:"http://kamalaharris.org/",
       facebook:"https://www.facebook.com/KamalaHarris",
       instagram:"https://www.instagram.com/kamalaharris/",
       twitter:"https://twitter.com/kamalaharris",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Amy Klobuchar",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/3a67c37/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F63%2Fbd%2Fb3b2cbd84082990457f470bf1411%2Fgettyimages-1042679684.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, Minnesota",
       official_website:"https://amyklobuchar.com/",
       facebook:"https://www.facebook.com/amyklobuchar/",
       instagram:"https://www.instagram.com/amyklobuchar/?hl=en",
       twitter:"https://twitter.com/amyklobuchar",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Bernie Sanders",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/787a70d/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F8b%2F7d%2Ffdc95e38417fbb62aefeaa62d56a%2Fgettyimages-1085911782.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Sentaor (2006 - present)",
       official_website:"https://www.berniesanders.com/",
       facebook:"https://www.facebook.com/berniesanders",
       instagram:"https://www.instagram.com/berniesanders/",
       twitter:"https://twitter.com/BernieSanders",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Tom Steyer",
       candidate_img_url:"https://static01.nyt.com/images/2019/09/08/us/politics/08debate/merlin_160363629_bc047c74-14b5-4491-88cb-673c519409b1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"Governor, South Carolina",
       official_website:"https://www.tomsteyer.com/",
       facebook:"https://www.facebook.com/officialtomsteyer/",
       instagram:"https://www.instagram.com/tomsteyer/",
       twitter:"https://twitter.com/TomSteyer",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Donald Trump",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/5432cc5/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F4a%2F8c%2F64d8026d438ca99dfa37c6d0dc36%2F2020-candidate-gallery-donald-trump.jpg",
       political_party:"Republican",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
       current_office:"U.S. President",
       official_website:"https://www.donaldjtrump.com/",
       facebook:"https://www.facebook.com/DonaldTrump/",
       instagram:"https://www.instagram.com/realdonaldtrump/",
       twitter:"https://twitter.com/realDonaldTrump",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Elizabeth Warren",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/d04ea69/2147483647/strip/true/crop/1024x683+0+0/resize/1024x683!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fa0%2F1b%2F6b90dd994684ab9e5af9d841be8b%2F2020-candidate-gallery-warren-021119.jpg",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, Massachusetts",
       official_website:"https://elizabethwarren.com/",
       facebook:"https://www.facebook.com/ElizabethWarren",
       instagram:"https://www.instagram.com/elizabethwarren/",
       twitter:"https://twitter.com/ewarren",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Andrew Yang",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/f0298e0/2147483647/strip/true/crop/1044x667+0+0/resize/1044x667!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0e%2F92%2F47fec20945eea31d2dc094fb84a8%2F2020-candidate-gallery-andrew-yang.png",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"None",
       official_website:"https://www.yang2020.com/",
       facebook:"https://www.facebook.com/andrewyang2020/",
       instagram:"https://www.instagram.com/andrewyang2020/?hl=en",
       twitter:"https://twitter.com/AndrewYang",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     },
     {
       name:"Bill Weld",
       candidate_img_url:"https://ewscripps.brightspotcdn.com/dims4/default/b412fd8/2147483647/strip/true/crop/3288x4753+0+0/resize/996x1440!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F86%2F2e%2F7fc0bc6d41478284c5f7016d713b%2F2020-candidates-gallery-bill-weld.jpg",
       political_party:"Republican",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
       current_office:"None",
       official_website:"https://weld2020.org/",
       facebook:"https://www.facebook.com/GovBillWeld/",
       instagram:"https://www.instagram.com/bill_weld2020/",
       twitter:"https://twitter.com/GovBillWeld",
       createdAt: new Date (),
       updatedAt: new Date ()
   
     }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
