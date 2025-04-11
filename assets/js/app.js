class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        console.log(this);
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavbar(
    ".mobile-menu",
    ".navbar-nav",
    ".navbar-nav li",
);

mobileNavBar.init()