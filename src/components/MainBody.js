import Article from "./Article";

import { lightTheme, darkTheme } from '../Themes';

function MainBody({ theme, darkMode }) {
    return (
        <>
            <Article category="WEB DESIGN" header="Real Human Legs" theme={darkMode ? darkTheme : lightTheme}
                body="A bizarre joke site I made for fun, built with React and Material, and featuring some very unsettling AI-generated artwork."
                buttonText="Visit Real Human Legs"
                buttonLink={"https://realhumanlegs.com"}
                images={[
                  'real-human-legs-1.jpg',
                  'placeholder_image.jpg'
                ]} 
                 />
              <Article category="GAME DESIGN" header="Worder" theme={darkMode ? darkTheme : lightTheme}
                body="A game inspired by Wordle, but much harder! Built with React."
                buttonText="Play Worder in your browser"
                buttonLink={"https://liamroddy.github.io/Worder/"}
                images={[
                  'worder.jpg',
                  'placeholder_image.jpg'
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
                  'lockhart-eng/lockhart-logo.png',
                  'lockhart-eng/lockhart-eng-van.jpg',
                  'lockhart-eng/lockhart-eng-van2.jpg'
                ]} 
              />
              <Article category="ART" header="Digital Art and Comics" theme={darkMode ? darkTheme : lightTheme}
                body="Some digital art and webcomics I've made over the years, primarily with Procreate and Photoshop."
                buttonText="View on my Instagram"
                buttonLink={"https://www.instagram.com/l.j.roddy.art/"}
                images={[
                  'real-human-legs-1.jpg',
                  'placeholder_image.jpg'
                ]}
              />
        </>
    );
}

export default MainBody;
