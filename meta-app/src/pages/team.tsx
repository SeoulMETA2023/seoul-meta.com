import React, {useEffect} from 'react';
import {useTitle} from "../utils/title";

export default function Team() {
    const [, setTitle] = useTitle()

    useEffect(() => {
        setTitle("Team | META")
    }, []);

    return (<div></div>);
};