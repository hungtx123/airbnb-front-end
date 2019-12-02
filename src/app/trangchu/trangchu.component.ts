import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

}
