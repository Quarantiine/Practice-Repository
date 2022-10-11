// ========== SIDE NAVIGATION BAR VARIABLES ===========
const sideNavbarVar = {
    sideNavbar: document.querySelector('.side-navbar'),
    closeSideBar: document.querySelector('.close-side-bar'),
    sideBarSec1: document.querySelector('.side-bar-sec-1'),
    csBoxExpend: document.querySelector('.cs-box .expend-more'),
    csbDdContainer: document.querySelector('.csb-dd-container'),
    templateDdContainer: document.querySelector('.template-dd-container'),
    csbDdBox: document.querySelector('.csb-dd-box .expend-more'),
    templateDdChildren: document.querySelector('.template-dd-children'),
    sideBarSec3Img: document.querySelector('.side-bar-sec-3 img'),
    sideBarSec3Text: document.querySelector('.side-bar-sec-3 p'),
    sideNavbarActivitiesPopUp: document.querySelector('.side-navbar-activities-pop-up'),
    activityBtn: document.querySelector('.activity-btn'),
    actLink1: document.querySelector('.act-link-1'),
    pinnedItemsPopUpContainer: document.querySelector('.pinned-items-pop-up-container'),
    pipucBg: document.querySelector('.pipuc-bg'),
    pinnedItemsBtn: document.querySelector('.pinned-items-btn'),
    pipucCloseBtn: document.querySelector('.pipuc-close-btn'),
    htsLogo: document.querySelector('.hts-logo'),
    mbcmDropDown: document.querySelector('.mbcm-drop-down'),
    mbcmPinnedItems: document.querySelector('.mbcm-pinned-items'),
    displayItemsGrid: document.querySelector('.display-items-grid'),
    displayItemsList: document.querySelector('.display-items-list'),  
    listContent: document.querySelector('.list-content'),
    gridContent: document.querySelector('.grid-content')
};
const {
    sideNavbar, closeSideBar, sideBarSec1, csBoxExpend,
    csbDdContainer, templateDdContainer, csbDdBox,
    templateDdChildren, sideBarSec3Img, sideBarSec3Text,
    sideNavbarActivitiesPopUp, activityBtn, actLink1,
    pinnedItemsPopUpContainer, pipucBg, pinnedItemsBtn,
    pipucCloseBtn, htsLogo, mbcmDropDown, mbcmPinnedItems,
    listContent, gridContent, displayItemsGrid, displayItemsList
} = sideNavbarVar;

// ========== MAIN BODY CONTENT VARIABLES ===========
const mainBodyContentVar = {
    mainBodyContent: document.querySelector('.main-body-content'),
    searchBarLinksContainer: document.querySelector('.search-bar-links-container'),
    searchBarLinks: document.querySelector('.search-bar-links'),
    searchBar: document.querySelector('.search-bar'),
    sblContainer: document.querySelectorAll('.sbl-container')
    
};
const {
    mainBodyContent, searchBarLinks, searchBar, sblContainer,
    searchBarLinksContainer
} = mainBodyContentVar;


// ==---
// ========== Side Navigation Bar Section ===========||
class SideNavigationBar {
    constructor(){}

    ClosingSideBarMethod() {
        closeSideBar.addEventListener('click', ()=> {
            sideNavbar.classList.toggle('side-navbar-class-list');
            closeSideBar.classList.toggle('close-side-bar-class-list');
            mainBodyContent.classList.toggle('main-body-content-cl');
            sideNavbarActivitiesPopUp.classList.remove('side-navbar-activities-pop-up-cl');
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

    NavBarSection3Method() {
        let imgArr = [
            'https://cdn4.buysellads.net/uu/1/122891/1660240932-ONLINE-STORES_Carbon-Ads_260x200-3.png',
            'https://cdn4.buysellads.net/uu/1/122891/1660240905-MEMBER-AREAS_Carbon-Ads_260x200-2.png',
            'https://cdn4.buysellads.net/uu/1/122891/1664548801-FreeAcct-NA-Ad3.png',
            'https://cdn4.buysellads.net/uu/1/122503/1662488171-MC_Carbon_Logo_260x200.png',
            'https://cdn4.buysellads.net/uu/1/122891/1664548579-FreeAcct-Black-Ad2.png',
            'https://cdn4.buysellads.net/uu/1/122891/1664548450-MachineLearning-White-Ad4.png',
            'https://cdn4.buysellads.net/uu/1/122891/1660240896-CMS_Carbon-Ads_260x200-1.png'
        ];
        let textArr = [
            'With online stores, video and scheduling tools, whatever your idea, you can sell anything with Squarespace.',
            'Turn your expertise into income by selling access to courses, classes, and community with Squarespace.',
            'Start building apps today with 40+ free services and a $200 credit.',
            'Get started with the #1 email marketing and automation platform today.',
            'Start building apps today with 40+ free services and a $200 credit.',
            'Automate machine learning to increase developer productivity with Azure.',
            'Squarespace is everything you need to sell anything: your brand, products, services, content, or reservations.'
        ];
        let ran = Math.floor(Math.random()*imgArr.length);

        window.addEventListener('load', ()=> {
            sideBarSec3Img.src = imgArr[ran];
            sideBarSec3Text.textContent = textArr[ran];
        });
    }

    SideNavbarActivitiesPopUpMethod() {
        activityBtn.addEventListener('click', ()=> {
            sideNavbarActivitiesPopUp.classList.toggle('side-navbar-activities-pop-up-cl');
        });
    }

    ActLinkBtnMethod() {
        actLink1.addEventListener('click', ()=> {
            sideNavbarActivitiesPopUp.classList.remove('side-navbar-activities-pop-up-cl');
        });
    }

    PinnedItemsPopUpContainerMethod() {
        pipucBg.addEventListener('click', ()=> {
            pinnedItemsPopUpContainer.classList.remove('pinned-items-pop-up-container-cl');
            $(mbcmPinnedItems).css({
                'border-bottom': '3px solid transparent'
            });
        });

        pinnedItemsBtn.addEventListener('click', ()=> {
            pinnedItemsPopUpContainer.classList.add('pinned-items-pop-up-container-cl');
            $(mbcmPinnedItems).css({
                'border-bottom': '3px solid #12d112'
            });
        });
        
        pipucCloseBtn.addEventListener('click', ()=> {
            pinnedItemsPopUpContainer.classList.remove('pinned-items-pop-up-container-cl');
            $(mbcmPinnedItems).css({
                'border-bottom': '3px solid transparent'
            });
        });

        mbcmPinnedItems.addEventListener('click', ()=> {
            pinnedItemsPopUpContainer.classList.add('pinned-items-pop-up-container-cl');
            $(mbcmPinnedItems).css({
                'border-bottom': '3px solid #12d112'
            });
        });
    }

    SideNavbarReponsiveness() {
        setInterval(()=> {
            const sideNavbarActivitiesPopUpCl = document.querySelector('.side-navbar-activities-pop-up-cl');
            const topActivityLinkSection = document.querySelector('.top-activity-link-section');
            const contentActivityBox = document.querySelectorAll('.content-activity-box');
            const actBoxImgSection = document.querySelectorAll('.act-box-img-section');

            if (window.innerWidth <= 1300) {
                sideNavbar.classList.add('side-navbar-content-class-list');
                htsLogo.classList.add('main-body-logo-n-drop-down-cl');
                mbcmDropDown.classList.add('main-body-logo-n-drop-down-cl');
                $(sideNavbarActivitiesPopUp).css({
                    'left': '0px',
                });
                $(sideNavbarActivitiesPopUpCl).css({
                    'width': '280px'
                });
                $(topActivityLinkSection).css({
                    'width': '280px',
                });
                $(contentActivityBox).css({
                    'width': '220px',
                    'padding': '10px'
                });
                $(actBoxImgSection).css({
                    'width': '200px'
                });
            } else {
                sideNavbar.classList.remove('side-navbar-content-class-list');
                htsLogo.classList.remove('main-body-logo-n-drop-down-cl');
                mbcmDropDown.classList.remove('main-body-logo-n-drop-down-cl');
                sideNavbar.classList.remove('side-navbar-content-toggle-class-list');
                $(sideNavbarActivitiesPopUp).css({
                    'left': '200px',
                });
                $(sideNavbarActivitiesPopUpCl).css({
                    'width': '400px'
                });
                $(topActivityLinkSection).css({
                    'width': '400px',
                });
                $(contentActivityBox).css({
                    'width': '325px'
                });
                $(actBoxImgSection).css({
                    'width': '300px',
                });
            }
        }, 100);

        mbcmDropDown.addEventListener('click', ()=> {
            sideNavbar.classList.toggle('side-navbar-content-toggle-class-list');
        });
    }

    ChangingDisplays() {
        displayItemsGrid.addEventListener('click', ()=> {
            listContent.classList.add('list-content-cl-disable');
            listContent.classList.remove('list-content-cl-enable');

            gridContent.classList.add('grid-content-cl-enable');
            gridContent.classList.remove('list-content-cl-disable');

            displayItemsGrid.classList.add('display-item-icons-cl-enable');
            displayItemsGrid.classList.remove('display-item-icons-cl-disable');

            displayItemsList.classList.remove('display-item-icons-cl-enable');
            displayItemsList.classList.add('display-item-icons-cl-disable');
        });

        displayItemsList.addEventListener('click', ()=> {
            listContent.classList.remove('list-content-cl-disable');
            listContent.classList.add('list-content-cl-enable');

            gridContent.classList.remove('grid-content-cl-enable');
            gridContent.classList.add('list-content-cl-disable');

            displayItemsGrid.classList.remove('display-item-icons-cl-enable');
            displayItemsGrid.classList.add('display-item-icons-cl-disable');

            displayItemsList.classList.add('display-item-icons-cl-enable');
            displayItemsList.classList.remove('display-item-icons-cl-disable');
        });
    }
}
const SNB = new SideNavigationBar();
const SNBClassMethodManager = ()=> {
    SNB.ClosingSideBarMethod();
    SNB.ExpendCreateBoxMethod();
    SNB.InnerExpendCreateDDBoxMethod();
    SNB.NavBarSection3Method();
    SNB.SideNavbarActivitiesPopUpMethod();
    SNB.ActLinkBtnMethod();
    SNB.PinnedItemsPopUpContainerMethod();
    SNB.SideNavbarReponsiveness();
    SNB.ChangingDisplays();
};
SNBClassMethodManager();


// ==---
// ========== Main Body Content Section ===========||
class MainBodyContent {
    constructor(){}

    SearchBarLinksMethod() {
        searchBar.addEventListener('click', ()=> {
            searchBarLinks.classList.add('search-bar-links-cl');
            $(sblContainer).css({
                'cursor': 'pointer'
            }); 
        });

        searchBarLinksContainer.addEventListener('mouseleave', ()=> {
            searchBarLinks.classList.remove('search-bar-links-cl');
            $(sblContainer).css({
                'cursor': 'default'
            }); 
        });
    }
}
const MBC = new MainBodyContent();
const MBCClassMethodManager = ()=> {
    MBC.SearchBarLinksMethod();
};
MBCClassMethodManager();