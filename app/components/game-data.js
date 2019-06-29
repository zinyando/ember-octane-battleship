import Component from '@glimmer/component';

export default class GameDataComponent extends Component {
  get players() {
    return this.args.model.players;
  }

  ships = [
    {
      name: 'A',
      size: 5,
      orientation: 'vertical',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
    {
      name: 'B',
      size: 4,
      orientation: 'vertical',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
    {
      name: 'C',
      size: 3,
      orientation: 'vertical',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
    {
      name: 'D',
      size: 2,
      orientation: 'horizontal',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
    {
      name: 'E',
      size: 4,
      orientation: 'horizontal',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
    {
      name: 'F',
      size: 5,
      orientation: 'horizontal',
      hits: 0,
      position: [],
      get isSunk() {
        return this.hits >= this.length;
      }
    },
  ]
}
