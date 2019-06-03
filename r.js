function checkYearsDifference(birthDayDate){
    var todayDate = new Date();
    var thisMonth = todayDate.getMonth();
    var thisYear = todayDate.getFullYear();
    var thisDay = todayDate.getDate();
    var monthBirthday = birthDayDate.getMonth(); 
    var yearBirthday = birthDayDate.getFullYear();
    var dayBirthday = birthDayDate.getDate();
    //first just make the difference between years
    var yearDifference = thisYear - yearBirthday;
    //then check months
    if (thisMonth == monthBirthday){
      //if months are the same then check days
      if (thisDay<dayBirthday){
        //if today day is before birthday day
        //then I have to remove 1 year
        //(no birthday yet)
        yearDifference = yearDifference -1;
      }
      //if not no action because year difference is ok
    }
    else {
      if (thisMonth < monthBirthday) {
        //if actual month is before birthday one
        //then I have to remove 1 year
        yearDifference = yearDifference -1;
      }
      //if not no action because year difference is ok
    }
    return yearDifference;
  }
  
  let a = '26.11.1994';
  '26.11.1994'.split("").reverse().join("").replace( /\./g,',');
  var birthday = new Date('1972, 08, 27');
  console.log(checkYearsDifference(birthday));