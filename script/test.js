var fs = require('fs');
// import fs from 'fs'
let math = require('mathjs')
let {pow} = require('mathjs')
// import * as math from 'mathjs'
// import { pow } from 'mathjs'
const User_Ratings_Arr= require('../input.json'); 

const Hello = () =>{

// let User_Ratings_Arr =    
    // [[5,3,-1,1,0,3,2,3],
    // [4,0,-1,1,1,-1,1,1],
    // [1,-1,-1,5,-1,1,3,4],
    // [1,0,2,4,0,2,-1,5],
    // [1,1,2,5,0,3,-1,-1],
    // [1,-1,3,1,0,2,-1,1],
    // [1,1,2,-1,1,3,-1,1],
    // [1,3,2,-1,1,-1,-1,2],
    // [2,1,-1,4,0,1,-1,3],
    // [1,0,2,3,1,5,-1,4],
    // [-1,1,5,4,1,0,3,-1],
    // [2,-1,3,0,1,0,3,2]] 

    // fs.writeFile ("input.json", JSON.stringify(User_Ratings_Arr), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    // );
    let numFeatures = 5;
  let User_Features_Arr = []
  for (let i=0;i<User_Ratings_Arr.length;i++){
    let user_features = []
    for (let j=0;j<numFeatures;j++){
          user_features.push(5*Math.random())
    }
        User_Features_Arr.push(user_features)
  }
  let Activity_Features_Arr = []
  for (let i=0;i<User_Ratings_Arr[0].length;i++){
    let activity_features = []
    for (let j=0;j<numFeatures;j++){
          activity_features.push(Math.random()*5)
    }
        Activity_Features_Arr.push(activity_features)
  }
  // let User_Ratings = tf.tensor2d(User_Ratings_Arr)
  // let User_Features = tf.tensor2d(User_Features_Arr)
  // let Activity_Features = tf.tensor2d(Activity_Features_Arr)
  let User_Ratings = math.matrix(User_Ratings_Arr)
  let User_Features = math.matrix(User_Features_Arr)
  let Activity_Features = math.matrix(Activity_Features_Arr)
  const matFactorization =  (R,P,Q,FeatureSize,numSteps=1000,alpha=0.0002,beta=0.02) =>{
    Q = math.transpose(Q)
    for (let step = 0;step<numSteps;step++){
      R.forEach((value,index,matrix)=>{
        if (value>=0){
          let err = value - math.dot(math.transpose(math.row(P,index[0])._data),math.column(Q,index[1])._data)
          for (let k=0;k<FeatureSize;k++){
            let pInd = math.index(index[0],k)
            let qInd = math.index(k,index[1])
            let newP = P.subset(pInd)+ alpha*(2*err*Q.subset(qInd)-beta*P.subset(pInd)) 
            let newQ = Q.subset(qInd)+ alpha*(2*err*P.subset(pInd)-beta*Q.subset(qInd))  
            P.subset(pInd, newP )
            Q.subset(qInd, newQ)
          }
        }
      })
    //   let estimatedRatings = math.multiply(P,Q)
    //   console.log(estimatedRatings)
      let totalErr = 0
      R.forEach((value,index,matrix)=>{
        totalErr = totalErr + pow(value-math.dot(math.transpose(math.row(P,index[0])._data),math.column(Q,index[1])._data),2)
        for (let k=0;k<FeatureSize;k++){
          let pInd = math.index(index[0],k)
          let qInd = math.index(k,index[1])
          totalErr = totalErr + beta/2* (pow(P.subset(pInd),2)+pow(Q.subset(qInd),2))
        }
      })
      if (totalErr<0.001){
        return {P,Q}
      }
    }
    P.forEach((value,index,matrix)=>{
        P.subset(math.index(index[0],index[1]),+value.toFixed(2))
    })
    Q.forEach((value,index,matrix)=>{
        Q.subset(math.index(index[0],index[1]),+value.toFixed(2))
     })
    let estimatedRatings = math.multiply(P,Q)
    estimatedRatings.forEach((value,index,matrix)=>{
        estimatedRatings.subset(math.index(index[0],index[1]), +value.toFixed(2))
    })
    return{P,Q,estimatedRatings}
  }

  let {P,Q,estimatedRatings} = matFactorization(User_Ratings,User_Features,Activity_Features,math.size(User_Features)._data[1])
    fs.writeFile ("activityFeatures.json", JSON.stringify(P._data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
    )
    fs.writeFile ("userFeatures.json", JSON.stringify(Q._data), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    )
    fs.writeFile ("estimatedRatings.json", JSON.stringify(estimatedRatings._data), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    )
}
Hello()
// console.log(jsonData);