document.addEventListener("DOMContentLoaded", function () {

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
  var hanhChinh= document.getElementById('hanhChinh'); 
  // Tạo chuối HTML để hiển thị thông tin 
  var infoHTML = "<strong>+Ngày khám bệnh:</strong> " + ngayThang + "<br>";
  infoHTML += "<strong>+Họ tên:</strong> " + hoTen + "<br>";
  infoHTML += "<strong>+Tuổi:</strong> " + tuoi + "<br>";
  infoHTML += "<strong>+Giới tính:</strong> " + gioiTinh + "<br>";
  infoHTML += "<strong>+Nghề nghiệp:</strong> " + ngheNghiep + "<br>";
  infoHTML += "<strong>+Số điện thoại:</strong> " + soDienThoai + "<br>";
  
  // Hiển thị thông tin trong phần tử <div> 
  hanhChinh.innerHTML=infoHTML; 

// Tạo thông tin phần bệnh sử
    var benhSu=document.getElementById('benhSu'); 
    //Hien thi thong tin benh su
    var infoHTML ="<b>+Triệu chứng [</b>"+ trieuChung1 +"<b>] khởi phát [</b>"+ thoiGian1 +"<b>] đã điều trị [</b>"+ dieuTri1 +"<b>] hiện tại triệu chứng [</b>"+ trieuChungHienTai1+"]" +"<br>"; 
    infoHTML+="<b>+Triệu chứng [</b>"+ trieuChung2 +"<b>] khởi phát [</b>"+ thoiGian2 +"<b>] đã điều trị [</b>"+ dieuTri2 +"<b>] hiện tại triệu chứng [</b>"+ trieuChungHienTai2 +"]"+ "<br>"; 
    benhSu.innerHTML= infoHTML; 

// Tạo thông tin phần tiền sử
  var tien_Su = document.getElementById('tien_Su');
  var infoHTML= "<b>+Tiền sử: </b>"+ tienSu +"<br>"; 
  infoHTML+= "<b>+Thuốc đang sử dụng: </b>" + thuoc +"<br>"; 
  infoHTML+= "<b>+Chế độ ăn uống: </b>" + cheDoAn + "<br>"; 
  infoHTML+="<b>+Chế độ sinh hoạt: </b>" +cheDoSinhHoat + "<br>";
  tien_Su.innerHTML= infoHTML;

// CHẩn đoán sơ bộ
  var chanDoan= document.getElementById('chanDoan'); 
  var infoHTML="<b>+Chẩn đoán sơ bộ: </b>"+ chanDoanId + "<br>"; 
  infoHTML+= "<b>+Điểm chẩn đoán: </b>"+ chanDoanScore+ "<br>"; 
  chanDoan.innerHTML= infoHTML;


  // Tạo hàng dữ liệu cho bảng
   // Lấy tham chiếu đến phần tử <table> bạn đã đặt ID ở trên
   var table = document.getElementById("info-table");
   // Tạo bảng dọc
  for (var i = 18; i <= 35; i++) {
    var key = Object.keys(finalJSON)[i]; // Lấy key thứ i
    var row = table.insertRow(); // Tạo một hàng mới
    var cell1 = row.insertCell(0); // Tạo ô đầu tiên
    var cell2 = row.insertCell(1); // Tạo ô thứ hai

    // Thiết lập nội dung của ô đầu tiên là tên key và ô thứ hai là giá trị tương ứng
    cell1.innerHTML = "<b>" + key + "</b>";
    cell2.innerHTML = finalJSON[key];
  }



// Tạo thông tin điều trị
//Tạo mảng chẩn đoán sơ bộ
topTwoScores= chanDoanId.split(',');
 // Đọc dữ liệu từ file CSV "treatment.csv"
 fetch("treatment/treatmentfull _vn_translate.csv")
 .then(response => response.text())
 .then(csvText => {
   // Sử dụng PapaParse để parse dữ liệu
   const parsedData = Papa.parse(csvText, { header: true, delimiter: ";" }).data;
   console.log(parsedData);

   // Xử lý dữ liệu sau khi parse
   parsedData.forEach(foundTreatment => {
     // Tìm foundTreatment trong topTwoScores
     const foundScore = topTwoScores.includes(foundTreatment.PatternId);
     if (foundScore) {
       const resultSection = document.createElement("div");
       resultSection.className = "resultSection";

       const nameHeader = document.createElement("h1");
                         nameHeader.textContent = foundTreatment.Name;
                         nameHeader.style.textDecoration = "underline";

                         resultSection.appendChild(nameHeader);

                         const symptomsHeader = document.createElement("h2");
                         symptomsHeader.textContent = "Triệu chứng";
                         resultSection.appendChild(symptomsHeader);

                         const symptomsParagraph = document.createElement("p");
                         symptomsParagraph.textContent = foundTreatment.Symptoms;
                         resultSection.appendChild(symptomsParagraph);

                         // Tiếp tục thêm các phần khác như Tongue, Pulse, Luckhi, Acupuncture
                         // ...
                         // Thêm phần Tongue
                         //const tongueHeader = document.createElement("h2");
                         //tongueHeader.textContent = "Tongue";
                         //resultSection.appendChild(tongueHeader);

                         //const tongueParagraph = document.createElement("p");
                         //tongueParagraph.textContent = foundTreatment.Tongue;
                         //resultSection.appendChild(tongueParagraph);

                         // Thêm phần Pulse
                         //const pulseHeader = document.createElement("h2");
                         //pulseHeader.textContent = "Pulse";
                         //resultSection.appendChild(pulseHeader);

                         //const pulseParagraph = document.createElement("p");
                         //pulseParagraph.textContent = foundTreatment.Pulse;
                         //resultSection.appendChild(pulseParagraph);

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
});



