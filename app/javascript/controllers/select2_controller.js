import { Controller } from '@hotwired/stimulus';
import 'select2';
import $ from 'jquery';

export default class extends Controller {
  connect() {
    console.log('hello from the controller!');
    $(this.element).select2();
  }
}
