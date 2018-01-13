//assert is part of node and is used to check 2 values 
const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is a constructor, that is why is with capital letter
const Web3 = require('web3');

//Every instance that we creating with web3 is to connect
//with differnt ethereum network, ganache.provider() is 
//instance of local ethereum network
const web3 = new Web3(ganache.provider());

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}
//we define car here so we can have a global scope for the variable car and we can access from 
//beforeEach() for new instance and from it for testing values
let car;
//befeoreEach is run with new instance every time before it statements
beforeEach(() => {
    car = new Car();
});
//the string Car is for our info for the test
describe('Car', () => {
    it('can park', () => {
        //check if the outcome of car.park() is equal to 'stopped'
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'vroom')
    });
});