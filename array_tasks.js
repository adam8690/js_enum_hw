var arrayTasks = {

	concat: function (arr1, arr2) {
		for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.push(itemToAdd);
		for(var i = arr.length - 1; i > index; i--){
			var temp = arr[i-1];
			arr[i-1] = arr[i];
			arr[i] = temp;
			}
			return arr;
		},

	square: function (arr) {
		var newArray = [];
		for(var element of arr){
			newArray.push(element * element);
		}
		return newArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
