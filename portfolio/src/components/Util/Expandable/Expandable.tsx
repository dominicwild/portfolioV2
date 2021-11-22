import React, { ReactChild, useLayoutEffect, useRef } from 'react';
import "./Expandable.scss";

interface ExpandableData {
    children: ReactChild;
    collapsedHeight?: number;
    expanded: boolean;
}

const DEFAULT_COLLPASED_HEIGHT = 350;

const Expandable = ({ children, collapsedHeight = DEFAULT_COLLPASED_HEIGHT, expanded }: ExpandableData) => {
    let height = collapsedHeight;
    const elementHeight = useRef(-1);
    const element = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (elementHeight.current === -1 && element.current != null) {
            elementHeight.current = element.current.scrollHeight;
        }
    })

    if (element.current) {
        if (expanded) {
            height = elementHeight.current;
        }
    }

    const classStateName = expanded ? "expanded" : "collapsed";

    return (
        <div className={`expandable ${classStateName}`} ref={element} style={{ maxHeight: `${height}px` }}>
            {children}
        </div>
    );
};

export default Expandable;