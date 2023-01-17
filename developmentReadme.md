to do:

-   add css clamp, grid min-max, container query i auto-fit da se poboljša responsivess
-   need to fix scrollNavlinkToTop.js
-   links to social (github, linkedIn and google) from footer do not lead andwhere
-   projects from projects page, need to put good codeLink links
-   add key words to skills (accessibility, speed, dry, kiss, other cool words, design)
-   provjeriti pravopis na data fileovima
-   srediti custom property boje, možda ih malo doraditi

Media query breakpoints
smallest mobile - default
regular mobile - 350px
tablet - 700px
regular desktop: 1400px
large desktop or tv - 2100px

MAIN BREAKPOINT - 350px 550px, 700px, 550px, 1400px 550px, 2100px 550px

-   Favicon prefers light mode, prefers dark mode
-   Media querry orientation portrait landscape

flex
align-items:stretch;
flex-basis: odnosi se na primary axis, odnosno može označavati ili width ili height
flex-grow: po defaultu elementi u flexu zauzmu najmanji potrebni prostor pa ostane praznina. sa flex-grow elementi ispune sav postojeći prostor tako da se element koji ima flex-grow proširi na osali prostor. Ako ih više ima flex grow, onda se prošire s obzirom na broj u flex-growu, npr. flex-grow:1; i flex grow:2;
flex-shrink: ako su elemnti manji od kontejnera, oni će se po dafultu smanjivati svaki jednako. sa flex-shrink mogu staviti da se neki element smanjuje više od ostalih

-   na element se može staviti flex-shrink:0 kako se element ne bi uopće smanjivao ako se smanji ekran
    flex-wrap: itemi u containeru će se wrapati ako ne stanu svi u isti red

filter: blur(2px); --> blura cijeli element, pa čak i tekst u njemu
backdrop-filter: blur(2px); --> blura samo pozadinu elementa, a tekst ostaje čitljiv

CSS
appearance: none;
pointer-events: none;

css selectors vidjeti što točno rade: is, where, has

Custom Property Fallback Value (primjenjuje se ako custom property ne postoji) --> color: var(--color-icon, #9eeb34);

JS MAP --> object of arrays

const userMap = new Map([
[1, {name: "Kyle"}],
[2, {name: "Sally"}]
])

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

<div className={`nekaKlasa ${nekiIf ? "true" : "false"}`}></div>

DODATI CONTACT LINK U NAVBARU, A IZBACITI HOME (ODNOSNO PREBACITI GA NA LOGO, ISTO TAKO I LOGO ULJEPŠATI)

na html tag stavim data atribut <div data-text="nešto">, zatim u CSS-u mogu napraviti before ili after element sa content: attr(data-text); (a da se to prikaže npr. kod hovera nad elementom)
