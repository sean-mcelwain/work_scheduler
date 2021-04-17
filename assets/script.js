// Assign Time Information to the Current Time to variables, the second variable is for the Current Hour

var now = dayjs();
var time = now.$H

// Create a variable for the element with the id = currentDay, and variables assigned to Work Hours as string and then integer data

var currentDayEl = $("#currentDay").text(now.format('dddd, MMMM Do, YYYY h:mm a')); 
var workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."]
var workHoursInt = [7,8,9,10,11,12,13,14,15]

// Load data from Local Storage to savedInput Variables

var savedInput0 = (localStorage.getItem("input0"));
var savedInput1 = (localStorage.getItem("input1"));
var savedInput2 = (localStorage.getItem("input2"));
var savedInput3 = (localStorage.getItem("input3"));
var savedInput4 = (localStorage.getItem("input4"));
var savedInput5 = (localStorage.getItem("input5"));
var savedInput6 = (localStorage.getItem("input6"));
var savedInput7 = (localStorage.getItem("input7"));
var savedInput8 = (localStorage.getItem("input8"));

// Assign that input to variables for each textarea Value

var textarea0_Val = savedInput0;
var textarea1_Val = savedInput1;
var textarea2_Val = savedInput2;
var textarea3_Val = savedInput3;
var textarea4_Val = savedInput4;
var textarea5_Val = savedInput5;
var textarea6_Val = savedInput6;
var textarea7_Val = savedInput7;
var textarea8_Val = savedInput8;

  console.log(textarea0_Val)

// Create a variable for the element with the class = container
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

//Creating the save buttons in HTML and adding a class defined in CSS
        
var saveBtn0 = $("<div>").addClass("saveBtn");
var saveBtn1 = $("<div>").addClass("saveBtn");
var saveBtn2 = $("<div>").addClass("saveBtn");
var saveBtn3 = $("<div>").addClass("saveBtn");
var saveBtn4 = $("<div>").addClass("saveBtn");
var saveBtn5 = $("<div>").addClass("saveBtn");
var saveBtn6 = $("<div>").addClass("saveBtn");
var saveBtn7 = $("<div>").addClass("saveBtn");
var saveBtn8 = $("<div>").addClass("saveBtn");

var saveBtnText = "📌";  // I saw the link in the HTML to get the other iamge from the mock-up, I used this instead (looked better than the floppy disk character)

var textarea0 = $("<textarea>").val(textarea0_Val);
var textarea1 = $("<textarea>").val(textarea1_Val);
var textarea2 = $("<textarea>").val(textarea2_Val);
var textarea3 = $("<textarea>").val(textarea3_Val);
var textarea4 = $("<textarea>").val(textarea4_Val);
var textarea5 = $("<textarea>").val(textarea5_Val);
var textarea6 = $("<textarea>").val(textarea6_Val);
var textarea7 = $("<textarea>").val(textarea7_Val);
var textarea8 = $("<textarea>").val(textarea8_Val);

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





$(saveBtn0).on("click", function (event) {
    var textarea0_Val = textarea0.val().trim();
    localStorage.setItem("input0", (textarea0_Val));
});

$(saveBtn2).on("click", function (event) {
    var textarea2_Val = textarea2.val().trim();
    localStorage.setItem("input2", (textarea2_Val));
});

$(saveBtn1).on("click", function (event) {
    var textarea1_Val = textarea1.val().trim();
    localStorage.setItem("input1", (textarea1_Val));
});

$(saveBtn3).on("click", function (event) {
    var textarea3_Val = textarea3.val().trim();
    localStorage.setItem("input3", (textarea3_Val));
});

$(saveBtn4).on("click", function (event) {
    var textarea4_Val = textarea4.val().trim();
    localStorage.setItem("input4", (textarea4_Val));
});

$(saveBtn5).on("click", function (event) {
    var textarea5_Val = textarea5.val().trim();
    localStorage.setItem("input5", (textarea5_Val));
});

$(saveBtn6).on("click", function (event) {
    var textarea6_Val = textarea6.val().trim();
    localStorage.setItem("input6", (textarea6_Val));
});

$(saveBtn7).on("click", function (event) {
    var textarea7_Val = textarea7.val().trim();
    localStorage.setItem("input7", (textarea7_Val));
});

$(saveBtn8).on("click", function (event) {
    var textarea8_Val = textarea8.val().trim();
    localStorage.setItem("input8", (textarea8_Val));
});








 