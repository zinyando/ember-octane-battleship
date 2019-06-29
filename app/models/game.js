import DS from 'ember-data';
const { Model, hasMany } = DS;

export default class GameModel extends Model {
  @hasMany('player') players;
  @hasMany('cell') cells;
}
