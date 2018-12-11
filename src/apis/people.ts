import axios from 'axios'

export interface PersonalData {
  name: string
  height: number
  weight: number
}

const people = {
  get: () => axios.get<PersonalData[]>('http://localhost:8080/'),
  post: (data: PersonalData) => axios.post('http://localhost:8080/', data)
}
export default people
