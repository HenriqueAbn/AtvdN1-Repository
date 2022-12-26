/*
class MobileNavBar {
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    "mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init()
*/

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

//Watchlist

//const mongoose = require('mongoose')
//const collection = require("./mongodb")
//const app = require("./app")

window.addEventListener('load', () =>{
  const form = document.querySelector("#new-film-form");
  const input = document.querySelector("#new-film-input");
  const list_el = document.querySelector("#films");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const film = input.value;

        if(!film){
          alert("Please fill out the film title");
          return;
        }

        const film_el = document.createElement("div");
        film_el.classList.add("film");

        const film_content_el = document.createElement("div");
        film_content_el.classList.add("content");
        film_content_el.innerText = film;

        film_el.appendChild(film_content_el);

        const film_input_el = document.createElement("input");
        film_input_el.classList.add("text");
        film_input_el.type = "text";
        film_input_el.value = film;
        film_input_el.setAttribute("readonly","readonly");

        film_content_el.appendChild(film_input_el)

        list_el.appendChild(film_el);
    })
})
  

