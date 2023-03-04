-   provjeriti pravopis na data fileovima - još treba projects page list file

-   CV na hrvatskom i na engleskom
-   možda pored CV download buttona napisati veličinu datoteke (kB ili mB)

-   dodati pozadinske ukoso šare (ispunjenja pojedinih rubova) ili krugove na obične stranice (npr. pozadina filtera, svakog projects page itema, about page elementa) --> dati će raznolikost i zanimljivost, napraviti pomoću before i after elementa

-   popraviti filter na projects page
-   modal ne prikazuje dobre slike, nekada pokaže da ih nema, a nekada od drugih projekata

-   vidjeti kako da se slike prije učitaju (možda staviti slike manje kvalitete, ili totalno izbaciti pozadinske slike, ili nekakav loading kad se stranica otvori dok se slike ne učitaju)

&::before,
&:after {
content: "";
position: absolute;

    	z-index: 0;
    	height: 20vh;
    	width: 70vw;

    	@include abs.mq(1400px, 0px) {
    		height: 50vh;
    		width: 50vw;
    	}

    	background-color: var(--color-primary-transparent);
    }

    &::before {
    	top: 0;
    	left: 30vw;

    	@include abs.mq(1400px, 0px) {
    		left: 50vw;
    	}

    	clip-path: polygon(0 0, 25% 0, 100% 75%, 100% 100%);
    }

    &::after {
    	bottom: 0;
    	right: 30vw;

    	@include abs.mq(1400px, 0px) {
    		right: 50vw;
    	}

    	clip-path: polygon(0 25%, 0 0, 100% 100%, 75% 100%);
    }
