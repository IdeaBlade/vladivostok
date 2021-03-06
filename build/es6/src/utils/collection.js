export function shallowEqual(a, b) {
    var k1 = Object.keys(a);
    var k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
export function flatten(a) {
    const target = [];
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
export function first(a) {
    return a.length > 0 ? a[0] : null;
}
export function and(bools) {
    return bools.reduce((a, b) => a && b, true);
}
export function merge(m1, m2) {
    var m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
export function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlscy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QixDQUFtQixFQUFFLENBQW1CO0lBQ25FLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUM7SUFDUixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNuQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCx3QkFBMkIsQ0FBUTtJQUNqQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELHNCQUF5QixDQUFNO0lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLENBQUM7QUFFRCxvQkFBb0IsS0FBZ0I7SUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELHNCQUF5QixFQUFzQixFQUFFLEVBQXNCO0lBQ3JFLElBQUksQ0FBQyxHQUF1QixFQUFFLENBQUM7SUFFL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCx3QkFBOEIsR0FBdUIsRUFBRSxRQUFxQztJQUMxRixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChhOiB7W3g6c3RyaW5nXTphbnl9LCBiOiB7W3g6c3RyaW5nXTphbnl9KTogYm9vbGVhbiB7XG4gIHZhciBrMSA9IE9iamVjdC5rZXlzKGEpO1xuICB2YXIgazIgPSBPYmplY3Qua2V5cyhiKTtcbiAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGtleTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrMS5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGsxW2ldO1xuICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW48VD4oYTogVFtdW10pOiBUW10ge1xuICBjb25zdCB0YXJnZXQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhW2ldLmxlbmd0aDsgKytqKSB7XG4gICAgICB0YXJnZXQucHVzaChhW2ldW2pdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0PFQ+KGE6IFRbXSk6IFQgfCBudWxsIHtcbiAgcmV0dXJuIGEubGVuZ3RoID4gMCA/IGFbMF0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5kKGJvb2xzOiBib29sZWFuW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIGJvb2xzLnJlZHVjZSgoYSxiKSA9PiBhICYmIGIsIHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8Vj4obTE6IHtba2V5OiBzdHJpbmddOiBWfSwgbTI6IHtba2V5OiBzdHJpbmddOiBWfSk6IHtba2V5OiBzdHJpbmddOiBWfSB7XG4gIHZhciBtOiB7W2tleTogc3RyaW5nXTogVn0gPSB7fTtcblxuICBmb3IgKHZhciBhdHRyIGluIG0xKSB7XG4gICAgaWYgKG0xLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICBtW2F0dHJdID0gbTFbYXR0cl07XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgYXR0ciBpbiBtMikge1xuICAgIGlmIChtMi5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgbVthdHRyXSA9IG0yW2F0dHJdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaDxLLCBWPihtYXA6IHtba2V5OiBzdHJpbmddOiBWfSwgY2FsbGJhY2s6IC8qKFYsIEspID0+IHZvaWQqLyBGdW5jdGlvbik6IHZvaWQge1xuICBmb3IgKHZhciBwcm9wIGluIG1hcCkge1xuICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGNhbGxiYWNrKG1hcFtwcm9wXSwgcHJvcCk7XG4gICAgfVxuICB9XG59Il19