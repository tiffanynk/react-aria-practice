import { useRef } from 'react';
import { useButton } from "@react-aria/button";

export default function Button(props) {
    let ref = useRef();

    let {buttonProps, isPressed } = useButton(props, ref);

    return (
        <button {...buttonProps} ref={ref}>
            A button
        </button>
    )
}