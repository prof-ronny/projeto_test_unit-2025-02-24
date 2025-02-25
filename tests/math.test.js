
const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5); 
    });

test('subtrai 3 - 2 igual a 1', () => {
    expect(math.subtract(3, 2)).toBe(1);
    });
test('multiplica 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
    }
    );
test('divide 9 / 3 igual a 3', () => {
    expect(math.divide(9, 3)).toBe(3);
    }
    );
test('divide por zero', () => {
    expect(math.divide(6, 0)).toBe(Infinity);
    }  );




    