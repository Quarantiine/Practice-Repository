"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ========== SIDE NAVIGATION BAR VARIABLES ===========
var sideNavbarVar = {
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
var sideNavbar = sideNavbarVar.sideNavbar,
    closeSideBar = sideNavbarVar.closeSideBar,
    sideBarSec1 = sideNavbarVar.sideBarSec1,
    csBoxExpend = sideNavbarVar.csBoxExpend,
    csbDdContainer = sideNavbarVar.csbDdContainer,
    templateDdContainer = sideNavbarVar.templateDdContainer,
    csbDdBox = sideNavbarVar.csbDdBox,
    templateDdChildren = sideNavbarVar.templateDdChildren,
    sideBarSec3Img = sideNavbarVar.sideBarSec3Img,
    sideBarSec3Text = sideNavbarVar.sideBarSec3Text,
    sideNavbarActivitiesPopUp = sideNavbarVar.sideNavbarActivitiesPopUp,
    activityBtn = sideNavbarVar.activityBtn,
    actLink1 = sideNavbarVar.actLink1,
    pinnedItemsPopUpContainer = sideNavbarVar.pinnedItemsPopUpContainer,
    pipucBg = sideNavbarVar.pipucBg,
    pinnedItemsBtn = sideNavbarVar.pinnedItemsBtn,
    pipucCloseBtn = sideNavbarVar.pipucCloseBtn,
    htsLogo = sideNavbarVar.htsLogo,
    mbcmDropDown = sideNavbarVar.mbcmDropDown,
    mbcmPinnedItems = sideNavbarVar.mbcmPinnedItems,
    listContent = sideNavbarVar.listContent,
    gridContent = sideNavbarVar.gridContent,
    displayItemsGrid = sideNavbarVar.displayItemsGrid,
    displayItemsList = sideNavbarVar.displayItemsList; // ========== MAIN BODY CONTENT VARIABLES ===========

var mainBodyContentVar = {
  mainBodyContent: document.querySelector('.main-body-content'),
  searchBarLinksContainer: document.querySelector('.search-bar-links-container'),
  searchBarLinks: document.querySelector('.search-bar-links'),
  searchBar: document.querySelector('.search-bar'),
  sblContainer: document.querySelectorAll('.sbl-container'),
  linkSectionLinks: document.querySelectorAll('.link-section p'),
  mcsRecentContentContainer: document.querySelectorAll('.mcs-recent-content-container p'),
  switchBtnContainer: document.querySelector('.switch-btn-container')
};
var mainBodyContent = mainBodyContentVar.mainBodyContent,
    searchBarLinks = mainBodyContentVar.searchBarLinks,
    searchBar = mainBodyContentVar.searchBar,
    sblContainer = mainBodyContentVar.sblContainer,
    searchBarLinksContainer = mainBodyContentVar.searchBarLinksContainer,
    linkSectionLinks = mainBodyContentVar.linkSectionLinks,
    mcsRecentContentContainer = mainBodyContentVar.mcsRecentContentContainer,
    switchBtnContainer = mainBodyContentVar.switchBtnContainer; // ==---
// ========== Side Navigation Bar Section ===========||

var SideNavigationBar =
/*#__PURE__*/
function () {
  function SideNavigationBar() {
    _classCallCheck(this, SideNavigationBar);
  }

  _createClass(SideNavigationBar, [{
    key: "ClosingSideBarMethod",
    value: function ClosingSideBarMethod() {
      closeSideBar.addEventListener('click', function () {
        sideNavbar.classList.toggle('side-navbar-class-list');
        closeSideBar.classList.toggle('close-side-bar-class-list');
        mainBodyContent.classList.toggle('main-body-content-cl');
        sideNavbarActivitiesPopUp.classList.remove('side-navbar-activities-pop-up-cl');
      });
    }
  }, {
    key: "ExpendCreateBoxMethod",
    value: function ExpendCreateBoxMethod() {
      csBoxExpend.addEventListener('click', function () {
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
  }, {
    key: "InnerExpendCreateDDBoxMethod",
    value: function InnerExpendCreateDDBoxMethod() {
      csbDdBox.addEventListener('click', function () {
        csbDdBox.classList.toggle('expend-more-cl-2');
        templateDdChildren.classList.toggle('template-dd-children-cl');
      });
    }
  }, {
    key: "NavBarSection3Method",
    value: function NavBarSection3Method() {
      var imgArr = ['https://cdn4.buysellads.net/uu/1/122891/1660240932-ONLINE-STORES_Carbon-Ads_260x200-3.png', 'https://cdn4.buysellads.net/uu/1/122891/1660240905-MEMBER-AREAS_Carbon-Ads_260x200-2.png', 'https://cdn4.buysellads.net/uu/1/122891/1664548801-FreeAcct-NA-Ad3.png', 'https://cdn4.buysellads.net/uu/1/122503/1662488171-MC_Carbon_Logo_260x200.png', 'https://cdn4.buysellads.net/uu/1/122891/1664548579-FreeAcct-Black-Ad2.png', 'https://cdn4.buysellads.net/uu/1/122891/1664548450-MachineLearning-White-Ad4.png', 'https://cdn4.buysellads.net/uu/1/122891/1660240896-CMS_Carbon-Ads_260x200-1.png'];
      var textArr = ['With online stores, video and scheduling tools, whatever your idea, you can sell anything with Squarespace.', 'Turn your expertise into income by selling access to courses, classes, and community with Squarespace.', 'Start building apps today with 40+ free services and a $200 credit.', 'Get started with the #1 email marketing and automation platform today.', 'Start building apps today with 40+ free services and a $200 credit.', 'Automate machine learning to increase developer productivity with Azure.', 'Squarespace is everything you need to sell anything: your brand, products, services, content, or reservations.'];
      var ran = Math.floor(Math.random() * imgArr.length);
      window.addEventListener('load', function () {
        sideBarSec3Img.src = imgArr[ran];
        sideBarSec3Text.textContent = textArr[ran];
      });
    }
  }, {
    key: "SideNavbarActivitiesPopUpMethod",
    value: function SideNavbarActivitiesPopUpMethod() {
      activityBtn.addEventListener('click', function () {
        sideNavbarActivitiesPopUp.classList.toggle('side-navbar-activities-pop-up-cl');
      });
    }
  }, {
    key: "ActLinkBtnMethod",
    value: function ActLinkBtnMethod() {
      actLink1.addEventListener('click', function () {
        sideNavbarActivitiesPopUp.classList.remove('side-navbar-activities-pop-up-cl');
      });
    }
  }, {
    key: "PinnedItemsPopUpContainerMethod",
    value: function PinnedItemsPopUpContainerMethod() {
      pipucBg.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.remove('pinned-items-pop-up-container-cl');
        $(mbcmPinnedItems).css({
          'border-bottom': '3px solid transparent'
        });
      });
      pinnedItemsBtn.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.add('pinned-items-pop-up-container-cl');
        $(mbcmPinnedItems).css({
          'border-bottom': '3px solid #12d112'
        });
      });
      pipucCloseBtn.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.remove('pinned-items-pop-up-container-cl');
        $(mbcmPinnedItems).css({
          'border-bottom': '3px solid transparent'
        });
      });
      mbcmPinnedItems.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.add('pinned-items-pop-up-container-cl');
        $(mbcmPinnedItems).css({
          'border-bottom': '3px solid #12d112'
        });
      });
    }
  }, {
    key: "SideNavbarReponsiveness",
    value: function SideNavbarReponsiveness() {
      setInterval(function () {
        var sideNavbarActivitiesPopUpCl = document.querySelector('.side-navbar-activities-pop-up-cl');
        var topActivityLinkSection = document.querySelector('.top-activity-link-section');
        var contentActivityBox = document.querySelectorAll('.content-activity-box');
        var actBoxImgSection = document.querySelectorAll('.act-box-img-section');

        if (window.innerWidth <= 1300) {
          sideNavbar.classList.add('side-navbar-content-class-list');
          htsLogo.classList.add('main-body-logo-n-drop-down-cl');
          mbcmDropDown.classList.add('main-body-logo-n-drop-down-cl');
          $(sideNavbarActivitiesPopUp).css({
            'left': '0px'
          });
          $(sideNavbarActivitiesPopUpCl).css({
            'width': '280px'
          });
          $(topActivityLinkSection).css({
            'width': '280px'
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
            'left': '200px'
          });
          $(sideNavbarActivitiesPopUpCl).css({
            'width': '400px'
          });
          $(topActivityLinkSection).css({
            'width': '400px'
          });
          $(contentActivityBox).css({
            'width': '325px'
          });
          $(actBoxImgSection).css({
            'width': '300px'
          });
        }
      }, 100);
      mbcmDropDown.addEventListener('click', function () {
        sideNavbar.classList.toggle('side-navbar-content-toggle-class-list');
      });
    }
  }, {
    key: "ChangingDisplays",
    value: function ChangingDisplays() {
      displayItemsGrid.addEventListener('click', function () {
        listContent.classList.add('list-content-cl-disable');
        listContent.classList.remove('list-content-cl-enable');
        gridContent.classList.add('grid-content-cl-enable');
        gridContent.classList.remove('list-content-cl-disable');
        displayItemsGrid.classList.add('display-item-icons-cl-enable');
        displayItemsGrid.classList.remove('display-item-icons-cl-disable');
        displayItemsList.classList.remove('display-item-icons-cl-enable');
        displayItemsList.classList.add('display-item-icons-cl-disable');
      });
      displayItemsList.addEventListener('click', function () {
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
  }]);

  return SideNavigationBar;
}();

var SNB = new SideNavigationBar();

var SNBClassMethodManager = function SNBClassMethodManager() {
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

SNBClassMethodManager(); // ==---
// ========== Main Body Content Section ===========||

var MainBodyContent =
/*#__PURE__*/
function () {
  function MainBodyContent() {
    _classCallCheck(this, MainBodyContent);
  }

  _createClass(MainBodyContent, [{
    key: "MainBodyContentCheckScrollMethod",
    value: function MainBodyContentCheckScrollMethod() {
      if (mainBodyContent.scrollHeight > 929) {
        mainBodyContent.classList.add('main-body-content-cl-2');
      } else {
        mainBodyContent.classList.remove('main-body-content-cl-2');
      }
    }
  }, {
    key: "SearchBarLinksMethod",
    value: function SearchBarLinksMethod() {
      searchBar.addEventListener('click', function () {
        searchBarLinks.classList.add('search-bar-links-cl');
        $(searchBarLinksContainer).css({
          'display': 'flex',
          'height': '50px',
          'z-index': '5'
        });
        $(sblContainer).css({
          'cursor': 'pointer'
        });
      });
      searchBarLinksContainer.addEventListener('mouseleave', function () {
        searchBarLinks.classList.remove('search-bar-links-cl');
        $(searchBarLinksContainer).css({
          'height': '0%',
          'z-index': '-1'
        });
        $(sblContainer).css({
          'cursor': 'default'
        });
        setTimeout(function () {
          $(searchBarLinksContainer).css('display', 'none');
        }, 200);
      });
    }
  }, {
    key: "MainContentTopLinksMethod",
    value: function MainContentTopLinksMethod() {
      linkSectionLinks[0].addEventListener('click', function (e) {
        linkSectionLinks[0].classList.add('mcs-links-cl');
        linkSectionLinks[1].classList.remove('mcs-links-cl');
        linkSectionLinks[2].classList.remove('mcs-links-cl');
      });
      linkSectionLinks[1].addEventListener('click', function (e) {
        linkSectionLinks[0].classList.remove('mcs-links-cl');
        linkSectionLinks[1].classList.add('mcs-links-cl');
        linkSectionLinks[2].classList.remove('mcs-links-cl');
      });
      linkSectionLinks[2].addEventListener('click', function (e) {
        linkSectionLinks[0].classList.remove('mcs-links-cl');
        linkSectionLinks[1].classList.remove('mcs-links-cl');
        linkSectionLinks[2].classList.add('mcs-links-cl');
      });
    }
  }, {
    key: "MainContentBottomLinksMethod",
    value: function MainContentBottomLinksMethod() {
      mcsRecentContentContainer[0].addEventListener('click', function () {
        mcsRecentContentContainer[0].classList.add('switch-btn-text');
        mcsRecentContentContainer[1].classList.remove('switch-btn-text');
        switchBtnContainer.classList.remove('switch-btn-left-container-cl');
        switchBtnContainer.classList.add('switch-btn-right-container-cl');
      });
      mcsRecentContentContainer[1].addEventListener('click', function () {
        mcsRecentContentContainer[0].classList.remove('switch-btn-text');
        mcsRecentContentContainer[1].classList.add('switch-btn-text');
        switchBtnContainer.classList.add('switch-btn-left-container-cl');
        switchBtnContainer.classList.remove('switch-btn-right-container-cl');
      });
      switchBtnContainer.addEventListener('click', function () {
        if (switchBtnContainer.classList.contains('switch-btn-right-container-cl')) {
          switchBtnContainer.classList.add('switch-btn-left-container-cl');
          switchBtnContainer.classList.remove('switch-btn-right-container-cl');
          mcsRecentContentContainer[0].classList.remove('switch-btn-text');
          mcsRecentContentContainer[1].classList.add('switch-btn-text');
        } else {
          switchBtnContainer.classList.remove('switch-btn-left-container-cl');
          switchBtnContainer.classList.add('switch-btn-right-container-cl');
          mcsRecentContentContainer[0].classList.add('switch-btn-text');
          mcsRecentContentContainer[1].classList.remove('switch-btn-text');
        }
      });
    }
  }]);

  return MainBodyContent;
}();

var MBC = new MainBodyContent();

var MBCClassMethodManager = function MBCClassMethodManager() {
  MBC.MainBodyContentCheckScrollMethod();
  MBC.SearchBarLinksMethod();
  MBC.MainContentTopLinksMethod();
  MBC.MainContentBottomLinksMethod();
};

MBCClassMethodManager();