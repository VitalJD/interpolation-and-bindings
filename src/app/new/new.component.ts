import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = 'Initial'
  
  constructor() { }

  onInput(event: any) {
    this.title = event.target.value
  }

  ngOnInit(): void {
  }

}
