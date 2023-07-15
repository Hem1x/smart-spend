export const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const inputOnlyNumber = (e, func) => {
    if(!isNaN(e.target.value)) {
        func(e.target.value)
    } else {
        e.target.value = null
    }
}