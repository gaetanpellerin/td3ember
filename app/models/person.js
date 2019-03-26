import DS from 'ember-data';
import { computed } from '@ember/object';


export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  email: DS.attr('string'),
    verified: DS.attr('boolean', { defaultValue: false }),
    createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
