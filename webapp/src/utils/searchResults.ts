const searchApiData = (searchStr = '', results: any) => {
    return new Promise((resolve,reject) => {
        let result = results?.filter((r: any) => r.name.toLowerCase().includes(searchStr.toLocaleLowerCase()));
        resolve(result)
    })
}

export const getUserSearch = async (searchStr: any, results: any) => {
    try {
        let res = await searchApiData(searchStr, results);
        return res
    } catch (error) {
        throw new Error("Error occoured")
    }
}