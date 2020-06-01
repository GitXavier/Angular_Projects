import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : 'Simpson',
    firstName : 'Bart',
    age : 10,
    quote : '',
    photo : '../assets/images/bart.png'
  };

  constructor() { }

  ngOnInit(): void { }

  howOldAreYou() {

    const element = document.getElementById('age');

    element.classList.add('actived');



  }

}
