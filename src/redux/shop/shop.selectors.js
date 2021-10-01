import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

//convert the data to array because it's object and .map cannot work 
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

//select 1 collection ex. hats
export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
)

