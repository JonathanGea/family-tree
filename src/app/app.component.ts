import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'family-tree';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/assets/data/family-tree.json').subscribe(data => {
      console.log('data :>> ', data);
    })
  }

}
