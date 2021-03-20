import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
  username: string = "";
  imageUrl: string = "/assets/images/user.png";
  height: string = "2";
  width: string = "2";
  loggedIn: Boolean = false;
  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private router: Router) {
    this.loginForm = this.fb.group({
      name: [''],
      imageUrl: ['', [Validators.pattern(this.URL_REGEXP)]],
      height: ['2', [Validators.min(2), Validators.max(5)]],
      width: ['2', [Validators.min(2), Validators.max(10)]],

    })

  }

  //Save input by user
  saveData() {
    if (!this.loggedIn) {
      this.username = this.ctrl.name.value ? this.ctrl.name.value : 'Player';
      this.imageUrl = this.ctrl.imageUrl.value && this.ctrl.imageUrl.valid ? this.ctrl.imageUrl.value : "/assets/images/user.png";
      this.localStorageService.save('username', this.username);
      this.localStorageService.save('imageUrl', this.imageUrl);
    }
    //validate height and width
    this.height = this.ctrl.height.value && this.ctrl.height.valid ? this.ctrl.height.value : 2;
    this.width = this.ctrl.width.value && this.ctrl.width.valid ? this.ctrl.width.value : 2;

    this.localStorageService.save('height', this.height);
    this.localStorageService.save('width', this.ctrl.width.value);
    this.router.navigate(['/game']);
  }
  ngOnInit(): void {
    if (this.localStorageService.get('username')) {
      this.loggedIn = true;
      this.username = this.localStorageService.get('username');
    }
  }

  //get login form controls
  get ctrl() {
    return this.loginForm.controls;
  }

}
