import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameCell extends Component {
  @tracked isHidden = this.args.muskCell

  @action show() {
    this.isHidden = false;
  }
}
