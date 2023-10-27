import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-p',
  templateUrl: './directives-p.component.html',
  styleUrls: ['./directives-p.component.css']
})
export class DirectivesPComponent implements OnInit {

  isLogIn : boolean = true;
   isLogOut : boolean = true;
   list = [1,2,3,4,5];
   logInName = 'admin';

   users = [
    {
      "userId": 1,
      "userName": 'User1'
}, {
      "userName": 'User2'
    },
];
  constructor() { }

  ngOnInit() {
  }

}
