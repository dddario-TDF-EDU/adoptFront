/* eslint-disable no-unused-vars */


export const decodePayload = (token) => {
    const [header, payload, signature] = token.split('.');
    const decodePay = JSON.parse(atob(payload));
    
    return {
        id : decodePay.sub,
        role : decodePay.role,
        email : decodePay.email
    }
}


