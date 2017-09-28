$(document).ready(function() {

var term;
var inputBegin;
var inputEnd;
var number;

  $('#clear').on('click', function(){
		$('#results-div').empty();
  })

  $('#search').on('click', function(event) {
      event.preventDefault();
			term = $('#searchTerm').val().trim();
			inputBegin = $('#start').val().trim();
			inputEnd = $('#end').val().trim();
      number = $('#selectId').val();

      displayResults();
});







function displayResults() {
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
	  'api-key': "d64907f7906d46f2a3c6713b0ff7f5ec",
	  'q': term,
	  'begin_date': inputBegin,
	  'end_date': inputEnd,
	  'page': number
	});
	$.ajax({
	  url: queryUrl,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	 for (var i = 0; i < number; i++) {

	 		var title = $('<h1>');
	 		title.text(result.response.docs[i].headline.main);
	 		var description = $('<p>');
	 		description.text(result.response.docs[i].snippet);
	 		var divArticle = $('<div>');
	 		divArticle.append(title, description);
	 		$('#results-div').append(divArticle);
	 		console.log(result.response.docs[i].headline.main);
	 		console.log(result.response.docs[i].snippet);
      // console.log(divArticle);
	 }


	}).fail(function(err) {
	  throw err;
	});

}

})


