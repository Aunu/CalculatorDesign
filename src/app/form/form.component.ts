import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() metaData: any;
  @Input()
  calendarTemp!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
