var xhr2 = new XMLHttpRequest();
var url2 = './news.json';
xhr2.open('Get', url2, true);
xhr2.responseType = 'json';
xhr2.onload = function(){
    setTimeout(function (){
        let h = document.createElement('h1');
        h.textContent = "News"
        document.body.appendChild(h);
        let d = document.createElement('div');
        let news = xhr2.response.news;
        news.forEach(function(value, index){
            let hh = document.createElement('h2');
            hh.textContent = `News number ${index + 1} : ${value.title}`;
            d.appendChild(hh);
            let dd = document.createElement('p');
            dd.textContent = value.description;
            d.appendChild(dd);
        })
        document.body.appendChild(d);
    }
        ,10000);
}
xhr2.send();
var xhr = new XMLHttpRequest();
var url = './health.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
	var articles = xhr.response.articles;
	var articlesDiv = document.getElementById('articles');
	articles.forEach(function(article) {
		var articleDiv = document.createElement('div');
		articleDiv.classList.add('article');
  
		var title = document.createElement('h2');
		title.textContent = article.title;
  
		var description = document.createElement('p');
		description.textContent = article.description;
  
		var waysHeader = document.createElement('h3');
		waysHeader.textContent = 'Ways to Achieve:';
  
		var waysList = document.createElement('ul');
		article.ways_to_achieve.forEach(function(way) {
		  var listItem = document.createElement('li');
		  listItem.textContent = way;
		  waysList.appendChild(listItem);
		});
  
		var benefitsHeader = document.createElement('h3');
		benefitsHeader.textContent = 'Benefits:';
  
		var benefitsList = document.createElement('ul');
		article.benefits.forEach(function(benefit) {
		  var listItem = document.createElement('li');
		  listItem.textContent = benefit;
		  benefitsList.appendChild(listItem);
		});
  
		articleDiv.appendChild(title);
		articleDiv.appendChild(description);
		articleDiv.appendChild(waysHeader);
		articleDiv.appendChild(waysList);
		articleDiv.appendChild(benefitsHeader);
		articleDiv.appendChild(benefitsList);
  
		articlesDiv.appendChild(articleDiv);
	  });

}
xhr.send();
