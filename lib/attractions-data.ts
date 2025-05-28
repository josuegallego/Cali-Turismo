// DOCUMENTACIÓN: Datos de las atracciones turísticas de Cali
// Este archivo contiene un array con la información detallada de todas las atracciones turísticas.
// Cada atracción incluye datos como nombre, categoría, ubicación, coordenadas, calificación y más.
// Proporciona información detallada como descripciones, horarios, precios y datos curiosos.
// Incluye URLs para imágenes y videos de YouTube para cada atracción.
// Sirve como fuente de datos centralizada para toda la aplicación.
// En un entorno real, estos datos podrían provenir de una API o base de datos.

export const attractionsData = [
  {
    id: "cristo-rey",
    name: "Cristo Rey",
    category: "cultura",
    location: "Oeste de Cali",
    latitude: 3.4489,
    longitude: -76.5639,
    rating: 4.7,
    reviews: 1250,
    shortDescription: "Monumento emblemático con vistas panorámicas de la ciudad",
    description:
      "Monumento religioso ubicado en lo alto de una colina con impresionantes vistas panorámicas de Cali. Similar al Cristo Redentor de Río de Janeiro pero a menor escala. Desde aquí podrás ver toda la ciudad y tomar fotos espectaculares, ¡una chimba total!",
    hours: "Lun-Dom: 8:00 AM - 5:00 PM",
    price: "Entrada gratuita",
    visitDuration: "1-2 horas",
    image: "/cristo rey portada.jpg",
    images: [
      "/cristo rey 1.jpg",
      "/cristo rey2.jpg",
      "/cristo rey3.jpeg",
      "/cristo rey4.jpg",
    ],
    youtubeId: "A0rrZgNWwQE",
    facts: [
      "Fue construido en 1953 para conmemorar los 50 años del fin de la Guerra de los Mil Días",
      "Mide 26 metros de altura, de los cuales 5 metros corresponden a la estatua",
      "Es uno de los símbolos más reconocibles de Cali y un punto de referencia para los caleños",
      "Desde su mirador se puede ver toda la ciudad de Cali y el Valle del Cauca",
    ],
    funFact:
      "Durante la construcción del monumento, los materiales fueron transportados a lomo de mula debido a la dificultad de acceso a la cima del cerro.",
    bestTime: "Al atardecer, para ver la puesta de sol sobre la ciudad",
    tips: [
      "Lleva agua y protector solar, ya que hay poco refugio del sol",
      "Es recomendable subir en taxi o transporte privado, especialmente si vas al atardecer",
      "Hay vendedores ambulantes donde puedes comprar bebidas y snacks típicos",
      "Ten cuidado con tus pertenencias, especialmente cámaras y celulares",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/cristo rey portada.jpg",
        author: "María González",
      },
      {
        url: "/cristo rey portada.jpg",
        author: "Carlos Pérez",
      },
      {
        url: "/cristo rey portada.jpg",
        author: "Juan Martínez",
      },
      {
        url: "/cristo rey portada.jpg",
        author: "Ana Rodríguez",
      },
    ],
  },
  {
    id: "zoologico",
    name: "Zoológico de Cali",
    category: "naturaleza",
    location: "Santa Teresita",
    latitude: 3.4528,
    longitude: -76.5418,
    rating: 4.6,
    reviews: 3200,
    shortDescription: "Uno de los mejores zoológicos de Latinoamérica con especies nativas",
    description:
      "Considerado uno de los mejores zoológicos de Latinoamérica, alberga más de 2.500 animales de 233 especies, muchas de ellas nativas de Colombia. Ofrece experiencias educativas y de conservación. ¡Está muy bacano, ve! Los niños la pasan de maravilla.",
    hours: "Mar-Dom: 9:00 AM - 5:00 PM",
    price: "Adultos: $30.000 COP, Niños: $20.000 COP",
    visitDuration: "3-4 horas",
    image: "/zoo.webp",
    images: [
      "/zoo1.jpg",
      "/zoo2.jpg",
      "/zoo3.webp",
      "/zoo4.webp",
    ],
    youtubeId: "nrskrgjbdmE",
    facts: [
      "Es el zoológico más grande de Colombia y uno de los más importantes de Latinoamérica",
      "Fue fundado en 1969 y renovado completamente en 2001",
      "Tiene programas de conservación para especies en peligro de extinción como el cóndor andino",
      "Cuenta con más de 25 hectáreas de terreno con ambientes naturales para los animales",
    ],
    funFact:
      "El zoológico de Cali tiene un programa especial llamado 'Noche en el Zoo' donde los visitantes pueden quedarse después del horario normal y observar el comportamiento nocturno de los animales.",
    bestTime: "Entre semana para evitar multitudes, preferiblemente en la mañana",
    tips: [
      "Compra las entradas en línea para evitar filas",
      "Lleva repelente de insectos, especialmente en temporada de lluvias",
      "El recorrido completo puede tomar hasta 4 horas, planifica tu visita",
      "Hay restaurantes dentro del zoológico, pero puedes llevar tu propia comida y comer en áreas designadas",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Zoológico+Tigre",
        author: "Pedro Sánchez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Zoológico+Aves",
        author: "Laura Gómez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Zoológico+Reptiles",
        author: "Diego Vargas",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Zoológico+Monos",
        author: "Valentina Restrepo",
      },
    ],
  },
  {
    id: "san-antonio",
    name: "Barrio San Antonio",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4486,
    longitude: -76.5372,
    rating: 4.8,
    reviews: 1800,
    shortDescription: "Barrio histórico con arquitectura colonial y excelentes restaurantes",
    description:
      "Barrio histórico con calles empedradas y casas coloniales coloridas. Hogar de artistas, cafés bohemios y restaurantes. Desde la colina se puede disfrutar de hermosas vistas de la ciudad. Un lugar con mucho ambiente y sabor caleño, ¡qué delicia!",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "2-3 horas",
    image: "/SA.jpg",
    images: [
      "/SA1.jpg",
      "/SA2.jpg",
      "/SA3.jpg",
      "/SA4.jpg",
      "/SA.jpg",
    ],
    youtubeId: "-oD-mBhSqNM",
    facts: [
      "Es el barrio más antiguo de Cali, fundado en el siglo XVIII",
      "La Capilla de San Antonio, construida en 1747, es uno de los edificios más antiguos de la ciudad",
      "El barrio es conocido por su ambiente bohemio y artístico",
      "Cada año se celebra aquí la tradicional 'Feria de San Antonio'",
    ],
    funFact:
      "En San Antonio vivió el famoso poeta colombiano Jorge Isaacs, autor de la novela 'María', considerada una de las obras más importantes de la literatura romántica latinoamericana.",
    bestTime: "Domingo por la tarde, cuando hay más ambiente y actividades culturales",
    tips: [
      "Visita la Capilla de San Antonio y sube a la colina para tener una vista panorámica de Cali",
      "Prueba los tradicionales 'cholados' (postre típico) que venden en la plaza",
      "Los domingos hay un mercado de artesanías donde puedes comprar recuerdos únicos",
      "Muchos restaurantes ofrecen música en vivo por las noches, especialmente los fines de semana",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=San+Antonio+Calle+1",
        author: "Andrés Mejía",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=San+Antonio+Iglesia+1",
        author: "Sofía Castro",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=San+Antonio+Arte+1",
        author: "Javier Ospina",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=San+Antonio+Vista+1",
        author: "Camila Duque",
      },
    ],
  },
  {
    id: "boulevard",
    name: "Boulevard del Río",
    category: "cultura",
    location: "Centro de Cali",
    latitude: 3.4516,
    longitude: -76.5322,
    rating: 4.5,
    reviews: 1500,
    shortDescription: "Moderno espacio urbano junto al río Cali, perfecto para pasear",
    description:
      "Moderno paseo peatonal a lo largo del río Cali. Ideal para caminar, hacer ejercicio o disfrutar de eventos culturales. Conecta varios puntos de interés de la ciudad. Un lugar muy agradable pa' caminar y disfrutar de la brisa caleña.",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "1-2 horas",
    image: "/BR.avif",
    images: [
      "/BR2.jpg",
      "/BR3.jpeg",
      "/BR4.jpg",
    ],
    youtubeId: "iMqczmkTDZE",
    facts: [
      "Fue inaugurado en 2013 como parte del proyecto de renovación urbana de Cali",
      "Tiene una extensión de 1.2 kilómetros a lo largo del río Cali",
      "Cuenta con iluminación LED que cambia de color en fechas especiales",
      "Es uno de los espacios públicos más concurridos de la ciudad",
    ],
    funFact:
      "Durante la construcción del Boulevard, se encontraron restos arqueológicos de la época precolombina que ahora se exhiben en el Museo Arqueológico La Merced.",
    bestTime: "Al atardecer o en las noches de fin de semana cuando hay eventos culturales",
    tips: [
      "Los jueves y viernes por la noche suele haber presentaciones culturales gratuitas",
      "Cerca del Boulevard hay varios restaurantes y cafés con terrazas con vista al río",
      "Es un lugar seguro para caminar, pero siempre es recomendable estar atento a tus pertenencias",
      "Hay estaciones de bicicletas públicas donde puedes alquilar una para recorrer todo el Boulevard",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Boulevard+Día",
        author: "Luis Fernández",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Boulevard+Atardecer",
        author: "Roberto Gómez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Boulevard+Eventos",
        author: "Carolina Ríos",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Boulevard+Familias",
        author: "Miguel Torres",
      },
    ],
  },
  {
    id: "plaza-cayzedo",
    name: "Plaza de Cayzedo",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4512,
    longitude: -76.5335,
    rating: 4.3,
    reviews: 950,
    shortDescription: "Plaza principal e histórica de la ciudad",
    description:
      "Plaza principal de Cali, rodeada de edificios históricos como la Catedral Metropolitana y el Palacio Nacional. Punto de encuentro para los caleños y centro de la vida urbana. Un lugar con mucha historia y ambiente local.",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "30 minutos",
    image: "/PC2.webp",
    images: [
      "/PC1.jpeg",
      "/PC.webp"
    ],
    youtubeId: "g7viH4IEROo",
    facts: [
      "Originalmente se llamaba Plaza Mayor, luego Plaza de la Constitución y finalmente Plaza de Cayzedo",
      "Fue nombrada en honor a Joaquín de Cayzedo y Cuero, prócer de la independencia",
      "La estatua central de Joaquín de Cayzedo fue instalada en 1913",
      "Es el kilómetro cero de Cali, desde donde se miden todas las distancias",
    ],
    funFact:
      "En la Plaza de Cayzedo se encuentra el famoso 'Árbol de las Palomas', un samán centenario que es hogar de cientos de palomas y se ha convertido en un símbolo de la plaza.",
    bestTime: "Entre semana por la mañana, cuando hay menos gente y puedes apreciar mejor la arquitectura",
    tips: [
      "Visita la Catedral Metropolitana de San Pedro Apóstol ubicada frente a la plaza",
      "Los vendedores ambulantes ofrecen comida típica como empanadas y arepas",
      "Hay guías turísticos informales que por una propina te cuentan la historia de la plaza",
      "Es un buen punto de partida para un recorrido a pie por el centro histórico de Cali",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Plaza+Cayzedo+1",
        author: "Fernando Martínez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Plaza+Cayzedo+2",
        author: "Alejandra Soto",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Plaza+Cayzedo+3",
        author: "Ricardo Pérez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Plaza+Cayzedo+4",
        author: "Natalia Gómez",
      },
    ],
  },
  {
    id: "tres-cruces",
    name: "Cerro de las Tres Cruces",
    category: "naturaleza",
    location: "Norte de Cali",
    latitude: 3.4689,
    longitude: -76.5425,
    rating: 4.7,
    reviews: 1100,
    shortDescription: "Mirador natural con impresionantes vistas y rutas de senderismo",
    description:
      "Mirador natural con tres cruces en su cima. Ofrece impresionantes vistas panorámicas de Cali. Popular entre deportistas para hacer senderismo y ejercicio al aire libre. ¡Te vas a quedar aterrado con esas vistas, parce!",
    hours: "5:00 AM - 6:00 PM",
    price: "Gratuito",
    visitDuration: "2-3 horas",
    image: "/3C.avif",
    images: [
      "/3C.avif",
      "/3C1.avif",
      "/3C2.jpg",
      
    ],
    youtubeId: "XNqxOZDUVDw",
    facts: [
      "Las tres cruces fueron colocadas originalmente para ahuyentar a los espíritus malignos",
      "Se encuentra a una altura de 1.480 metros sobre el nivel del mar",
      "Es un destino popular para deportistas que suben a diario, especialmente al amanecer",
      "Desde la cima se puede ver toda la ciudad de Cali y el Valle del Cauca",
    ],
    funFact:
      "Cada Viernes Santo, miles de caleños suben al Cerro de las Tres Cruces como parte de una tradición religiosa, convirtiéndose en una de las peregrinaciones más importantes de la región.",
    bestTime: "Temprano en la mañana (5-7 AM) para ver el amanecer y evitar el calor",
    tips: [
      "Sube acompañado, especialmente si vas muy temprano o al atardecer",
      "Lleva suficiente agua, protector solar y un sombrero",
      "Usa zapatos cómodos para caminar, preferiblemente con buen agarre",
      "En la cima hay vendedores que ofrecen bebidas y frutas frescas para recuperar energía",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Tres+Cruces+Foto+1",
        author: "Daniel Restrepo",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Tres+Cruces+Foto+2",
        author: "Marcela Duque",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Tres+Cruces+Foto+3",
        author: "Jorge Ramírez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Tres+Cruces+Foto+4",
        author: "Andrea Mejía",
      },
    ],
  },
]
