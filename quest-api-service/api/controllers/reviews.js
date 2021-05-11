'use strict';

const util = require('util');
const faker = require('faker');


module.exports = {
  reviews: getReviews
};


function getReviews(req, res) {
  const reviewsData = [];
  const years = ['2019', '2020', '2021'];

  const getDate = () => {
    let day = (Math.floor(Math.random() * 30 + 1));
    let month = (Math.floor(Math.random() * 12 + 1));
    let year = (years[Math.floor(Math.random() * 3)]);

    day = day > 9 ? '' + day : '0' + day;
    month = month > 9 ? '' + month : '0' + month;

    const dateResult = [day, month, year].join('-');

    return dateResult
  }

  

  res.json([...reviewsData]);
}
