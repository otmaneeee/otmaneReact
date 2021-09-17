export const STATIC_HELLO = "hello world";
//Button
export const bootstrapButtonVariant = {
  danger: "danger",
  success: "success",
  outlineWarning: "outline-warning",
  primary: "primary",
};

export const buttonTexts = {
  add: "Add to the list",
  danger: "danger",
  success: "success",
  outlineWarning: "outline-warning",
  connection: "Se connecter",
  mdpForgotten: "Mot de passe oublié",
  inscription: "S'inscrire",
  toDoList : "Add",
  delete : "Vider",
};
//Input
export const textInputProps = {
  type: { defaut: "text", password: "password", email: "email" },
  placeholder: {
    defaut: "enter your text",
    password: "enter your password",
    email: "enter your email",
    firstName: "entrez votre prenom",
    lastName: "entrez votre nom",
    confirmPassword: "confirmez votre mot de passe",
    toDoList : "enter your next task"
  },
  label: {
    defaut: "enter your info",
    password: "Enter Password",
    email: "Enter Email",
    firstName: "Prenom",
    lastName: "Nom",
    confirmPassword: "Confirmation du mot de passe",
    toDoList : "Enter your task"
  },
  name:{
    defaut : "defaut",
    email : "email",
    password : "password",
  }
};
//NavBar
export const customNavBarProps = {
  default: {
    background: "primary",
    variant: "dark",
    navHome: "/",
    className: "me-auto",
    options: [
      { link: "/home", text: "Home" },
      { link: "/Login", text: "Login" },
      { link: "/Inscription", text: "Inscription" },
      { link: "/todo", text: "To-Do" },
      { link: "/tasks", text: "Tasks" },
    ],
    logo: "My website",
  },
};

export const navLinks = [
  { link: "/home", text: "Home" },
  { link: "/features", text: "Features" },
  { link: "/pricing", text: "Pricing" },
];

export const logoProps = {
  default: {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cMllkWiQQgd_NNM-7Nj2vUVn513EHEwbRQEVkTusuqlPXmAnJBCTWEM6Wgktn1k-9T4&usqp=CAU",
    width: "70px",
    height: "70px",
  },
  avengers: {
    url: "https://www.pngitem.com/pimgs/m/33-334144_logo-avengers-hd-png-download.png",
    width: "70px",
    height: "70px",
  },
};
//Custom Card
export const cardProps = {
  default: {
    width: "18rem",
    variant: "top",
    src: "https://dailygeekshow.com/wp-content/uploads/2019/10/iron-man.jpg",
    title: "Iron man",
    text: "And I am Iron Man",
  },
  cap: {
    width: "18rem",
    variant: "top",
    src: "https://fabricelamirault.com/wp-content/uploads/2019/04/chris-evans-avengers-captain-america-1024x576.jpeg",
    title: "Captain America",
    text: "I can do this all day",
  },
  thor: {
    width: "18rem",
    variant: "top",
    src: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/5-bonnes-raisons-de-regarder-le-film-thor-france-3-4308451/77638943-1-fre-FR/5-bonnes-raisons-de-regarder-le-film-Thor-France-3.jpg",
    title: "Thor",
    text: "That's what heroes do",
  },
  hulk: {
    width: "18rem",
    variant: "top",
    src : "https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg",
    title: "Hulk",
    text: "DESTROY EVERYTHING",
  },
  blackWidow: {
    width: "18rem",
    variant: "top",
    src : "https://img.phonandroid.com/2021/03/black-widow-1.jpg",
    title: "Black Widow",
    text: "I used to have nothing",
  },
  hawkeye: {
    width: "18rem",
    variant: "top",
    src : "https://www.dexerto.fr/wp-content/uploads/sites/2/2020/11/jeremy-renner-partage-la-premiere-photo-de-la-serie-hawkeye-de-disney.jpg",
    title: "Hawkeye",
    text: "You didn't see that coming ?",
  },
  warMachine: {
    width: "18rem",
    variant: "top",
    src : "https://images.hdqwalls.com/download/2020-war-machine-4k-ss-1920x1080.jpg",
    title: "War Machine",
    text: "Boom are you looking for this ?",
  },
  Wanda : {
    width: "18rem",
    variant: "top",
    src : "https://medias.spotern.com/spots/w640/242/242127-1571726340.jpg",
    title: "Wanda",
    text: "You took everything from me ",
  },
  spiderMan : {
    width: "18rem",
    variant: "top",
    title: "Spider Man",
    src : "https://www.lesinrocks.com/wp-content/uploads/2019/08/civil-war-spidey-width_1600_height_802_x_0_y_36.jpg?resize=850%2C540&quality=75",
    text: "M ready for our next mission",
  },
  
};
// Dropdown
export const dropdownProps = {
  defaults: {
    variant: "success",
    id: "dropdown-basic",
    text: "Dropdown Button",
    menu: [
      { link: "#action", action: "Action" },
      { link: "#another action", action: "Another Action" },
      { link: "#something else", action: "Something else" },
    ],
  },
    avengers : {
      variant : "primary",
      id: "dropdown-basic",
    text: "Who's your favourite Avenger ?",
    menu: [
      { link: "#Iron Man", action: "Iron Man" },
      { link: "#Captain America", action: "Captain America" },
      { link: "#Thor", action: "Thor" },
    ],
  },
  villain : {
    variant : "danger",
      id: "dropdown-basic",
    text: "Who's your favourite villain ?",
    menu: [
      { link: "#Thanos", action: "Thanos" },
      { link: "#Ultron", action: "Ultron" },
      { link: "#Hela", action: "Hela" },
    ]
  },
};
// Typing game
export const PARAGRAPH_TO_TYPE = "my name is othmane";

//authentification
export const authUser = {
  email : "othmane@gmail.com",
  password : "123456",
}

export const messageAuth = {
  error : "Info are incorrects",
  success : "You're an avenger now !"
} 

export const toDoList = {
  label: "Enter your next step",
  placeholder: "Enter your next step",
  type: "text",
};
