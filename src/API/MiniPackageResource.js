export default {
    getAll: () => fetch(
    "http://localhost:8083/pickup",
    {mode: 'cors'}
    ),
    createPackage: (miniPackage) => fetch(
    "http://localhost:8083/pickup/ware-house-in", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(miniPackage)
    })
}