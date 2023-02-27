import { api } from "../utils/http-utils"

const API_KEY_QUERY = `apiKey=${import.meta.env.VITE_API_KEY}`

const getRandomRecipes = (query) => {
    return api.get(`/recipes/random?${query}&number=10&${API_KEY_QUERY}`)
}

const getRecipesByQuery = (query) => {
    return api.get(`/recipes/complexSearch?number=12&${query}&${API_KEY_QUERY}`)
}

const getRecipeInformationById = (id) => {
    return api.get(`/recipes/${id}/information?${API_KEY_QUERY}`)
}

const services = {
    getRandomRecipes,
    getRecipesByQuery,
    getRecipeInformationById
}

export default services