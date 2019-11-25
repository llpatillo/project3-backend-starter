'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backgrounds', [
      {
        candidate_id:1,
        name: "Joe Biden",
        birthdate: "November 19, 1942",
        place_of_birth: "Scranton, PA",
        education: "University of Delaware, Syracuse University Law School",
        family: "Married, 4 children",
        legislation: "",
        offices_held: "U.S. Vice President, U.S. Senator ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:2,
        name: "Cory Booker",
        birthdate: "April 26, 1969",
        place_of_birth: "Washington, DC",
        education: "Stanford University, Yale Law School",
        family: "Single, 0 children",
        legislation: "Fair Chance Act",
        offices_held: "Mayor, Newark, NJ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:3,
        name: "Pete Buttigieg",
        birthdate: "January 18, 1982",
        place_of_birth: "Southbend, IN",
        education: "Harvard College, Rhodes Scholar, Pembroke College, Oxford",
        family: "Married, 0 children",
        legislation: "",
        offices_held: "Mayor, South Bend, IN",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:4,
        name: "Rocky De La Fuente",
        birthdate: "October 10, 1954",
        place_of_birth: "San Diego, CA",
        education: "An�huac University, MX",
        family: "Married, 5 children",
        legislation: "",
        offices_held: "None",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:5,
        name: "Tulsi Gabbard",
        birthdate: "April 11, 1981",
        place_of_birth: "Leloaloa, American Samoa",
        education: "Hawaii Pacific University",
        family: "Married",
        legislation: "Securing America�s Elections Act of 2019",
        offices_held: "U.S. Representative (1990-2006)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:6,
        name: "Kamala Harris",
        birthdate: "October 19, 1964",
        place_of_birth: "Oakland, CA",
        education: "Howard University, University of California, Hastings Law School",
        family: "Married, 2 stepchildren",
        legislation: "Ensuring Diverse Leadership Act of 2019,\nFamilies, Not Facilities Act,\nREUNITE Act,\nAmerican Dream Employment Act",
        offices_held: "Attorney General, CA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:7,
        name: "Amy Klobuchar",
        birthdate: "May 25, 1960",
        place_of_birth: "Plymouth, MN",
        education: "Yale University, University of Chicago Law School",
        family: "Married, 1 child",
        legislation: "Same Day Registration Act,\nRegister America to Vote Act,\nStudents VOTE Act,\nHonest Ads Act",
        offices_held: "Hennepin County Attorney",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:8,
        name: "Bernie Sanders",
        birthdate: "September 7, 1941",
        place_of_birth: "Brooklyn, NY",
        education: "University of Chicago",
        family: "Married, 4 children",
        legislation: "Workplace Democracy Act,\nStop Bad Employers by Zeroing Out Subsidies Act (Stop BEZOS)",
        offices_held: "U.S. Representative",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:9,
        name: "Tom Steyer",
        birthdate: "May 27, 1960",
        place_of_birth: "Fort Lauderdale, FL",
        education: "Yale University, Stanford Business School",
        family: "Married, 4 children",
        legislation: "",
        offices_held: "U.S. Representative",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:10,
        name: "Donald Trump",
        birthdate: "June 14, 1946",
        place_of_birth: "Queens, NY",
        education: "University of Pennsylvania",
        family: "Married, 5 children",
        legislation: "",
        offices_held: "None",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:11,
        name: "Elizabeth Warren",
        birthdate: "June 21, 1949",
        place_of_birth: "Oklahoma, OK",
        education: "University of Houston, Rutgers School of Law",
        family: "Married, 2 children",
        legislation: "Presidential Conflicts of Interest Act of 2019,\nTransition Team Ethics Improvement Act",
        offices_held: "None",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:12,
        name: "Bill Weld",
        birthdate: "July 31, 1945",
        place_of_birth: "Smithtown, NY",
        education: "Harvard College, Harvard School of Law",
        family: "Married, 5 children",
        legislation: "",
        offices_held: "Governor of MA, US Attorney General",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id:13,
        name: "Andrew Yang",
        birthdate: "January 13, 1975",
        place_of_birth: "Schenectady, NY",
        education: " Brown University,  Columbia Law School",
        family: "Married, 2 children",
        legislation: "",
        offices_held: "None",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

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
