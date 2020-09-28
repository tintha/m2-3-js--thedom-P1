// Add your code here!
let head = document.getElementsByTagName('HEAD')[0];  
let link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css';
link.href = 'styles.css';  
head.appendChild(link);

let myDiv = document.createElement("div");

let main = document.getElementsByTagName("MAIN")[0];
main.appendChild(myDiv);

let title = document.createElement("h1");
title.innerText = "The best How I Met Your Mother episode (according to fans)";

let p1 = document.createElement("p");
p1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";

let subTitle = document.createElement("h2");
subTitle.innerText = "The Slap Bet (Season 2, Episode 9)";

let p2 = document.createElement("p");
p2.innerText = "IMDB Rating: 9.5";

let imageOfRobin = document.createElement("img");
imageOfRobin.src = "images/robin-sparkles.jpg";

let p3 = document.createElement("p");
p3.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";

let p4 = document.createElement("p");
p4.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

let sourceLink = document.createElement("a");
sourceLink.innerText = "Source";
sourceLink.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";


myDiv.appendChild(title);
myDiv.appendChild(p1);
myDiv.appendChild(subTitle);
myDiv.appendChild(p2);
myDiv.appendChild(imageOfRobin);
myDiv.appendChild(p3);
myDiv.appendChild(p4);
myDiv.appendChild(sourceLink);