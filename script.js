function isSameType(value1, value2) {

	if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }
    // If one of the values is NaN and the other is not, return false
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return false;
    }
    // Check if both values are of the same type
    return typeof value1 === typeof value2;

	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
