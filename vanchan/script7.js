// Biến toàn cục để lưu trữ các giá trị foundPattern
var foundPatternValues = [];
var fullnames = []; // Thêm biến fullnames

window.onload = function() {
        const nextButton = document.getElementById("nextButton");

        // Thêm thông báo khi bắt đầu tính toán
        alert("Quá trình tính toán đang được thực hiện...");


    // Tạo ra Object pattern từ biến thongTinPage5 và thongTinPage6
    var thongTinPage5 = JSON.parse(localStorage.getItem("thongTinPage5"));
    var thongTinPage6 = JSON.parse(localStorage.getItem("thongTinPage6"));
    console.log(localStorage.getItem("thongTinPage5"));
    var data= thongTinPage5.totalScores;
    console.log(data);
    var top_general_pattern = tinhdiem(thongTinPage5); // Đã thêm var
    var top_specific_pattern = tinhdiem(thongTinPage6); // Đã thêm var
    
    
    // Đọc nội dung file JSON "pattern" để tìm ra câu hỏi chứng trạng
    fetch("parttern/pattern.json")
    .then(response => response.json())
    .then(patternData => {
        const sectionIdsToSearch = Object.values(top_general_pattern).map(item=> item.sectionId);
        const namesToSearch = Object.values(top_specific_pattern).map(item => item.sectionId);

        

        
        sectionIdsToSearch.forEach(sectionId => {
            const foundSection = patternData.find(section => section.sectionId === sectionId);
            if (foundSection) {
                namesToSearch.forEach(name => {
                    const foundPattern = foundSection.pattern.find(pattern => pattern.name === name);
                    if (foundPattern) {
                        fullnames.push(foundPattern.fullname); // Thêm fullname vào mảng fullnames
                        console.log(foundPattern.fullname);
                    }
                });
            }
        });

        console.log(fullnames);
    });
    var pattern=fullnames; 


    // Đọc dữ liệu từ file JSON "pattern2.json"
    fetch("parttern/pattern2.json")
        .then(response => response.json())
        .then(patternData => {
            pattern.forEach(fullname => {
                var foundPattern = patternData.find(pattern => pattern.PatternId === fullname);
                if (foundPattern) {
                    createQuestionnaire(foundPattern.PatternId, foundPattern.PatternName, foundPattern.symptoms);
                    foundPatternValues.push(foundPattern); // Lưu giá trị foundPattern vào mảng
                }
            });
            alert("Quá trình tính toán đã hoàn thành.");


            // Xử lý dữ liệu sau khi bấm nút Tiếp
            nextButton.addEventListener("click", function() {
                // Tính điểm 
                const totalScores = [];

                foundPatternValues.forEach(section => {
                    const checkboxes = document.querySelectorAll(`#${section.PatternId} input[type='checkbox']`);
                    
                    const percentScore = (checkboxes.length > 0) ? (document.querySelectorAll(`#${section.PatternId} input:checked`).length / checkboxes.length) * 100 : 0;
                    
                    const totalScore = percentScore;

                    totalScores.push({
                        sectionId: section.PatternId,
                        
                        
                        totalScore: totalScore.toFixed(0)
                    });

                    document.getElementById(section.PatternId + "Score").textContent = percentScore.toFixed(0);
                });
                

                localStorage.setItem("thongTinPage7", JSON.stringify(totalScores));

                // Trích xuất thông tin từ các biến cục bộ
                    var thongTinPage1 = JSON.parse(localStorage.getItem("thongTinPage1"));
                // Chuyển JSON object thành JSON mảng cho Page2_3    
                    var thongTinPage2_3 = JSON.parse(localStorage.getItem("thongTinPage2_3"));
                    
                // Chuyển JSON Object thành JSON mảng cho Page 4    
                    var thongTinPage4 = JSON.parse(localStorage.getItem("thongTinPage4"));

                    var thongTinPage5 = JSON.parse(localStorage.getItem("thongTinPage5"));
                    var thongTinPage6 = JSON.parse(localStorage.getItem("thongTinPage6"));
                    var thongTinPage7 = JSON.parse(localStorage.getItem("thongTinPage7"));
                    console.log(localStorage.getItem("thongTinPage7"));
                    //Hien thi thong tin Page 4
                    


                    //Chuyển đổi thông tin Page 5- Chứng trạng chung- JSONmanyTo1
                    var Page5_convert=JSONmanyTo1(thongTinPage5); 
                    var Page6_convert=JSONmanyTo1(thongTinPage6);

                    // Lọc chẩn đoán sơ bộ

                    
                    thongTinPage7.sort((a, b) => parseFloat(b.totalScore) - parseFloat(a.totalScore));
                    console.log(thongTinPage7);


                    
                    // Tạo thông tin chẩn đoán
                    var chanDoanIdArray = thongTinPage7.map(function(item) {
                        return item.sectionId;
                    });
                    var chanDoanScoreArray = thongTinPage7.map(function(item) {
                        return item.totalScore;
                    });
                    
                    var chanDoanIdJSON={chanDoanId: chanDoanIdArray.join(',')};
                    var chanDoanScoreJSON={chanDoanScore: chanDoanScoreArray};
                    console.log(JSON.stringify.chanDoanIdJSON);

                    //Ghép nối các file JSON lại
                    
                    //var Page7full= JSONmerge(chanDoanIdJSON,chanDoanScoreJSON);
                   
                    //Ghép theo cách khác: 
                    var finalJSONarray= Object.assign({},thongTinPage1,thongTinPage2_3,thongTinPage4,Page5_convert,Page6_convert,chanDoanIdJSON,chanDoanScoreJSON);
                   var finalJSON= JSON.stringify(finalJSONarray);
                   console.log(finalJSON);


                    localStorage.setItem("finalJSON",finalJSON);
                // Lưu final JSON vào danh sách bệnh nhân benhNhanData
                // Kiểm tra xem có dữ liệu benhNhanData trong localStorage hay không
                var storedJSONString = localStorage.getItem("benhNhanData");
                var benhNhanData = [];

                if (storedJSONString) {
                // Nếu có dữ liệu trong localStorage, chuyển đổi thành mảng JavaScript
                benhNhanData = JSON.parse(storedJSONString);
                }
                benhNhanData.unshift(finalJSONarray);
                // Lưu benhNhanData lại vào localStorage sau khi đã thay đổi
                localStorage.setItem("benhNhanData", JSON.stringify(benhNhanData));
                console.log(JSON.stringify(benhNhanData));


                 // Gửi dữ liệu JSON đến Google Apps Script thông qua fetch
            
                 fetch('https://sheetdb.io/api/v1/jw5vd2trd3b6z', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: finalJSON
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data));

                // Chuyen sang cua so moi
                
                window.location='page9.html';
            });
        })
        .catch(error => {
            console.error("Lỗi khi đọc file JSON:", error);
        });


    // Hàm tạo câu hỏi dựa trên dữ liệu từ file JSON
    function createQuestionnaire(sectionId, sectionTitle, questions) {
        const section = document.createElement("div");
        section.id = sectionId;

        const title = document.createElement("h2");
        title.textContent = sectionTitle;
        section.appendChild(title);

        questions.forEach((question, index) => {
            const label = document.createElement("label");
            label.textContent = question;
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = question;
            checkbox.value = "yes";
            section.appendChild(label);
            section.appendChild(checkbox);
                // Đặt checkbox vào đầu label
    label.insertBefore(checkbox, label.firstChild);

            section.appendChild(document.createElement("br"));
            section.appendChild(document.createElement("br"));

        });

        const percentScoreLabel = document.createElement("p");
        percentScoreLabel.innerHTML = `Điểm phần chẩn đoán: <span id='${sectionId}Score'>0</span>%`;
        section.appendChild(percentScoreLabel);

        document.getElementById("questionnaire").appendChild(section);
    }

    // Định nghĩa hàm JSON_merge
    function JSONmerge(data1, data2) {
        var mergedData = {};

        // Ghép nối trường từ data1 vào mergedData
        for (var key1 in data1[0]) {
            mergedData[key1] = data1[0][key1];
        }

        // Ghép nối trường từ data2 vào mergedData
        for (var key2 in data2[0]) {
            mergedData[key2] = data2[0][key2];
        }

        return [mergedData];
    }

    function JSONmanyTo1(input) {
        const output = {};
        input.forEach(item => {
          const sectionId = item.sectionId;
          const score = item.totalScore;
          output[`${sectionId}_score`] = score;
        });
        
        return output;
      }
      

    // Hàm tình điểm các thông tin Pag5, Page 6
    function tinhdiem(thongtinPage) {
        // Sắp xếp từ cao đến thấp dựa trên totalScore
        thongtinPage.sort((a, b) => parseFloat(b.totalScore) - parseFloat(a.totalScore));

        // Lọc các phần tử có totalScore >= 50
        const Fitter = thongtinPage.filter(item => parseFloat(item.totalScore) >= 30);

        if (Fitter.length > 2) {
            // Nếu số lượng phần tử trong Fitter lớn hơn 2, gán outputArray bằng Fitter
            var outputArray = Fitter;
        } else {
            // Nếu không, gán outputArray bằng totalScore đã sắp xếp và slice 2 phần tử đầu tiên
            var outputArray = thongtinPage.slice(0, 2);
        }

        return outputArray;
    }
};
