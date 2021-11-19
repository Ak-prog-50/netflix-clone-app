const axios = require('axios').default

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})


const fetchData = async (end_point) => {
    const response = await instance.get(end_point)
    const data = response.data.results
    return data
}



export {fetchData}