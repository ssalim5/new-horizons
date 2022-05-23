import React from 'react'

import NavigationBar from './components/Navbar'
import Routes from './Routes'

import * as tf from '@tensorflow/tfjs'
import * as math from 'mathjs'
import { pow } from 'mathjs'

const App = () => {
  // let User_Ratings_Arr = [[5,3,-1,1,0,3,2,3],
  //                         [4,0,-1,1,1,-1,1,1],
  //                         [1,-1,-1,5,-1,1,3,4],
  //                         [1,0,2,4,0,2,-1,5],
  //                         [1,1,2,5,0,3,-1,-1],
  //                         [1,-1,3,1,0,2,-1,1],
  //                         [1,1,2,-1,1,3,-1,1],
  //                         [1,3,2,-1,1,-1,-1,2],
  //                         [2,1,-1,4,0,1,-1,3],
  //                         [1,0,2,3,1,5,-1,4],
  //                         [-1,1,5,4,1,0,3,-1],
  //                         [2,-1,3,0,1,0,3,2]] //6x4 array, 6 users, 4 activites
  // // let User_Features_Arr = [[4,4],[5,1],[0,2],[2,5],[3,3],[2,1]] //6x2
  // // let Activity_Features_Arr = [[3,1],[4,2],[2,5],[1,4]] //4x2
  // //Randomly Generate Feature Arrays
  // let numFeatures = 5;
  // let User_Features_Arr = []
  // for (let i=0;i<User_Ratings_Arr.length;i++){
  //   let user_features = []
  //   for (let j=0;j<numFeatures;j++){
  //         user_features.push(5*Math.random())
  //   }
  //       User_Features_Arr.push(user_features)
  // }
  // let Activity_Features_Arr = []
  // for (let i=0;i<User_Ratings_Arr[0].length;i++){
  //   let activity_features = []
  //   for (let j=0;j<numFeatures;j++){
  //         activity_features.push(Math.random()*5)
  //   }
  //       Activity_Features_Arr.push(activity_features)
  // }
  // //MXN Array : M: num users N num activities
  // // MxK * K*N // the multiplication we need to do 
  // // let User_Ratings = tf.tensor2d(User_Ratings_Arr)
  // // let User_Features = tf.tensor2d(User_Features_Arr)
  // // let Activity_Features = tf.tensor2d(Activity_Features_Arr)
  // let User_Ratings = math.matrix(User_Ratings_Arr)
  // let User_Features = math.matrix(User_Features_Arr)
  // let Activity_Features = math.matrix(Activity_Features_Arr)
  // const matFactorization =  (R,P,Q,FeatureSize,numSteps=1000,alpha=0.0002,beta=0.02) =>{
  //   Q = math.transpose(Q)
  //   for (let step = 0;step<numSteps;step++){
  //     R.forEach((value,index,matrix)=>{
  //       if (value>=0){
  //         let err = value - math.dot(math.transpose(math.row(P,index[0])._data),math.column(Q,index[1])._data)
  //         for (let k=0;k<FeatureSize;k++){
  //           let pInd = math.index(index[0],k)
  //           let qInd = math.index(k,index[1])
  //           let newP = P.subset(pInd)+ alpha*(2*err*Q.subset(qInd)-beta*P.subset(pInd)) 
  //           let newQ = Q.subset(qInd)+ alpha*(2*err*P.subset(pInd)-beta*Q.subset(qInd))  
  //           P.subset(pInd, newP )
  //           Q.subset(qInd, newQ)
  //         }
  //       }
  //     })
  //     // let estimatedRatings = math.multiply(P,Q)
  //     // console.log(estimatedRatings)
  //     let totalErr = 0
  //     R.forEach((value,index,matrix)=>{
  //       totalErr = totalErr + pow(value-math.dot(math.transpose(math.row(P,index[0])._data),math.column(Q,index[1])._data),2)
  //       for (let k=0;k<FeatureSize;k++){
  //         let pInd = math.index(index[0],k)
  //         let qInd = math.index(k,index[1])
  //         totalErr = totalErr + beta/2* (pow(P.subset(pInd),2)+pow(Q.subset(qInd),2))
  //       }
  //     })
  //     if (totalErr<0.001){
  //       return {P,Q}
  //     }
  //   }
  //   return{P,Q}
  // }
  // let {P,Q} = matFactorization(User_Ratings,User_Features,Activity_Features,math.size(User_Features)._data[1])
  // console.log(math.multiply(P,Q))
  return (
    <div>
      <NavigationBar />
      <Routes />
    </div>
  )
}

export default App
