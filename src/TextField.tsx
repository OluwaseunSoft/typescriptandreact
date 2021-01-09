import React from "react";

// interface Props{
//     text: string;
// }

export const TextField: React.FC<{text: string}> = () => {
    return(
        <div>
            <input>What to enter right now</input>
        </div>
    )
}