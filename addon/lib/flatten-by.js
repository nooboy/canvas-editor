import Ember from 'ember';

const { get } = Ember;

/**
 * @module
 */

/**
 * Given a `list`, flatten that list by concatenating the contents of any
 * `property`.
 *
 * This means that given `[{foo: 'bar'}, {items: [{foo: 'baz'}]}]`, when
 * flattened by `items` would yield `[{foo: 'bar'}, {foo: 'baz'}]`.
 *
 * @function
 * @param {Array} list The objects to flatten
 * @param {string} flattenProp The property to test flattenable objects by
 * @param {string} listProp The property that contains sub-lists
 * @returns {Ember.Array} The flattend list
 */
export default function flattenBy(list, flattenProp, listProp) {
  return list.reduce((acc, item) => {
    if (get(item, flattenProp)) {
      return acc.pushObjects(get(item, listProp));
    }

    acc.pushObject(item);
    return acc;
  }, Ember.A([]));
}
