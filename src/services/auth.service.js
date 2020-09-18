import axios from 'axios'
import ApiRoutes from '@/api/apiRoutes'

// TODO Change API URL, login
const API_URL = 'http://localhost:8080/api/auth/'

class AuthService {
  login (user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    const variables = {
      user: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    }

    const query = `mutation registerUser($user: UserRequestBody!) {
      registerUser(user: $user) {
        user {
          id,
          username,
          email,
          active,
          createdAt,
          updatedAt
        }
      }
    }`

    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      url: ApiRoutes.GraphQL,
      data: JSON.stringify({
        query: query,
        variables: variables
      })
    })
  }
}

export default new AuthService()
