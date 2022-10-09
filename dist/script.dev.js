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
  templateDdChildren: document.querySelector('.template-dd-children')
};
var sideNavbar = sideNavbarVar.sideNavbar,
    closeSideBar = sideNavbarVar.closeSideBar,
    sideBarSec1 = sideNavbarVar.sideBarSec1,
    csBoxExpend = sideNavbarVar.csBoxExpend,
    csbDdContainer = sideNavbarVar.csbDdContainer,
    templateDdContainer = sideNavbarVar.templateDdContainer,
    csbDdBox = sideNavbarVar.csbDdBox,
    templateDdChildren = sideNavbarVar.templateDdChildren;
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
  }]);

  return SideNavigationBar;
}();

var SNB = new SideNavigationBar();

var SNBClassMethodManager = function SNBClassMethodManager() {
  SNB.ClosingSideBarMethod();
  SNB.ExpendCreateBoxMethod();
  SNB.InnerExpendCreateDDBoxMethod();
};

SNBClassMethodManager();