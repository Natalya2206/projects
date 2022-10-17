'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const header = document.querySelector('.promo__adv-title'),
      adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector ('.promo__bg'),
      genre = poster.querySelector ('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

header.remove();

adv.forEach (item => {
    item.remove();
});

poster.style.backgroundImage = 'url("img/bg.jpg")';

genre.textContent = 'драма';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach ((film, i) => {
    movieList.innerHTML += `
         <li class="promo__interactive-item">${i + 1} ${film}
             <div class="delete"></div>
         </li>
    `;
});