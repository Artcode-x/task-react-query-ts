const mainSelector = (store: { store: any }) => store.store

export default mainSelector

export const totalCountResults = (store: any) => mainSelector(store).total_count
