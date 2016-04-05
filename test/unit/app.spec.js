describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('Area function', function () {
        it('should calculate area of trapezoid', function () {
            expect(app.areaOfTrapezoid(3,5,2)).toEqual(8);
            expect(app.areaOfTrapezoid(5,15,2)).toEqual(20);
        });
        it('should return false when a is equal or less than 0', function () {
            expect(app.areaOfTrapezoid(0, 6, 34)).toEqual(false);
            expect(app.areaOfTrapezoid(-6, 6, 3)).toEqual(false);
        });
        it('should return false when b is equal or less than 0', function () {
            expect(app.areaOfTrapezoid(2, 0, 4)).toEqual(false);
            expect(app.areaOfTrapezoid(2, -2, 4)).toEqual(false);
        });
        it('should return false when h is equal or less than 0', function () {
            expect(app.areaOfTrapezoid(2, 5, 0)).toEqual(false);
            expect(app.areaOfTrapezoid(2, 5, -5)).toEqual(false);
        });
        it('should return false when a is not number', function () {
            expect(app.areaOfTrapezoid('d', 5, 3)).toEqual(false);
        });
        it('should return false when b is not number', function () {
            expect(app.areaOfTrapezoid(2, 'r', 4)).toEqual(false);
        });
        it('should return false when h is not number', function () {
            expect(app.areaOfTrapezoid(2, 5, 'od')).toEqual(false);
        });

    });
    describe('Descending function', function () {
        it('should write descending numbers', function () {
            expect(app.getDescendingNumbers(6,5)).toEqual("6 5");
            expect(app.getDescendingNumbers(8,4)).toEqual("8 7 6 5 4");
        });
        it('should return false when typeof numberFrom is not equal typeof numberTo', function () {
            expect(app.getDescendingNumbers(5, [3,4])).toEqual(false);
        });
        it('should return false when numberFrom is smaller than numberTo', function () {
            expect(app.getDescendingNumbers(5, 9)).toEqual(false);
        });
    });
    describe('Max function', function () {
        it('should write the maximum value of the array', function () {
            expect(app.maxArray([6,5,9])).toEqual([9]);
            expect(app.maxArray([0,5,2,5,8])).toEqual([8]);
        });
        it('should return false when array is not array', function () {
            expect(app.maxArray('string')).toEqual(false);
            expect(app.maxArray(3)).toEqual(false);
            expect(app.maxArray((4,2,5))).toEqual(false);
        });
        it('should return false when one or more element of the array is not number', function () {
            expect(app.maxArray([4,6,'e',3])).toEqual(false);
        });
    });
    describe('Square odd function', function () {
        it('should write the square of value of odd numbers.', function () {
            expect(app.squareOdd([6,5,9])).toEqual([6,25,81]);
        });
        it('should write the same value when element of array is even number.', function () {
            expect(app.squareOdd([6,10,2])).toEqual([6,10,2]);
        });
        it('should write the same value when element of array is string.', function () {
            expect(app.squareOdd([4,'34',2])).toEqual([4,'34',2]);
            expect(app.squareOdd([4,'string',2])).toEqual([4,'string',2]);
        });
        it('should return false when element of array is not number or string', function () {
            expect(app.squareOdd([6,10,(2,4)])).toEqual(false);
            expect(app.squareOdd([6,10,[2,3,6]])).toEqual(false);
        });
    });
});
