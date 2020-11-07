import React, {useEffect} from 'react';
import Typed from 'typed.js';

// Component to display an TypedText

const TypedText = ({text}) => {
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: [text],
            typeSpeed: 50
        };

        // New Typed instance
        const typed = new Typed('#TypedText', options);

        // Destroy Typed instance on unmounting the component to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, [text]);

    return (
        <div>
            <section id='TypedText'></section>
        </div>);
};

export {TypedText};