var term;
var inputBegin;
var inputEnd;
var number;

$('#clear').on('click', function(){
		$('#results-div').empty();
})

$('#search').on('click', function() {

			term = $('#searchTerm').val().trim();
			inputBegin = $('#start').val().trim();
			inputEnd = $('#end').val().trim();
			number = 10;

			displayResults();
});







function displayResults() {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "d64907f7906d46f2a3c6713b0ff7f5ec",
	  'q': term,
	  'begin_date': inputBegin,
	  'end_date': inputEnd,
	});
	$.ajax({
	  url: url,
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
	 }


	}).fail(function(err) {
	  throw err;
	});

}



