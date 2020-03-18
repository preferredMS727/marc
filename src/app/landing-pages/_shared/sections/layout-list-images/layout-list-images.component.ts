import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

import { Layout, LayoutType } from '../../models/layout.model';
import { Subject, Observable, of, Subscription } from 'rxjs';
import { distinctUntilChanged, mergeMap, startWith, tap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-layout-list-images',
  templateUrl: './layout-list-images.component.html',
  styleUrls: ['./layout-list-images.component.scss']
})
export class LayoutListImagesComponent implements OnInit {
  @Input() title?: string;
  @Input() btnLink?: string;
  @Input() pagination?: boolean;
  @Input('data') allLayoutList: any;

  collection = [
    { id: '0', name: 'all' },
    { id: '1', name: 'x.style' },
    { id: '2', name: 'y.style' },
    { id: '3', name: 'z.style' }
  ];

  filteredLayoutList: Layout[] = [];

  allLayoutType: LayoutType[] = [
    { id: '0', name: 'all' },
    { id: '1', name: 'x.style' },
    { id: '2', name: 'y.style' },
    { id: '3', name: 'z.style' }
  ];

  private routeSub: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('this is layout list: ', this.title, this.btnLink, this.pagination, this.allLayoutList)
    $(document).ready(() => {
      this.initialize();
    });
    this.filteredLayoutList = this.allLayoutList;
  }
 
  initialize() {
    let worksgrid = $('#works-grid'),
      worksgrid_mode: any;

    if (worksgrid.hasClass('works-grid-masonry')) {
      worksgrid_mode = 'masonry';
    } else {
      worksgrid_mode = 'fitRows';
    }

    worksgrid.imagesLoaded(function () {
      worksgrid.isotope({
        layoutMode: worksgrid_mode,
        itemSelector: '.work-item'
      });
    });

    $('#filters a').click(function () {
      $('#filters .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      worksgrid.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  }



  filterLayoutOption(filterId: string) {
    this.filteredLayoutList = this.allLayoutList.filter(res => filterId == '0' ? true : res.id === filterId)
  }

  createNewLayout() {
    this.router.navigateByUrl('layout');
  }

  goDetailLayout(id: string) {
    this.router.navigateByUrl('landing/inspiration/detail/' + id);
  }

}
