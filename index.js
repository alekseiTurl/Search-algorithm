function searchEl(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i
    }
    return new Error('Element not found')
}
function binarySearch(arr, el) {
    let left = -1
    let right = arr.length
    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === el) return mid
        if (arr[mid] > el) right = mid
        else left = mid
    }
    return new Error('Element not found')
}
