var term;
var inputBegin;
var inputEnd;


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "d64907f7906d46f2a3c6713b0ff7f5ec"
  'q': term,
  'begin_date': inputBegin,
  'end_date': inputEnd
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});