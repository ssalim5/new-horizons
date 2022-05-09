import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'

import * as tf from '@tensorflow/tfjs'
import * as math from 'mathjs'

const App = () => {
  let User_Ratings_Arr = [[5,3,0,1],[4,0,0,1],[1,1,0,5],[1,0,0,4],[0,1,5,4],[2,1,3,0]] //6x4 array, 6 users, 4 activites
  let User_Features_Arr = [[4,4],[5,1],[0,2],[2,5],[3,3],[2,1]] //6x2
  let Activity_Features_Arr = [[3,1],[4,2],[2,5],[1,4]] //4x2
  //Randomly Generate Feature Arrays
  // let numFeatures = 5;
  // let k = numFeatures
  // let User_Ratings_Arr = []
  // for (let i=0;i<User_Ratings_Arr.length;i++){
  //   let user_ratings = []
  //   for (let j=0;j<numFeatures;j++){
  //         user_ratings.push(Math.random)
  //   }
  //       User_Ratings_Arr.push(user_ratings)
  // }
  // let Activity_Ratings_Arr = []
  // for (let i=0;i<Activity_Ratings_Arr.length;i++){
  //   let activity_ratings = []
  //   for (let j=0;j<numFeatures;j++){
  //         activity_ratings.push(Math.random)
  //   }
  //       Activity_Ratings_Arr.push(activity_ratings)
  // }
  // let User_Ratings = tf.tensor2d(User_Ratings_Arr)
  // let User_Features = tf.tensor2d(User_Features_Arr)
  // let Activity_Features = tf.tensor2d(Activity_Features_Arr)
  let User_Ratings = math.matrix(User_Ratings_Arr)
  let User_Features = math.matrix(User_Features_Arr)
  let Activity_Features = math.matrix(Activity_Features_Arr)
  const matFactorization =  (R,P,Q,FeatureSize,numSteps=1000,alpha=0.0002,beta=0.02) =>{
    Q = math.transpose(Q)
    // console.log("USER",P.size())
    // console.log("ACTIVITES",Q.size())
    for (let step = 0;step<numSteps;step++){
      // for (let i =0;i<R.shape[0];i++){
      //   for (let j=0;j<R.shape[1];j++){
      //     for (let k = k<K;k++){
          // if (R.array()[i][j]>0){ //Only use non-zero ratings to calculate errors in feature matrices
          //   let err = R[i][j]-tf.dot(P.gather(i,0),Q(j,1))
          // } 
          // }
        // }
      // }
      R.forEach((value,index,matrix)=>{
        if (value>0){
          // console.log(P._data)
          // console.log(math.row(P,index[0])._data)
          // console.log(Q._data)
          // console.log(math.column(Q,index[1])._data)
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
      // console.log(P,Q)
      let estimatedRatings = math.multiply(P,Q)
      console.log(estimatedRatings)
    }
  }
  matFactorization(User_Ratings,User_Features,Activity_Features,math.size(User_Features)._data[1])
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
