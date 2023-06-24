
import styles from './App.module.css'
import Header from './componentes/header/Header'
import Proyecto from './componentes/proyectos/Proyecto'
import mytools from './imagenes/mytools.png'
import rickandmorty from './imagenes/rickandmorty.png'
import giff from './imagenes/giff.png'
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'
import Aplicaciones from './componentes/aplicaciones/Aplicaciones'

function App() {
  

  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.proyectos}>
          <Proyecto 
            titulo='My ToolBox'
            imagenSrc={mytools}
            imagenAlt="my_tools"
            icono1={IconBrandGithub}
            icono2={IconWorld}
            enlace1='https://github.com/MathiasFernandez24/MyTools'
            enlace2='https://my-box-tools.netlify.app/'
            />
          <Proyecto 
            titulo='Rick and Morty'
            imagenSrc={rickandmorty}
            imagenAlt="rick_and_morty"
            icono1={IconBrandGithub}
            icono2={IconWorld}
            enlace1='https://github.com/MairaJulian/ProyectoRickAndMorty'
            enlace2=''
          />
          <Proyecto 
            titulo='Buscador de Giff'
            imagenSrc={giff}
            imagenAlt="giff"
            icono1={IconBrandGithub}
            icono2={IconWorld}
            enlace1='https://github.com/MairaJulian/buscador-de-gif'
            enlace2=''
            />
        </div>
        <div className={styles.aplicaciones}>
          <Aplicaciones
            titulo='Buscador de recetas'
            imagenSrc={rickandmorty}
            imagenAlt="buscador_de_recetas"
            icono1={IconBrandGithub}
            enlace1='https://github.com/MairaJulian/app-de-recetas-vegetarianas'
          />
          <Aplicaciones
            titulo='Buscador de recetas'
            imagenSrc={rickandmorty}
            imagenAlt="buscador_de_recetas"
            icono1={IconBrandGithub}
            enlace1='https://github.com/MairaJulian/app-de-recetas-vegetarianas'
          />
        </div>
      </div>
    </div>
  )
}

export default App
