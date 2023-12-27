import React, {useState, useEffect} from "react";

export function useTitle(): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [title, setTitle] = useState<string>("");

    function updateTitle() {
        const htmlTitle = document.querySelector("title");
        if (htmlTitle === null) {
            return;
        }

        htmlTitle.innerHTML = title;
        return;
    }
    useEffect(updateTitle, [title]);

    return [title, setTitle];
}