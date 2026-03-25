import Article from "./Article";
import { lightTheme, darkTheme } from '../Themes';
import { Grid } from "@mui/material";

interface MainBodyProps {
  darkMode: boolean;
}

function MainBody({ darkMode }: MainBodyProps): JSX.Element {
    return (
        <Grid container>
            <Grid xs={12} md={6} className='column'> 
              <Article categoryKey="articles.worder.category" headerKey="articles.worder.header" theme={darkMode ? darkTheme : lightTheme}
                bodyKey="articles.worder.body"
                buttonKey="articles.worder.button"
                buttonLink={"https://liamroddy.github.io/Worder/"}
                images={[
                  'worder-demo.webp'
                ]}
                 />
              <Article categoryKey="articles.clock.category" headerKey="articles.clock.header" theme={darkMode ? darkTheme : lightTheme}
                bodyKey="articles.clock.body"
                buttonKey="articles.clock.button"
                buttonLink={"https://github.com/liamroddy/LED-Matrix-Clock/tree/main"}
                images={[
                  'clock-photo.jpg'
                ]}
                 />
              <Article categoryKey="articles.art.category" headerKey="articles.art.header" theme={darkMode ? darkTheme : lightTheme}
                bodyKey="articles.art.body"
                buttonKey="articles.art.button"
                buttonLink={"https://www.instagram.com/l.j.roddy.art/"}
                images={[
                  'insta-art/art-1.jpg',
                  'insta-art/art-2.jpg',
                  'insta-art/art-3.jpg'
                ]}
              />
            </Grid>
            <Grid xs={12} md={6} className='column'> 
              <Article categoryKey="articles.lockhart.category" headerKey="articles.lockhart.header" theme={darkMode ? darkTheme : lightTheme}
                bodyKey="articles.lockhart.body"
                images={[
                  'lockhart-eng/lockhart-logo.jpeg',
                  'lockhart-eng/lockhart-eng-van.jpg',
                  'lockhart-eng/lockhart-eng-van2.jpg'
                ]} 
              />
              <Article categoryKey="articles.gravity.category" headerKey="articles.gravity.header" theme={darkMode ? darkTheme : lightTheme}
                buttonKey="articles.gravity.button"
                buttonLink={"https://liamroddy.itch.io/gravityflux"}
                bodyKey="articles.gravity.body"
                images={[
                  'gravity-flux/grav1.png',
                  'gravity-flux/grav2.png',
                  'gravity-flux/grav3.png'
                ]}
              />
            </Grid>
        </Grid>
    );
}

export default MainBody;
