import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  stage: number;
  title: string;
  notThanos: boolean;
  msgNot: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.stage = 1;
    this.title = 'Who dare to bother me?';
    this.notThanos = false;
  }

  iAmThanos(stage: number): void{
    switch (stage) {
      case 0: {
        this.stage = stage;
        this.title = 'Ok, ok... If you say so... Enjoy preciozo!';
        this.notThanos = false;
        // this.authenticationService.youAreThanos = true;
        this.authenticationService.generateToken();
        this.router.navigateByUrl('/');
        break;
      }
      case 1: {
        this.stage = stage;
        this.title = 'Who dare to bother me, again!?';
        this.notThanos = false;
        break;
      }
      case 2: {
        this.stage = stage;
        this.title = "Sure? You don't look like him";
        this.notThanos = false;
        break;
      }
    }
  }

  youAreNotThanos(notThanos: boolean, msg: number): void{
    this.notThanos = notThanos;
    switch (msg) {
      case 1: {
        this.msgNot = 'I care!';
        break;
      }
      case 2: {
        this.msgNot = 'Sorry, but you are not thanos';
        break;
      }
      case 3: {
        this.msgNot = 'Batman!?!? Get out of my house!!!!';
        break;
      }
    }
  }

}
