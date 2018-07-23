import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palindromeText=""
  isPalindrome= false
  isFormSubmitted=false
  constructor() {}
  checkPalindrome(){
    this.isFormSubmitted=true
    let palindromeArray: any= this.palindromeText.split("")
    palindromeArray=palindromeArray.reverse()
    palindromeArray=palindromeArray.join("")
    if(palindromeArray===this.palindromeText){
      this.isPalindrome=true
    }else{
      this.isPalindrome=false
    }

  }

}
