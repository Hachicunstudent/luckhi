window.onload = function() {

//Nạp finalJSON từ biến cục bộ 

var finalJSON= JSON.parse(localStorage.getItem('finalJSON')); 
console.log(JSON.stringify(finalJSON));


//Trích xuất các biến trong file JSON
    // Lấy đối tượng JSON đầu tiên
  var jsonObject = finalJSON;

  // Duyệt qua các khóa trong đối tượng JSON và tạo biến tương ứng
  for (var key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      window[key] = jsonObject[key];
    }
  }

// Tạo thông tin phần hành chính
var hanhChinh = document.getElementById('hanhChinh');
// Tạo chuỗi HTML để hiển thị thông tin
var infoHTML = "<ul>";
infoHTML += "<li><strong>Ngày khám bệnh:</strong> " + ngayThang + "</li>";
infoHTML += "<li><strong>Họ tên:</strong> " + hoTen + "</li>";
infoHTML += "<li><strong>Tuổi:</strong> " + tuoi + "</li>";
infoHTML += "<li><strong>Giới tính:</strong> " + gioiTinh + "</li>";
infoHTML += "<li><strong>Nghề nghiệp:</strong> " + ngheNghiep + "</li>";
infoHTML += "<li><strong>Số điện thoại:</strong> " + soDienThoai + "</li>";
infoHTML += "</ul>";

// Đưa thông tin vào phần hành chính
hanhChinh.innerHTML = infoHTML;  


var infoHTML = "<ul>";
infoHTML += "<li><b>Triệu chứng:</b> " + trieuChung1 + ", <b>khởi phát:</b> " + thoiGian1 + ", <b>đã điều trị:</b> " + dieuTri1 + ", <b>hiện tại triệu chứng:</b> " + trieuChungHienTai1 + "</li>";
infoHTML += "<li><b>Triệu chứng:</b> " + trieuChung2 + ", <b>khởi phát:</b> " + thoiGian2 + ", <b>đã điều trị:</b> " + dieuTri2 + ", <b>hiện tại triệu chứng:</b> " + trieuChungHienTai2 + "</li>";
infoHTML += "</ul>";

// Đưa thông tin vào phần bệnh sử
benhSu.innerHTML = infoHTML;


// Tạo thông tin phần tiền sử
var tien_Su = document.getElementById('tien_Su');
infoHTML = "<ul>";
infoHTML += "<li><b>Tiền sử:</b> " + tienSu + "</li>";
infoHTML += "<li><b>Thuốc đang sử dụng:</b> " + thuoc + "</li>";
infoHTML += "<li><b>Chế độ ăn uống:</b> " + cheDoAn + "</li>";
infoHTML += "<li><b>Chế độ sinh hoạt:</b> " + cheDoSinhHoat + "</li>";
infoHTML += "</ul>";
// Đưa thông tin vào phần tiền sử
tien_Su.innerHTML = infoHTML;


// CHẩn đoán sơ bộ
console.log(chandoansobo);

 // Lặp qua mảng chandoansobo và thêm dữ liệu vào bảng
 var tableBody = document.getElementById("chanDoan");
 for (var i = 0; i < chandoansobo.length; i++) {
     var row = document.createElement("tr");
     var nameCell = document.createElement("td");
     var scoreCell = document.createElement("td");

     nameCell.textContent = chandoansobo[i].sectionName;
     scoreCell.textContent = chandoansobo[i].totalScore;

     row.appendChild(nameCell);
     row.appendChild(scoreCell);
     tableBody.appendChild(row);
 }

 var tableBody = document.getElementById("info-table1");
 for (var i = 0; i < page5.length; i++) {
     var row = document.createElement("tr");
     var nameCell = document.createElement("td");
     var scoreCell = document.createElement("td");

     nameCell.textContent = page5[i].sectionName;
     scoreCell.textContent = page5[i].totalScore;

     row.appendChild(nameCell);
     row.appendChild(scoreCell);
     tableBody.appendChild(row);
 }
 var tableBody = document.getElementById("info-table2");
 for (var i = 0; i < page6.length; i++) {
     var row = document.createElement("tr");
     var nameCell = document.createElement("td");
     var scoreCell = document.createElement("td");

     nameCell.textContent = page6[i].sectionName;
     scoreCell.textContent = page6[i].totalScore;

     row.appendChild(nameCell);
     row.appendChild(scoreCell);
     tableBody.appendChild(row);
 }





// Tạo thông tin điều trị
//Tạo mảng chẩn đoán sơ bộ
  // Trích xuất giá trị sectionId và tạo mảng topTwoScores
  // Tạo một mảng topTwoScores từ sectionId trong chandoansobo
const topTwoScores = chandoansobo.map(item => item.sectionId);

  console.log(topTwoScores);
// Đọc dữ liệu từ file CSV "treatment.csv"
fetch("treatment/treatmentfull _vn_translate.csv")
  .then(response => response.text())
  .then(csvText => {
    // Sử dụng PapaParse để parse dữ liệu
    const parsedData = Papa.parse(csvText, { header: true, delimiter: ";" }).data;
    console.log(parsedData);

    // Vòng lặp qua mảng topTwoScores
    topTwoScores.forEach(patternId => {
      // Tìm dòng dữ liệu có PatternId tương ứng
      const foundTreatment = parsedData.find(dataRow => dataRow.PatternId === patternId);

      if (foundTreatment) {
        const resultSection = document.createElement("div");
        resultSection.className = "resultSection";

       const nameHeader = document.createElement("h1");
                         nameHeader.textContent = foundTreatment.Name;
                         nameHeader.style.textDecoration = "underline";

                                 // Lấy totalScore từ chandoansobo và thêm vào tiêu đề
        const totalScore = chandoansobo.find(item => item.sectionId === patternId).totalScore;
        nameHeader.textContent += `: ${totalScore}`;


                         resultSection.appendChild(nameHeader);

                         const symptomsHeader = document.createElement("h2");
                         symptomsHeader.textContent = "Triệu chứng";
                         resultSection.appendChild(symptomsHeader);

                         const symptomsParagraph = document.createElement("p");
                         symptomsParagraph.textContent = foundTreatment.Symptoms;
                         resultSection.appendChild(symptomsParagraph);

                         // Thêm phần Luckhi
                         const luckhiHeader = document.createElement("h2");
                         luckhiHeader.textContent = "Bộ huyệt Lục Khí";
                         resultSection.appendChild(luckhiHeader);

                         const luckhiParagraph = document.createElement("p");
                         luckhiParagraph.textContent = foundTreatment.Luckhi;
                         resultSection.appendChild(luckhiParagraph);

                         // Thêm phần Acupuncture
                         const acupunctureHeader = document.createElement("h2");
                         acupunctureHeader.textContent = "Các huyệt bổ trợ";
                         resultSection.appendChild(acupunctureHeader);

                         const acupunctureParagraph = document.createElement("p");
                         acupunctureParagraph.textContent = foundTreatment.Acupuncture;
                         resultSection.appendChild(acupunctureParagraph);

                         const herbHeader = document.createElement("h2");
                         herbHeader.textContent = "Bài thuốc";
                         resultSection.appendChild(herbHeader);

                         const herbParagraph = document.createElement("p");
                         herbParagraph.textContent = foundTreatment.Herb;
                         resultSection.appendChild(herbParagraph);

       document.getElementById("result").appendChild(resultSection);
     }
   });
 })
 .catch(error => {
   console.error("Lỗi khi đọc file CSV:", error);
 });
};



