import BigBoy from "../assets/images/bigboy.jpg";
import Dracula from "../assets/images/dracula.jpg";
import Cazafantasmas from "../assets/images/cazafantasmas.jpg";
import BrocheMars from "../assets/images/broche_mars.jpg";
import BrocheFallout from "../assets/images/broche_fallout.jpg";
import BrocheMelies from "../assets/images/broche_melies.jpg";

export const itemsMock = [
  {
    id: "1",
    name: "Big Boy",
    category: "estatuillas",
    description: "Estatuilla Big Boy",
    stock: 1,
    price: 7800,
    img: BigBoy,
  },
  {
    id: "2",
    name: "Dracula",
    category: "estatuillas",
    description: "Estatuilla Dracula",
    stock: 3,
    price: 9850,
    img: Dracula,
  },
  {
    id: "3",
    name: "Cazafantasmas",
    category: "estatuillas",
    description: "Estatuilla Cazafantasmas",
    stock: 2,
    price: 6900,
    img: Cazafantasmas,
  },
  {
    id: "4",
    name: "Mars Attack",
    category: "broches",
    description: "Broche Mars Attack",
    stock: 15,
    price: 700,
    img: BrocheMars,
  },
  {
    id: "5",
    name: "Fallout",
    category: "broches",
    description: "Broche de Fallout",
    stock: 12,
    price: 850,
    img: BrocheFallout,
  },
  {
    id: "6",
    name: "Lune Melies",
    category: "broches",
    description: "Broches Lune Melies",
    stock: 18,
    price: 975,
    img: BrocheMelies,
  },
];

export default itemsMock;
