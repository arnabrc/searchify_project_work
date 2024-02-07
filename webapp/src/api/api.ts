export const searchAllApiRequest = async (body: string = '', callback?: Function, loading?: Function) => {
    await fetch(`http://localhost:4100/searchify/getAll`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body
    })
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            if (callback) {
                callback(jsonData)
            }
        })
        .then(() => {
            if (loading) {
                loading();
            }
        })
        .catch((error) => {
            if (callback) {
                callback({
                    errorMessages: [error.message]
                })
            }
        })
};