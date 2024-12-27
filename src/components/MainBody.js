import Article from "./Article";

import { lightTheme, darkTheme } from '../Themes';

function MainBody({ theme, darkMode }) {
    return (
        <>
              <Article category="GAME DESIGN" header="Worder" theme={darkMode ? darkTheme : lightTheme}
                body="A game inspired by Wordle, but much harder! Built with React."
                buttonText="Play Worder"
                buttonLink={"https://liamroddy.github.io/Worder/"}
                images={[
                  'worder.webp'
                ]}
                 />
              <Article category="GAME DESIGN" header="Gravity Flux" theme={darkMode ? darkTheme : lightTheme}
                buttonText="View on Itch.io"
                buttonLink={"https://liamroddy.itch.io/gravityflux"}
                body="A gravity-bending platformer I made with GameMaker Studio, available for download on Itch."
                images={[
                  'gravity-flux/grav1.png',
                  'gravity-flux/grav2.png',
                  'gravity-flux/grav3.png'
                ]}
              />
              <Article category="GRAPHIC DESIGN" header="Lockhart Engineering" theme={darkMode ? darkTheme : lightTheme}
                body="A logo I made for a Sligo-based engineering firm."
                images={[
                  'lockhart-eng/lockhart-logo.jpeg',
                  'lockhart-eng/lockhart-eng-van.jpg',
                  'lockhart-eng/lockhart-eng-van2.jpg'
                ]} 
              />
              <Article category="ART" header="Digital Art and Comics" theme={darkMode ? darkTheme : lightTheme}
                body="Some digital art and webcomics I've made over the years, primarily with Procreate and Photoshop."
                buttonText="View on Instagram"
                buttonLink={"https://www.instagram.com/l.j.roddy.art/"}
                images={[
                  'insta-art/art-1.jpg',
                  'insta-art/art-2.jpg',
                  'insta-art/art-3.jpg'
                ]}
              />
        </>
    );
}

export default MainBody;
