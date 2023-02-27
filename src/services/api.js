import { api } from "../utils/http-utils"

const API_KEY_QUERY = `apiKey=${import.meta.env.VITE_API_KEY}`

const getRandomRecipes = (query) => {
    return api.get(`/recipes/random?${API_KEY_QUERY}&number=10${query ? `&${query}` : ''}`)
}

const getRecipesByQuery = (query) => {
    return api.get(`/recipes/complexSearch?${API_KEY_QUERY}&number=12&${query}`)
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