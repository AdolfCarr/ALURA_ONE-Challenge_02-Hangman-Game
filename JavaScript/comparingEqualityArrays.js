function comparingEqualityArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else if (arr1.every((val) => arr2.includes(val))) {
		return true;
	}
}