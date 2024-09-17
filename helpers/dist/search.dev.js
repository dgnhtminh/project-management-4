"use strict";

module.exports = function (query) {
  var objectSearch = {
    keyword: "",
    regex: ""
  };

  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    var regex = new RegExp(objectSearch.keyword, "i");
    objectSearch.regex = regex;
  }

  return objectSearch;
};