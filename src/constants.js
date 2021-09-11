export const STATIC_HELLO = "hello world";

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
};

export const textInputProps = {
  type: { defaut: "text", password: "password", email: "email" },
  placeholder: {
    defaut: "enter your text",
    password: "enter your password",
    email: "enter your email",
    firstName: "entrez votre prenom",
    lastName: "entrez votre nom",
    confirmPassword: "confirmez votre mot de passe",
  },
  label: {
    defaut: "enter your info",
    password: "Enter Password",
    email: "Enter Email",
    firstName: "Prenom",
    lastName: "Nom",
    confirmPassword: "Confirmation du mot de passe",
  },
};

export const customNavBarProps = {
  default: {
    background: "primary",
    variant: "dark",
    navHome: "/",
    className: "me-auto",
    options: [
      { link: "#home", text: "Home" },
      { link: "#features", text: "Features" },
    ],
    logo: "My website",
  },
};

export const navLinks = [
  { link: "#home", text: "Home" },
  { link: "#features", text: "Features" },
  { link: "#pricing", text: "Pricing" },
];

export const logoProps = {
  default : {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cMllkWiQQgd_NNM-7Nj2vUVn513EHEwbRQEVkTusuqlPXmAnJBCTWEM6Wgktn1k-9T4&usqp=CAU",
  width: "70px",
  height: "70px",
  },
  avengers : {
    url: "https://www.pngitem.com/pimgs/m/33-334144_logo-avengers-hd-png-download.png",
  width: "70px",
  height: "70px",
  }
};

export const toDoList = {
  label: "Enter your next step",
  placeholder: "Enter your next step",
  type: "text",
};
