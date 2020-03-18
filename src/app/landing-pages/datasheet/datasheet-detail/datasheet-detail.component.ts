import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-datasheet-detail',
  templateUrl: './datasheet-detail.component.html',
  styleUrls: ['./datasheet-detail.component.scss']
})
export class DatasheetDetailComponent implements OnInit {

  containItems = [
    {id: '1', workTitle: 'Corporate Identity', workDes: 'Illustration'},
    {id: '2', workTitle: 'Corporate Identity', workDes: 'Illustration'},
    {id: '3', workTitle: 'Corporate Identity', workDes: 'Illustration'},
  ]
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.initialize();
    this.activatedRoute.params.subscribe(params => {
      console.log('this is datasheet detail id: ', params['id']); // Print the parameter to the console. 
    });
    
  }

  // Post Slider
  initialize() {
    if ($('.post-images-slider').length > 0) {
      $('.post-images-slider').flexslider({
        animation: "slide",
        smoothHeight: true,
      });
    }
  }

}
