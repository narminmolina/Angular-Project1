import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    title:string = 'angular-project1';

constructor(){}

  ngOnInit():void{}
  toggleAddTask(){
    console.log('toggle');
  }
}
