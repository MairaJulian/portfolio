
import styles from './App.module.css'
import Header from './componentes/header/Header'
import Proyecto from './componentes/proyectos/Proyecto'
import mytools from './imagenes/mytools.png'
import rickandmorty from './imagenes/rickandmorty.png'
import giff from './imagenes/giff.png'
import Aplicaciones from './componentes/aplicaciones/Aplicaciones'
import qr_android_01 from './imagenes/codigosQR/01_qr_android.png'
import qr_android_02 from './imagenes/codigosQR/02_qr_android.png'
import qr_android_03 from './imagenes/codigosQR/03_qr_android.png'
import qr_ios_01 from './imagenes/codigosQR/01_qr_ios.png'
import qr_ios_02 from './imagenes/codigosQR/02_qr_ios.png'
import qr_ios_03 from './imagenes/codigosQR/02_qr_ios.png'
import gif01 from './imagenes/gif/01.gif'
import gif02 from './imagenes/gif/02.gif'
import gif03 from './imagenes/gif/03.gif'
import android from './imagenes/android.png'
import ios from './imagenes/ios.png'

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
      enlace2: 'https://rick-and-morty-search-web.netlify.app/'
    },
    {id: 3,
      titulo: 'Buscador de Gif',
      imagenSrc: giff,
      imagenAlt: "giff",
      enlace1: 'https://github.com/MairaJulian/buscador-de-gif',
      enlace2: 'https://buscador-de-giff.netlify.app/'
    },
    
  ]

  const aplicaciones = [
    {
      id: 1,
      titulo: 'Buscador de Recetas',
      imagenSrc: gif01,
      imagenAlt: "buscador_de_recetas",
      enlace1: 'https://github.com/MairaJulian/app-de-recetas-vegetarianas',
      qrAndroid: qr_android_01,
      qrIos: qr_ios_01
    },
    {
      id: 2,
      titulo: 'Lista de compras',
      imagenSrc: gif02,
      imagenAlt: "lista_de_compras",
      enlace1: 'https://github.com/MairaJulian/app-lista-de-compras',
      qrAndroid: qr_android_02,
      qrIos: qr_ios_02
    },
    {
      id: 3,
      titulo: 'Estacionamiento',
      imagenSrc: gif03,
      imagenAlt: "estacionamiento",
      enlace1: 'https://github.com/MairaJulian/app-estacionamiento',
      qrAndroid: qr_android_03,
      qrIos: qr_ios_03
    },
    {
      id: 4,
      titulo: 'Prueba',
      imagenSrc: gif01,
      imagenAlt: "prueba",
      enlace1: '',
    },
  ]

  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.proyectos}>
          <div>
              <h1>SITIOS WEB</h1>
          </div>
          <div className={styles.proyectosContainer}>
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
        </div>
        <div className={styles.aplicaciones}>
          <div className={styles.descargasContainer}>
            <h1>APLICACIONES MÓVILES</h1>
            <h2>Descarga Expo Go App</h2>
            <div className={styles.enlacesContainer}>
              <a href='https://play.google.com/store/apps/details?id=host.exp.exponent' target='_blank'>
                <img src={android}/>
              </a>
              <a href='https://apps.apple.com/ar/app/expo-go/id982107779' target='_blank'>
                <img src={ios}/>
              </a>
            </div>
            <h2>Escanea un código QR para probarlo</h2>
          </div>
          <div className={styles.aplicacionesContainer}>
            {
              aplicaciones.map((aplicacion)=>(
                <Aplicaciones
                  key={aplicacion.id}
                  titulo={aplicacion.titulo}
                  imagenSrc={aplicacion.imagenSrc}
                  imagenAlt={aplicacion.imagenAlt}
                  enlace1={aplicacion.enlace1}
                  qrAndroid={aplicacion.qrAndroid}
                  qrIos={aplicacion.qrIos}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
