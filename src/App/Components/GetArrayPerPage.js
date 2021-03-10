const GetArrayPerPage = (currentPage, itemsPerPage, arr) => {
    let currentArr;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    currentArr = arr.slice(indexOfFirst, indexOfLast);

    return currentArr;
}


export default GetArrayPerPage