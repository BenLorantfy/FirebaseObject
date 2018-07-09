"use strict";
//  Created by Tyler Herbert on 7/1/18.
//  Copyright © 2018 Tyler. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
exports.__esModule = true;
var LoginData_1 = require("./LoginData");
var ObjectPath = /** @class */ (function () {
    function ObjectPath() {
        var _this = this;
        /// Path used for loading the object with `loadSelf`
        this.loadSelfPath = function (object) {
            return _this.defaultItemPath(object);
        };
        /// Path used for saving object
        this.saveTablePath = function (object) {
            return _this.defaultTablePath(object);
        };
        /// Path used for saving object
        this.saveTableItemPath = function (object) {
            return _this.defaultItemPath(object);
        };
        /// Path used for deleting object
        this.deleteTableItemPath = function (object) {
            return _this.defaultItemPath(object);
        };
        /// default path of the items table
        this.defaultTablePath = function (object) {
            var loginId = LoginData_1.LoginData.sharedInstance.loginId;
            return loginId + '/' + object.constructor['tableName'];
        };
        /// default path of the item
        this.defaultItemPath = function (object) {
            return _this.defaultTablePath(object) + '/' + object.data['uid'];
        };
    }
    return ObjectPath;
}());
exports.ObjectPath = ObjectPath;