Document containing ideas for this page. Will be deleted when everything is finished.

FIGMA PROJECT
https://www.figma.com/file/sZeqXhxSItI4FYmQez6ijU/Portfolio-Page

add key words to skills:
accessibility, responsivness, speed, dry, kiss, other cool words, design

dodati freeCodeCamp cetrifikat za JS, možda i neke ostale cetrifikate

-   provjeriti pravopis na data za skills stranicu

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
