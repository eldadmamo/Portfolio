import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({color,onClick, children}) => {
    return (
            <div>
            {color}
                {children}
            <button onClick={onClick}>Click Me</button>
            </div>
)
};

// export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
//     return (
//         <div>
//             {color}
//         </div>
//     )
// }

