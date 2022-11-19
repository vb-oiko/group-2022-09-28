// Регулярні вирази.
// Що таке регулярні вирази?

// Де використовуються?

// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

// String.
// об'єкт String
// методи об'єкта String
// match()
// matchAll()
// replace()
// replaceAll()
// search()
// split()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// Варіанти створення регулярних виразів.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#creating_a_regular_expression
// Літерал регулярного вираження

// const regex1 = /sefw/g;

// const flag = true;
// const part1 = "efe";
// const part2 = "wefwefwe";

// const regex2 = new RegExp(`${flag ? part1 : part2}`, "g");
// console.warn(regex1);
// console.warn(regex2);

// Виклик функції конструктора об'єкта RegExp
// constructor vs literal

// const regex = /(a\w+)(?:\W+)\1/g;
// const str = " abc, \n abc hDi5/hj6ojoooo.";
// const str2 = " sefwefwefsafggd             afggdfegwegwe";

// const matches = str2.matchAll(regex);

// for (match of matches) {
//   console.warn(match);
// }

// const regex1 = /[+()\s-]/g;
// const regex2 = /\D/g;
// const str = "+(380) 50 234-56-78";

// console.warn(str.replaceAll(regex1, ""));

// const regex = /\d+/g;
// const str = "+(380) 50 234-56-78";

// console.warn(str.match(regex).join(""));

// Приклади використання регулярних виразів

// Модифікатори регулярних виразів.

// Методи для роботи з регулярними виразами.

// Шаблони регулярних виразів.
// Структура шаблонів

// Метасимволи

// Купки

// Квантифікатори

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions#other_assertions

// https://www.hackerrank.com/challenges/detect-html-links/problem?isFullScreen=true
const html = `<div class="portal" role="navigation" id='p-navigation'>
<h3>Navigation</h3>
<div class="body">
<ul>
 <li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">
 Main page
 </a>
 </li>
 <li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li>
 <li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content  the best of Wikipedia">Featured content</a></li>
<li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li>
<li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li>
<li id="n-sitesupport"><a href="//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en" title="Support us">Donate to Wikipedia</a></li>
</ul>
</div>
</div> `;

const regex = /<a href="(?<url>[\w/.:?&=]+)".+>(?<text>.+)<\/a/g;

for (match of html.matchAll(regex)) {
  console.warn(match.groups);
}

// https://www.regexplained.co.uk/
// https://regex101.com/
