
function fetchJson(url) {
    return fetch(url)
        .then( response => {
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json()
        })

}

export function fetchProducts() {
    return fetchJson('http://localhost:7070/api/products')
}