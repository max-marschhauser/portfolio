to do:

-   projects from projects page, need to put good codeLink links, ili možda ne treba codeLink na sve, već samo na neke
-   provjeriti pravopis na data fileovima
-   staviti profilnu sliku u header i footer i contact page
-   dodati intersection observer da se sadržaji kasnije učitavaju
-   dodati paralax scroll na hero image, a možda staviti poseban hero image na svaku stranicu s paralax scrollom
-   napraviti language switcher (eng, hr)
-   staviti boje za različite teme
-   staviti pozadinske slike za različite teme
-   spremiti temu i jezik u localStorage

npm install react-intersection-observer --save
import { useInView } from "react-intersection-observer";
const { ref: myRef, inView: myElementIsVissible } = useInView();
const { ref: rocketRef, inView: rocketIsVissible } = useInView();

const myRef = useRef();
const [myElementIsVissible, setMyElementIsVissible] = useState();
stavim ref u html tag s myRef oznakom

zatim dolje kod u htmlu mogu staviti {myElementIsVissible ? className="neka animacija uz pomoć tranzicija ili keyframesa" : className="" }
