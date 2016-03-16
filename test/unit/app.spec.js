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
        });
        it('should return false when b is equal or less than 0', function () {
            expect(app.areaOfTrapezoid(2, 0, 4)).toEqual(false);
        });
        it('should return false when h is equal or less than 0', function () {
            expect(app.areaOfTrapezoid(2, 5, 0)).toEqual(false);
        });
    });
    describe('Descending function', function () {
        it('should write descending numbers', function () {
            expect(app.getDescendingNumbers(6,5)).toEqual("6 5");
            expect(app.getDescendingNumbers(8,5)).toEqual("8 7 6 5");
        });
        it('should return false when typeof numberFrom is equal typeof numberTo', function () {
            expect(app.getDescendingNumbers(5, [3,4])).toEqual(false);
        });
        it('should return false when numberFrom is smaller than numberTo', function () {
            expect(app.getDescendingNumbers(5, 9)).toEqual(false);
        });
    });
});
