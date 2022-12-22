Media query breakpoints
smallest mobile - default
regular mobile - 350px
tablet - 700px
regular desktop: 1400px
large desktop or tv - 2100px

MAIN BREAKPOINT - 700px, 550px

links to social (github, linkedIn and google) from footer do not lead andwhere

add key words to skills:
accessibility, speed, dry, kiss, other cool words, design

-   provjeriti pravopis na data fileovima

*   Favicon prefers light mode, prefers dark mode
*   Media querry orientation portrait landscape

flex
align-items:stretch;
align-self: - iste opcije kao i align-items, ali items se stavlja na container, a self na pojedinačni child element
flex-basis: odnosi se na primary axis, odnosno može označavati ili width ili height
flex-grow: po defaultu elementi u flexu zauzmu najmanji potrebni prostor pa ostane praznina. sa flex-grow elementi ispune sav postojeći prostor tako da se element koji ima flex-grow proširi na osali prostor. Ako ih više ima flex grow, onda se prošire s obzirom na broj u flex-growu, npr. flex-grow:1; i flex grow:2;
flex-shrink: ako su elemnti manji od kontejnera, oni će se po dafultu smanjivati svaki jednako. sa flex-shrink mogu staviti da se neki element smanjuje više od ostalih

-   na element se može staviti flex-shrink:0 kako se element ne bi uopće smanjivao ako se smanji ekran
    flex-wrap: itemi u containeru će se wrapati ako ne stanu svi u isti red

filter: blur(2px); --> blura cijeli element, pa čak i tekst u njemu
backdrop-filter: blur(2px); --> blura samo pozadinu elementa, a tekst ostaje čitljiv

html{
color-scheme: dark light; --> force the use of dark theme
}

WINDOWS PROMPT OMOGUĆUJE INTERAKTIVAN ALERT POPUP U KOJI KORISNIK MOŽE UPISATI NEŠTO ŠTO POSTAJE VARIJABLA
let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
document.getElementById("demo").innerHTML =
"Hello " + person + "! How are you today?";
}

CSS
appearance: none;
pointer-events: none;

.nekaKlasa:empty{display:none}; --> npr. ako neki element nema sadržaj (innerHTML) neće ga se displayati
