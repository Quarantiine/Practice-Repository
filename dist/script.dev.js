"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  pipucCloseBtn: document.querySelector('.pipuc-close-btn')
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
    pipucCloseBtn = sideNavbarVar.pipucCloseBtn;
var mainBodyContentVar = {
  mainBodyContent: document.querySelector('.main-body-content')
};
var mainBodyContent = mainBodyContentVar.mainBodyContent;

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
      });
      pinnedItemsBtn.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.add('pinned-items-pop-up-container-cl');
      });
      pipucCloseBtn.addEventListener('click', function () {
        pinnedItemsPopUpContainer.classList.remove('pinned-items-pop-up-container-cl');
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
};

SNBClassMethodManager();