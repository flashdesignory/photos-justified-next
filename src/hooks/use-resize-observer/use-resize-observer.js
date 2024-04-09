import { useRef, useEffect } from "react";

export function useResizeObserver({ callback }) {
    const ref = useRef(undefined);
    let resizeObserver = useRef(undefined);

    useEffect(
        function () {
            const element = ref.current;
            resizeObserver.current = new ResizeObserver(callback);
            resizeObserver.current.observe(element);

            return function() {
                if (resizeObserver.current) {
                    resizeObserver.current.unobserve(element);
                }
            }
        },
        [callback]
    );

    return { ref };
}
