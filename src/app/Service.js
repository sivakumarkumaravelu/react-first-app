function fetchJson(url) {
    return fetch(url)
        .then( response => response.json() )

}

export function fetchProducts() {
    return fetchJson('http://localhost:7070/delayed/api/products')
}