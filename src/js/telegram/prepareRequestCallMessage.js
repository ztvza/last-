const prepareRequestCallMessage = requestCallData => {
	return `Yo! Заявка! Имя: ${requestCallData.name}; Email: ${requestCallData.email}; Телефон: ${requestCallData.phone}; `
}

module.exports = prepareRequestCallMessage;