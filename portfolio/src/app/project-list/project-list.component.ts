import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() content: string = "";
  @Input() link: string = "";
  @Input() img: string = "";


}
