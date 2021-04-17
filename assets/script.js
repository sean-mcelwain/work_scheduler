
var now = dayjs();
console.log(now);
var time = now.$H
console.log(time);
// Create a variable for the element with the id = currentDay, and target the date within the now object

var currentDayEl = $("#currentDay").text(now.format('dddd, MMMM Do, YYYY h:mm a')); 
var workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."]
var workHoursInt = [7,8,9,10,11,12,13,14,15]



// Create a variable for the element with the class = container, 
var row_0 = $("<div>").addClass("row");
var row_1 = $("<div>").addClass("row");
var row_2 = $("<div>").addClass("row");
var row_3 = $("<div>").addClass("row");
var row_4 = $("<div>").addClass("row");
var row_5 = $("<div>").addClass("row");
var row_6 = $("<div>").addClass("row");
var row_7 = $("<div>").addClass("row");
var row_8 = $("<div>").addClass("row");

var hourCol0 = $("<div>").addClass("hour");
var hourCol1 = $("<div>").addClass("hour");
var hourCol2 = $("<div>").addClass("hour");
var hourCol3 = $("<div>").addClass("hour");
var hourCol4 = $("<div>").addClass("hour");
var hourCol5 = $("<div>").addClass("hour");
var hourCol6 = $("<div>").addClass("hour");
var hourCol7 = $("<div>").addClass("hour");
var hourCol8 = $("<div>").addClass("hour");


// Time blocks changing colors by checking time (I know this isn't the best way to achieve this result)
var timeBlock0 = $("<div>").addClass("time-block");
    if (time >= 9){
        timeBlock0 = $("<div>").addClass("past");
        if (time == 9){
            timeBlock0 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock0 = $("<div>").addClass("future");
    };
    if (time == 9){
        timeBlock0 = $("<div>").addClass("present"); 
        }


var timeBlock1 = $("<div>").addClass("time-block");
    if (time >= 10){
        timeBlock1 = $("<div>").addClass("past");
        if (time == 10){
            timeBlock1 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock1 = $("<div>").addClass("future");
    };
    if (time == 10){
        timeBlock1 = $("<div>").addClass("present"); 
        }


var timeBlock2 = $("<div>").addClass("time-block");
    if (time >= 11){
        timeBlock2 = $("<div>").addClass("past");
        if (time == 11){
            timeBlock2 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock2 = $("<div>").addClass("future");
    };
    if (time == 11){
        timeBlock2 = $("<div>").addClass("present"); 
        }


var timeBlock3 = $("<div>").addClass("time-block");
    if (time >= 12){
        timeBlock3 = $("<div>").addClass("past");
        if (time == 12){
            timeBlock3 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock3 = $("<div>").addClass("future");
    };
    if (time == 12){
        timeBlock3 = $("<div>").addClass("present"); 
        }


var timeBlock4 = $("<div>").addClass("time-block");
    if (time >= 13){
        timeBlock4 = $("<div>").addClass("past");
        if (time == 13){
            timeBlock4 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock4 = $("<div>").addClass("future");
    };
    if (time == 13){
        timeBlock4 = $("<div>").addClass("present"); 
        }


var timeBlock5 = $("<div>").addClass("time-block");
    if (time >= 14){
        timeBlock5 = $("<div>").addClass("past");
        if (time == 14){
            timeBlock5 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock5 = $("<div>").addClass("future");
    };
    if (time == 14){
        timeBlock5 = $("<div>").addClass("present"); 
        }


var timeBlock6 = $("<div>").addClass("time-block");
    if (time >= 15){
        timeBlock6 = $("<div>").addClass("past");
        if (time == 15){
            timeBlock6 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock6 = $("<div>").addClass("future");
    };
    if (time == 15){
        timeBlock6 = $("<div>").addClass("present"); 
        }

var timeBlock7 = $("<div>").addClass("time-block");
    if (time >= 16){
        timeBlock7 = $("<div>").addClass("past");
        if (time == 16){
            timeBlock7 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock7 = $("<div>").addClass("future");
    };
    if (time == 16){
        timeBlock7 = $("<div>").addClass("present"); 
        }


var timeBlock8 = $("<div>").addClass("time-block");
    if (time >= 17){
        timeBlock8 = $("<div>").addClass("past");
        if (time == 17){
            timeBlock8 = $("<div>").addClass("present"); 
            }
    } else {
        timeBlock8 = $("<div>").addClass("future");
    };
    if (time == 17){
        timeBlock8 = $("<div>").addClass("present"); 
        }

var saveBtn0 = $("<div>").addClass("saveBtn");
var saveBtn1 = $("<div>").addClass("saveBtn");
var saveBtn2 = $("<div>").addClass("saveBtn");
var saveBtn3 = $("<div>").addClass("saveBtn");
var saveBtn4 = $("<div>").addClass("saveBtn");
var saveBtn5 = $("<div>").addClass("saveBtn");
var saveBtn6 = $("<div>").addClass("saveBtn");
var saveBtn7 = $("<div>").addClass("saveBtn");
var saveBtn8 = $("<div>").addClass("saveBtn");

var saveBtnText = "Save";

var textarea0 = $("<textarea>");
var textarea1 = $("<textarea>");
var textarea2 = $("<textarea>");
var textarea3 = $("<textarea>");
var textarea4 = $("<textarea>");
var textarea5 = $("<textarea>");
var textarea6 = $("<textarea>");
var textarea7 = $("<textarea>");
var textarea8 = $("<textarea>");

var containerEl = $(".container")


containerEl.append(row_0);
row_0.append(hourCol0);
hourCol0.text(workHours[0])
row_0.append(timeBlock0);
timeBlock0.append(textarea0);
row_0.append(saveBtn0);
saveBtn0.text(saveBtnText)

containerEl.append(row_1);
row_1.append(hourCol1);
hourCol1.text(workHours[1])
row_1.append(timeBlock1);
timeBlock1.append(textarea1);
row_1.append(saveBtn1);
saveBtn1.text(saveBtnText)

containerEl.append(row_2);
row_2.append(hourCol2);
hourCol2.text(workHours[2])
row_2.append(timeBlock2);
timeBlock2.append(textarea2);
row_2.append(saveBtn2);
saveBtn2.text(saveBtnText)

containerEl.append(row_3);
row_3.append(hourCol3);
hourCol3.text(workHours[3])
row_3.append(timeBlock3);
timeBlock3.append(textarea3);
row_3.append(saveBtn3);
saveBtn3.text(saveBtnText)

containerEl.append(row_4);
row_4.append(hourCol4);
hourCol4.text(workHours[4])
row_4.append(timeBlock4);
timeBlock4.append(textarea4);
row_4.append(saveBtn4);
saveBtn4.text(saveBtnText)

containerEl.append(row_5);
row_5.append(hourCol5);
hourCol5.text(workHours[5])
row_5.append(timeBlock5);
timeBlock5.append(textarea5);
row_5.append(saveBtn5);
saveBtn5.text(saveBtnText)

containerEl.append(row_6);
row_6.append(hourCol6);
hourCol6.text(workHours[6])
row_6.append(timeBlock6);
timeBlock6.append(textarea6);
row_6.append(saveBtn6);
saveBtn6.text(saveBtnText)

containerEl.append(row_7);
row_7.append(hourCol7);
hourCol7.text(workHours[7])
row_7.append(timeBlock7);
timeBlock7.append(textarea7);
row_7.append(saveBtn7);
saveBtn7.text(saveBtnText)

containerEl.append(row_8);
row_8.append(hourCol8);
hourCol8.text(workHours[8])
row_8.append(timeBlock8);
timeBlock8.append(textarea8);
row_8.append(saveBtn8);
saveBtn8.text(saveBtnText)

var textarea0_Val = $("<textarea>");
var textarea1_Val = $("<textarea>");
var textarea2_Val = $("<textarea>");
var textarea3_Val = $("<textarea>");
var textarea4_Val = $("<textarea>");
var textarea5_Val = $("<textarea>");
var textarea6_Val = $("<textarea>");
var textarea7_Val = $("<textarea>");
var textarea8_Val = $("<textarea>");



$(saveBtn0).on("click", function (event) {
    event.preventDefault();
    console.log("Button 0")
    var textarea0_Val = textarea0.val().trim();
    localStorage.setItem("input0", (textarea0_Val));
  });







 