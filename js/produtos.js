// list com os valores de cada produto, no começo pode ter pelo menos 12 itens, mas pode aumentar se necessário
// cada item possui nome, preço, descrição e tipo
// caso chamado, retornará a lista
function products() {
    const itens = [
        { name: 'Saia Preto Linho Botões Frontais Midi Fascinius', size: 'PP', desc: 'Apresentamos a Saia Preto da Fascinius, uma verdadeira obra de arte em linho de alta qualidade! Esta saia não apenas oferece conforto supremo, mas também exala elegância em cada detalhe, proporcionando um visual deslumbrante que é tão único quanto você.  Com seu comprimento midi, esta saia é perfeita para criar looks versáteis que se adaptam a diversas ocasiões, seja um dia de trabalho ou um jantar especial. A abertura de botões frontais adiciona um toque clássico e sofisticado, enquanto os recortes modernos proporcionam um visual contemporâneo e elegante.  Além disso, os bolsos funcionais não só são práticos, mas também adicionam um elemento utilitário ao design da saia, tornando-a ainda mais versátil e funcional.  Não deixe escapar a oportunidade de adquirir esta peça única e estilosa da Fascinius. Compre agora e adicione um toque de elegância e sofisticação ao seu guarda-roupa. Prepare-se para se destacar com um visual impecável que atrai todos os olhares!', type: 'Casual; Social', img: '../img/banner/dress001.jpg' },
        { name: 'Vestido Bege Renda Estilo Ciganinha Godê Midi Fascinius', size: 'P', desc: 'Descubra a elegância única do Vestido Fascinius, uma peça que vai te envolver em um mundo de charme e sofisticação.  Confeccionado em renda poliamida de alta qualidade, este vestido oferece conforto e caimento impecável.  As mangas ¾ com elástico, proporcionam um ajuste perfeito. Os bordados soutache adicionam um toque de glamour e requinte, enquanto o cinto em couro sintético complementa o visual com um toque de modernidade. Com modelagem evasê midi, este vestido é perfeito para diversas ocasiões, garantindo um visual elegante e feminino.  Adquira já o seu e destaque-se com estilo e elegância incomparáveis com o Vestido Fascinius.', type: 'Casual; Social', img: '../img/banner/dress002.jpg' },
        { name: 'Vestido Jeans Com Mini Pregas Via Tolentino', size: '40', desc: 'Desperte a sua feminilidade contemporânea com o Vestido de Jeans Glint - uma ode à elegância moderna, onde conforto encontra estilo em uma fusão irresistível.  Confeccionado com o luxuoso tecido Jeans Glint, este vestido é uma obra-prima de design e conforto. Sua gramatura leve oferece um caimento fluido que destaca a silhueta, enquanto o toque liso proporciona um acabamento refinado. A modelagem acinturada e o decote arredondado garantem um ajuste impecável, complementados pelos recortes princesa que adicionam elegância e conforto. As mini pregas entre o decote e os recortes princesa conferem um charme único, enquanto as mangas ¾ levemente amplas e com mini pregas no comprimento criam um visual encantador. O comprimento da peça, em leve godê, adiciona movimento e fluidez ao look, e o cinto encapado com fivela diferenciada proporciona um toque extra de estilo.  Para realçar ainda mais sua beleza, experimente combiná-lo com saltos altos e acessórios minimalistas. Seja o centro das atenções em qualquer ocasião com essa peça única que une conforto, elegância e moda.', type: 'Casual; Social', img: '../img/banner/dress003.jpg' },
        { name: 'Vestido Tweed Com Detalhe De Botões Preto Bethe Tatá Martello', size: 'G', desc: 'Desperte a sua singularidade com o Vestido Bethe, onde o tweed encontra o elastano em um equilíbrio perfeito, feito para mulheres modernas que buscam expressar sua individualidade com estilo.  O Vestido Bethe é uma obra-prima confeccionada no luxuoso tweed com elastano. Com mangas curtas e um intrigante detalhe nos ombros, esta peça traz um diferencial notável. O decote em "V" adiciona um toque de elegância, enquanto a cintura, sem elástico e apenas com recorte, proporciona uma silhueta sofisticada. A parte da saia apresenta detalhes de botões e bolsos não funcionais, juntamente com pequenas e discretas fendas na barra. Com comprimento midi e modelagem reta, este vestido é uma escolha refinada e versátil. Totalmente forrado para garantir conforto máximo durante o uso.  Combine-o com saltos altos para um look mais formal ou opte por tênis e acessórios descontraídos para um toque casual. O Vestido Bethe é a peça que proporciona estilo e conforto incomparáveis, tornando-se um investimento essencial para a mulher contemporânea.', type: 'Casual; Social', img: '../img/banner/dress004.jpg' },
        { name: 'Vestido Evasê Estampado Melina Nítido Jeans', size: '44', desc: 'Deslumbre com o Vestido Melina, uma peça exuberante e única que transformará seu visual em uma verdadeira obra de arte.  Elaborado em Tecido de New Enalth, com uma estampa exclusiva, este vestido é um convite para um estilo encantador e sofisticado. Decote coração com detalhe de nó fixo sobreposto com franzido que valoriza o busto e delicadeza á peça. Além disso, possui elástico nos ombros e mangas com leve volume e punho adicionando um toque extra de carme á peça. Recorte na cintura que delineia a silhueta e leve franzido. No barrado renda entremeio e babado que adiciona leveza e romantismo ao modelo. Peça é toda forrada garantindo conforto e segurança.  Eleve seu estilo com o Vestido Melina, onde o encanto da estampa se une à sofisticação do design, criando uma peça que é verdadeiramente inesquecível. Adquira agora e faça uma declaração de moda com esta maravilha contemporânea.', type: 'Casual; Social', img: '../img/banner/dress005.jpg' },
        { name: 'Conjunto Verde Midi Louise Tatá Martello', size: 'GG', desc: 'Prepare-se para se apaixonar pelo Conjunto verde da icônica marca Tatá Martello, uma verdadeira expressão de sofisticação e elegância. Fabricado com o luxuoso crepe Valentino, este conjunto é um símbolo de estilo refinado. A blusa, com mangas curtas e detalhe de martingale, apresenta uma gola lapela adornada com a plaquinha de coração TM, adicionando um toque de exclusividade à peça. Os botões frontais funcionais e os detalhes de bolsos não funcionais são detalhes que elevam ainda mais o charme deste conjunto.  A saia, com tamanho no cós e comprimento midi, é adornada com pregas no maxi babado, proporcionando movimento e uma dose extra de charme. Sua modelagem evasê e o fechamento por meio de zíper na parte de trás garantem um caimento impecável. Totalmente forrada para proporcionar conforto durante o uso, este conjunto é perfeito para quem busca uma opção elegante e versátil. Prepare-se para brilhar em grande estilo com o conjunto preto Tatá Martello, destacando-se em qualquer ocasião com sofisticação e glamour.', type: 'Casual; Social', img: '../img/banner/dress006.jpg' },
        { name: 'Conjunto Roxo Midi Jucy Tatá Martello ', size: 'PP', desc: 'O Conjunto Roxo da marca Tatá Martello é a personificação da elegância e versatilidade, sendo a escolha perfeita para todas as ocasiões. Confeccionado em malha canelada premium, este conjunto oferece não apenas conforto, mas também um toque de sofisticação inigualável.  A blusa, de comprimento normal, é projetada para ser usada de maneira impecável por dentro da saia. Suas mangas curtas, decote arredondado e a graciosa plaquinha de coração TM conferem um charme sutil e distintivo à peça. A saia, de comprimento midi, revela um equilíbrio elegante, enquanto o elástico no cós garante uma vestimenta perfeita. Uma pequena fenda na parte da frente adiciona um toque de ousadia e modernidade.  Cada detalhe foi meticulosamente pensado para proporcionar não apenas estilo, mas também conforto incomparável. A saia, completamente forrada, assegura uma experiência de uso suave e agradável. O Conjunto Roxo da Tatá Martello é mais do que uma simples opção de vestuário; é uma declaração de moda que transcende o efêmero, oferecendo uma combinação impecável de design moderno e qualidade premium.', type: 'Casual; Social', img: '../img/banner/dress007.jpg' },
        { name: 'Chemise Azul Estampado Melissa Pikuxa', size: 'G', desc: 'Encante-se com a exuberância das flores e a sofisticação do Vestido Azul da renomada marca Pikuxa. Este magnífico modelo, adornado com estampas florais, é confeccionado em um tecido clássico crepe, que não só proporciona um caimento impecável ao corpo, mas também exala um ar de refinamento incomparável.  Sua silhueta reta e o comprimento midi conferem uma elegância atemporal à peça, elevando-a ao status de um verdadeiro ícone de estilo. Completo com um cinto em faixa, confeccionado no mesmo tecido do vestido, este conjunto é um testemunho de requinte e bom gosto.  As mangas longas, delicadamente adornadas com punhos em elástico, adicionam um toque de charme e versatilidade ao visual, enquanto o fechamento frontal em botões proporciona praticidade sem comprometer a elegância.  Seja para uma ocasião especial ou um dia comum repleto de estilo, este vestido verde da Pikuxa é a escolha perfeita para quem busca uma combinação sublime entre elegância e conforto. Deixe-se envolver pela sua beleza única e brilhe em qualquer lugar que vá.', type: 'Casual; Social', img: '../img/banner/dress008.jpg' },
        { name: 'Blusa Iara Lilás', size: 'M', desc: 'Blusa em tecido crepe, manga bufante com elastico, modelo com gola lacinho', type: 'Casual; Social', img: '../img/banner/dress009.jpg' },
    ]

    return itens
}

// para invocar essa lista no html, a gente coloca ela pra carregar no body, e assim q chamada, ela pega a lista products
// e pega os inputs do html, e atribui o valor a cada um deles na sua respectiva ordem
// [precisa configurar, n funfa por enquanto]
function loadProducts(){
    const itens = products() // recebe a lista de outra função e a guarda na constante 'itens'

    image = document.querySelectorAll('')
    description = document.querySelectorAll('')
    size = document.querySelectorAll('')
    category = document.querySelectorAll('')

    for (let i = 0; i < itens.length; i++) {
        image[i].src = itens[i].img
        description[i].value = "Sobre o produto: \n" + itens[i].desc
        size[i].value = "Tamanho: " + itens[i].size
        category[i].value = "Categoria: " + itens[i].category
    }
}
