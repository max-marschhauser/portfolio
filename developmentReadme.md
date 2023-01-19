to do:

-   add css clamp, grid min-max, container query i auto-fit da se poboljša responsivess
-   links to social (github, linkedIn and google) from footer do not lead andwhere
-   projects from projects page, need to put good codeLink links
-   add key words to skills (accessibility, speed, dry, kiss, other cool words, design)
-   provjeriti pravopis na data fileovima

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

na html tag stavim data atribut <div data-text="nešto">, zatim u CSS-u mogu napraviti before ili after element sa content: attr(data-text); (a da se to prikaže npr. kod hovera nad elementom)

.parent{
backface-visibility: hidden;}

.child{
transform: translateY(180deg);
}

backface-visibility skriva sav tekst koji je na pozadini kartice (odnosno koji je translatean za 180 stupnjeva)

a kod grandparenta treba staviti transform-style: preserve-3d; da bi se očuvao 3d odnosno da bi se kartice izmjenjivale, isto tako u transform se može dodati i perspective(1000px) te rotateY(180deg) da bi se bolje vidio 3d

https://opentdb.com/ --> API s pitanjima za kviz
savjet --> kopirati link od API-ja u browser da se vidi API response

DECODE TEXT --> KAD API IMA ZNAKOVE POPUT APOSTROFA KOJI SE PRETVORE U ČUDNE ZNAKOVE --> staviti tekst iz apija u neki html element a zatim ga ponovno povući iz tog elementa

function decodeString(str) {
const textArea = document.createElement("textarea");
textArea.innerHTML = str;
return textArea.value;
}

grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); --> super za responsiv design
