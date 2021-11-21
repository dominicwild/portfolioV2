import React, { ReactChild, useLayoutEffect, useRef, useState } from 'react';
import "./Expandable.scss";

interface ExpandableData {
    children: ReactChild;
    collapsedHeight?: number;
}

const DEFAULT_COLLPASED_HEIGHT = 350;

const Expandable = ({ children, collapsedHeight = DEFAULT_COLLPASED_HEIGHT }: ExpandableData) => {
    const [height, setHeight] = useState(collapsedHeight);
    const [expanded, setExpanded] = useState(false);
    const projectBodyHeight = useRef(-1);
    const projectBody = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (projectBodyHeight.current === -1 && projectBody.current != null) {
            projectBodyHeight.current = projectBody.current.scrollHeight;
        }
    })

    const expandProject = (e: React.MouseEvent<HTMLInputElement>) => {
        if (projectBody.current) {
            if (expanded) {
                setHeight(collapsedHeight);
                setExpanded(false);
            } else {
                setHeight(projectBodyHeight.current);
                setExpanded(true);
            }
        }
    }

    const classStateName = expanded ? "expanded" : "collapsed";

    return (
        <div className={`expandable ${classStateName}`} onClick={expandProject} ref={projectBody} style={{ maxHeight: `${height}px` }}>
            {children}
        </div>
    );
};

export default Expandable;