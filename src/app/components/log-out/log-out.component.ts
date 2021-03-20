import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {    
this.localStorageService.delete('username');
this.localStorageService.delete('imageUrl');
this.localStorageService.delete('height');
this.localStorageService.delete('width');
this.router.navigate(['/home']);

  }

}
