import hexatombe from "../assets/images/image_projects/hexatombe.jpg";
import strangerthings from "../assets/images/image_projects/strangerthings.jpg";
import barbearia from "../assets/images/image_projects/barbearia.jpg";
import e_commerce from "../assets/images/image_projects/e_commerce.jpg";
import stelarmovies from "../assets/images/image_projects/stelarmovies.png"

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
    modo: ["developer"],
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "TailwindCss"],
    caseUse: {
      Meu_papel_no_projeto: [
        [
          "Como designer, defini paleta de cores, tipografia temática e layout dos cards.",
        ],
        [
          "Como desenvolvedor, construí os componentes em React, gerenciei estado com hooks e estilizei com TailwindCSS.",
        ],
      ],
      Objetivo_do_projeto: [
        [
          "Criar um site com temática de terror para a série de RPG de mesa Hexatombe, feito para uma imersão no mundo de Ordem Paranormal, com todos os principais personagens e informações importantes sobre eles.",
        ],
        [
          "O site conta também com um carrossel de imagens de grandes momentos e créditos dos atores principais responsáveis pela série.",
        ],
      ],
      Público_alvo: [
        "Fãs de RPG e Ordem Paranormal entre 16 e 35 anos que se interessam pelas temáticas de RPG e horror.",
      ],
      Principais_desafios_e_restrições: [
        [
          "Por ser meu primeiro projeto em React, enfrentei dois desafios principais:",
        ],
        [
          "Falta de familiaridade com TailwindCSS, o que exigiu muito tempo na documentação para encontrar as classes certas",
        ],
        [
          "E pouco entendimento de hooks, precisando de tempo para me acostumar com a componentização e estruturação dos arquivos.",
        ],
        [
          "Além disso, a paleta de cores limitada da série (vermelho e preto) exigiu criatividade para criar contraste e hierarquia visual sem perder a atmosfera de horror. O desafio de criar um design que transmitisse desconforto e mistério, ao mesmo tempo em que fosse funcional e fácil de navegar, também foi uma restrição importante a ser superada.",
        ],
      ],
      Pesquisa_realizada: [
        [
          "Para o design, pesquisei referências visuais de horror que combinassem com a paleta vermelho e preto, usando o Pinterest como principal fonte de inspiração para cores, tipografias e composição visual.",
        ],
        [
          "Para o conteúdo, me aprofundei no universo da série pelo Wikipedia, onde encontrei informações sobre os personagens, suas habilidades e imagens de cenas marcantes.",
        ],
      ],
      Conceitos_iniciais_e_estratégia_de_design: [
        [
          "O design foi estruturado em torno de duas intenções: transmitir desconforto e criar mistério.",
        ],
        [
          "Escolhi vermelho e preto por serem as cores centrais da própria série, mantendo fidelidade ao universo original.",
        ],
        [
          "Para as animações, optei pelo fade-in com controle de opacidade para fazer as informações aparecerem e desaparecerem gradualmente — reforçando o ar de mistério que o tema pede, como se o próprio site revelasse seus segredos aos poucos.",
        ],
      ],
      Esboços_e_wireframes: [
        ["O projeto nasceu como exploração técnica, sem wireframe formal."],
        [
          "Na V1 foquei na estrutura: componentização, cards e organização do conteúdo — para entender o que o site teria antes de pensar no visual.",
        ],
        [
          "Na V2 iniciei o design de verdade, aplicando cores mais vibrantes, partes mais obscuras para imersão e tipografias que transmitissem o ar do site — como se o usuário estivesse entrando em um jogo de horror.",
        ],
      ],
      Resultados_dos_testes_de_usuário: [
        [
          "Por ser um projeto didático e por estar começando a publicar nas redes, o feedback foi coletado de forma informal no Instagram, LinkedIn e YouTube.",
        ],
        [
          "Os comentários recebidos foram majoritariamente elogios à atmosfera e às cores.",
        ],
        [
          "Por não ter tido retorno crítico estruturado, reconheço que uma rodada de testes com usuários reais do público-alvo poderia revelar pontos cegos que os elogios não mostram.",
        ],
      ],
      Designs_finais_refinados: [
        [
          "O site ficou com vermelho vivo sobre fundo preto, criando sensação de profundidade e mantendo fidelidade à paleta original da série.",
        ],
        [
          "Os cards de personagens funcionam como um álbum visual, destacando aliados e inimigos que marcaram a trajetória de cada personagem.",
        ],
        [
          "A barra de navegação foi posicionada na parte inferior, facilitando a transição entre as duas páginas do projeto — tela principal e tela de personagens — sem poluir o visual.",
        ],
      ],
      Conclusão: [
        [
          "Esse foi meu primeiro projeto finalizado em React e o aprendizado foi significativo:",
        ],
        [
          "implementei hooks como useState e useEffect, pratiquei componentização dividindo o site em arquivos reutilizáveis e aprofundei o uso de JavaScript com map, filter e forEach.",
        ],
        [
          "Se começasse hoje, teria definido o design antes de desenvolver — a ausência de wireframe na V1 gerou retrabalho que um planejamento simples evitaria.",
        ],
        [
          "Como próximos passos, o projeto cresceria em direção a um fórum de Hexatombe, com seções dedicadas aos brasões do mundo, habilidades existentes e mais camadas de informação sobre o universo da série.",
        ],
      ],
    },
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
    modo: ["developer"],
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "CSS-Modules"],
  },
  {
    id: 3,
    nome: "Barbearia",
    descricao: "Site de uma barbearia",
    img: barbearia,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/Barbearia",
    btn_2: "Ver Site",
    site: "https://barbearia-nine-gold.vercel.app/",
    modo: ["developer", "designer"],
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "CSS-Modules"],
    caseUse: {
      Meu_papel_no_projeto: [
        [
          "Como designer, defini paleta de cores, tipografia, imagens e layout dos cards.",
        ],
        [
          "Como desenvolvedor, construí os componentes em React, desenvolvi a responsividade com metodologia Mobile-First e estilizei com CSS Modules.",
        ],
      ],
      Objetivo_do_projeto: [
        [
          "Criar um site para uma barbearia fictícia com dois propósitos: demonstrar habilidades em UI/UX e desenvolvimento web, e simular um produto real que pudesse atrair clientes.",
        ],
        [
          "O site é composto por seções que representam a identidade da barbearia — tela inicial com navegação pelo header, seção sobre com a história da barbearia, serviços oferecidos e formas de contato.",
        ],
      ],
      Público_alvo: [
        "Homens entre 25 e 50 anos que procuram uma barbearia próxima para agendar um corte.",
      ],
      Principais_desafios_e_restrições: [
        [
          "O maior desafio foi no design — foi o primeiro projeto em que o design foi criado antes do desenvolvimento.",
        ],
        [
          "Por ser a primeira vez usando o Figma, tive dificuldade inicial para encontrar as ferramentas certas, mas a prática ao longo do processo tornou o fluxo mais natural.",
        ],
      ],
      Pesquisa_realizada: [
        [
          "Fiz pesquisa de concorrência analisando barbearias no Google, me baseando em designs que já funcionavam para coletar referências de cards, animações, tipografias e cores.",
        ],
        [
          "Para reforçar a criatividade, busquei referências no Pinterest pesquisando logotipos, imagens e paletas.",
        ],
      ],
      Conceitos_iniciais_e_estratégia_de_design: [
        [
          "O design foi estruturado em torno de uma identidade premium e dark. A imagem de destaque na tela inicial estabelece o ar de barbearia sofisticada, e a paleta dourado com fundo escuro reforça elegância e contraste.",
        ],
        [
          "Os cards de serviços foram desenhados com ícones autoexplicativos — o usuário entende o serviço sem precisar ler.",
        ],
        [
          "Os botões de contato foram distribuídos pelo site como chamadas para ação claras, sem interferir na navegação.",
        ],
        [
          "As animações de aparecimento dos componentes funcionam como convite ao scroll, criando uma sensação de descoberta à medida que o usuário avança pelo site.",
        ],
      ],
      Esboços_e_wireframes: [
        [
          "O objetivo inicial era aprender o Figma, então fui direto para o design de alta fidelidade — seção por seção, deixando o resultado o mais próximo possível do produto final. O design ficou tão bem resolvido que a decisão de desenvolvê-lo veio naturalmente depois.",
        ],
        [
          "Essa experiência me mostrou que ter um design em mãos antes de codar funciona como um mapa, tornando o desenvolvimento significativamente mais rápido.",
        ],
      ],
      Resultados_dos_testes_de_usuário: [
        [
          "Por ser um projeto didático, o feedback foi coletado de forma informal no Instagram, LinkedIn e YouTube. Os comentários foram positivos em relação à identidade visual e atmosfera premium.",
        ],
        [
          "Uma sugestão recorrente foi adicionar imagens nos cards de serviços — melhoria válida que ficou mapeada para a próxima atualização do site.",
        ],
      ],
      Designs_finais_refinados: [
        [
          "O site ficou com tipografia e cores premium, destaque dourado e branco sobre fundo escuro com leves gradientes. As animações de tela e botões reforçam a sensação de interação.",
        ],
        [
          "As seções cobrem tela inicial com atalhos de navegação, história da barbearia, serviços e formas de contato — uma estrutura enxuta e funcional para o objetivo do projeto.",
        ],
      ],
      Conclusão: [
        [
          "Esse projeto foi um salto importante na minha trajetória em UI/UX: aprendi na prática a criar um design no Figma antes de desenvolver, e percebi como isso acelera e organiza o processo de desenvolvimento.",
        ],
        [
          "Se fosse refazer, teria experimentado wireframes de baixa fidelidade antes do design final para explorar mais possibilidades de layout antes de comprometer com uma direção.",
        ],
        [
          "Como próximos passos, o site receberá imagens nos cards de serviços e possivelmente uma funcionalidade de agendamento online.",
        ],
      ],
    },
  },
  {
    id: 4,
    nome: "E-commerce",
    descricao: "Site de um e-commerce",
    img: e_commerce,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/E-commerce",
    btn_2: "Ver Site",
    site: "https://e-commerce-gilt-psi-72.vercel.app/",
    modo: ["developer", "designer"],
    tecnologias: ["HTML", "SCSS", "TypeScript", "React", "CSS-Modules"],
  },
  {
    id: 5,
    nome: "StelarMovies",
    descricao: "site de filmes e series",
    img: stelarmovies,
    btn_1: "Repositorio",
    repositorio: "https://github.com/Herdes-s/StelarMovies",
    btn_2: "Ver Site",
    site: "https://stelar-movies.vercel.app/",
    modo: ["developer", "designer"],
    tecnologias: ["HTML", "SCSS", "TypeScript", "React", "CSS-Modules", "API-REST"],
  },
];

export default projetos;
