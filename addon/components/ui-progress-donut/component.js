import Ember from 'ember';
import layout from './template';
import styles from './styles';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  localClassNames: ['component'],
  radius: 14,
  styles,

  circumference: computed('radius', function() {
    return this.get('radius') * 2 * Math.PI;
  }),

  length: computed('circumference', 'progress', function() {
    const circumference = this.get('circumference');
    const progress = this.get('progress');
    return circumference - circumference * (progress / 100);
  })
});