// Use State hook to manage style of heading and slogan. Heading should be Maroon, slogan should be italic
import {useState} from 'react';

const Header = (props) => {
    <h1>Theme Setter</h1>
    // State hook to set theme
    const [theme, setTheme] = useState( { name: 'light', style: {} } );

    // Click handler
    function themeHandler() {
        // If theme is dark, then switch to light theme
        if (theme.name === 'dark') {
            setTheme({ name: 'light', style: { backgroundColor: 'white' } });
        } 
        // If theme is light, then switch to dark theme
        else if (theme.name === 'light') {
            setTheme({ name: 'dark', style: { backgroundColor: 'grey' } });
        }
    }

    return (
        <div style={theme.style}>
            <p>Welcome to Baham.</p>
            <button id="themeButton" onClick={themeHandler}>Switch Theme</button>
        </div>
    )
}

const Exercise4 = () => {
    return (
        <Header heading="Baham!" slogan="An App designed for everyone" />
    );
}

export default Exercise4;
