import React from 'react';

const AppToggle = () => {
    const [show, toggleShow] = React.useState(false);
    return (
        <div>
            <button onClick={() => toggleShow(!show)}>Durum: {show ? 'show' : 'hide'}</button>
            {show && <div>Her şey burda</div>}
        </div>
    );
};

export default AppToggle;