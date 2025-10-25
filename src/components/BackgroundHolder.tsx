import './BackgroundHolder.scss';

interface BackgroundHolderProps {
  darkMode: boolean;
}

export default function BackgroundHolder({ darkMode }: BackgroundHolderProps): JSX.Element {
    return (
        <div className={`background-holder ${darkMode ? "dark" : ""}`}/>
    );
}