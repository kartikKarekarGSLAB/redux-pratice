export const addMessage = (message) => {
    console.log('inside add message controller');
    return {
        type : 'ADD_MESSAGE',
        message
    }
}