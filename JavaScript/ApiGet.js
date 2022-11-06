let url = document.querySelector('#UrlSet').value;
let splitUrl = url.split('/');

let ColageName;
let title = document.querySelector('title');

if (splitUrl[splitUrl.length - 1] == "1") {
    ColageName = "فنی مهندسی";
    title.innerHTML = "کلاسیار - چارت دروس گروه فنی مهندسی";
}
else if (splitUrl[splitUrl.length - 1] == "2") {
    ColageName = "علوم پایه";
    title.innerHTML = "کلاسیار - چارت دروس گروه علوم پایه";
} else if (splitUrl[splitUrl.length - 1] == "3") {
    ColageName = "انسانی";
    title.innerHTML = "کلاسیار - چارت دروس گروه انسانی";
}

fetch(url)
    .then(api => {
        return api.json();
    })
    .then(Column => {

        let Tiltle = document.createTextNode(`${ColageName} - ${Column.Day} - هفته (${Column.Week}) - ساعت (${Column.Time}) - ${Column.Date}`);
        let Box_Title = document.createElement('p');
        let Box = document.querySelector('#Title');

        Box_Title.appendChild(Tiltle);
        Box.appendChild(Box_Title);


        FirstChart();

        function FirstChart() {

            if (Column.TimeSheet.length > 40) {
                var _FirstValue = 40;
            } else {
                _FirstValue = Column.TimeSheet.length;
            }

            for (let num = 0; num < _FirstValue; num++) {

                let RoomId_Text = document.createTextNode(Column.TimeSheet[num].RoomID);
                let CrsName_Text = document.createTextNode(Column.TimeSheet[num].CrsName);
                let PLName_Text = document.createTextNode(Column.TimeSheet[num].PLName);

                if (Column.TimeSheet[num].Description == "") {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Stime + '/' + Column.TimeSheet[num].Etime);
                } else {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Description);
                }

                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let p4 = document.createElement("p");

                let li = document.createElement("li");

                if (Column.TimeSheet[num].Status == 0) { li.style.backgroundColor = "rgb(226, 80, 80)"; }
                else if (Column.TimeSheet[num].Status == 1) { li.style.backgroundColor = "#e1e1e1"; }
                else if (Column.TimeSheet[num].Status == 2) { li.style.backgroundColor = "Lightblue"; }

                const ul = document.querySelector('ul');

                p1.appendChild(RoomId_Text);
                p2.appendChild(CrsName_Text);
                p3.appendChild(PLName_Text);
                p4.appendChild(Time_Text);

                li.appendChild(p1);
                li.appendChild(p2);
                li.appendChild(p3);
                li.appendChild(p4);

                ul.appendChild(li);
            }
            setTimeout(function () {
                let _RemoveChart = document.querySelectorAll('li');
                for (let x = 0; x < _RemoveChart.length; x++) {
                    _RemoveChart[x].remove();
                }

                if (Column.TimeSheet.length > 40) {
                    SecChart();
                } else {
                    FirstChart();
                }
            }, 60000);
        }

        function SecChart() {
            if (Column.TimeSheet.length > 80) {
                var _SecValue = 80;
            } else {
                _SecValue = Column.TimeSheet.length;
            }

            for (let num = 40; num < _SecValue; num++) {

                let RoomId_Text = document.createTextNode(Column.TimeSheet[num].RoomID);
                let CrsName_Text = document.createTextNode(Column.TimeSheet[num].CrsName);
                let PLName_Text = document.createTextNode(Column.TimeSheet[num].PLName);

                if (Column.TimeSheet[num].Description == "") {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Stime + '/' + Column.TimeSheet[num].Etime);
                } else {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Description);
                }

                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let p4 = document.createElement("p");

                let li = document.createElement("li");

                if (Column.TimeSheet[num].Status == 0) { li.style.backgroundColor = "rgb(226, 80, 80)"; }
                else if (Column.TimeSheet[num].Status == 1) { li.style.backgroundColor = "#e1e1e1"; }
                else if (Column.TimeSheet[num].Status == 2) { li.style.backgroundColor = "Lightblue"; }

                const ul = document.querySelector('ul');

                p1.appendChild(RoomId_Text);
                p2.appendChild(CrsName_Text);
                p3.appendChild(PLName_Text);
                p4.appendChild(Time_Text);

                li.appendChild(p1);
                li.appendChild(p2);
                li.appendChild(p3);
                li.appendChild(p4);

                ul.appendChild(li);
            }
            setTimeout(function () {
                let _RemoveChart = document.querySelectorAll('li');
                for (var i = 0; i < _RemoveChart.length; i++) {
                    _RemoveChart[i].remove();
                }

                if (Column.TimeSheet.length > 80) { ThirdChart(); }
                else { FirstChart(); }

            }, 60000);
        }


        function ThirdChart() {
            if (Column.TimeSheet.length > 120) {
                var _ThirdValue = 120;
            } else {
                _ThirdValue = Column.TimeSheet.length;
            }

            for (var num = 80; num < _ThirdValue; num++) {

                let RoomId_Text = document.createTextNode(Column.TimeSheet[num].RoomID);
                let CrsName_Text = document.createTextNode(Column.TimeSheet[num].CrsName);
                let PLName_Text = document.createTextNode(Column.TimeSheet[num].PLName);

                if (Column.TimeSheet[num].Description == "") {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Stime + '/' + Column.TimeSheet[num].Etime);
                } else {
                    var Time_Text = document.createTextNode(Column.TimeSheet[num].Description);
                }

                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let p4 = document.createElement("p");

                let li = document.createElement("li");


                if (Column.TimeSheet[num].Status == 0) { li.style.backgroundColor = "rgb(226, 80, 80)"; }
                else if (Column.TimeSheet[num].Status == 1) { li.style.backgroundColor = "#e1e1e1"; }
                else if (Column.TimeSheet[num].Status == 2) { li.style.backgroundColor = "Lightblue"; }

                const ul = document.querySelector('ul');

                p1.appendChild(RoomId_Text);
                p2.appendChild(CrsName_Text);
                p3.appendChild(PLName_Text);
                p4.appendChild(Time_Text);

                li.appendChild(p1);
                li.appendChild(p2);
                li.appendChild(p3);
                li.appendChild(p4);

                ul.appendChild(li);
            }
            setTimeout(function () {
                var _RemoveChart = document.querySelectorAll('li');
                for (var i = 0; i < _RemoveChart.length; i++) {
                    _RemoveChart[i].remove();
                }
                FirstChart();
            }, 60000);
        }

    })
    .catch(err => {
    })