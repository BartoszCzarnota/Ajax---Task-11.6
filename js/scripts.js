var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countriesCapital = $('#capital');
var countriesRegion = $('#region');
var countriesBorders = $('#borders');
var countriesCurrencies = $('#currencies');
var countriesLanguages = $('#languages');
var countriesArea = $('#area');


$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	countriesCapital.empty();
	countriesRegion.empty();
	countriesBorders.empty();
	countriesCurrencies.empty();
	countriesLanguages.empty();
	countriesArea.empty();
	resp.forEach(function(item) {
	
		$('<p>').text(item.name).appendTo(countriesList);
		$('<p>').text(item.capital).appendTo(countriesCapital);
		$('<p>').text(item.region).appendTo(countriesRegion);
		$('<p>').text(item.borders).appendTo(countriesBorders);
		$('<p>').text(item.currencies).appendTo(countriesCurrencies);
		$('<p>').text(item.languages).appendTo(countriesLanguages);
		$('<p>').text(item.area).appendTo(countriesArea);
	});
}