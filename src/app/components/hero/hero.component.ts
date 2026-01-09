import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  slides: HeroSlide[] = [
    {
      image: 'assets/banner/23.png',
      title: 'Firma de abogados<br/>Fundada en el año 2006',
      subtitle: 'Experiencia acreditada con empresas de múltiples sectores. Solicite en línea una cotización de nuestros servicios'
    },
    {
      image: 'assets/banner/24.png',
      title: 'Cobro De Cartera<br/>Empresarial',
      subtitle: 'Cobro de cartera prejurídica y jurídica para empresas. Solicite en línea una cotización de nuestros servicios'
    }
  ];
  
  currentImageIndex = 0;
  private intervalId: any;

  get currentSlide(): HeroSlide {
    return this.slides[this.currentImageIndex];
  }

  ngOnInit() {
    this.startImageRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.slides.length;
    }, 10000); // Cambio cada 10 segundos
  }

  scrollToContact() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServices() {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  }
}
