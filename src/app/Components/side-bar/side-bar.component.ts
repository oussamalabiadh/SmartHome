import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
constructor(private auth:AuthService){}
  ngOnInit(): void {
    console.log('Component initialized');
    this.showMenu('header-toggle', 'navbar');
    this.setupLinkColor();
  }

  showMenu(headerToggle: string, navbarId: string): void {
    console.log('showMenu function called');
    const toggleBtn = document.getElementById(headerToggle) as HTMLElement;
    const nav = document.getElementById(navbarId) as HTMLElement;

    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', () => {
        console.log('Button clicked');
        nav.classList.toggle('show-menu');
        console.log('bb');
        toggleBtn.classList.toggle('bx-x');
      });
    } else {
      console.log('Element not found');
    }
  }

  setupLinkColor(): void {
    console.log('setupLinkColor function called');
    const linkColor = document.querySelectorAll('.nav__link');
    linkColor.forEach((l: Element) => l.addEventListener('click', this.colorLink.bind(this)));
  }

  colorLink(event: Event): void {
    console.log('colorLink function called');
    const linkColor = document.querySelectorAll('.nav__link');
    linkColor.forEach((l: Element) => l.classList.remove('active'));
    (event.target as Element).classList.add('active');
  }
  logout(){
    this.auth.logout()
  }
}
