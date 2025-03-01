const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {



		console.log(this.responseText);

		min_
	}
});

xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=london');
xhr.setRequestHeader('x-rapidapi-key', '0d33931b66msh51b27f2442d62eep1132cbjsn1d560dff74c4');
xhr.setRequestHeader('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');

xhr.send(data);