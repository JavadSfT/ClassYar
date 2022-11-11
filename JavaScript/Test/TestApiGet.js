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
        

        let _ChartPage = Column.TimeSheet.length / 40;
        _ChartPage_Round = _ChartPage.toFixed(0);

        if (_ChartPage_Round == _ChartPage) {
            _ChartPage_Round;
        }
        else if (_ChartPage_Round < _ChartPage) {
            _ChartPage_Round++;
        }
        alert(_ChartPage_Round);

        for (let index = 1; index <= _ChartPage; index++) {
            if (_ChartPage == index) {
                let start = (index * 40) - 40;
                let end = Column.TimeSheet.length;
                FirstChart(start, end);
            }
            else if (_ChartPage != index) {
                let start = (index * 40) - 40;
                let end = (index * 40);
                FirstChart(start, end);
            }

        }

        function FirstChart(start, end) {


            for (let num = start; num < end; num++) {

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
            setTimeout(function () {
                let _RemoveChart = document.querySelectorAll('li');
                for (let x = 0; x < _RemoveChart.length; x++) {
                    _RemoveChart[x].remove();
                }
            }, 10000);
        }


    })
    .catch(err => {
    })