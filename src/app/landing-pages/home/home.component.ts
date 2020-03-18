import { Component, OnInit } from '@angular/core';
import { Layout } from '../_shared/models/layout.model';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  layoutListData: Layout[] = [
    {
      id: '1',
      title: 'test1',
      description: 'test1_description',
      createdAt: new Date(),
      user: {
        id: '1',
        username: 'tester1',
        firstName: 'tester1_firstname',
        middleName: 'tester1_middlename',
        lastName: 'tester1_lastname',
        mobile: '+123123123',
        email: 'tester1@marc.com',
      },
      layoutType: {
        id: '1',
        name: 'x.style',
      }
    },
    {
      id: '2',
      title: 'test2',
      description: 'test2_description',
      createdAt: new Date(),
      user: {
        id: '2',
        username: 'tester2',
        firstName: 'tester2_firstname',
        middleName: 'tester2_middlename',
        lastName: 'tester2_lastname',
        mobile: '+223223223',
        email: 'tester2@marc.com',
      },
      layoutType: {
        id: '2',
        name: 'x.style',
      }
    },
    {
      id: '3',
      title: 'test1',
      description: 'test1_description',
      createdAt: new Date(),
      user: {
        id: '1',
        username: 'tester1',
        firstName: 'tester1_firstname',
        middleName: 'tester1_middlename',
        lastName: 'tester1_lastname',
        mobile: '+123123123',
        email: 'tester1@marc.com',
      },
      layoutType: {
        id: '1',
        name: 'x.style',
      }
    },
    {
      id: '4',
      title: 'test2',
      description: 'test2_description',
      createdAt: new Date(),
      user: {
        id: '2',
        username: 'tester2',
        firstName: 'tester2_firstname',
        middleName: 'tester2_middlename',
        lastName: 'tester2_lastname',
        mobile: '+223223223',
        email: 'tester2@marc.com',
      },
      layoutType: {
        id: '2',
        name: 'x.style',
      }
    },
    {
      id: '5',
      title: 'test1',
      description: 'test1_description',
      createdAt: new Date(),
      user: {
        id: '1',
        username: 'tester1',
        firstName: 'tester1_firstname',
        middleName: 'tester1_middlename',
        lastName: 'tester1_lastname',
        mobile: '+123123123',
        email: 'tester1@marc.com',
      },
      layoutType: {
        id: '1',
        name: 'x.style',
      }
    },
    {
      id: '6',
      title: 'test2',
      description: 'test2_description',
      createdAt: new Date(),
      user: {
        id: '2',
        username: 'tester2',
        firstName: 'tester2_firstname',
        middleName: 'tester2_middlename',
        lastName: 'tester2_lastname',
        mobile: '+223223223',
        email: 'tester2@marc.com',
      },
      layoutType: {
        id: '2',
        name: 'x.style',
      }
    },
    {
      id: '7',
      title: 'test1',
      description: 'test1_description',
      createdAt: new Date(),
      user: {
        id: '1',
        username: 'tester1',
        firstName: 'tester1_firstname',
        middleName: 'tester1_middlename',
        lastName: 'tester1_lastname',
        mobile: '+123123123',
        email: 'tester1@marc.com',
      },
      layoutType: {
        id: '1',
        name: 'x.style',
      }
    },
    {
      id: '8',
      title: 'test2',
      description: 'test2_description',
      createdAt: new Date(),
      user: {
        id: '2',
        username: 'tester2',
        firstName: 'tester2_firstname',
        middleName: 'tester2_middlename',
        lastName: 'tester2_lastname',
        mobile: '+223223223',
        email: 'tester2@marc.com',
      },
      layoutType: {
        id: '2',
        name: 'x.style',
      }
    },
  ];
  
  constructor(
  ) { }

  ngOnInit() {

  }
}
