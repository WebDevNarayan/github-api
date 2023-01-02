// if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: light)").matches
// ) {
//   changeThemeOnMedia();
// }

// // event listener for matchMedia
// window
//   .matchMedia("(prefers-color-scheme: light)")
//   .addEventListener("change", (e) => {
//     changeThemeOnMedia();
//   });

// const themeToggler = document.querySelector("#theme-toggler");
// themeToggler.addEventListener("click", changeThemeOnClick);

// function changeThemeOnClick() {
//   let localStorageTheme = localStorage.getItem("theme");
//   let theme = localStorageTheme ?? "light";
//   localStorage.setItem("theme", theme === "light" ? "dark" : "light");
//   changeTheme(theme === "light" ? "dark" : "light");
// }

// function changeThemeOnMedia() {
//   let mediaTheme =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: light)").matches
//       ? "light"
//       : "dark";
//   let localStorageTheme = localStorage.getItem("theme");
//   let theme = localStorageTheme ?? mediaTheme;
//   changeTheme(theme);
// }

// function changeTheme(theme) {
//   const themeLabel = document.querySelector("#theme-label");
//   themeLabel.textContent = theme === "light" ? "Dark" : "Light";
//   document.body.parentElement.classList.toggle("light");
// }
// // data fetching

// const url = "https://api.github.com/users/";
// const searchForm = document.querySelector("#search-form");
// const errorField = document.querySelector(".error");
// const loading = document.querySelector(".loading");

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   errorField.textContent = "";

//   const inputForm = document.querySelector("#search-input");
//   const username = inputForm.value;
//   //   trim and sanitize username input
//   username.trim();
//   if (username.length === 0) {
//     errorField.textContent = "Please Enter a username";
//     return;
//   }
//   fetchDataFromGithub(username);
// });

// async function fetchDataFromGithub(username) {
//   loading.classList.remove("hidden");
//   const response = await fetch(url + username);
//   const data = await response.json();
//   if (response.status === 404) {
//     errorField.textContent = "User not found";
//     loading.classList.add("hidden");
//     return;
//   }

//   console.log(data);
//   //selectors
//   const image = document.querySelector(".avatar");
//   const name = document.querySelector(".name");
//   const usernameContent = document.querySelector(".username");
//   const joinedDate = document.querySelector(".join-date");
//   const bio = document.querySelector(".bio");
//   const followers = document.querySelector(".stats-followers");
//   const repos = document.querySelector(".stats-repos");
//   const following = document.querySelector(".stats-following");
//   const location = document.querySelector(".user-location");
//   const twitter = document.querySelector(".user-twitter");
//   const blog = document.querySelector(".user-link");
//   const company = document.querySelector(".user-company");

//   //assiging data
//   image.src = data.avatar_url;
//   name.textContent = data.name;
//   usernameContent.textContent = `@${data.login}`;
//   joinedDate.textContent = `Joined ${new Date(data.created_at).toDateString()}`;
//   bio.textContent = data.bio ?? "not available";
//   followers.textContent = data.followers;
//   repos.textContent = data.public_repos;
//   following.textContent = data.following;
//   location.textContent = data.location ?? "not available";
//   twitter.textContent = data.twitter_username ?? "not available";
//   blog.textContent = data.blog !== "" ? data.blog : "not available";
//   company.textContent = data.company ?? "not available";

//   loading.classList.add("hidden");
// }

// fetchDataFromGithub("projectashik");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  changeThemeOnMedia();
}

// event listener for matchMedia
window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    changeThemeOnMedia();
  });

const themeToggler = document.querySelector("#theme-toggler");
themeToggler.addEventListener("click", changeThemeOnClick);

function changeThemeOnClick() {
  let localStorageTheme = localStorage.getItem("theme");
  let theme = localStorageTheme ?? "light";
  localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  changeTheme(theme === "light" ? "dark" : "light");
}

function changeThemeOnMedia() {
  let mediaTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  let localStorageTheme = localStorage.getItem("theme");
  let theme = localStorageTheme ?? mediaTheme;
  changeTheme(theme);
}

function changeTheme(theme) {
  const themeLabel = document.querySelector("#theme-label");
  themeLabel.textContent = theme === "light" ? "Dark" : "Light";
  document.body.parentElement.classList.toggle("light");
}
// data fetching

const url = "https://api.github.com/users/";
const searchForm = document.querySelector("#search-form");
const errorField = document.querySelector(".error");
const loading = document.querySelector(".loading");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorField.textContent = "";

  const inputForm = document.querySelector("#search-input");
  const username = inputForm.value;
  //   trim and sanitize username input
  username.trim();
  if (username.length === 0) {
    errorField.textContent = "Please Enter a username";
    return;
  }
  fetchDataFromGithub(username);
});

async function fetchDataFromGithub(username) {
  loading.classList.remove("hidden");
  const response = await fetch(url + username);
  const data = await response.json();
  if (response.status === 404) {
    errorField.textContent = "User not found";
    loading.classList.add("hidden");
    return;
  }

  console.log(data);
  //selectors
  const image = document.querySelector(".avatar");
  const name = document.querySelector(".name");
  const usernameContent = document.querySelector(".username");
  const joinedDate = document.querySelector(".join-date");
  const bio = document.querySelector(".bio");
  const followers = document.querySelector(".stats-followers");
  const repos = document.querySelector(".stats-repos");
  const following = document.querySelector(".stats-following");
  const location = document.querySelector(".user-location");
  const twitter = document.querySelector(".user-twitter");
  const blog = document.querySelector(".user-link");
  const company = document.querySelector(".user-company");

  //assiging data
  image.src = data.avatar_url;
  name.textContent = data.name;
  usernameContent.textContent = `@${data.login}`;
  joinedDate.textContent = `Joined ${new Date(data.created_at).toDateString()}`;
  bio.textContent = data.bio ?? "not available";
  followers.textContent = data.followers;
  repos.textContent = data.public_repos;
  following.textContent = data.following;
  location.textContent = data.location ?? "not available";
  twitter.textContent = data.twitter_username ?? "not available";
  blog.textContent = data.blog !== "" ? data.blog : "not available";
  company.textContent = data.company ?? "not available";

  loading.classList.add("hidden");
}

fetchDataFromGithub("projectashik");
