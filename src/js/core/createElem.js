export default function createElem (elemTag, elemClass) {
    const $el = document.createElement(elemTag);
    $el.classList.add(elemClass)
    return $el
}