
import styles from './App.module.css'
import Header from './componentes/header/Header'
import Proyecto from './componentes/proyectos/Proyecto'
import mytools from './imagenes/mytools.png'
import rickandmorty from './imagenes/rickandmorty.png'
import giff from './imagenes/giff.png'
import Aplicaciones from './componentes/aplicaciones/Aplicaciones'

function App() {
  
  const proyectos = [
    {
      id: 1,
      titulo: 'My ToolBox',
      imagenSrc: mytools,
      imagenAlt: "my_tools",
      enlace1: 'https://github.com/MathiasFernandez24/MyTools',
      enlace2: 'https://my-box-tools.netlify.app/'
    },
    {
      id: 2,
      titulo: 'Rick and Morty',
      imagenSrc: rickandmorty,
      imagenAlt: "rick_and_morty",
      enlace1: 'https://github.com/MairaJulian/ProyectoRickAndMorty',
      enlace2: ''
    },
    {id: 3,
      titulo: 'Buscador de Giff',
      imagenSrc: giff,
      imagenAlt: "giff",
      enlace1: 'https://github.com/MairaJulian/buscador-de-gif',
      enlace2: ''
    },
    {id: 4,
      titulo: 'Buscador de Giff',
      imagenSrc: giff,
      imagenAlt: "giff",
      enlace1: 'https://github.com/MairaJulian/buscador-de-gif',
      enlace2: ''
    }
  ]

  const aplicaciones = [
    {
      id: 1,
      titulo: 'Buscador de Recetas',
      imagenSrc: rickandmorty,
      imagenAlt: "buscador_de_recetas",
      enlace1: 'https://github.com/MairaJulian/buscador-de-gif',
    },
    {
      id: 2,
      titulo: 'Lista de compras',
      imagenSrc: rickandmorty,
      imagenAlt: "lista_de_compras",
      enlace1: 'https://github.com/MairaJulian/buscador-de-gif',
    },
    {
      id: 3,
      titulo: 'Estacionamiento',
      imagenSrc: rickandmorty,
      imagenAlt: "estacionamiento",
      enlace1: 'https://github.com/MairaJulian/app-de-recetas-vegetarianas',
    },
    {
      id: 4,
      titulo: 'Estacionamiento',
      imagenSrc: rickandmorty,
      imagenAlt: "estacionamiento",
      enlace1: 'https://github.com/MairaJulian/app-de-recetas-vegetarianas',
    },
  ]

  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.proyectos}>
          {
            proyectos.map((proyecto)=>(
              <Proyecto
                key={proyecto.id}
                titulo={proyecto.titulo}
                imagenSrc={proyecto.imagenSrc}
                imagenAlt={proyecto.imagenAlt}
                enlace1={proyecto.enlace1}
                enlace2={proyecto.enlace2}
              />
            ))
          }
        </div>
        <div className={styles.aplicaciones}>
          {
            aplicaciones.map((aplicacion)=>(
              <Aplicaciones
                key={aplicacion.id}
                titulo={aplicacion.titulo}
                imagenSrc={aplicacion.imagenSrc}
                imagenAlt={aplicacion.imagenAlt}
                enlace1={aplicacion.enlace1}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
