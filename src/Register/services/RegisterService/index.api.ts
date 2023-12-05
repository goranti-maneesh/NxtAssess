import {registerAPIReqObj, registerAPISuccessRes, registerAPIFailureRes} from '../../stores/types'

import {RegisterServiceType} from './index'

export class RegisterService implements RegisterServiceType{
    fetchRegisterAPI = async (userDetails: registerAPIReqObj): Promise<registerAPISuccessRes | registerAPIFailureRes> => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }
        
        const ApiUrl = "https://user-access.onrender.com/register"

        const response = await fetch(ApiUrl, options)

        const data = await response.json()

        return({
            ...data,
            responseStatus: response.ok
        })
    }
}