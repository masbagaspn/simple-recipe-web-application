const capitalize = (string) => {
    return string.at(0).toUpperCase() + string.slice(1)
}

const changeImageSize = (url) => {
    const replaceUrl = url.replace('312x231', '500x500')
    return replaceUrl
}

const changeImageProp = (obj) => {
    return { ...obj, image: changeImageSize(obj.image) }
}

const changeImageArray = (arr) => {
    return arr.map(item => ({ ...item, image: changeImageSize(item.image) }))
}

const utils = {
    capitalize,
    changeImageSize,
    changeImageProp,
    changeImageArray,
}

export default utils