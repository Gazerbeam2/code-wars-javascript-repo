function invert(array) {
    return array.map((e) => e === -e ? Math.abs(e) : -e);
 }
