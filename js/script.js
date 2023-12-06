const contacts = {
  'tg' : '@ed_kud',
  'in' : '@egor_kd',
  'gm' : 'egor.ku.03@gmail.com',
  'vk' : '@egich2003',
}

const valuesCards = {
  0 : {
    'image': 'css/images/witcher_1.png',
    'genre': 'fantasy',
    'mark': '4.6',
    'name': 'Ведьмак: Последнее желание',
    'author': 'А. Сапковский',
    'description': 'Профессиональный истребитель чудовищ по своему очередному заданию прибывает в столицу Вызиму, чтобы расправиться с упырем и спасти дочь короля. Задание оказывается непростым, в процессе Геральт раскрывает придворные интриги, рискует собственной жизнью и даже получает опасное ранение. Первая книга из мира на острие меча, наполненного опасной магией, смертельными проклятиями, великолепными боевыми сценами и захватывающими приключениями.',
    'same_book_ids': [1, 2, 3],
  },
  1: {
    'image': 'css/images/witcher_2.png',
    'genre': 'fantasy',
    'mark': '4.5',
    'name': 'Ведьмак: Меч предназначения',
    'author': 'А. Сапковский',
    'description': 'В этой части Геральт впервые встречает принцессу Цири и находит своё Предназначение. А ещё сражается с драконоборцами, выясняет свой предел возможного, раскрывает тайну погибших собирателей жемчуга и получает серьёзное ранение. А в это время огромная армия Нильфгаарда наступает с юга…',
    'same_book_ids': [2, 3, 4],
  },
  2 : {
    'image': 'css/images/witcher_3.png',
    'genre': 'fantasy',
    'mark': '4.9',
    'name': 'Ведьмак: Кровь эльфов',
    'author': 'А. Сапковский',
    'description': 'Королевство Цинтра захвачено, но юная наследница Цири чудом избежала смерти. Геральт доставляет её в убежище ведьмаков, где девочка приступает к обучению. А затем выясняет, что и сама обладает магическими способностями. Теперь нужно разобраться, что делать с её сверхъестественными силами и как научиться ими управлять. Упомянутая в названии кровь эльфов в этой книге действительно прольется…',
    'same_book_ids': [3, 4, 5],
  },
  3 : {
    'image': 'css/images/witcher_4.png',
    'genre': 'fantasy',
    'mark': '5.0',
    'name': 'Ведьмак: Час презрения',
    'author': 'А. Сапковский',
    'description': 'Разладилась дружба между королями и чародеями. Больше никому нельзя доверять. Кровавый мятеж развязывает новую войну, Цири находит временное убежище в пустыне, а чудом оставшийся в живых Геральт оказывается в Брокилоне. Теперь каждый сам по себе, и окружающий мир больше не станет прежним, как никому из наших героев уже не придётся вернуться к привычной жизни.',
    'same_book_ids': [4, 5, 6],
  },
  4 : {
    'image': 'css/images/witcher_5.png',
    'genre': 'fantasy',
    'mark': '4.7',
    'name': 'Ведьмак: Крещение огнём',
    'author': 'А. Сапковский',
    'description': 'Геральт в компании обаятельного Лютика разыскивает Цири по всему свету. Вместе с ним путешествуют великолепная лучница Мальва, посланник императора, практически двойник Цири и – вы просто не поверите! – высший вампир. Так невероятно усложнилась и изменилась жизнь, если профессиональный наемник вынужден находиться в столь странной компании.',
    'same_book_ids': [0, 5, 6],
  },
  5 : {
    'image': 'css/images/witcher_6.png',
    'genre': 'fantasy',
    'mark': '4.0',
    'name': 'Ведьмак: Башня Ласточки',
    'author': 'А. Сапковский',
    'description': 'Цири чудом избегает неминуемой гибели. По её следам идут могущественные враги. Чародейка, которая собиралась ей помощь, сама попадает в ужасную беду. Ведьмак по-прежнему не укрыл девушку под своим крылом, хотя продолжает искать её всюду. Остается одна надежда: укрыться в волшебной Башне Ласточки, куда теперь устремляется Цири.',
    'same_book_ids': [0, 1, 6],
  },
  6 : {
    'image': 'css/images/witcher_7.png',
    'genre': 'fantasy',
    'mark': '4.5',
    'name': 'Ведьмак: Владычица озера',
    'author': 'А. Сапковский',
    'description': 'Теперь читатели вместе с героями этой саги заблудятся в параллельных мирах и окажутся у народа Ольх, где обитают эльфы и единороги. Цири и Йеннифер договариваются о встрече с Геральтом в Ривии. Но в назначенный день в городе начинается резня. Неужели действительно здесь и сейчас сбудется древнее Пророчество? А седовласый ведьмак погибнет, как и многие из его друзей? Чем же закончится культовая фэнтези-сага? Узнать об этом можно из последнего тома серии.',
    'same_book_ids': [0, 1, 2],
  },
}

const genres = {
  'fantasy': 'Фэнтези',
  'fantastic': 'Фантастика',
  'russian-classics': 'Российская Классика',
  'foreign-classics': 'Зарубежная классика',
  'business-literature': 'Бизнес-литература',
  'detectives': 'Детективы'
}

function active_menu() {
    const url = new URL(window.location);
    var genre_id = url.searchParams.get('genre');
    if (genre_id != null) {
        document.querySelectorAll(".dropdown__options a").forEach((el) => {
            if (genre_id == el.getAttribute("id")) {
                el.classList.add("active");
            }

        });
    }
}

function get_genres() {
  var genresStr = '';
  for (const [id, genre] of Object.entries(genres)) {
     genresStr += `<a id=${id} href="book_list.html?genre=${id}">${genre}</a>`;
  }

  let genres_nav = document.createElement("nav");
  genres_nav.className = "dropdown__options";
  genres_nav.innerHTML = genresStr;

  let button = document.getElementById("genres-button");
  button.parentNode.insertBefore(genres_nav, genres_nav.nextSibling);
}

function get_contacts() {
  var contactsStr = '';
  for (const [id, contact] of Object.entries(contacts)) {
     contactsStr += `<li id="${id}">${contact}</li>`;
  }

  let contacts_list = document.createElement("ul");
  contacts_list.className = "markers";
  contacts_list.innerHTML = contactsStr;

  let footer_head = document.getElementById("footer-head");
  footer_head.parentNode.insertBefore(contacts_list, contacts_list.nextSibling);
}

function get_cards_html(cardsHtml) {
  let cards_list = document.createElement("article");
  cards_list.className = "cards";
  cards_list.innerHTML = cardsHtml;

  let cards_title = document.getElementById("cards-title");
  cards_title.parentNode.insertBefore(cards_list, cards_list.nextSibling);
}

function get_all_cards_html() {
  var cardsHtml = '';
  for (const [id, book] of Object.entries(valuesCards)) {
    cardsHtml += get_card_html(id, book);
  }

  get_cards_html(cardsHtml);
}

function get_card_html(id, book) {
  return `\
    <article class="card">\
      <section class="card__top">\
        <div class="card__top__image">\
          <img src="${book.image}" alt=""/>\
        </div>\
      </section>\
      <div class="card__bottom">\
        <div class="book-info">\
          <section class="book-info__genre">${genres[book.genre]}</section>\
          <section class="book-info__author-mark">${book.mark}</section>\
        </div>\
        <a href="book_description.html?id=${id}" class="card__bottom__book-name">${book.name}</a>\
      </div>\
    </article>`;
}

function get_book_decription() {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  const book = valuesCards[id];

  let description = document.getElementById("description-card");
  description.innerHTML = get_book_description_html(book);
}

function get_book_description_html(book) {
  return `\
    <img src="${book.image}">\
    <section class="desc-container">\
      <p class="desc-container__desc-author">${book.author}</p>\
      <p class="desc-container__desc-name">${book.name}</p>\
      <p class="desc-container__desc-text">${book.description}</p>\
    </section>\
    <div class="same-books">\
      <h6 class="same-books__title">Похожая литература по мнению меня</h6>\
      ${get_same_book_list(book)}\
    </div>`;
}

function get_same_book_list(book) {
  var str = `<nav class="same-books__container">`
  for (const same_book_id of book.same_book_ids) {
     str += `<a class="same-books__item" href="book_description.html?id=${same_book_id}">${valuesCards[same_book_id].name}</a>`;
  }

  str += `</nav>`
  return str;
}

function get_cards_html_by_params() {
  const url = new URL(window.location);

  var name = url.searchParams.get('book_name');
  if (name != null) get_cards_html(get_cards_html_by_name(name));

  var genre = url.searchParams.get('genre');
  if (genre != null) get_cards_html(get_cards_html_by_genre(genre));  
}

function get_cards_html_by_name(name) {
  name = name.toLowerCase();
  var cardsHtml = '';
    for (const [id, book] of Object.entries(valuesCards)) {
      if (~book.name.toLowerCase().indexOf(name)) {
        cardsHtml += get_card_html(id, book);  
      }
    }

    return cardsHtml;
}

function get_cards_html_by_genre(genre) {
  var cardsHtml = '';
    for (const [id, book] of Object.entries(valuesCards)) {
      if (book.genre == genre) {
        cardsHtml += get_card_html(id, book);  
      }
    }

    return cardsHtml;
}

const startTime = new Date().getTime();
window.addEventListener('load', function() {
    const endTime = new Date().getTime();

    const loadTime = (endTime - startTime) / 1000;
    let load_time = document.createElement("p");
    load_time.className = "time-place";
    load_time.innerHTML = 'Page loade time is ' + loadTime + " seconds";

    let footer_head = document.getElementById("footer-head")
    footer_head.parentNode.insertBefore(load_time, load_time.nextSibling);
});

