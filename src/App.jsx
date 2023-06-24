
import styles from './App.module.css'
import Header from './componentes/header/Header'
import Proyecto from './componentes/proyectos/Proyecto'
import mytools from './imagenes/mytools.png'
import rickandmorty from './imagenes/rickandmorty.png'
import giff from './imagenes/giff.png'
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'

function App() {
  

  return (
    <div className={styles.App}>
      <Header/>
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

      <div className={styles.container1}>
        <div className={styles.divIzquierda1}>
          <div className={styles.imagenContainer1}>
            <img className={styles.imagen1} alt='my_tools' src={mytools}/>
          </div>
          <div>
            <h2>My ToolBox</h2>
            <div>
              <a href='https://github.com/MathiasFernandez24/MyTools' target="_blank">
                <IconBrandGithub className={styles.github}/>
              </a>
              <a>
                <IconWorld/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divDerecha1}>Maira 2</div>
      </div>


      <div className={styles.container2}>
        <div className={styles.divIzquierda2}>Maira 2</div>
        <div className={styles.divDerecha2}>
          <div className={styles.imagenContainer2}>
            <img className={styles.imagen1} alt='rickandmorty' src={rickandmorty}/>
          </div>
          <div>
            <h2 className={styles.titulo}>Rick and Morty</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
