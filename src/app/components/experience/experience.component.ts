import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  publicLogos: Logo[] = [
    { src: 'assets/logo/logo_alcaldia_mayor_de_-bogota.png', alt: 'Alcaldía Mayor de Bogotá' },
    { src: 'assets/logo/logo_bienestar_familiar.png', alt: 'Bienestar Familiar' },
    { src: 'assets/logo/logo_car.png', alt: 'CAR' },
    { src: 'assets/logo/logo_cdmb.png', alt: 'CDMB' },
    { src: 'assets/logo/logo_hospital-gaitan.png', alt: 'Hospital Gaitán' },
    { src: 'assets/logo/logo_hospital-la-vega.png', alt: 'Hospital La Vega' },
    { src: 'assets/logo/logo_hospital-santa-rosa.png', alt: 'Hospital Santa Rosa' },
    { src: 'assets/logo/logo_insdeporte.png', alt: 'Insdeporte' }
  ];

  privateLogos: Logo[] = [
    { src: 'assets/logo/logo_cemex.png', alt: 'Cemex' },
    { src: 'assets/logo/logo_crown.png', alt: 'Crown' },
    { src: 'assets/logo/logo_devinorte.png', alt: 'Devinorte' },
    { src: 'assets/logo/logo_gas_natural.png', alt: 'Gas Natural' },
    { src: 'assets/logo/logo_lidertur.png', alt: 'Lidertur' },
    { src: 'assets/logo/logo_postobon.png', alt: 'Postobón' }
  ];
}
