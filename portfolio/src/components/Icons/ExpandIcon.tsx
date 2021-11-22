import React from 'react';

interface ExpandIconParams {
    style: React.CSSProperties | undefined
}

const ExpandIcon = ({ style }: ExpandIconParams) => {
    return (
        <svg version="1.1" style={style} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="531.74" height="460.5" viewBox="0 0 531.74 460.5" overflow="visible" enable-background="new 0 0 531.74 460.5" xmlSpace="preserve" data-pagespeed-url-hash="850712719">
            <polygon stroke="#000000" points="530.874,0.5 265.87,459.5 0.866,0.5 "></polygon>
        </svg>
    );
};

export default ExpandIcon;