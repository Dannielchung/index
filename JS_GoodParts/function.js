var m = [12, 3, 4, 22, 16, 33, 22, 87]
m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
})

var by = function(name) {
    return function(o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
            	return a < b ? -1 : 1 ;
            }
            return typeof a < typeof b ? -1 : 1 ;
        }
        else{
        	throw{
        		name: 'Error',
        		message: 'Expected an object when sorting by' + name;
        	};
        }
    }
}
