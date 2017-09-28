

var term;
var inputBegin;
var inputEnd;
var number;

$('#clear').on('click', function(){
		$('#results-div').empty();
})

$('#search').on('click', function() {
			term = $('#searchTerm').val();
			inputBegin = $('#start').val();
			inputEnd = $('#end').val();
			number = $('#records').val();
			displayResults();
});





var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

function displayResults() {
	
	url += '?' + $.param({
	  'api-key': "d64907f7906d46f2a3c6713b0ff7f5ec",
	  'q': term,
	  'begin_date': inputBegin,
	  'end_date': inputEnd,
	  'page': number
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	 for (i = 0; i < number.length; i++) {
	 		var title = $('<h1>');
	 		title.text(result[i].headline.main)
	 		var description = $('<p>');
	 		description.text(result[i].snippet)
	 		var divArticle = $('<div>');
	 		divArticle.append(title, description)
	 		$('#results-div').prepend(divArticle)
	 }

	}).fail(function(err) {
	  throw err;
	});

}
displayResults();


