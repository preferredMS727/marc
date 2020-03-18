import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { title: 'HOME', path: '/home' },
    { title: 'INSPIRATION', path: '/inspiration' },
    { title: 'BLOG', path: '/blog' },
    { title: 'DATA SHEET', path: '/datasheet' },
    { title: 'LOGIN/REGISTER', path: '/auth' },
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const $header = $(".page-header");
    const $navCollapse = $(".navbar-collapse");
    const scrollClass = "scroll";

    $(window).on("scroll", function() {
      if (this.matchMedia("(min-width: 992px)").matches) {
        const scrollY = $(this).scrollTop();
        scrollY > 0
          ? $header.addClass(scrollClass)
          : $header.removeClass(scrollClass);
      } else {
        $header.removeClass(scrollClass);
      }
    });

    $(".page-header .nav-link, .navbar-brand").on("click", function (e) {
      e.preventDefault();
      const href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(href).offset().top - 71
      }, 600);
    });
  
  }

  goUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
