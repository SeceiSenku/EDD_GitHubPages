**GitHub Pages**.

## Ciclo de vida del desarrollo del software

### 1. Planificación

**Temática elegida:**
El proyecto está centrado en la **historia del Porsche 911**, un automóvil legendario de la marca alemana Porsche.
La web ofrece un recorrido por sus generaciones, modelos más importantes y datos técnicos relevantes.

**Usuarios definidos:**

1. **Usuario visitante:** persona interesada en la historia del Porsche 911, que navega por la web para aprender más sobre el modelo.
2. **Colaborador o administrador:** miembro del equipo encargado de actualizar la información, mejorar el diseño o añadir nuevas secciones.

**Requisitos de la aplicación:**

1. La aplicación debe mostrar un **index.html** con el contenido principal.
2. Debe incluir un **favicon (.ico)** personalizado como icono de la página.
3. El repositorio debe permitir colaboración entre distintos usuarios y contener **ramas y merges** realizados desde GitHub.

**Colaboradores del proyecto:**

* [@SeceiSenku](https://github.com/SeceiSenku)
* [@Joaquin-OM](https://github.com/Joaquin-OM)
* [@just11in05](https://github.com/just11in05)

---

### 2. Diseño

**Arquitectura cliente-servidor (explicación breve):**
La aplicación sigue una arquitectura **cliente-servidor**, en la que:

* El **cliente** (navegador del usuario) solicita los recursos (HTML, CSS, JS) desde la web.
* El **servidor** (en este caso GitHub Pages) entrega los archivos estáticos al cliente.

Esto permite que el contenido se cargue directamente desde GitHub sin necesidad de un backend complejo.
GitHub Pages actúa como **servidor estático**, hospedando la web de forma gratuita y accesible desde cualquier dispositivo con conexión a internet.

---

### 3. Despliegue

**Experiencia con GitHub Pages:**
El despliegue se realizó desde el propio repositorio de GitHub siguiendo los siguientes pasos:

1. Creación del repositorio `SeceiSenku.github.io`.
2. Añadimos los archivos base del proyecto (`index.html`, `style.css`, `favicon.ico`, etc.).
3. Activamos **GitHub Pages** desde la pestaña **Settings → Pages**, seleccionando la rama `main` como fuente de despliegue.
4. GitHub generó automáticamente la URL:
   [https://EDD_GitHubPages](https://EDD_GitHubPages)

Durante el proceso comprobamos que:

* Los commits se sincronizan automáticamente con el despliegue.
* Los cambios se reflejan en la web casi de inmediato.
* Se pueden revisar versiones anteriores gracias al uso de ramas y merges.

---

### 4. Mantenimiento

**Errores encontrados:**

* Dificultades con la configuración de GIT y ramas.
* Dificultades iniciales al hacer merges entre ramas.

**Mejoras futuras:**

* Añadir interactividad con JavaScript, por ejemplo una galería dinámica o línea temporal interactiva.
* Implementar un diseño adaptable (responsive) para dispositivos móviles.
* Crear una sección de contacto o formulario de sugerencias.
* Incluir validadores de HTML y CSS para mejorar la calidad del código.

---

## 📄 Estructura del repositorio

```
📁 EDD_GitHubPages
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 favicon.ico
 ┣ 📁 assets/ (imágenes u otros recursos)
 ┣ 📄 README.md
```

---

## Tecnologías utilizadas

* HTML5
* CSS3
* Git & GitHub
* GitHub Pages

---

## Enlace al despliegue

[https://EDD_GitHubPages](https://github.com/SeceiSenku/EDD_GitHubPages)

---