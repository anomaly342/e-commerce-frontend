const compareString = (a: string, b: string) => {
	const aLength = a.length;
	const bLength = b.length;

	const length = aLength > bLength ? aLength : bLength;

	for (let i = 0; i < length; i++) {
		if (i === aLength - 1 && i === bLength - 1) {
			// Case 1: Stop comparison if both string is identical in both length and content
			return 0;
		} else if (i === aLength - 1) {
			// Case 2: If length of a is shorter than b
			return 1;
		} else if (i === bLength - 1) {
			// Case 3: If length of b is shorter than a
			return -1;
		}

		if (a.charCodeAt(i) < b.charCodeAt(i)) {
			return -1;
		} else if (a.charCodeAt(i) > b.charCodeAt(i)) {
			return 1;
		}
	}

	return 0;
};

export default compareString;
