"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BSpinner',
  functional: true,
  props: {
    type: {
      type: String,
      default: 'border' // SCSS currently supports 'border' or 'grow'

    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'status'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var label = h(false);
    var hasLabel = slots().label || props.label;

    if (hasLabel) {
      label = h('span', {
        staticClass: 'sr-only'
      }, hasLabel);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        role: hasLabel ? props.role || 'status' : null,
        'aria-hidden': hasLabel ? null : 'true'
      },
      class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), Boolean(props.variant)), _class)
    }), [label]);
  }
};
exports.default = _default;