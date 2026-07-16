export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "ceviches",
    nombre: "Ceviches",
    items: [
      {
        nombre: "Ceviche de pescado",
        descripcion: "Pescado fresco marinado en limón y ají limo, acompañado de camote, choclo, cancha y abundante leche de tigre.",
        precio: "S/. 18.00",
        imagen: "/ceviches_de_pescado.png"
      },
      {
        nombre: "Ceviche mixto",
        descripcion: "La más selectiva variedad de mariscos frescos (calamar, langostinos, conchas de abanico, etc.).",
        precio: "S/. 23.00",
        imagen: "/ceviche_mixto.png"
      },
      {
        nombre: "Ceviche de conchas negras",
        descripcion: "Conchas negras marinado en limón y ají limo acompañado de camote, choclo, cancha y chicharrón de pota.",
        precio: "S/. 30.00",
        imagen: "/ceviche_de_conchas_negras.jpg"
      },
      {
        nombre: "Ceviche de pota",
        descripcion: "Pota fresca marinado en limón y ají limos acompañado de camote, choclo, cancha y chicharrón de pota.",
        precio: "S/. 15.00",
        imagen: "/ceviche_de_pota.png"
      },
      {
        nombre: "Ceviche de pulpo",
        descripcion: "Pulpo fresco cortada en finas láminas acompañado de camote, choclo, cancha y abundante leche de tigre.",
        precio: "S/. 20.00",
        imagen: "/ceviche_de_pulpo.png"
      },
      {
        nombre: "Ceviche de caballa norteño",
        descripcion: "Ceviche intenso y tradicional preparado con caballa.",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/ceviche_de_caballa_norteno.png"
      }
    ]
  },
  {
    id: "trios",
    nombre: "Tríos",
    items: [
      {
        nombre: "TRIO #1",
        descripcion: "Ceviche de pescado + chicharrón de pota + arroz con mariscos o chaufa de mariscos",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/trio_1.png"
      },
      {
        nombre: "TRIO #2",
        descripcion: "Ceviche de pescado + chicharrón de pota + arroz con mariscos o chaufa de mariscos",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/trio_2.png"
      },
      {
        nombre: "TRIO #3",
        descripcion: "Ceviche de pescado + chicharrón de pota + arroz con mariscos o chaufa de mariscos",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/trio_3.png"
      }
    ]
  },
  {
    id: "duos",
    nombre: "Dúos",
    items: [
      {
        nombre: "DÚO #1",
        descripcion: "Arroz o chaufa de mariscos + ceviche de pescado mixto",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/duo_1.png"
      },
      {
        nombre: "DÚO #2",
        descripcion: "Arroz c/ mariscos o chaufa de mariscos + ceviche de pota",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/duo_2.png"
      },
      {
        nombre: "DÚO #3",
        descripcion: "Arroz c/ mariscos o chaufa de mariscos + ceviche de PESCADO",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/duo_3.png"
      }
    ]
  },
  {
    id: "chilcanos",
    nombre: "Chilcanos",
    items: [
      {
        nombre: "Chilcano + chicharrón de pota",
        descripcion: "Caldo reconfortante de pescado acompañado con crujiente chicharrón de pota.",
        precio: "S/. 7.00",
        imagen: "/chilcano_chicharron.png"
      },
      {
        nombre: "Chilcano c/ cangrejo + chicharrón de pota",
        descripcion: "Caldo de pescado sustancioso con cangrejo, acompañado de chicharrón de pota.",
        precio: "S/. 10.00",
        imagen: "/chilcano_cangrejo.png"
      },
      {
        nombre: "Chilcano especial",
        descripcion: "Caldo de pescado contundente con mixtura especial.",
        precio: "S/. 15.00",
        imagen: "/chilcano_especial.jpg"
      }
    ]
  },
  {
    id: "leche-de-tigre",
    nombre: "Leche de Tigre",
    items: [
      {
        nombre: "Leche de tigre + chicharrón de pota (Chica)",
        descripcion: "Jugo concentrado de ceviche acompañado de chicharrón de pota crujiente (tamaño personal).",
        precio: "S/. 12.00",
        imagen: "/leche_de_tigre_chica.png"
      },
      {
        nombre: "Leche de tigre + chicharrón de pota (Grande)",
        descripcion: "Jugo concentrado de ceviche acompañado de chicharrón de pota crujiente (tamaño grande).",
        precio: "S/. 15.00",
        imagen: "/leche_de_tigre_grande.png"
      },
      {
        nombre: "Leche de tigre especial",
        descripcion: "Concentrado premium de ceviche con mixtura de mariscos.",
        precio: "S/. 20.00",
        imagen: "/leche_de_tigre_especial.jpg"
      }
    ]
  },
  {
    id: "arroces",
    nombre: "Arroces",
    items: [
      {
        nombre: "Arroz con marisco cremoso",
        descripcion: "Plato a base de arroz cremoso con mixtura de mariscos.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/arroz_marisco_cremoso.png"
      },
      {
        nombre: "Arroz chaufa de marisco",
        descripcion: "Clásico arroz chaufa peruano al wok con mariscos.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/arroz_chaufa_marisco.jpg"
      },
      {
        nombre: "Arroz chaufa de pescado",
        descripcion: "Clásico arroz chaufa peruano al wok con trozos de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/arroz_chaufa_pescado.png"
      },
      {
        nombre: "Arroz chaufa de langostino",
        descripcion: "Clásico arroz chaufa peruano al wok con langostinos.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/arroz_chaufa_langostino.jpg"
      },
      {
        nombre: "Arroz con conchas negras",
        descripcion: "Arroz jugoso preparado con frescas conchas negras.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/arroz_conchas_negras.jpg"
      }
    ]
  },
  {
    id: "jalea-piurana",
    nombre: "Jalea Piurana",
    items: [
      {
        nombre: "Jalea Piurana (personal)",
        descripcion: "Mixtura de pescados y mariscos fritos con yuca, chifles y sarsa criolla, tamaño personal.",
        precio: "S/. 25.00",
        imagen: "/jalea_piurana_personal.jpg"
      },
      {
        nombre: "Jalea Piurana (mediana)",
        descripcion: "Mixtura de pescados y mariscos fritos con yuca, chifles y sarsa criolla, tamaño mediano.",
        precio: "S/. 40.00",
        imagen: "/jalea_piurana_mediana.jpg"
      },
      {
        nombre: "Jalea Piurana (grande)",
        descripcion: "Mixtura de pescados y mariscos fritos con yuca, chifles y sarsa criolla, tamaño grande para compartir.",
        precio: "S/. 60.00",
        imagen: "/jalea_piurana_grande.png"
      }
    ]
  },
  {
    id: "pescados-fritos",
    nombre: "Pescados Fritos",
    items: [
      {
        nombre: "Cabrilla frita",
        descripcion: "Pescado entero cabrilla frito, acompañado de guarnición.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/cabrilla_frita.png"
      },
      {
        nombre: "Tilapia frita",
        descripcion: "Pescado entero tilapia frito, acompañado de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/tilapia_frita.png"
      },
      {
        nombre: "Doncella frita",
        descripcion: "Pescado doncella frito, acompañado de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/doncella_frita.png"
      },
      {
        nombre: "Trucha frita",
        descripcion: "Trucha entera frita, acompañada de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/trucha_frita.png"
      },
      {
        nombre: "Filete de pescado frito",
        descripcion: "Corte de filete de pescado frito, sin espinas.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/filete_frito.png"
      }
    ]
  },
  {
    id: "sudados",
    nombre: "Sudados",
    items: [
      {
        nombre: "Sudado de cabrilla",
        descripcion: "Caldo concentrado a base de tomate, cebolla y cabrilla entera.",
        precio: "S/. 30.00 / S/. 35.00",
        imagen: "/sudado_cabrilla.jpg"
      },
      {
        nombre: "Sudado de trambollo",
        descripcion: "Caldo concentrado tradicional con trambollo entero.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/sudado_trambollo.jpg"
      },
      {
        nombre: "Sudado de filete",
        descripcion: "Caldo concentrado peruano preparado con filete de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/sudado_filete.png"
      },
      {
        nombre: "Sudado de Doncella",
        descripcion: "Caldo concentrado preparado con pescado doncella.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/sudado_doncella.jpg"
      }
    ]
  },
  {
    id: "parihuelas",
    nombre: "Parihuelas",
    items: [
      {
        nombre: "Parihuela de cabrilla",
        descripcion: "Contundente sopa de mariscos y pescado cabrilla con un toque de ají.",
        precio: "S/. 30.00 / S/. 35.00",
        imagen: "/parihuela_cabrilla.jpg"
      },
      {
        nombre: "Parihuela de tramboyo",
        descripcion: "Sopa vigorizante de mariscos y pescado trambollo.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/parihuela_tramboyo.jpg"
      },
      {
        nombre: "Parihuela de filete",
        descripcion: "Sopa marinera concentrada servida con filete de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: "/parihuela_filete.png"
      },
      {
        nombre: "Parihuela de Doncella",
        descripcion: "Concentrado de mariscos y pescado doncella.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: "/parihuela_doncella.jpg"
      }
    ]
  },
  {
    id: "fuentes",
    nombre: "Fuentes",
    items: [
      {
        nombre: "Ceviche de pescado (Fuente)",
        descripcion: "Deliciosa fuente de ceviche de pescado fresco, ideal para compartir.",
        precio: "S/. 50.00 / S/. 70.00 / S/. 100.00",
        imagen: "/fuente_ceviche_pescado.png"
      },
      {
        nombre: "Ceviche mixto (Fuente)",
        descripcion: "Generosa fuente de ceviche de pescado y mariscos seleccionados.",
        precio: "S/. 60.00 / S/. 80.00 / S/. 120.00",
        imagen: "/fuente_ceviche_mixto.png"
      },
      {
        nombre: "Chicharrón de pescado (Fuente)",
        descripcion: "Crocantes trozos de pescado frito en fuente, perfecto para el grupo.",
        precio: "S/. 50.00 / S/. 70.00 / S/. 100.00",
        imagen: "/fuente_chicharron_pescado.png"
      },
      {
        nombre: "Jalea mixta (Fuente)",
        descripcion: "Tradicional jalea piurana con mixtura de mariscos y pescados crocantes.",
        precio: "S/. 50.00 / S/. 70.00 / S/. 100.00",
        imagen: "/fuente_jalea_mixta.png"
      },
      {
        nombre: "Arroz con mariscos (Fuente)",
        descripcion: "Arroz sazonado con mixtura de mariscos frescos en fuente familiar.",
        precio: "S/. 65.00 / S/. 120.00",
        imagen: "/fuente_arroz_mariscos.png"
      }
    ]
  },
  {
    id: "porciones",
    nombre: "Porciones",
    items: [
      {
        nombre: "Chicharrón de pota",
        descripcion: "Porción de crujiente chicharrón de pota.",
        precio: "S/. 5.00",
        imagen: "/porcion_chicharron_pota.png"
      },
      {
        nombre: "Yuca frita",
        descripcion: "Porción de yucas doradas and crujientes.",
        precio: "S/. 5.00",
        imagen: "/porcion_yuca_frita.png"
      },
      {
        nombre: "Chifles",
        descripcion: "Porción de plátanos verdes fritos en rodajas delgadas.",
        precio: "S/. 3.00",
        imagen: "/porcion_chifles.png"
      },
      {
        nombre: "Arroz blanco",
        descripcion: "Porción de arroz blanco cocido.",
        precio: "S/. 5.00",
        imagen: "/porcion_arroz_blanco.png"
      },
      {
        nombre: "Salsa criolla",
        descripcion: "Porción de salsa criolla de cebolla, limón y ají.",
        precio: "S/. 3.00",
        imagen: "/porcion_salsa_criolla.png"
      },
      {
        nombre: "Choclo",
        descripcion: "Porción de choclo desgranado tierno.",
        precio: "S/. 3.00",
        imagen: "/porcion_choclo.png"
      },
      {
        nombre: "Camote",
        descripcion: "Porción de camote cocido dulce.",
        precio: "S/. 3.00",
        imagen: "/porcion_camote.png"
      },
      {
        nombre: "Cangrejo",
        descripcion: "Porción de cangrejo fresco.",
        precio: "S/. 3.00",
        imagen: "/porcion_cangrejo.png"
      }
    ]
  },
  {
    id: "bebidas-naturales-clasicas",
    nombre: "Bebidas Naturales Clásicas",
    items: [
      {
        nombre: "Chicha Morada",
        descripcion: "Refrescante bebida tradicional a base de maíz morado.",
        precio: "S/. 6.00 / S/. 12.00",
        imagen: "/bebida_chicha_morada.png"
      },
      {
        nombre: "Maracuyá",
        descripcion: "Deliciosa y refrescante bebida de pura maracuyá.",
        precio: "S/. 6.00 / S/. 12.00",
        imagen: "/bebida_maracuya.png"
      }
    ]
  }
];
