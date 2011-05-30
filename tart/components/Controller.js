// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview tart.components.Controller is a base class for all components Controller's.
 *
 * Example usage:
 *      var ViewClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ViewClass, tart.components.View);
 *
 *      ViewClass.prototype.render = function () {
 *          return "<h1>Foo</h1>";
 *      };
 *      var view = new ViewClass();
 *
 *      var ModelClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ModelClass, tart.components.Model);
 *
 *
 *      var model = new ModelClass();
 *
 *      var ControllerClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ControllerClass, tart.components.Controller);
 *
 *      var controller = new ControllerClass(model, view);
 *      var dom = controller.buildDOM();
 *
 *  Known issues:
 *  - jQuery dependency should be removed
 */

goog.require('tart.components.Model');
goog.require('tart.components.View');

goog.provide('tart.components.Controller');

/**
 * Base controller
 *
 * @param {tart.components.Model} model Data model.
 * @param {tart.components.View} view View object.
 * @constructor
 */
tart.components.Controller = function(model, view) {
    this.model = model || new tart.components.Model();
    this.view = view || new tart.components.View();
};

/**
 * Build DOM from view
 *
 * @return {object} generated DOM of attached View object.
 */
tart.components.Controller.prototype.buildDOM = function() {
    //TODO: remove jQuery dependency
    var $dom = $(this.view.render());
    this.view.setDOM($dom);
    return $dom;
};
