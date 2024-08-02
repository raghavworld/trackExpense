

export const userTokenStorage =()=> {
   const token= JSON.parse(localStorage.getItem('userToken'))
    return token
}

 
export default userTokenStorage