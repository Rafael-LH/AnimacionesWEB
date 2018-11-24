
import EasterA from '../images/easter-a.png'
import EasterB from '../images/easter-b.png'

const easter = {
    menu:[
        {
            href: "index.html",
            title: "Home",
            id: 1
        }
    ],
    guitarras:[
        {
            src: EasterA,
            title: 'Invie Familiar',
            alt: 'Padre de Familia',
            key: 1,
            features:[
                    'Lista para copiar a los simpsons',
                    'Aire puro',
                    'Chistes malos'
            ]
      
        },
        {
            src: EasterB,
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

export default easter