import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isActive: boolean = false;

    constructor() { }

    ngOnInit(): void {

    }

    menuActivation() {
        this.isActive = !this.isActive;
    }

}
