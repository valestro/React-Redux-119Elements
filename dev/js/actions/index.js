export const selectElement = (element, topicName) => {
    return {
        type: 'ELEMENT_SELECTED',
        payload: {"element": element, "topicName": topicName}
    }
};

export const selectFoo = (foo, topicName) => {
    return {
        type: 'FOO_SELECTED',
        payload: {"foo": foo, "topicName": topicName}
    }
};