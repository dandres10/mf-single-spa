import { Component, OnInit } from '@angular/core';
import { userHasAccess } from '@connection/bus';

@Component({
  selector: 'mf-navbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(userHasAccess('funciono navbar'));

    // Escucha el evento en otro lugar
    window.addEventListener('mf-side-bar', function (event: any) {
      // Maneja el evento aquí
      console.log('Evento recibido:', event?.detail?.text);
    });


  }
  title = 'mf-navbar';
}
