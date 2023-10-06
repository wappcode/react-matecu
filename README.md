# React-Matecu

Libreria con complementos y utilidades para el desarrollo de aps

## Instalar

    npm install svelte-matecu

Agregar estilos para la fuente de los iconos

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
```

## MatecuTopbarLayout

Crea la estructura para una página que contiene un topbar en posición fija a la que se le pueden agregar botones de acciones, titulo y buscador.

El contenido de la página tiene una función que se puede llamar para realizar un desplazamiento hacia arriba.

## Ejemplo básico

```
import { useRef, useState } from "react";
import { MatecuTopbarLayout } from "react-matecu";
import { MatecuTopbarHeaderRow } from "react-matecu";
import { MatecuTopbarHeaderColumn } from "react-matecu";
import { MatecuTopbarAction } from "react-matecu";
import { MatecuTopbarFab } from "react-matecu";
import { MatecuTopbarSearch } from "react-matecu";
import { MatecuTopbarTitle } from "react-matecu";
import { MatecuTopbarBody } from "react-matecu";

function MatecuLayout() {
  const searchValueChangesHandler = (value) => {
    console.log("Buscando valor", value);
  };
  const tobarLayout = useRef();
  const [mobileStyle, setMobileStyle] = useState(false);
  const resize = (width) => {
    console.log("resizing", width);
  };
  return (
    <>
      <MatecuTopbarLayout
        resizeHandler={resize}
        ref={tobarLayout}
        prominent={false}
        mobileStyleHandler={setMobileStyle}
        firstRow={
          <MatecuTopbarHeaderRow
            leftColumn={
              <MatecuTopbarHeaderColumn>
                <MatecuTopbarAction>
                  <small>NAV</small>
                </MatecuTopbarAction>
                <MatecuTopbarFab mobileStyle={mobileStyle}>
                  <button
                    className="fabbtn"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    ADD
                  </button>
                </MatecuTopbarFab>
                <MatecuTopbarTitle>Título de la página</MatecuTopbarTitle>
              </MatecuTopbarHeaderColumn>
            }
            rightColumn={
              <MatecuTopbarHeaderColumn>
                <MatecuTopbarSearch
                  mobileStyle={mobileStyle}
                  placeholder="Buscar..."
                  valueChangesHandler={searchValueChangesHandler}
                  clearIcon={"X"}
                  searchIcon={"O\\"}
                />
                <MatecuTopbarAction>
                  <small>MENU</small>
                </MatecuTopbarAction>
              </MatecuTopbarHeaderColumn>
            }
          />
        }
        body={
          <MatecuTopbarBody>
            Contenido de la página...
            <button onClick={() => tobarLayout.current.scrollTop()}>
              Scroll
            </button>
          </MatecuTopbarBody>
        }
      ></MatecuTopbarLayout>
    </>
  );
}
export default MatecuLayout;


```

## Componentes

### MatecuTopbarLayout:

Componente principal

#### Variables de estilos

- --mtb-border : Borde
- --mtb-margin : Margen
- --mtb-width : Ancho
- --mtb-height : Alto
- --mtb-primary-color : Color principal (Color de la barra)
- --mtb-bar-height : Alto de la barra
- --mtb-bar-prominent-height : Alto de la barra en modo prominente

### Properties

- prominent : Valor boolean que indica si la barra es prominente
- mobileWidth: Valor numérico que indica el ancho máximo que debe considerarse para aplicar estilos para dispositivos móviles
- mobileStyle: Indica si se deben aplicar estilos para dispositivos móviles

### Forwards Functions

- scrollTop : Funcion que se puede llamar desde el componente padre y hace scroll del contenido hacia la parte superior

### handlers

- resizeHandler: Evento que se emite cuando se redimenciona el componente y retorna el nuevo valor del ancho.
- mobileStyleHandler: Evento que se emite cuando se redimenciona el componente e indica si se deben aplicar estilos para dispositivos móviles.

### MatecuTopbarHeaderRow

Crea una fila para agregar contenido en el encabezado, pueden agregarse hasta 2 filas y es necesario agregarlos en MatecuTopLayout con las propiedades firstRow o secondRow

#### Variables de estilos

- --mtb-row-padding
- --mtb-row-margin
- --mtb-row-width

### MatecuTopbarHeaderColumn

Crea una columna para agregar contenido a una fila del encabezado es necesario agregar en el componente MatecuTopbarHeaderRow con las propiedades leftColumn o rightColumn

### MatecuTopbarAction

Crea un contenedor para agregar acciones como links o botones preferentemente en formato de iconos

#### Variables de estilos

- --mtb-action-padding
- --mtb-action-margin

### MatecuTopbarFab

Crea un contenedor para agregar un boton (FAB)

#### Variables de estilos

- --mtb-fab-mobile-bottom-position : Posición relativa a la parte inferior del componente pricipal que se aplica cuando estan activos los estilos para dispositivos móviles.

- --mtb-fab-mobile-right-position: Posición relativa a la parte inferior del componente MatecuTopbarLayout

#### Propiedades

- mobileStyle: Valor boolaneo que indica si se ajustan los estilos para dispositivos móviles
- display: Valor boolean que indica si se debe mostrar el componente

### MatecuTopbarSearch

Crea un campo de texto para hacer búsquedas

#### Handlers

- valueChangesHandler: Emite un evento con el valor del texto ingresado en el campo de búsqueda

#### Propiedades

- mobileStyle: Valor boolaneo que indica si se ajustan los estilos para dispositivos móviles
- placeholder: Valor del Placeholder del campo de búsqueda
- value: Especifica el valor de la búsqueda
- display: Valor boolean que indica si se debe mostrar el componente

#### Iconos

Se pueden reemplazar los iconos por unos personalizados usando las propiedades "searchIcon" y "clearIcon" para agregar los componentes que los van a sustituir

### MatecuTopbarTitle

Crea un contenedor para agregar un título a la página.

#### Variables de estilos

- --mtb-title-padding
- --mtb-title-margin

### MatecuTopbarBody

Crea un contenedor para agregar el contenido de la página

#### Variables de estilos

--mtb-body-padding: Padding para el contenido
--mtb-body-background: Fondo del contenido;
--mtb-body-padding-button: Padding inferior (Es utilizado para asignar un espacio al Botón principal (FAB) cuando tiene asignados los estilos para dispositivos móviles)
