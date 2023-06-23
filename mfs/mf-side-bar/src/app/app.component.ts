import { Component, OnInit } from '@angular/core';
import { userHasAccess } from '@connection/bus';

@Component({
  selector: 'mf-side-bar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  miEvento!: CustomEvent<{}>;
  ngOnInit(): void {
    console.log(userHasAccess('funciono side-bar'));

    // Crea un nuevo evento personalizado
    setTimeout(() => {
      this.miEvento = new CustomEvent('mf-side-bar', {
        detail: { text: 'mf-side-bar te esta llamando' },
        bubbles: true, 
        cancelable: true 
      });
  
      // Dispara el evento en el contexto de window
      window.dispatchEvent(this.miEvento);
      
    }, 3000);



  }
  title = 'mf-side-bar';
}
