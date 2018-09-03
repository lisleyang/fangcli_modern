var expect = require('chai').expect;

var dummy = {
    aboveFive: function(n:number) {
        return n > 5;
    },

    setClass: function(el:HTMLElement, classname:string) {
        el.className = classname;
    }
};
describe('Checking that everything is hooked up nicely', function() {
    it('Simple function', function() {
        expect(dummy.aboveFive(10)).to.equal(true);
    });
    it('involving the dom', function() {
        var el = document.createElement('span');

        dummy.setClass(el, 'foo');

        expect(el.className).to.equal('foo');
    });
});