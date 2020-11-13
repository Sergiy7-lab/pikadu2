// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");

const regExpValidEmail = /^\w+@\+w\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSigup = document.querySelector(".login-signup");

const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");

const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");

const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");
const userAvatarElem = document.querySelector(".user-avatar");

const postsWrapper = document.querySelector(".posts");

// const toggleAuthDom = document.querySelector(".user-name");

const listUser = [
  {
    id: "01",
    email: "sergiy@gmail.com",
    password: "1234",
    displayName: "SergJs",
  },
  {
    id: "02",
    email: "alyona@gmail.com",
    password: "7777",
    displayName: "AlyonaJs",
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (regExpValidEmail.test(email)) {
      alert("Емеил не валиден");
      return;
    }

    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь не обнаружен");
    }
    console.log(email, password);
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {
    if (regExpValidEmail.test(email)) {
      alert("Емеил не валиден");
      return;
    }

    if (!email.trim() && !password.trim()) {
      alert("Введите данные");
      return;
    }

    if (!this.getUser(email)) {
      const user = {
        email,
        password,
        displayName: email.substring(0, email.indexOf("@")),
      };

      listUser.push(user);
      this.authorizedUser(user);
      handler();
      console.log(listUser);
    } else {
      alert("Такой пользователь уже есть");
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }

    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  },
  getUser(email) {
    return listUser.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  },
};

const setPosts = {
  allPosts: [
    {
      title: "Заголовлок поста",
      text:
        " Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!",
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: `Sergiy`,
      date: "11.11.2020, 20:54:00",
      like: 15,
      comments: 20,
    },
    {
      title: "Заголовлок поста 2",
      text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
      tags: ["свежее", "новое", "мое", "случайность"],
      author: `Alyona`,
      date: "10.11.2020, 20:54:00",
      like: 45,
      comments: 12,
    },
    {
      title: "Заголовлок поста 3",
      text: `Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32`,
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: `Sergiy`,
      date: "11.11.2020, 20:54:00",
      like: 15,
      comments: 20,
    },
  ],
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log("user: ", user);

  if (user) {
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  } else {
    loginElem.style.display = "";
    userElem.style.display = "none";
  }
};

const showAllPosts = () => {
  let postsHTML = "";

  setPosts.allPosts.forEach(
    ({ title, text, author, date, tags, like, comments }) => {
      postsHTML += `
    <section class="post">
          <div class="post-body">
            <h2 class="post-title">${title}</h2>
            <p class="post-text">${text}</p>

            <div class="tags">
              <a href="#" class="tag">${tags.map((str) => `# ` + str)}</a>
            </div>
            <!-- /.tags -->
          </div>
          <!-- /.post-body -->
          <div class="post-footer">
            <div class="post-buttons">
              <button class="post-button likes">
                <svg width="19" height="20" class="icon icon-like">
                  <use xlink:href="img/icons.svg#like"></use>
                </svg>
                <span class="likes-counter">${like}</span>
              </button>
              <button class="post-button comments">
                <svg width="21" height="21" class="icon icon-comment">
                  <use xlink:href="img/icons.svg#comment"></use>
                </svg>
                <span class="comments-counter">${comments}</span>
              </button>
              <button class="post-button save">
                <svg width="19" height="19" class="icon icon-save">
                  <use xlink:href="img/icons.svg#save"></use>
                </svg>
              </button>
              <button class="post-button share">
                <svg width="17" height="19" class="icon icon-share">
                  <use xlink:href="img/icons.svg#share"></use>
                </svg>
              </button>
            </div>
            <!-- /.post-buttons -->
            <div class="post-author">
              <div class="author-about">
                <a href="#" class="author-username">${author}</a>
                <span class="post-time">${date}</span>
              </div>
              <a href="#" class="author-link"
                ><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"
              /></a>
            </div>
            <!-- /.post-author -->
          </div>
          <!-- /.post-footer -->
        </section>
    `;
    }
  );

  postsWrapper.innerHTML = postsHTML;
};

const init = () => {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
  });

  loginSigup.addEventListener("click", (event) => {
    event.preventDefault();
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
  });

  exitElem.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener("click", (event) => {
    event.preventDefault();
    editContainer.classList.toggle("visible");
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove("visible");
  });

  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener("click", function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
  });

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});
