"use strict";

exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _html = require("../../utils/html");

var _container = require("../layout/container");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: null
  },
  borderVariant: {
    type: String,
    default: null
  },
  textVariant: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BJumbotron',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots(); // Header

    if (props.header || $slots.header || props.headerHtml) {
      childNodes.push(h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(props.headerLevel), Boolean(props.headerLevel))
      }, $slots.header || props.headerHtml || (0, _html.stripTags)(props.header)));
    } // Lead


    if (props.lead || $slots.lead || props.leadHtml) {
      childNodes.push(h(props.leadTag, {
        staticClass: 'lead'
      }, $slots.lead || props.leadHtml || (0, _html.stripTags)(props.lead)));
    } // Default slot


    if ($slots.default) {
      childNodes.push($slots.default);
    } // If fluid, wrap content in a container/container-fluid


    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(_container.default, {
        props: {
          fluid: props.containerFluid
        }
      }, childNodes)];
    } // Return the jumbotron


    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_class2, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class2, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class2, "border", Boolean(props.borderVariant)), _class2)
    }), childNodes);
  }
};
exports.default = _default;