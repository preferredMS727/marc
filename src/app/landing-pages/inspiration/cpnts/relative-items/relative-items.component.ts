import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relative-items',
  templateUrl: './relative-items.component.html',
  styleUrls: ['./relative-items.component.scss']
})
export class RelativeItemsComponent implements OnInit {

  relativeProjects = [
    {id: '1', workTitle: 'Corporate Identity', workDescription: 'Illustration'},
    {id: '2', workTitle: 'Corporate Identity', workDescription: 'Illustration'},
    {id: '3', workTitle: 'Corporate Identity', workDescription: 'Illustration'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
