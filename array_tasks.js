var arrayTasks = {

	concat: function (arr1, arr2) {
		for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		// add item to end of array then swap with elements until in the right location
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

	sum: function (arr) {
		var total = 0;
		for (var i = 0; i < arr.length; i++){
			element = parseInt(arr[i]);
			total = total + element;
		}
		return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		// checks element in front and behind. if element behind is the same and the next element is not equal then add the item to the array as it must be the last one in the ordered array.
		for (var i = 1; i < arr.length; i++){
			if(arr[i - 1] === arr[i] && arr[i] !== arr[i + 1]){
				newArray.push(arr[i]);
			}
		}
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for (var i = 0; i < arr.length; i++){
			if(arr[i] !== valueToRemove){
				newArray.push(arr[i]);				
			}	
		}
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
