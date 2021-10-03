import axios from 'axios'
import { apiPath } from '@defaultValues'

const axiosClient = axios.create({
    baseURL: apiPath,
})

export default axiosClient