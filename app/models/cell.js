import DS from 'ember-data';
const { Model, attr } = DS;

export default class CellModel extends Model {
  @attr() row;
  @attr() column;
  @attr('boolean') hasShip;
  @attr() shipName;
}
