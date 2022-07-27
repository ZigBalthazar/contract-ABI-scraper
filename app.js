
const ethers = require('ethers');

let provider = new ethers.providers.JsonRpcProvider("INFURA URL",'NETWORKISH');

const ABI = []

  let contract = new ethers.Contract("CONTRACT ADDRESS", ABI, provider);
  const func = [];
    Object.keys(testABI).map(function(key, value) {
        if (testABI[key].type == "function") {
            func.push({'name': testABI[key].name, 'inputs': testABI[key].inputs})
        }
    });
    console.log(func)
    
  async function callFunc(funcName,args) {
       let res = await funcName(args)
       return res;
    }

    callFunc(contract.functionName,args)
    .then((res)=>{
      console.log(res)
    })
   