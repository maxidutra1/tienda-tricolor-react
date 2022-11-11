export const productsItems = [
  {
    id: 1,
    nombre: "Bermuda Concentración 2022 Adulto",
    precio: 1990,
   foto: "/img/buzonacional.jpeg",
  },
  {
    id: 2,
    nombre: "Buzo TRNGL 2022 Adulto",
    precio: 3000,
     foto: "/img/Buzo TRNGL 2022 Adulto.jpg",
  },
  {
    id: 3,
    nombre: "Camiseta de Golero 2022",
    precio: 3990,
    foto: "/img/Camiseta de Golero 2022.jpeg",
  },
  {
    id: 4,
    nombre: "Camiseta Home Kit 2022",
    precio: 4990,
     foto: "/img/Camiseta Home Kit 2022.jpeg",
  },
  {
    id: 5,
    nombre: "Camiseta alternativa Luis Suarez",
    precio: 4990,
    foto: "/img/camisetaaltsuarez.jpeg",
  },
  {
    id: 6,
    nombre: "Camisetas algodón Umbro Adulto",
    precio: 999,
    foto: "/img/Camisetas algodón Umbro Adulto.jpg",
  },
  {
    id: 7,
    nombre: "Campera Former Nacional 2022 Junior",
    precio: 4699,
   foto: "/img/Campera Former Nacional 2022 Junior.jpeg",
  },
  {
    id: 8,
    nombre: "Campera Urban Umbro Junior",
    precio: 990,
    foto: "/img/Campera Urban Umbro Junior.jpeg",
  },
  {
    id: 9,
    nombre: "Camperón SWEEP CNdeF 2022",
    precio: 5990,
    foto: "/img/Camperón SWEEP CNdeF 2022.jpeg",
  },
  {
    id: 10,
    nombre: "Canguro de felpa entrenamiento 2021 Adulto",
    precio: 2990,
    foto: "/img/Canguro de felpa entrenamiento 2021 Adulto.jpeg",
  },
  {
    id: 11,
    nombre: "Camiseta del Hincha Azul 2021",
    precio: 2990,
   foto: "/img/Camiseta del Hincha Azul 2021.jpg",
  },
  {
    id: 12,
    nombre: "Camiseta Juego Oficial 2019",
    precio: 1990,
   foto: "/img/Camiseta Juego Oficial 2019.jpeg",
  },
];

export const ProdRed = productsItems.reduce((res, prod) => {
  if (!res[prod.section]) {
    res[prod.section] = [];
  }
  res[prod.section] = [...res[prod.section], prod];

  return res;
}, {});
