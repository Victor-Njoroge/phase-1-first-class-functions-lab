const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  

  const createFareMultiplier = function (num2){
    return function (fare) {
        return fare*num2
    };
  };

  const fareMultiplier = createFareMultiplier();
  const fareDoubler = (fareMultiplier, response) =>{
     response = fareMultiplier*2
    return response;
  }
  
  const fareTripler = (fareMultiplier, response)=>{
    response = fareMultiplier*3
    return response;
  }


  const selectDifferentDrivers = (drivers, selectingDrivers) =>{
    return selectingDrivers(drivers)
  }