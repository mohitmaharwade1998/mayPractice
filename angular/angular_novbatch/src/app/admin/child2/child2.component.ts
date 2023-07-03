import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
@Input() cityNamechild2:any;
@Input() fruit:any;
@Input() table:any;

}
