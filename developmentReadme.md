to do:

-   projects from projects page, need to put good codeLink links, ili možda ne treba codeLink na sve, već samo na neke
-   provjeriti pravopis na data fileovima
-   staviti profilnu sliku u header i footer
-   dodati intersection observer da se sadržaji kasnije učitavaju
-   dodati paralax scroll na hero image, a možda staviti poseban hero image na svaku stranicu s paralax scrollom
-   napraviti language switcher (eng, hr)
-   napraviti theme switcher (light, dark, space, nature...)
-   na home page ispod hero image staviti grid s linkovima na 4 stranice
-   napraviti jednu stranicu koja će se prva prikazati čak i prije home pagea, a na kojoj će se birati jezik i tema stranice, ali da se to može i kasnije pokrenuti
-   na svim slikama maknuti loading=lazy da bi se učitale zajedno sa stranicom, stranica će se malo sporije učitati ali će prijelaz sa stranica biti smooth, a stranica je premala da bi to stvaralo problem

npm install react-intersection-observer --save
import { useInView } from "react-intersection-observer";
const { ref: myRef, inView: myElementIsVissible } = useInView();
const { ref: rocketRef, inView: rocketIsVissible } = useInView();

const myRef = useRef();
const [myElementIsVissible, setMyElementIsVissible] = useState();
stavim ref u html tag s myRef oznakom

zatim dolje kod u htmlu mogu staviti {myElementIsVissible ? className="neka animacija uz pomoć tranzicija ili keyframesa" : className="" }

Create React App article
https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741
