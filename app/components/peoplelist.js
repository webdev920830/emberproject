import Component from "@glimmer/component";
import { action } from '@ember/object';

export default class PeoplelistComponent extends Component {
    @action
    showPerson(person){
        alert(`The person's name is ${person}!`);
    }
}