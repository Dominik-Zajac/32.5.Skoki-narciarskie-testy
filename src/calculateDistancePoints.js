const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let hillNormal = (distance - kPoint) * 2;
	let hillBig = (distance - kPoint) * 1.8;
	let hillMammoth = (distance - kPoint) * 1.2; 

	switch (hillSize) {
		case 'normal':
			return 60 + hillNormal;
			break;
		case 'big':
			return 60 + hillBig;
			break;
		case 'mammoth':
			return 120 + hillMammoth;
			break;
		default:
			return 'DSQ';
	};
};

module.exports = calculateDistancePoints;