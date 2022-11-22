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

        Chart1();

        function Chart1() {
            var _Min = 0;

            if (Column.TimeSheet.length > 40) {
                var _Max = 40;
            } else {
                _Max = Column.TimeSheet.length;
            }

            ListMaker(_Min, _Max);

            setTimeout(function () {
                ListClear();

                if (Column.TimeSheet.length > 40) {
                    Chart2();
                } else {
                    location.reload();
                }
            }, ReloadTimer);
        }

        function Chart2() {
            var _Min = 40;
            if (Column.TimeSheet.length > 80) {
                var _Max = 80;
            } else {
                _Max = Column.TimeSheet.length;
            }

            ListMaker(_Min, _Max);

            setTimeout(function () {
                ListClear();
                if (Column.TimeSheet.length > 80) { Chart3(); }
                else { location.reload(); }

            }, ReloadTimer);
        }


        function Chart3() {
            var _Min = 80;
            if (Column.TimeSheet.length > 120) {
                var _Max = 120;
            } else {
                _Max = Column.TimeSheet.length;
            }

            ListMaker(_Min, _Max);

            setTimeout(function () {
                ListClear();
                location.reload();
            }, ReloadTimer);
        }


        function ListMaker(Min, Max) {
            for (let num = Min; num < Max; num++) {

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

                if (Column.TimeSheet[num].Status == 0) { li.style.backgroundColor = "rgb(255, 132, 132)"; }
                else if (Column.TimeSheet[num].Status == 1) { li.style.backgroundColor = "#e1e1e1"; }
                else if (Column.TimeSheet[num].Status == 2) { li.style.backgroundColor = "rgb(237, 255, 102)"; }

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
        }

    })
    .catch(err => {
    })

function ListClear() {
    var _RemoveChart = document.querySelectorAll('li');
    for (var i = 0; i < _RemoveChart.length; i++) {
        _RemoveChart[i].remove();
    }
}

let ReloadTimer = 10000;