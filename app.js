const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function AgeCalculater() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;
    let birthDetail = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (birthDetail.year > currentYear || (birthDetail.month > currentMonth && birthDetail.year == currentYear) || (birthDetail.date > currentDate && birthDetail.month == currentMonth && birthDetail.year == currentYear)) {
        alert("Not Born yet");
        return;
    }
    birthYear = currentYear - birthDetail.year;
    if (currentMonth >= birthDetail.month) {
        birthMonth = currentMonth - birthDetail.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetail.month
    }

    if (currentDate >= birthDetail.date) {
        birthDate = currentDate - birthDetail.date;

    } else {
        birthMonth--;
        let day = month[currentMonth - 2]
        birthDate = day + currentDate - birthDetail.date;
    }
    if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;


    }
    //   console.log(birthYear, birthMonth, birthDate);
    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("day").textContent = bDate;

}


function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        month[1] = 29;

    } else {
        month[1] = 28;
    }
    console.log(year, month[1]);
}