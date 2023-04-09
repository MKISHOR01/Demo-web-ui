import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

    $('#signUp').on("click", function() {
      $('.container').toggleClass('right-panel-active')
    });

    $('#signIn').on("click", function() {
      $('.container').removeClass('right-panel-active')
    });

  }



}
