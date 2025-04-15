# cucumber-playwright

## Descripción del Proyecto

cucumber-playwright es un framework de automatización de pruebas que combina Cucumber.js y Playwright para realizar pruebas de navegador de extremo a extremo. Utiliza el enfoque de Desarrollo Guiado por Comportamiento (BDD) a través de Cucumber, permitiendo escribir pruebas en un lenguaje natural y legible. Playwright se encarga de interactuar con los navegadores, automatizando acciones y verificando resultados.

## Desarrollo con Asistente de Código

l desarrollo de este proyecto se benefició enormemente del uso de un asistente de código integrado en el IDE Studio Firebase, específicamente el plugin de Gemini Code Assist.  Este asistente proporcionó las siguientes funcionalidades clave:

* **Autocompletado de Código:**  Sugirió autocompletado inteligente mientras se escribía el código, reduciendo errores tipográficos y acelerando la escritura.
* **Generación de Fragmentos de Código:**  Generó fragmentos de código para tareas comunes, como la navegación a páginas, la interacción con elementos y la realización de aserciones, ahorrando tiempo y esfuerzo.
* **Ejecución de Comandos de Terminal:** Permitió ejecutar comandos de terminal directamente desde el IDE, como la instalación de dependencias y la ejecución de las pruebas, simplificando el flujo de trabajo.

Estas características en conjunto mejoraron significativamente la productividad y la velocidad del desarrollo.

## Configuración
Para ejecutar las pruebas en este proyecto, sigue estos pasos:
### Prerrequisitos

- Node.js y npm instalados.

### Instalación

1. Clona el repositorio:
```
bash
   git clone <URL_DEL_REPOSITORIO>
   
```
2. Navega al directorio del proyecto:
```
bash
   cd cucumber-playwright
   
```
3. Instala las dependencias:
```
bash
   npm install
   
```
### Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:
```
bash
npx cucumber-js
```
Este comando ejecutará las pruebas definidas en los archivos `.feature` utilizando Cucumber.js y Playwright.  Los resultados de las pruebas se mostrarán en la consola.