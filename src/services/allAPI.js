import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"
// add video called by add component
export const addVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allvideos`, video)
}

// get all video called by VIEW component
export const getAllVideoAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos`, "")
}
// remove video called by videocard
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allvideos/${videoId}`, {})
}
// savehistory called by videoCard component
export const saveHistoryAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}
// get video history called by history component
export const getVideoHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}
// remove history called by history component
export const removeHistoryAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`, {})
}
// add category called by category component
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/allcategory`, categoryDetails)
}
// get category called by category component
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allcategory`, "")
}
// remove category called by category component
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allcategory/${categoryId}`, {})
}
// get a video called by category component
export const getAVideoAPI = async (videoId) => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos/${videoId}`, "")
}
// update category called by category component
export const updateCategoryAPI = async (categoryId, categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/allcategory/${categoryId}`, categoryDetails)
}
// get a category called by view component
export const getSingleCategoryAPI = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/allcategory/${categoryId}`, "")
}