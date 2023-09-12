const initialStateCustomer = {
	fullName: '',
	nationalID: '',
	createdAt: '',
};

function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		default:
			return state;
		case 'customer/createCustomer':
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			};
		case 'customer/updateName':
			return {
				...state,
				fullName: action.payload,
			};
	}
}

function createCustomer(fullName, nationalID) {
	return {
		type: 'customer/createCustomer',
		payload: {
			fullName,
			nationalID,
			createdAt: new Date().toISOString(),
		},
	};
}
function updateName(fullName) {
	return { type: 'customer/updateName', payload: fullName };
}

export { updateName, createCustomer, customerReducer };
