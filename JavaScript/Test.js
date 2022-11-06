// this code just for testing
// never used






let _ChartPage = Column.TimeSheet.length / 40;
_ChartPage_Round = _ChartPage.toFixed(0);

if (_ChartPage_Round == _ChartPage) {
    _ChartPage_Round;
}
else if (_ChartPage_Round < _ChartPage) {
    _ChartPage_Round++;
}



































mf();
function mf() {
    var x = 1;
    myfunc();
    function myfunc() {

        setTimeout(function () {

            if (x <= _ChartPage_Round) {
                let _Index = (x * 40) - 40;
                if (_ChartPage_Round == x) {
                    var _EndPoint1 = Column.TimeSheet;
                    hhh(_Index, _EndPoint1);
                }
                else if (_ChartPage != x) {
                    var _EndPoint = 40;
                    hhh(_Index, _EndPoint);

                }
                // console.log(_EndPoint);
                x++;
                myfunc();
            }
            else {
                mf();
            }
        }, 6000);
    }
}





function hhh(index, EndPoint) {
    if (EndPoint == 40) {
        var bbb = 40;
        var aaa = Column.TimeSheet;
    }
    else {
        var bbb = EndPoint.length;
        var aaa = EndPoint;
    }

    console.log(aaa);

    for (let num = index; num < bbb; num++) {

        // let RoomId_Text = document.createTextNode(Column.TimeSheet[num].RoomID);
        // let CrsName_Text = document.createTextNode(Column.TimeSheet[num].CrsName);
        // let PLName_Text = document.createTextNode(Column.TimeSheet[num].PLName);
        let RoomId_Text = document.createTextNode(aaa[num].RoomID);
        let CrsName_Text = document.createTextNode(aaa[num].CrsName);
        let PLName_Text = document.createTextNode(aaa[num].PLName);
        // let Time_Text = document.createTextNode(Column.TimeSheet[num].Stime + '/' + Column.TimeSheet[num].Etime);

        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");

        let li = document.createElement("li");


        if (Column.TimeSheet[num].Status == 0) {
            li.style.backgroundColor = "Lightyellow";
            var Time_Text = document.createTextNode("کلاس برگزار نشده");

        }
        else if (Column.TimeSheet[num].Status == 1) {
            li.style.backgroundColor = "LIghtgreen";
            var Time_Text = document.createTextNode(Column.TimeSheet[num].Stime + '/' + Column.TimeSheet[num].Etime);

        }
        else if (Column.TimeSheet[num].Status == 2) {
            li.style.backgroundColor = "Lightblue";
            var Time_Text = document.createTextNode("کلاس به پایان رسید");

        }





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

        setTimeout(function () {
            var lll = document.querySelectorAll('li');

            for (var c = 0; c < lll.length; c++) {
                lll[c].remove();
            }
        }, 6000);
    }

}















// change colum in device
// var paginationLimit=40;
// var Sw = screen.width;

// if (1500 < Sw) {
//     paginationLimit = 40;
// }
// else if (1200 < Sw && Sw > 1500) {
//     paginationLimit = 35;
// }
// else if (992 < Sw && Sw > 1200) {
//     paginationLimit = 30;
// }
// else if (768 < Sw && Sw > 992) {
//     paginationLimit = 25;
// }
// else if (576 < Sw && Sw > 768) {
//     paginationLimit = 20;
// }

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});