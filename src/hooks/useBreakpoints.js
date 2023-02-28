import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";


function useBreakpoints() {
    const isMobile = useMediaQuery({ maxWidth: '479px' })
    const isTablet = useMediaQuery({ minWidth: '480px', maxWidth: '767px' })
    const isLaptop = useMediaQuery({ minWidth: '768px', maxWidth: '1023px' })
    const isDesktop = useMediaQuery({ minWidth: '1024px' })
    
    const breakpoint = useMemo(() => {
        switch(true){
            case isMobile:
                return 'mobile'
            case isTablet:
                return 'tablet'
            case isLaptop:
                return 'laptop'
            case isDesktop:
                return 'desktop'
            default:
                return 'unknown'
        }
    }, [isMobile, isTablet, isLaptop, isDesktop])

    return breakpoint
}

export default useBreakpoints