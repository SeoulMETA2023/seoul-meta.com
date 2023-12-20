import React from 'react';

export default function Home() {
    return (
        <div className={"h-145 mobile:h-160 bg-black-gear overflow-hidden relative"}>
            <img className={"w-screen absolute bottom-0 translate-y-1/2 animate-gear-spin"}
                 src={"image/meta_icon(white).svg"}
                 alt={"meta gear"}/>
            <div>

            </div>
        </div>
    );
}