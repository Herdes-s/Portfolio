import hexatombe from "../assets/images/image_projects/hexatombe.jpg";
import strangerthings from "../assets/images/image_projects/strangerthings.jpg";
import onepiece from "../assets/images/image_projects/onepiece.jpg";
import barbearia from "../assets/images/image_projects/barbearia.jpg";
import e_commerce from "../assets/images/image_projects/e_commerce.png";

const projetos = [
  {
    id: 1,
    nome: "Hexatombe",
    descricao: "Site baseado em uma serie de RPG OrdemParanormal",
    img: hexatombe,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/hexatombe",
    btn_2: "Ver Site",
    site: "https://hexatombe-omega.vercel.app/",
    modo: "developer",
  },
  {
    id: 2,
    nome: "Stranger Things",
    descricao: "Site baseado na serie de TV Stranger Things",
    img: strangerthings,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/Stranger-Things-Site",
    btn_2: "Ver Site",
    site: "https://stranger-things-site-taupe.vercel.app/",
    modo: "developer",
  },
  {
    id: 3,
    nome: "One Piece",
    descricao: "Site baseado na serie de anime One Piece",
    img: onepiece,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/Site_One_Piece_Serie",
    btn_2: "Manutenção",
    site: "",
    modo: "developer",
  },
  {
    id: 4,
    nome: "Barbearia",
    descricao: "Site de uma barbearia",
    img: barbearia,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/Barbearia",
    btn_2: "Ver Site",
    site: "https://barbearia-nine-gold.vercel.app/",
    modo: [ "developer", "designer" ],
  },
  {
    id: 5,
    nome: "E-commerce",
    descricao: "Site de um e-commerce",
    img: e_commerce,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/E-commerce",
    btn_2: "Ver Site",
    site: "https://e-commerce-gilt-psi-72.vercel.app/",
    modo: [ "developer", "designer" ],
  },
];

export default projetos;
