import invieAcustic from '../../images/invie-acustica.png'
import invieClassic from '../../images/invie-classic.png'
import logo from '../../images/invie.png'

const data = {
        isAnimated: false,
        menu:[
                {
                    href: "index.html",
                    title: "Home",
                    id: 1
                },
                {
                    href: "#guitarras",
                    title: "Guitarras",
                    id: 2
                },
                {
                    href: "pecios.html",
                    title: "Precios",
                    id: 3
                },
            ],
            logoPortada:[
                {
                    src: logo,
                    width: 186,
                    height: 60,
                    alt: 'Invie logotipo',
                    key: 1
                }
            ],
            guitarras:[
                {
                    src: invieAcustic,
                    title: 'Invie Acustica',
                    key: 1,
                    features:[
                            'Estilo vintage',
                            'Madera Pura',
                            'Incluye estuche invible de aluminio'
                    ]
              
                },
                {
                    src: invieClassic,
                    title: 'Invie Classic',
                    key: 2,
                    features:[
                             'Estilo vintage',
                             'Liviana',
                             'Inicia tu camino como Rockstar'
                        ]
                }
            ]
    } 
    export default data
