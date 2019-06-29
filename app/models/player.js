import DS from 'ember-data';
const { Model, belongsTo, hasMany } = DS;

export default class PlayerModel extends Model {
  @belongsTo('game') game;
  @hasMany('cell') cells;
}
