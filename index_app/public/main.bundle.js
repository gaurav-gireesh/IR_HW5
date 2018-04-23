webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--        Displaying the navbar   -->\n<app-navbar></app-navbar>\n\n\n<div class=\"container\">\n\n    <br>\n\n    <flash-messages></flash-messages>\n    <!-- <router-outlet></router-outlet> -->\n  \n</div>\n\n    "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_result_search_result_component__ = __webpack_require__("./src/app/components/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_suggestor_service__ = __webpack_require__("./src/app/services/suggestor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_spell_checker_service__ = __webpack_require__("./src/app/services/spell-checker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: "search", component: __WEBPACK_IMPORTED_MODULE_8__components_search_result_search_result_component__["a" /* SearchResultComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_search_result_search_result_component__["a" /* SearchResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_9__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_10__services_suggestor_service__["a" /* SuggestorService */], __WEBPACK_IMPORTED_MODULE_11__services_spell_checker_service__["a" /* SpellCheckerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:2%;\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-darks\">\n    <a class=\"navbar-brand\" href=\"http://newsday.com\">NewsDay</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n    data-target=\"#navbarColor02\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"(click)=\"clear()\" style=\"font-size:1.2em\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n         </ul>\n\n      <form class=\"form-inline my-2 my-lg-0\" (submit)=\"process()\" autocomplete=\"off\" id=\"myform\" name=\"myform\">\n         <span *ngIf=\"pageRank\"style=\"font-size:1.5em\">Page Rank?&nbsp;&nbsp;</span>\n         <span *ngIf=\"!pageRank\" style=\"font-size:1.2em;color:grey;\">Lucene&nbsp;&nbsp;</span> \n        <input name=\"pageRank\" [(ngModel)]=\"pageRank\" class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n        &nbsp;&nbsp;\n        \n        \n        <div class=\"autocomplete\" >\n          <input name=\"keyword\" id=\"keyword\" class=\"form-control mr-sm-2 \"  style=\"font-size:1em;\"   type=\"text\" placeholder=\"Search\" [(ngModel)]=\"keyword\"  (keyup)=\"suggest($event)\"/>\n        </div>\n\n       \n        <button class=\"btn btn-secondary my-2 my-sm-0 btn-default\" type=\"submit\"><span class=\"glyphicons glyphicons-database-search\"></span>SEARCH</button>&nbsp;&nbsp;\n       \n      </form>\n      <button class=\"btn btn-danger\" (click)=clear()>CLEAR</button>\n\n    </div>\n  </nav>\n\n\n\n\n\n\n  <!--RESULTS -->\n \n     \n\n\n\n\n\n<!-- New design for showing up results -->\n\n\n<div *ngIf=\"result && result['response']['docs'].length>0\" style=\"border:solid 4px coral;margin-top:2%;padding:1%;border-radius:20px;\">\n    <br/>\n    <br/>\n    &nbsp;&nbsp;<span *ngIf=\"correctedKeywords\" style=\"font-size:1.5em\">Did you mean  &nbsp;&nbsp;&nbsp; <b>{{this.correctedKeywords}}&nbsp;?</b></span><br/><br/>\n  <span style=\"font-size:1.5em; align-self: center;font-style:italic;\"> &nbsp;Showing results &nbsp; &nbsp; &nbsp; &nbsp; 1 - {{min(10,result['response']['numFound'])}} &nbsp; of &nbsp;&nbsp;  <strong>{{result['response']['numFound']}}</strong>&nbsp;&nbsp;&nbsp;for : &nbsp;&nbsp;&nbsp; <span *ngIf=\"!correctedKeywords\"><strong><i>{{keywordStatic}}</i></strong></span>\n  <span *ngIf=\"correctedKeywords\"><strong><i>{{correctedKeywords}}</i></strong></span>\n</span>\n          \n  <br>\n  <br><br/>\n  \n\n\n\n\n\n\n\n\n<div  class=\"resultBox\"*ngFor=\"let doc of result['response']['docs']; let i = index\"   style=\"border-radius:10px;\"  >\n \n <div  style=\"background:white\" class=\"{{'hello'+keyword}}\">\n\n\n <div  class=\"docTitle\">\n\n   <a  style=\"text-decoration: underline\" *ngIf=\"doc['og_url'] && doc['og_url'].length>0\"style=\"font-size:1em\" href=\"{{doc['og_url'][0]}}\" target=\"_blank\">\n     {{doc['title']}}\n    </a>\n   <a  style=\"text-decoration: underline\" *ngIf=\"!(doc['og_url'] && doc['og_url'].length>0)\"style=\"font-size:1em\" href=\"{{doc['gg_web_url']}}\" target=\"_blank\">\n     {{doc['title']}}\n    </a>\n\n </div>\n\n<br/>\n <div class=\"docLink\">\n   <a   *ngIf=\"doc['og_url'] && doc['og_url'].length>0\"style=\"font-size:1em;font-color:black;\" href=\"{{doc['og_url'][0]}}\" target=\"_blank\">\n     <span style=\"color:green;\">{{doc['og_url'][0]}}</span>\n    </a>\n   <a  *ngIf=\"!(doc['og_url'] && doc['og_url'].length>0)\"style=\"cfont-size:1em;font-color:black;\" href=\"{{doc['gg_web_url']}}\" target=\"_blank\">\n     <span style=\"color:green;\">{{doc['gg_web_url']}}\n\n     </span></a>\n\n\n </div>\n\n<br/>\n \n\n <!-- <div  class=\"docSnippet\">\n     <span  *ngIf=\"doc['og_description'] && doc['og_description'].length>0\"style=\"font-size:1em\" >\n       {{doc['og_description'][0]}}\n      </span>\n     <span *ngIf=\"!(doc['og_description'] && doc['og_description'].length>0)\"style=\"font-size:1em\" >\n       N/A\n      </span>\n\n </div> -->\n <div  class=\"docSnippet\">\n  \n  \n   <div    class=\"{{keyword+doc['id']}}\"  style=\"font-size:1em\" >\n   \n   </div>\n   {{generate_snippet_2(doc['id'])}}\n  \n\n</div>\n\n \n\n  </div>\n\n <hr >\n <br/>\n</div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n\n\n  </div>\n\n\n\n\n\n\n\n\n\n  <!-- Custom autocomplete related scripts -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_suggestor_service__ = __webpack_require__("./src/app/services/suggestor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_spell_checker_service__ = __webpack_require__("./src/app/services/spell-checker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flash, router, searchService, suggestorService, spellingService) {
        this.flash = flash;
        this.router = router;
        this.searchService = searchService;
        this.suggestorService = suggestorService;
        this.spellingService = spellingService;
        this.pageRank = true;
        this.correctedKeywords = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.process = function () {
        var _this = this;
        var checkEleme = document.getElementById('keywordautocomplete-list');
        if (checkEleme != null || checkEleme != undefined) {
            checkEleme.parentNode.removeChild(checkEleme);
        }
        if (this.keyword == undefined || this.keyword.length == 0) {
            this.result = null;
            this.flash.show("Please enter a Keyword!!", { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        else {
            this.keywordStatic = this.keyword;
            if (!this.pageRank) {
                var numWords_1 = this.keyword.split(" ").length;
                if (numWords_1 == 1) {
                    this.spellingService.spell(this.keyword).subscribe(function (correct) {
                        if (_this.keyword.trim().toLowerCase() == correct.correct.trim().toLowerCase())
                            _this.correctedKeywords = null;
                        else
                            _this.correctedKeywords = correct.correct.trim();
                        // console.log("Then corrected keyword is");
                        _this.searchService.search(correct.correct).subscribe(function (data) {
                            //this.correctedKeywords=correct.correct;
                            _this.result = data;
                            // console.dir(data);
                            if (_this.result['response']['docs'].length == 0) {
                                _this.flash.show("No result found!", { cssClass: 'alert-warning', timeout: 5000 });
                                return false;
                            }
                        }, function (err) {
                            _this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                            return false;
                        });
                    });
                }
                else {
                    var keywords = this.keyword.split(" ");
                    var corrected_1 = "";
                    var itemsProcessed = 0;
                    keywords.forEach(function (item) {
                        itemsProcessed++;
                        //console.log("Item is "+item+"###");
                        if (!(item === " " || item === "")) {
                            _this.spellingService.spell(item).subscribe(function (data) {
                                corrected_1 += " " + (data.correct);
                                if (itemsProcessed == numWords_1) {
                                    cb(corrected_1);
                                }
                            });
                        }
                    });
                    var cb = function (c) {
                        if (c.trim().toLowerCase() === _this.keyword.trim().toLowerCase()) {
                            _this.correctedKeywords = null;
                        }
                        else {
                            _this.correctedKeywords = c.trim();
                        }
                        _this.searchService.search(c).subscribe(function (data) {
                            _this.result = data;
                            if (_this.result['response']['docs'].length == 0) {
                                _this.flash.show("No result found!", { cssClass: 'alert-warning', timeout: 5000 });
                                return false;
                            }
                        }, function (err) {
                            _this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                            return false;
                        });
                    };
                }
            }
            else {
                var numWords_2 = this.keyword.split(" ").length;
                if (numWords_2 == 1) {
                    this.spellingService.spell(this.keyword).subscribe(function (correct) {
                        if (_this.keyword.toLowerCase().trim() == correct.correct.toLowerCase().trim())
                            _this.correctedKeywords = null;
                        else
                            _this.correctedKeywords = correct.correct.toLowerCase().trim();
                        //console.log("Then corrected keyword is");
                        _this.searchService.search_with_pageRank(correct.correct).subscribe(function (data) {
                            //this.correctedKeywords=correct.correct;
                            _this.result = data;
                            if (_this.result['response']['docs'].length == 0) {
                                _this.flash.show("No result found!", { cssClass: 'alert-warning', timeout: 5000 });
                                return false;
                            }
                        }, function (err) {
                            _this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                            return false;
                        });
                    });
                }
                else {
                    var keywords = this.keyword.split(" ");
                    var corrected_2 = "";
                    var itemsProcessed = 0;
                    keywords.forEach(function (item) {
                        itemsProcessed++;
                        //console.log("Item is "+item+"###");
                        if (!(item === " " || item === "")) {
                            _this.spellingService.spell(item).subscribe(function (data) {
                                corrected_2 += " " + (data.correct);
                                if (itemsProcessed == numWords_2) {
                                    cb(corrected_2);
                                }
                            });
                        }
                    });
                    var cb = function (c) {
                        // console.log("C = "+c.trim());
                        // console.log(" Current keyword "+this.keyword);
                        if (c.toLowerCase().trim() === _this.keyword.toLowerCase().trim()) {
                            _this.correctedKeywords = null;
                        }
                        else {
                            _this.correctedKeywords = c.trim();
                        }
                        console.log(_this.correctedKeywords + " is the corrected words");
                        _this.searchService.search_with_pageRank(c).subscribe(function (data) {
                            _this.result = data;
                            if (_this.result['response']['docs'].length == 0) {
                                _this.flash.show("No result found!", { cssClass: 'alert-warning', timeout: 5000 });
                                return false;
                            }
                        }, function (err) {
                            _this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                            return false;
                        });
                    };
                }
            }
            return false;
        }
    };
    NavbarComponent.prototype.clear = function () {
        this.result = null;
        console.log("Before reset page rank = " + this.pageRank);
        var checkEleme = document.getElementById('keywordautocomplete-list');
        if (checkEleme != null || checkEleme != undefined) {
            checkEleme.parentNode.removeChild(checkEleme);
        }
        document.forms[0].reset();
        this.pageRank = true;
        document.getElementById('keyword').style.borderLeft = "8px solid red";
    };
    NavbarComponent.prototype.suggest = function (ev) {
        var _this = this;
        // this.result=null;
        // this.suggestResult=null;
        var checkEleme = document.getElementById('keywordautocomplete-list');
        if (checkEleme != null || checkEleme != undefined) {
            checkEleme.parentNode.removeChild(checkEleme);
        }
        if (ev.keyCode != 13) {
            this.result = null;
            this.suggestResult = null;
            if (this.keyword != undefined && this.keyword.length > 0) {
                var numwords = this.keyword.trim().split(" ").length;
                document.getElementById('keyword').style.borderLeft = "8px solid rgb(15, 195, 15)";
                if (this.keyword.indexOf(' ') == -1) {
                    //console.log("coming here");
                    this.suggestorService.suggest(this.keyword).subscribe(function (data) {
                        _this.suggestResult = data;
                        //console.log("Data assigned");
                        var a;
                        var inp = document.getElementById('keyword');
                        /*create a DIV element that will contain the items (values):*/
                        a = document.createElement("DIV");
                        a.setAttribute("id", "keyword" + "autocomplete-list");
                        a.setAttribute("class", "autocomplete-items");
                        inp.parentNode.appendChild(a);
                        var arr = _this.suggestResult['suggestions'];
                        var _loop_1 = function (i) {
                            //console.log("In loop");
                            var b = document.createElement("DIV");
                            b.innerHTML = "<strong>" + arr[i]['term'] + "</strong>";
                            b.innerHTML += "<input type='hidden' value='" + arr[i]['term'] + "'>";
                            b.addEventListener("click", function (e) {
                                // console.dir(e);
                                inp.setAttribute('value', b.innerText);
                                //inp.trigger('change');
                                _this.keyword = b.innerText;
                                inp.focus();
                                // console.log(this.keyword);
                                a.parentNode.removeChild(a);
                            });
                            a.appendChild(b);
                            // console.log("appended the child");
                        };
                        //console.log("Creting elements");
                        for (var i = 0; i < _this.suggestResult['suggestions'].length; i++) {
                            _loop_1(i);
                        }
                    }, function (err) {
                        _this.flash.show("Oops.. SORRY! Our Suggestor Service Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                        return false;
                    });
                }
                else {
                    var new_keyword = this.keyword.trim();
                    // console.log("Cmming in space section");
                    //console.log(" overall keyword = "+new_keyword);
                    var word_left_for_suggestion = new_keyword.split(" ")[new_keyword.split(" ").length - 1];
                    //console.log("Left word for suggestion "+word_left_for_suggestion);
                    var pre_words_1 = new_keyword.substr(0, new_keyword.lastIndexOf(" "));
                    if (numwords == 1) { }
                    else {
                        this.suggestorService.suggest(word_left_for_suggestion).subscribe(function (data) {
                            var local_count = 0;
                            for (local_count = 0; local_count < data['suggestions'].length; local_count++) {
                                data['suggestions'][local_count]['term'] = pre_words_1 + " " + data['suggestions'][local_count]['term'];
                            }
                            _this.suggestResult = data;
                            //console.log("Data assigned");
                            var a;
                            var inp = document.getElementById('keyword');
                            /*create a DIV element that will contain the items (values):*/
                            a = document.createElement("DIV");
                            a.setAttribute("id", "keyword" + "autocomplete-list");
                            a.setAttribute("class", "autocomplete-items");
                            inp.parentNode.appendChild(a);
                            var arr = _this.suggestResult['suggestions'];
                            var _loop_2 = function (i) {
                                //console.log("In loop");
                                var b = document.createElement("DIV");
                                b.innerHTML = "<strong>" + arr[i]['term'] + "</strong>";
                                b.innerHTML += "<input type='hidden' value='" + arr[i]['term'] + "'>";
                                b.addEventListener("click", function (e) {
                                    // console.dir(e);
                                    inp.setAttribute('value', b.innerText);
                                    //inp.trigger('change');
                                    _this.keyword = b.innerText;
                                    inp.focus();
                                    // console.log(this.keyword);
                                    a.parentNode.removeChild(a);
                                });
                                a.appendChild(b);
                                // console.log("appended the child");
                            };
                            //console.log("Creting elements");
                            for (var i = 0; i < _this.suggestResult['suggestions'].length; i++) {
                                _loop_2(i);
                            }
                        }, function (err) {
                            _this.flash.show("Oops.. SORRY! Our Suggestor Service Service seems to be snoozing. Be back in a while...", { cssClass: 'alert-info table-success', timeout: 5000 });
                            return false;
                        });
                    }
                }
            } //here
            else {
                document.getElementById('keyword').style.borderLeft = "8px solid red";
            }
        }
    };
    // Method to find maximum of 2 integers
    NavbarComponent.prototype.min = function (a, b) {
        return (a > b ? b : a);
    };
    /**
     * @description Computes the snippet for a given document
     */
    NavbarComponent.prototype.generate_snippet = function (doc) {
        var terms_in_query = this.keywordStatic.split(' ');
        //  console.log( terms_in_query.length);
        if (doc) {
            //checking exact match of the query 
            for (var field in doc) {
                // console.log(typeof doc[field])
                if (doc.hasOwnProperty(field)) {
                    if (String(doc[field][0]).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1) {
                        // console.log("FULL"+String(doc[field][0]).substr(0,160));
                        return String(doc[field][0]).substr(0, 160);
                    }
                }
            }
            //checking all query present terms
            outer: for (var field in doc) {
                var check_all = 0;
                if (doc.hasOwnProperty(field)) {
                    for (var term in terms_in_query) {
                        //console.log(term);
                        if (String(doc[field][0]).toLowerCase().indexOf(terms_in_query[term].toLowerCase()) != -1) {
                            check_all = 1;
                        }
                        else {
                            check_all = 0;
                            continue outer;
                        }
                    }
                    if (check_all === 1) {
                        return String(doc[field][0]).substr(0, 160);
                    }
                }
            }
            //checking if any of the query terms meet the sentence
            for (var field in doc) {
                if (doc.hasOwnProperty(field)) {
                    for (var term in terms_in_query) {
                        if (String(doc[field][0]).toLowerCase().indexOf(terms_in_query[term].toLowerCase()) != -1) {
                            //console.log("PARTIAL"+String(doc[field][0]).substr(0,160));
                            return String(doc[field][0]).substr(0, 160);
                        }
                    }
                }
            }
            return "EMPTY";
        }
    };
    /**
     * @description Generates the snippet
     */
    NavbarComponent.prototype.generate_snippet_2 = function (index) {
        var cl = document.getElementsByClassName(this.keyword + index);
        //let final_highlight="";
        var highlights = "";
        highlights = this.result['highlighting'][index]['og_description'];
        if (!highlights) {
            highlights = this.result['highlighting'][index]['description'];
        }
        if (!highlights) {
            highlights = this.result['highlighting'][index]['og_title'];
        }
        if (!highlights) {
            highlights = this.result['highlighting'][index]['title'];
        }
        if (!highlights) {
            highlights = this.result['highlighting'][index][0];
        }
        if (!highlights)
            highlights = "<b>NA</b>";
        var str_equiv = (highlights);
        //console.log(str_equiv.replace(/<em>/gi,"<b>"));   
        str_equiv = String(str_equiv).replace(/<em>/gi, "<em><b>").replace(/<\/em>/gi, "</b></em>");
        //console.log(str_equiv.length);
        console.log(str_equiv);
        cl[0].innerHTML = String(str_equiv).substr(0, 160) + ((str_equiv.length <= 160) ? "" : "...");
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_4__services_suggestor_service__["a" /* SuggestorService */],
            __WEBPACK_IMPORTED_MODULE_5__services_spell_checker_service__["a" /* SpellCheckerService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

// process()
// {
//   // console.log("process called");
//   let checkEleme =document.getElementById('keywordautocomplete-list');
//   if(checkEleme!=null || checkEleme!=undefined)
//   {
//     checkEleme.parentNode.removeChild(checkEleme);
//   }
// //  console.log("Hi"+this.keyword);
//   if(this.keyword==undefined || this.keyword.length==0)
//   {
//       this.result=null;
//       this.flash.show("Please enter a Keyword!!",{cssClass:'alert-danger',timeout:2000});
//       return false;
//   }
//   else{
//     this.keywordStatic=this.keyword;
//      // document.getElementById('keyword').blur();
//         if(!this.pageRank){
//             this.searchService.search(this.keyword).subscribe(data=>{
//             this.result=data;
//             if(this.result['response']['docs'].length==0)
//             {
//               this.flash.show("No result found!",{cssClass:'alert-warning',timeout:5000});
//                           return false;
//             }
//                         },
//                 err => {
//                           this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...",{cssClass:'alert-info table-success',timeout:5000});
//                           return false;
//                     }
//     );
//       }
//     else{
//                       this.searchService.search_with_pageRank(this.keyword).subscribe(data=>{
//                         this.result=data;
//                         if(this.result['response']['docs'].length==0)
//                         {
//                           this.flash.show("No result found!",{cssClass:'alert-warning',timeout:5000});
//                                       return false;
//                         }
//                                         },
//                                 err => {
//                                           this.flash.show("Oops.. SORRY! Our Backend Service seems to be snoozing. Be back in a while...",{cssClass:'alert-info',timeout:5000});
//                                           return false;
//                                     }
//                     );
//         }
//     return false;
//   }
// }


/***/ }),

/***/ "./src/app/components/search-result/search-result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"keyword\">\n    <h1>{{keyword}}</h1>\n  </div>\n\n<div *ngIf=\"result\">\n  <hr>\n       {{result['responseHeader']['params']['q']}}\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(activatedRoute, router, searchService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.searchService = searchService;
        // this.keyword = this.activatedRoute.snapshot.params['keyword'];
        // console.log("Came here..");
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyword = this.activatedRoute.snapshot.params['keyword'];
        console.log("Came here..in init");
        this.router.events
            .subscribe(function (event) {
            console.log("Event fired");
            _this.keyword = _this.activatedRoute.snapshot.params['keyword'];
            //calling the search service here...
            _this.searchService.search(_this.keyword).subscribe(function (data) {
                _this.result = data;
                console.log(_this.result['response']['docs'].length);
            });
        });
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__("./src/app/components/search-result/search-result.component.html"),
            styles: [__webpack_require__("./src/app/components/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.search_url = "http://localhost:3000/api/search";
        this.search_page_rank_url = "http://localhost:3000/api/search_with_pageRank";
    }
    SearchService.prototype.search = function (keyword) {
        console.log("keyword = " + keyword);
        return this.http.get(this.search_url + "/" + keyword).map(function (data) { return data.json(); });
    };
    SearchService.prototype.search_with_pageRank = function (keyword) {
        console.log("keyword = " + keyword);
        return this.http.get(this.search_page_rank_url + "/" + keyword).map(function (data) { return data.json(); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/spell-checker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellCheckerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import "rxjs/add/operator/flatMap"
var SpellCheckerService = /** @class */ (function () {
    function SpellCheckerService(http) {
        this.http = http;
        this.spell_check_url = "http://localhost:3000/api/spell";
    }
    SpellCheckerService.prototype.spell = function (keyword) {
        console.log("keyword = " + keyword);
        return this.http.get(this.spell_check_url + "/" + keyword).map(function (data) { return data.json(); });
    };
    SpellCheckerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SpellCheckerService);
    return SpellCheckerService;
}());



/***/ }),

/***/ "./src/app/services/suggestor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuggestorService = /** @class */ (function () {
    function SuggestorService(http) {
        this.http = http;
        this.suggest_url = "http://localhost:3000/api/suggest";
    }
    SuggestorService.prototype.suggest = function (keyword) {
        return this.http.get(this.suggest_url + "/" + keyword).map(function (data) { return data.json(); });
    };
    SuggestorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SuggestorService);
    return SuggestorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map