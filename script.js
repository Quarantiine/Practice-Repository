const sideNavbarVar = {
    sideNavbar: document.querySelector('.side-navbar'),
    closeSideBar: document.querySelector('.close-side-bar'),
    sideBarSec1: document.querySelector('.side-bar-sec-1'),
    csBoxExpend: document.querySelector('.cs-box .expend-more'),
    csbDdContainer: document.querySelector('.csb-dd-container'),
    templateDdContainer: document.querySelector('.template-dd-container'),
    csbDdBox: document.querySelector('.csb-dd-box .expend-more'),
    templateDdChildren: document.querySelector('.template-dd-children')
};
const {
    sideNavbar, closeSideBar, sideBarSec1, csBoxExpend,
    csbDdContainer, templateDdContainer, csbDdBox,
    templateDdChildren
} = sideNavbarVar;

const mainBodyContentVar = {
    mainBodyContent: document.querySelector('.main-body-content')
};
const {
    mainBodyContent
} = mainBodyContentVar;

class SideNavigationBar {
    constructor(){}

    ClosingSideBarMethod() {
        closeSideBar.addEventListener('click', ()=> {
            sideNavbar.classList.toggle('side-navbar-class-list');
            closeSideBar.classList.toggle('close-side-bar-class-list');
            mainBodyContent.classList.toggle('main-body-content-cl');
        });
    }

    ExpendCreateBoxMethod() {
        csBoxExpend.addEventListener('click', ()=> {
            csBoxExpend.classList.toggle('expend-more-cl');
            csbDdContainer.classList.toggle('csb-dd-container-class-list');
            templateDdContainer.classList.toggle('template-dd-container-class-list');

            if (templateDdChildren.classList.contains('template-dd-children-cl')) {
                templateDdChildren.classList.remove('template-dd-children-cl');
            }

            if (csbDdBox.classList.contains('expend-more-cl-2')) {
                csbDdBox.classList.remove('expend-more-cl-2');
            }
        });
    }

    InnerExpendCreateDDBoxMethod() {
        csbDdBox.addEventListener('click', ()=> {
            csbDdBox.classList.toggle('expend-more-cl-2');
            templateDdChildren.classList.toggle('template-dd-children-cl');
        });
    }
}
const SNB = new SideNavigationBar();
const SNBClassMethodManager = ()=> {
    SNB.ClosingSideBarMethod();
    SNB.ExpendCreateBoxMethod();
    SNB.InnerExpendCreateDDBoxMethod();
};
SNBClassMethodManager();