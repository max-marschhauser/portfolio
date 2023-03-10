-   vidjeti kako da se slike prije učitaju - na pozadinske slike staviti ili slike manje kvalitete, ili staviti rezervnu "mutnu" placeholder sliku koja se prije učita, a onda glavna kad uspije
    .lazy-background {
    background-image: url("hero-placeholder.jpg"); /_ Placeholder image _/
    }
    .lazy-background.visible {
    background-image: url("hero.jpg"); /_ The final image _/
    }
    ili totalno izbaciti pozadinske slike

za slike na skills, portfolio i about stranica staviti da bude loading spinner dok se slika ne učita (možda <suspense> )

za profilnu sliku možda staviti manje kavalitete, ili staviti isto placeholder sliku dok se ne učita

https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/ LAZY LOADING COMPONENT
