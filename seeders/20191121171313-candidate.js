'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [
      {
       name:"Joe Biden",
       candidate_img_url:"https://www.youtube.com/embed/VbOU2fTg6cI?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"None",
       official_website:"https://www.bidenfoundation.org",
       facebook:"https://www.facebook.com/joebiden",
       instagram:"https://www.instagram.com/joebiden/",
       twitter:"https://twitter.com/joebiden",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Cory Booker",
       candidate_img_url:"https://www.youtube.com/embed/mx5m6DDFupg?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator",
       official_website:"https://corybooker.com",
       facebook:"https://www.facebook.com/corybooker",
       instagram:"https://www.instagram.com/corybooker/",
       twitter:"https://twitter.com/corybooker",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Pete Buttigieg",
       candidate_img_url:"https://www.youtube.com/embed/3uOly3jGCBo?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"Mayor, South Bend, IN",
       official_website:"https://www.peteforamerica.com/",
       facebook:"https://www.facebook.com/petebuttigieg1",
       instagram:"https://www.instagram.com/pete.buttigieg/",
       twitter:"https://twitter.com/petebuttigieg",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Rocky De La Fuente",
       candidate_img_url:"https://www.youtube.com/embed/LW5WJJXEzHA?autoplay=1",
       political_party:"Republican",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
       current_office:"None",
       official_website:"https://rocky101.com/en_us/en/",
       facebook:"https://www.facebook.com/JoinRocky/",
       instagram:"https://www.instagram.com/joinrocky/",
       twitter:"https://twitter.com/JoinRocky",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Tulsi Gabbard",
       candidate_img_url:"https://www.youtube.com/embed/c0pCTjRIIhk?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. State Representative, Hawaii",
       official_website:"http://gabbard.house.gov",
       facebook:"https://www.facebook.com/RepTulsiGabbard",
       instagram:"https://www.instagram.com/tulsigabbard/",
       twitter:"https://twitter.com/tulsigabbard",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Kamala Harris",
       candidate_img_url:"https://www.youtube.com/embed/Ls7OSwHMoBc?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, California",
       official_website:"http://kamalaharris.org/",
       facebook:"https://www.facebook.com/KamalaHarris",
       instagram:"https://www.instagram.com/kamalaharris/",
       twitter:"https://twitter.com/kamalaharris",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Amy Klobuchar",
       candidate_img_url:"https://www.youtube.com/embed/vghXHCAGcIw?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, Minnesota",
       official_website:"https://amyklobuchar.com/",
       facebook:"https://www.facebook.com/amyklobuchar/",
       instagram:"https://www.instagram.com/amyklobuchar/?hl=en",
       twitter:"https://twitter.com/amyklobuchar",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Bernie Sanders",
       candidate_img_url:"https://www.youtube.com/embed/s7DRwz0cAt0?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Sentaor (2006 - present)",
       official_website:"https://www.berniesanders.com/",
       facebook:"https://www.facebook.com/berniesanders",
       instagram:"https://www.instagram.com/berniesanders/",
       twitter:"https://twitter.com/BernieSanders",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Tom Steyer",
       candidate_img_url:"https://www.youtube.com/embed/Q0pFvLtryd0?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"Governor, South Carolina",
       official_website:"https://www.tomsteyer.com/",
       facebook:"https://www.facebook.com/officialtomsteyer/",
       instagram:"https://www.instagram.com/tomsteyer/",
       twitter:"https://twitter.com/TomSteyer",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Donald Trump",
       candidate_img_url:"https://www.youtube.com/embed/aIrtAASuMbQ?autoplay=1",
       political_party:"Republican",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
       current_office:"U.S. President",
       official_website:"https://www.donaldjtrump.com/",
       facebook:"https://www.facebook.com/DonaldTrump/",
       instagram:"https://www.instagram.com/realdonaldtrump/",
       twitter:"https://twitter.com/realDonaldTrump",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
       name:"Elizabeth Warren",
       candidate_img_url:"https://www.youtube.com/embed/uF3IjYG8eeY?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"U.S. Senator, Massachusetts",
       official_website:"https://elizabethwarren.com/",
       facebook:"https://www.facebook.com/ElizabethWarren",
       instagram:"https://www.instagram.com/elizabethwarren/",
       twitter:"https://twitter.com/ewarren",
       createdAt: new Date(),
       updatedAt: new Date()
   
     },
     {
      name:"Bill Weld",
      candidate_img_url:"https://www.youtube.com/embed/wbQzEXzsygA?autoplay=1",
      political_party:"Republican",
      political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/300px-Republican_Disc.svg.png",
      current_office:"None",
      official_website:"https://weld2020.org/",
      facebook:"https://www.facebook.com/GovBillWeld/",
      instagram:"https://www.instagram.com/bill_weld2020/",
      twitter:"https://twitter.com/GovBillWeld",
      createdAt: new Date (),
      updatedAt: new Date ()
  
    },
    {
       name:"Andrew Yang",
       candidate_img_url:"https://www.youtube.com/embed/EgQb2NNQ43w?autoplay=1",
       political_party:"Democrat",
       political_party_img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
       current_office:"None",
       official_website:"https://www.yang2020.com/",
       facebook:"https://www.facebook.com/andrewyang2020/",
       instagram:"https://www.instagram.com/andrewyang2020/?hl=en",
       twitter:"https://twitter.com/AndrewYang",
       createdAt: new Date(),
       updatedAt: new Date()
   
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
