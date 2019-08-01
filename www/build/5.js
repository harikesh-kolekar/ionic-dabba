webpackJsonp([5],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthDetailPageModule", function() { return MonthDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__month_detail__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MonthDetailPageModule = /** @class */ (function () {
    function MonthDetailPageModule() {
    }
    MonthDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__month_detail__["a" /* MonthDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__month_detail__["a" /* MonthDetailPage */]),
            ],
        })
    ], MonthDetailPageModule);
    return MonthDetailPageModule;
}());

//# sourceMappingURL=month-detail.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MonthDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonthDetailPage = /** @class */ (function () {
    function MonthDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var items_here = [
            ['input1', 'input2'],
            ['input3', 'input4'],
            ['input5', 'input6'],
            ['input7', 'input8'],
            ['input9', 'input10'],
            ['input11', 'input12'],
            ['input13', 'input14'],
            ['input15', 'input16'],
            ['input17', 'input18'],
            ['input19', 'input20'],
        ];
        items_here[2]['about'] = "Application Developer";
        items_here[2]['name'] = "Sibabrat Swain";
        items_here[2]['profilePic'] = "../../assets/img/users/user1.jpg";
        items_here[0]['about'] = "Co-founder and CTO";
        items_here[0]['name'] = "Devadatta Sahoo ";
        items_here[0]['profilePic'] = "../../assets/img/users/user2.png";
        items_here[1]['about'] = "Software Developer";
        items_here[1]['name'] = "Pitabas Behera";
        items_here[1]['profilePic'] = "../../assets/img/users/user3.jpeg";
        items_here[3]['about'] = "Human Resources Executive ";
        items_here[3]['name'] = "Rutuparna Singh";
        items_here[3]['profilePic'] = "../../assets/img/users/user4.jpeg";
        items_here[4]['about'] = "Application Developer";
        items_here[4]['name'] = "Ashutosh kumar choubey";
        items_here[4]['profilePic'] = "../../assets/img/users/user5.jpeg";
        items_here[5]['about'] = "Electric Utilities Consultant";
        items_here[5]['name'] = "Manish Mishra";
        items_here[5]['profilePic'] = "../../assets/img/users/user6.jpeg";
        items_here[6]['about'] = "Co Founder at FDSHive";
        items_here[6]['name'] = "Bikash Sahoo";
        items_here[6]['profilePic'] = "../../assets/img/users/user7.jpeg";
        items_here[7]['about'] = "Business Consultant; Web Analyst";
        items_here[7]['name'] = "Monisha K";
        items_here[7]['profilePic'] = "../../assets/img/users/user8.jpeg";
        items_here[8]['about'] = "Software Developer";
        items_here[8]['name'] = "Nambrata Mital";
        items_here[8]['profilePic'] = "../../assets/img/users/user9.jpeg";
        items_here[9]['about'] = "Application Developer";
        items_here[9]['name'] = "Gokulananda Dash";
        items_here[9]['profilePic'] = "../../assets/img/users/user10.jpeg";
        // console.log(items_here);
        this.currentItems = items_here;
    }
    MonthDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MonthDetailPage');
    };
    MonthDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-month-detail',template:/*ion-inline-start:"C:\Users\define\harry\Ionic3-Multi-Purpose-Theme\src\pages\month-detail\month-detail.html"*/'<!--\n  Generated template for the MonthDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>month-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      \n        <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let item of currentItems" #slidingItem>\n          <ion-item>\n            <ion-avatar item-start>\n              <img [src]="item.profilePic">\n            </ion-avatar>\n            <h2>{{item.name}}</h2>\n            <p>{{item.about}}</p>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\define\harry\Ionic3-Multi-Purpose-Theme\src\pages\month-detail\month-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MonthDetailPage);
    return MonthDetailPage;
}());

//# sourceMappingURL=month-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map