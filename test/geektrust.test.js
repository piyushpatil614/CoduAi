const todo=require('../geektrust')
const assert = require('assert');
let output2='ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP\nARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTA\nDEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP NJP PTA PTA BPL NDL NDL AGA ITJ NGP NGP'
let output1='ARRIVAL TRAIN_A ENGINE HYB NGP ITJ\nARRIVAL TRAIN_B ENGINE NJP PTA\nDEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP'
describe("Check Function getTrainAB()", function() {

    it("Test Case 1", function() {
      let output=todo.getTrainAB('C:/Users/pp69506/Downloads/coding-problem-artefacts-master/coding-problem-artefacts-master/NodeJS/input/input1.txt')
      console.log(output)
      assert.equal(output,output1)
    });

    it("Test Case 2", function() {
      let output=todo.getTrainAB('C:/Users/pp69506/Downloads/coding-problem-artefacts-master/coding-problem-artefacts-master/NodeJS/input/input2.txt')
      console.log(output)
      assert.equal(output,output2)
    });
  
  });