const capitalize = (string) => {
    return string.at(0).toUpperCase() + string.slice(1)
}

const slidePerPage = (breakpoint, initial) => {
    switch(breakpoint){
        case 'tablet':
            return initial + 1
        case 'laptop':
            return initial + 2
        case 'desktop':
            return initial + 3
        default:
            return initial
    }
}

const sliderHeightPopular = (breakpoint, initial) => {
    switch(breakpoint){
        case 'tablet':
            return `${initial + 1}rem`
        case 'laptop':
            return `${initial + 1.5}rem`
        case 'desktop':
            return `${initial + 2}rem`
        default:
            return `${initial}rem`
    }
}

const utils = {
    capitalize,
    slidePerPage,
    sliderHeightPopular
}

export default utils