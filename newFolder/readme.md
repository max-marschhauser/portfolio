Folder contains testing of new features that are to be implemented into existing code

@media (orientation: landscape / portrait){ gleda je li veća visina ili širina ekrana }

@custom-media --small (width <= 400px);
@media (--small){ nešto kao spoj media quaryja i varijabli };

display:grid;
grid-template-columns: repeat (auto-fit/auto-fill, minmax(200px, 1fr)); --> auto-fit ili auto-fill automatski određuje broj ponavljanja, razlika među njima je jako malena a ovisi o tome jel ima dovoljno elemenata da napune red ili ne, auto-fit će u toj situaciji raširiti postojeće elemente, a auto-fill neće, a minmax govori najmanju i najveći širinu elementa.

https://css-tricks.com/

https://open-meteo.com/ --> weather free API

INSTAL VITE
npm create vite@latest
pod name mogu staviti . da ga stavi u trenutni folder
npm i
npm run dev

INSTALL AXIOS
npr i axios

zatim na vrhu dokumenta
import axios from "axios";

a u funkciji onda
axios.get("api-link", {params: {latitude: lat, longitude: lon, timezone,}}); --> a ostatal linka stavim kako god, axios će srediti da bude sve dobro. u funkciji moram staviti točne parametre koji će se onda prebaciti u link
