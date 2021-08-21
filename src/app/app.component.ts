import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-World';
  imgUrl = "";
  url = "";
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz.";
    this.imgUrl = "../assets/logo.png";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event: any){
      console.log("Save button is clicked!", $event);
      window.open(this.url,  "_blank");
  }
}
