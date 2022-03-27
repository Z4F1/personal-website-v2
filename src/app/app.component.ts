import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Floating Goat';

    constructor(){}

    ngOnInit(): void {
        window.addEventListener("focus", this.titleFocus);
        window.addEventListener("blur", this.titleFocus);
    }

    titleFocus(){
        document.title = document.hasFocus() ? "Floating Goat" : "Come back, you filthy bastard!"
    }
}
