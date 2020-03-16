function surfaceArea(A) {
    var north = 0;
    var south = 0;
    var east = 0;
    var west = 0;
    if(A.length == 1){
        north = 1;
        south = 1;
        east = 1;
        west =1
    }else if(A[0].length == undefined)
    {
        for(var i = 0; i < A.length; i++){
            north += A[i];
            south += A[i];
            if( i == 0){
                east += A[i]
            }else{
                if(A[i] > A[i-1]){
                    east += A[i] -A[i-1]
                }
            }
            west = east
        }
    }
    else if (A.length > 1 && A[0] != undefined){
        for(var i = 0; i < A.length; i++){
            for(var j = 0; j < A[i].length; j++){
                //calculate north surface area
                if(j <= A.length-2){
                    if(A[i][j] > A[i][j+1])
                    north = north + (A[i][j] - A[i][j+1])  
                }else if(j == A.length-1){
                    north = north + A[i][j]    
                }
                
                 //calculate south surface area
                if(j >= A.length-2){
                    if(A[i][j] > A[i][j-1]){
                        south = south + (A[i][j] - A[i][j-1]);  
                    }
                }else if(j == 0){
                    south = south + (A[i][j]);
                }
                
                //calculate west surface area
                if(i <= A[i].length-2){
                    if(A[i][j] > A[i+1][j]){
                        west = west +(A[i][j]  - A[i+1][j])  
                    }  
                }else if(i = A[i].length-1){
                    west = west + (A[i][j])
                }
                
                //calculate east surface area        
                if(i >= A[i].length-2){
                    if(A[i][j] > A[i-1][j]){
                        east = east +(A[i][j]  - A[i-1][j])
                    }  
                }else if(i == 0){
                    east = east + (A[i][j])  
                }        
      
            }
        }  
    }
    
    var top = 0;
    if(A[0].length == undefined){
        top = A.length
    }else{
        top = (A.length*A[0].length);
    }
    return north + south + east + west + (2*top)
}
