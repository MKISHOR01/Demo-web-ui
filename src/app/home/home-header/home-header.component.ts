import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {

    // $('.navbar-collapse ul li').on("click", function() {
    //   $('.nav-item').toggleClass('active')
    // });


  }
}
