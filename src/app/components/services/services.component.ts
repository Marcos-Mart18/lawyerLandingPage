import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  expanded: boolean;
}

interface ServiceDetail {
  number: string;
  title: string;
  description: string;
  activities: string[];
  image: string;
}

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  heroSlides: { title: string; subtitle: string; image: string }[];
  details: ServiceDetail[];
  faqs: FAQ[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  selectedService: Service | null = null;
  activeSection: string = 'overview';
  currentHeroSlide: number = 0;

  services: Service[] = [
    {
      icon: '💰',
      title: 'Cobro Prejurídico y Jurídico',
      subtitle: 'Cobro de cartera',
      shortDescription: 'Llevamos a cabo el cobro de la cartera de su empresa de forma ágil y ajustada a sus necesidades.',
      heroSlides: [
        {
          title: 'TARIFAS PREFERENCIALES Y PROMMOCIONES SUJETAS A NEGOCIACIÓN CON EL CLIENTE',
          subtitle: 'Según el tipo de cartera,la forma y el tiempo de entrega; el cliente puede obtener beneficios en las tarifas de honorarios',
          image: 'assets/banner/23.png'
        },
        {
          title: '¿QUÉ ESPERA DE UNA CASA DE COBRANZA?',
          subtitle: 'Hable con nosotros, conozca nuestro equipo, método de trabajo, referencias y tome la mejor desición',
          image: 'assets/banner/24.png'
        },
        {
          title: 'SOLUCIONES INTELIGENTES EN EL COBRO DE SU CARTERA',
          subtitle: 'Contamos con un equipo interdisciplinario que apoya desde la óptica financiera,contable, social y jurídica los procesos de cobro de cartera.',
          image: 'assets/banner/23.png'
        }
      ],
      details: [
        {
          number: '1',
          title: 'Cobro Prejurídico',
          description: 'Nuestros abogados gestionan de forma pre jurídica el cobro de su cartera, analizando previamente la operación de su negocio, estado de la cartera y sus deudores para determinar y corregir en la marcha los riesgos de incobrabilidad de la misma.',
          activities: [
            'Análisis preliminar de los deudores y de su cartera para determinar su probabilidad de recaudo',
            'Investigación de datos actualizados de contacto, bajo altos estándares de protección de datos personales',
            'Envío de comunicaciones de cobro a sus deudores por medios físicos y electrónicos',
            'Llamadas telefónicas y envío de mensajes de texto de persuasión al pago',
            'Celebración de mesas de trabajo con sus deudores',
            'Asesoría para el reporte negativo a centrales de información',
            'Rendición de informes periódicos para su empresa, a través del sistema LegalWeb de la firma o a través del canal definido con usted',
            'Elaboración de acuerdos de pago, estudio de garantías para su cumplimiento y seguimiento periódico a su ejecución',
            'Expedición de paz y salvo final a sus deudores y/o certificación para castigo de cartera',
            'Actividades pre jurídicas de restitución de bienes muebles e inmuebles'
          ],
          image: 'assets/service2_cobroCartera/cartera-paso.png'
        },
        {
          number: '2',
          title: 'Cobro Jurídico',
          description: 'Nuestros abogados gestionan de forma judicial el cobro de su cartera, solicitando el embargo de bienes propiedad de los deudores para procurar la recuperación de su cartera empresarial.',
          activities: [
            'Investigación de bienes de sus deudores con el fin de solicitar la práctica de medidas cautelares',
            'Presentación de la demanda y ejercicio de la representación a lo largo del proceso',
            'Vigilancia permanente del proceso judicial ante el juzgado correspondiente',
            'Actualización periódica de los avances del proceso judicial en nuestro sistema LegalWeb',
            'Gestión de cobranza extrajudicial con sus deudores a lo largo del proceso judicial para lograr la terminación anticipada del proceso por pago',
            'Rendición de informes periódicos para su empresa, a través del sistema LegalWeb de la firma o a través del canal definido con usted',
            'Procesos jurídicos de restitución de bienes muebles e inmuebles',
            'Conciliaciones para constituir título ejecutivo o restitución de activos'
          ],
          image: 'assets/service2_cobroCartera/macbokk-iphone.png'
        },
        {
          number: '3',
          title: 'Defensa en procesos de liquidación e insolvencia de persona natural y jurídica',
          description: 'Dado que cada vez es más común el inicio de procesos de liquidación y de insolvencia de personas naturales y jurídicas, es necesario gestionar oportunamente el cobro de su cartera y defender sus derechos en los trámites concursales y liquidatarios previstos por la Ley.',
          activities: [
            'Recuerde que estos procesos se adelantan siguiendo un procedimiento con términos específicos que se pueden vencer en su contra',
            'Contamos con abogados expertos en este tipo de procesos para hacer valer sus acreencias de forma oportuna'
          ],
          image: 'assets/service2_cobroCartera/cartera-paso2.png'
        }
      ],
      faqs: [
        {
          question: '¿Qué es cobro pre jurídico o cobro pre judicial?',
          answer: 'Las expresiones "Cobro Pre Jurídico" o "Cobro Pre Judicial" hacen alusión a todas aquellas actividades profesionales desplegadas por la firma para recuperar la cartera de su empresa antes de acudir a una instancia judicial. Solicite en línea una cotización de nuestros servicios.',
          expanded: false
        },
        {
          question: '¿Qué es cobro jurídico o cobro judicial?',
          answer: 'Las expresiones "Cobro Judicial" o "Cobro Jurídico" hacen alusión a todas aquellas actividades profesionales desplegadas por la firma ante un Juez o Tribunal de Arbitramento para recuperar la cartera de su empresa. Solicite en línea una cotización de nuestros servicios.',
          expanded: false
        },
        {
          question: '¿Tengo derecho a que mi deudor reconozca y pague intereses moratorios y honorarios de cobranza?',
          answer: 'Si. Por el retardo en el pago el deudor debe cancelar los intereses pactados con las partes o, en caso de no haber sido pactados, tratándose de obligaciones comerciales, este será equivalente a 1.5 veces el bancario corriente. Liquidamos los intereses y los cobramos a su deudor junto con los honorarios de cobranza.',
          expanded: false
        },
        {
          question: '¿Se recomienda llevar a cabo el cobro pre jurídico antes de iniciar un proceso judicial?',
          answer: 'Si. Se sugiere a nuestros clientes gestionar inicialmente su cobro de forma pre jurídica por la inexistencia de inversión inicial de su parte. En el cobro advertimos al deudor sobre las consecuencias negativas de no cancelar su obligación. Sin embargo, usted puede optar por iniciar de forma inmediata el cobro judicial. Solicite en línea una cotización de nuestros servicios.',
          expanded: false
        },
        {
          question: '¿Si Merizalde Abogados no recupera mi cartera en cobro pre judicial, debo pagar honorarios?',
          answer: 'No. Si la firma no recupera su cartera tras adelantar la gestión de cobro pre jurídico, no se generan honorarios en esta etapa. Solicite en línea una cotización de nuestros servicios.',
          expanded: false
        },
        {
          question: '¿Por qué es importante que mi cartera sea gestionada por una firma de abogados?',
          answer: 'Gestionamos el cobro de su cartera únicamente con profesionales del derecho con amplia experiencia en materia ejecutiva. De esta manera, otorgamos a nuestros clientes mayor efectividad en la comunicación con sus deudores, conocimiento sobre las acciones legales y mejores resultados en la gestión de cobranza. Solicite en línea una cotización de nuestros servicios.',
          expanded: false
        }
      ]
    },
    {
      icon: '📋',
      title: 'Asesoría Jurídica Empresarial',
      subtitle: 'Derecho empresarial',
      shortDescription: 'Ofrecemos planes mensuales legales ajustados a las necesidades de su empresa o prestación de servicios jurídicos por evento.',
      heroSlides: [
          {
            title: 'ACTUALICE LOS DOCUMENTOS LEGALES DE SU EMRPESA',
            subtitle: 'Asesoría jurídica integral para empesas',
            image: 'assets/banner/23.png'
          },
          {
            title: 'SERVICIOS JURÍDICOS POR EVENTO O MENSUALIDAD',
            subtitle: 'Tarifas preferenciales y promocionales para MIPYME',
            image: 'assets/banner/24.png'
          },
          {
            title: '¿CONOCE LOS RIESGOS LEGALES DE SU EMPRESA?',
            subtitle: 'Realice sin costo una auditoria legal a su empresa',
            image: 'assets/banner/23.png'
          }
      ],
      details: [
        {
          number: '1',
          title: 'Derecho Laboral',
          description: 'Ofrecemos una asesoría jurídica laboral integral diseñada para blindar tu empresa, que abarca desde la auditoría y redacción de contratos hasta la defensa legal estratégica en demandas y procesos ante el Ministerio del Trabajo. Mi objetivo es garantizar tu cumplimiento normativo mediante la actualización constante de tus documentos y una representación jurídica sólida que minimice riesgos y proteja tu operación.',
          activities: [
            'Auditoría laboral y documentación jurídica de mejoras para el área de talento humano de la empresa.',
            'Elaboración de contratos de trabajo y de prestación de servicios',
            'Asesoría jurídica para la revisión, modificación, suspensión y terminación de contratos de trabajo',
            'Asesoría en procesos y trámites ante el Ministerio del Trabajo.',
            'Defensa judicial por reclamaciones de trabajadores e investigaciones de autoridades administrativas.',
            'Defensa en acciones de tutela',
            'Envío periodico de boletines sobre los avances normativos en derecho laboral expedidos por las autoridades colombianas.',
            'Evento – Actualización de documentos laborales (RIT, contratos, proceso sancionatorio, etc).',
          ],
          image: 'assets/service1_derechoEmpre/2.png'
        },
        {
          number: '2',
          title: 'Derecho Comercial y Civil',
          description: 'Fortalezcemos la estructura de tu empresa a través de una gestión legal corporativa integral, que abarca desde la constitución de sociedades y reformas estatutarias hasta la implementación de sistemas de cumplimiento como Sagrilaft. Me encargo de blindar tu operación comercial mediante la auditoría, redacción y actualización de contratos, la recuperación estratégica de cartera y la protección de tu patrimonio en procesos de reorganización o liquidación, asegurando que tu negocio cumpla siempre con la normativa vigente en Colombia.',
          activities: [
            'Constitución de sociedades y formulación del plan de trabajo legal para el empresario.',
            'Cobro de cartera empresarial.',
            'Asesoría de acreedores en procesos de reorganización empresarial y liquidación.',
            'Elaboración y revisión de contratos civiles y mercantiles.',
            'Elaboración de documentos jurídicos contractuales tales como: Actas modificatorias, liquidaciones, suspensiones, prórrogas, etc.',
            'Reformas estatutarias y adopción de medidas corporativas.',
            'Envío periodico de boletines sobre los avances normativos en derecho civil y comercial expedidos por las autoridades colombianas.',
            'Auditorias empresariales legales.',
            'Actualización de documentos contractuales, societarios y regulatorios (Manual de contratos, Política de protección de datos, Estatuto del Consumidor, etc.).',
            'Implementación de Sagrilaft y servicios de Oficial de Cumplimiento.'
          ],
          image: 'assets/service1_derechoEmpre/4.png'
        },
        {
          number: '3',
          title: 'Derecho Administrativo',
          description: 'Protejemos tu relación con el Estado mediante defensa en procesos fiscales y disciplinarios, representación ante la SIC en protección al consumidor y asesoría estratégica en contratación estatal. Gestiono tus derechos de petición y garantizo el cumplimiento en protección de datos para blindar tu operación frente a cualquier autoridad administrativa.',
          activities: [
            'Formulación de derechos de petición a las diferentes autoridades nacionales, departamentales, distritales y municipales.',
            'Asesoría y representación en procesos de protección al consumidor ante la Superintendencia de Industria y Comercio.',
            'Asesoría en procesos de contrataciónestatal.',
            'Envío periódico de boletines sobre los avances normativos en derecho administrativo expedidos por las autoridades.',
            'Defensa en procesos disciplinarios y fiscales.',
            'Asesoría en el sistema de protección de datos personales.'
          ],
          image: 'assets/service1_derechoEmpre/5.png'
        }
      ],
      faqs: [
        {
          question: '¿Qué se entiende por derecho empresarial?',
          answer: 'La expresión “Derecho Empresarial” hace referencia a la agrupación de ramas del derecho necesarias en la organización y funcionamiento de una empresa, tales como; derecho laboral, derecho comercial, derecho civil, derecho administrativo, entre otros.',
          expanded: false
        },
        {
          question: '¿En la práctica, en qué eventos se aplica el derecho laboral?',
          answer: 'El derecho laboral será aplicable en eventos tales como: Celebración de contratos de trabajo, despido de un empleado de la organización, regulación del Reglamento Interno de Trabajo, demandas laborales, entre otros.',
          expanded: false
        },
        {
          question: '¿En la práctica, en qué eventos se aplica el derecho comercial?',
          answer: 'El derecho comercial será aplicable en eventos tales como: Celebración de contratos comerciales (Compraventa, suministro, obra, arrendamiento, franquicia, corretaje, comisión, agencia, etc.), regulación de aspectos societarios (Constitución de sociedades comerciales, reformas estatutarias, etc.) entre otros.',
          expanded: false
        },
        {
          question: '¿En la práctica, en qué eventos se aplica el derecho administrativo?',
          answer: 'El derecho administrativo será aplicable en eventos tales como: Peticiones ante entidades públicas o respuesta a requerimientos de estas, asesoría en aspectos regulatorios de su negocio, entre otros.',
          expanded: false
        },
        {
          question: '¿Por qué debo contar con asesoría jurídica en mi empresa?',
          answer: 'Se sugiere a las empresas contar con asesoría jurídica permanente con el fin de reducir los riesgos de contingencias legales a futuro, cuidar su patrimonio y facilitar la toma de decisiones informadas acerca de los riesgos legales que acarrea cada una de ellas.',
          expanded: false
        },
        {
          question: '¿Por qué contar con una firma de abogados?',
          answer: 'Contar con una firma trae como principal ventaja contar con asesoría de un equipo de abogados especialistas en diversas áreas del derecho empresarial, lo cual garantiza que el caso sea analizado desde diversos puntos de vista.',
          expanded: false
        }
      ]
    }
  ];

  openServiceModal(service: Service) {
    this.selectedService = service;
    this.activeSection = 'overview';
    this.currentHeroSlide = 0;
    document.body.style.overflow = 'hidden';
  }

  closeServiceModal() {
    this.selectedService = null;
    document.body.style.overflow = 'auto';
  }

  goToContact() {
    this.closeServiceModal();
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById('service-' + sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleFAQ(faq: FAQ) {
    faq.expanded = !faq.expanded;
  }

  changeHeroSlide(index: number) {
    this.currentHeroSlide = index;
  }
}
