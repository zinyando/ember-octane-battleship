import Route from '@ember/routing/route';
import { hash } from 'rsvp'

export default class TestPlacementRoute extends Route {
  model() {
    let boardSize = 10;
    let cells = this.createBoard(boardSize);

    let player = this.store.createRecord('player', {
      cells: cells
    });

    return hash({
      game: this.store.createRecord('game', {
        players: [player]
      }),
      boardSize: boardSize
    });
  }

  createBoard(boardSize) {
    let gameCells = [];
    let row, column, cell;
    for(let i = 1; i <= boardSize; i++) {
      for(let j = 1; j <= boardSize; j++) {
        column = i;
        row = j;
        cell = this.store.createRecord('cell', { row: row, column: column, hasShip: false, shipType: '' });
        gameCells.push(cell);
      }
    }

    return gameCells;
  }
}
