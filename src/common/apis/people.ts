import axios from 'axios'

export interface PersonalData {
  name: string
  height: number
  weight: number
}

const people = {
  get: () => axios.get<PersonalData[]>('http://localhost:3000/people'),
  post: (data: PersonalData) => axios.post('http://localhost:3000/people', data)
}
export default people
