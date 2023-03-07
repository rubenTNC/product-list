export default function createElem (elemTag, elemClass) {
    const elem = document.createElement(elemTag);
    elem.classList.add(elemClass)
    return elem
}