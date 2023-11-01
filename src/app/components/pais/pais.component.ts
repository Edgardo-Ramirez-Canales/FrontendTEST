import { PaisService } from './../../service/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
})
export class PaisComponent implements OnInit {
  pais: any;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    const recId = '07EF04D6CBA5446382E34541BD1B0242';
    this.paisService.getPaisById(recId).subscribe((data) => {
      this.pais = data;
      console.log(data);
    });
  }
}
