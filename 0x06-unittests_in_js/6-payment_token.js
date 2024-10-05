
const getPaymentTokenFromAPI = (bool) => {
    if (bool) {
        return Promise.resolve({data: 'Successful response from the API'})
    }
}

module.exports = getPaymentTokenFromAPI;