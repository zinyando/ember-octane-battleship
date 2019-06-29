import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class GameBoard extends Component {
  @service() store;
  @tracked cells;

  @action reset() {
    for (let row of this.cells) {
      row.forEach((cell) => {
        cell.setProperties({
          hasShip: false,
          shipName: null
        });
      });
    }

    this.createBoard();
  }

  @action createBoard() {
    let boardCells = this.args.player.cells;
    
    let board = [];
    for(let i = 1; i <= this.args.boardSize; i++) {
      let cells = boardCells.filterBy('row', i);
      let row = [];

      cells.forEach((cell) => {
        row.push(cell);
      });

      board.push(row);
    }

    for (let ship of this.args.ships) {
      this.setShipOnBoard(ship, board);
    }

    this.cells = board;
  }

  setShipOnBoard(ship, board) {
    let shipPosition = this.getRandomNumber(10);
    let shipCells = [];   

    for (let row of board) {
      for(let cell of row) {
        if(cell.column === shipPosition && ship.orientation === 'vertical') {
          shipCells.push(cell);
        }

        if(cell.row === shipPosition && ship.orientation === 'horizontal') {
          shipCells.push(cell);
        }
      }
    }

    let selectedShipCells;

    let shipStart = shipPosition;
    let shipEnd = shipPosition + ship.size;

    if(shipEnd > this.args.boardSize) {
      let diff = shipEnd - this.args.boardSize;
      selectedShipCells = shipCells.slice(shipStart - diff, shipEnd - diff);
    } else {
      selectedShipCells = shipCells.slice(shipStart, shipEnd);
    }

    // if(selectedShipCells && selectedShipCells.length > 0) {
      let hasShip = selectedShipCells.filterBy('hasShip', true);

      if(hasShip.length > 0) {
        return this.setShipOnBoard(ship, board);
      }
    // }

    selectedShipCells && selectedShipCells.forEach((cell) => {
      cell.setProperties({
        hasShip: true,
        shipName: ship.name
      });
    });
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
