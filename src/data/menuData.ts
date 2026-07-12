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
        nombre: "Ceviches de pescado",
        descripcion: "Clásico ceviche peruano de pescado fresco curado en limón.",
        precio: "S/. 15.00 / S/. 20.00 / S/. 25.00",
        imagen: "/ceviches_de_pescado.png"
      },
      {
        nombre: "Ceviche mixto",
        descripcion: "Pescado y mariscos seleccionados curados en zumo de limón.",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: "/ceviche_mixto.png"
      },
      {
        nombre: "Ceviche de pota",
        descripcion: "Ceviche económico y sabroso a base de pota fresca.",
        precio: "S/. 12.00 / S/. 15.00 / S/. 20.00",
        imagen: "/ceviche_de_pota.png"
      },
      {
        nombre: "Ceviche de conchas negras",
        descripcion: "Potente ceviche norteño de conchas negras frescas.",
        precio: "S/. 25.00 / S/. 30.00 / S/. 35.00",
        imagen: "/ceviche_de_conchas_negras.jpg"
      },
      {
        nombre: "Ceviche de pulpo",
        descripcion: "Finas láminas o cortes de pulpo tierno al limón.",
        precio: "S/. 15.00 / S/. 20.00 / S/. 25.00",
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
        imagen: ""
      },
      {
        nombre: "DÚO #2",
        descripcion: "Arroz c/ mariscos o chaufa de mariscos + ceviche de pota",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: ""
      },
      {
        nombre: "DÚO #3",
        descripcion: "Arroz c/ mariscos o chaufa de mariscos + ceviche de PESCADO",
        precio: "S/. 20.00 / S/. 25.00 / S/. 30.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Chilcano c/ cangrejo + chicharrón de pota",
        descripcion: "Caldo de pescado sustancioso con cangrejo, acompañado de chicharrón de pota.",
        precio: "S/. 10.00",
        imagen: ""
      },
      {
        nombre: "Chilcano especial",
        descripcion: "Caldo de pescado contundente con mixtura especial.",
        precio: "S/. 15.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Leche de tigre + chicharrón de pota (Grande)",
        descripcion: "Jugo concentrado de ceviche acompañado de chicharrón de pota crujiente (tamaño grande).",
        precio: "S/. 15.00",
        imagen: ""
      },
      {
        nombre: "Leche de tigre especial",
        descripcion: "Concentrado premium de ceviche con mixtura de mariscos.",
        precio: "S/. 20.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Arroz chaufa de marisco",
        descripcion: "Clásico arroz chaufa peruano al wok con mariscos.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
      },
      {
        nombre: "Arroz chaufa de pescado",
        descripcion: "Clásico arroz chaufa peruano al wok con trozos de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Arroz chaufa de langostino",
        descripcion: "Clásico arroz chaufa peruano al wok con langostinos.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Arroz con conchas negras",
        descripcion: "Arroz jugoso preparado con frescas conchas negras.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Jalea Piurana (mediana)",
        descripcion: "Mixtura de pescados y mariscos fritos con yuca, chifles y sarsa criolla, tamaño mediano.",
        precio: "S/. 40.00",
        imagen: ""
      },
      {
        nombre: "Jalea Piurana (grande)",
        descripcion: "Mixtura de pescados y mariscos fritos con yuca, chifles y sarsa criolla, tamaño grande para compartir.",
        precio: "S/. 60.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Tilapia frita",
        descripcion: "Pescado entero tilapia frito, acompañado de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Doncella frita",
        descripcion: "Pescado doncella frito, acompañado de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Trucha frita",
        descripcion: "Trucha entera frita, acompañada de guarnición.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Filete de pescado frito",
        descripcion: "Corte de filete de pescado frito, sin espinas.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Sudado de trambollo",
        descripcion: "Caldo concentrado tradicional con trambollo entero.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
      },
      {
        nombre: "Sudado de filete",
        descripcion: "Caldo concentrado peruano preparado con filete de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Sudado de Doncella",
        descripcion: "Caldo concentrado preparado con pescado doncella.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
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
        imagen: ""
      },
      {
        nombre: "Parihuela de tramboyo",
        descripcion: "Sopa vigorizante de mariscos y pescado trambollo.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
      },
      {
        nombre: "Parihuela de filete",
        descripcion: "Sopa marinera concentrada servida con filete de pescado.",
        precio: "S/. 20.00 / S/. 25.00",
        imagen: ""
      },
      {
        nombre: "Parihuela de Doncella",
        descripcion: "Concentrado de mariscos y pescado doncella.",
        precio: "S/. 25.00 / S/. 30.00",
        imagen: ""
      }
    ]
  }
];
