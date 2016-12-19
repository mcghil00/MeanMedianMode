Framework7.prototype.plugins.von = function (app, params) {
    if (!params) return;

    return {
        hooks: {
            appInit: function () {
            	var _this = this;

				$$('#cal_btn').on('click',function (){
					  
    				

					var numlist=$$("input[data-cmd='list']").val().split(',');
						// var mean = _this.findmean(numlist);
						// var median = _this.findMedian(numlist);	
						// var mode = _this.findMode(numlist);
						// var content = "The numbers entered are:"+numlist+"<br style/> Mean: "+mean+" <br/> Median: "+median+" <br/> Mode: "+mode;


					$.each(numlist,function (a,b)
					{
						numlist[a] = parseInt(numlist[a]);
						var mean = _this.findmean(numlist);
						var median = _this.findMedian(numlist);
						var mode = _this.findMode(numlist);

						var content = "The numbers you entered are:&nbsp;&nbsp;"+numlist+"<br/> The MEAN number is:&nbsp;"+mean+" <br/> The MEDIAN number is:&nbsp;"+median+"<br/> The MODE number is:&nbsp;"+mode;
						$$("#statshere").html(content);

					// console.log(numlist);
					// console.log("Mean: "+mean);
					// console.log("Median: "+median);
					// console.log("Mode: "+mode);
					
					});
        			
				
					
					
				});
					  
            },
            findmean: function(num){
		 		var y = 0;
		 		$.each(num,function(a,b){
		 			y = y + b;
		 		})
		 		return y/num.length;
		 	},
			findMedian: function(num) {
		        var middle = Math.floor(num.length/2);

		        if(num.length % 2)
		            return num[middle];
		        else
		            return (num[middle-1] + num[middle]) / 2.0;
	        },
	        findMode: function(nummode){
	        	var fmode = [];
	        	var maxnum =nummode[0], maxCount =1;
	        	for(var i =0; i<nummode.length; i++){
	        		var num = nummode[i];
	        		if(fmode[num] == null)
	        			fmode[num] = 1;
	        			fmode[num]++;
	        		if(fmode[num] > maxCount){
	        			maxnum=num;
	        			maxCount=fmode[num];
	        		}
	        	}

			    return maxnum;
			}
        }
    };
};

 var $$ = Dom7;
 var app = new Framework7({
	von:true
});
