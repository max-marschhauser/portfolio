add css clamp, grid min-max, container query i auto-fit da se poboljša responsivess

need to fix scrollNavlinkToTop.js

Media query breakpoints
smallest mobile - default
regular mobile - 350px
tablet - 700px
regular desktop: 1400px
large desktop or tv - 2100px

MAIN BREAKPOINT - 350px 550px, 700px, 550px, 1400px 550px, 2100px 550px

links to social (github, linkedIn and google) from footer do not lead andwhere

add key words to skills:
accessibility, speed, dry, kiss, other cool words, design

-   provjeriti pravopis na data fileovima

*   Favicon prefers light mode, prefers dark mode
*   Media querry orientation portrait landscape

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
