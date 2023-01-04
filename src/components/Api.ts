import axios from 'axios'

type Params = {
    ipAdress: string;
    location: string;
    timezone: string;
    isp: string;
  };

type GetUsersResponse = {
    data: Params[];
};

export async function getUsers(ipAdress: string) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_q3Lq6O65vU886iuG4BfYfNp6b5Urz&ipAddress=${ipAdress}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      // console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
 