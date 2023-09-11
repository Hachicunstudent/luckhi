 document.addEventListener("DOMContentLoaded", function () {
            var benhNhanData = JSON.parse(localStorage.getItem("benhNhanData")) || [];

            function hienThiDanhSach() {
                var patientList = document.getElementById("patientList");
                patientList.innerHTML = '';

                for (var i = 0; i < benhNhanData.length; i++) {
    var patient = benhNhanData[i];
    var listItem = document.createElement("li");
    listItem.textContent = "Họ tên: " + patient.hoTen + ", Tuổi: " + patient.tuoi;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.dataset.index = i;
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn sự kiện click lan toả
        var index = event.target.dataset.index;
        benhNhanData.splice(index, 1);
        localStorage.setItem("benhNhanData", JSON.stringify(benhNhanData));
        hienThiDanhSach();
    });

    var undoButton = document.createElement("button");
    undoButton.textContent = "Hoàn tác";
    undoButton.dataset.index = i;
    undoButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn sự kiện click lan toả
        var index = event.target.dataset.index;
        var patientCopy = JSON.parse(JSON.stringify(benhNhanData[index]));
        benhNhanData.splice(index + 1, 0, patientCopy);
        localStorage.setItem("benhNhanData", JSON.stringify(benhNhanData));
        hienThiDanhSach();
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(undoButton);

    listItem.dataset.index = i;
    listItem.classList.add("patient-list-item");
    patientList.appendChild(listItem);

    listItem.addEventListener("click", function (event) {
        var index = event.target.dataset.index;
        finalJSONarray = benhNhanData[index];
        finalJSON = JSON.stringify(finalJSONarray);
        localStorage.setItem("finalJSON", finalJSON);
        window.location = 'page9.html'
    });
}
            }

            hienThiDanhSach();
        });

        function luuThongTin() {
            var hoTen = document.getElementById("hoTen").value;
            var tuoi = document.getElementById("tuoi").value;
            var gioiTinh = document.querySelector('input[name="gioiTinh"]:checked').value;
            var ngheNghiep = document.getElementById("ngheNghiep").value;
            var soDienThoai = document.getElementById("soDienThoai").value;

            var benhNhan = {
                ngayThang: new Date(),
                hoTen: hoTen,
                tuoi: tuoi,
                gioiTinh: gioiTinh,
                ngheNghiep: ngheNghiep,
                soDienThoai: soDienThoai
            };

        

            localStorage.setItem("thongTinPage1", JSON.stringify(benhNhan));
            console.log(benhNhan);
            window.location.href = "page2_3.html";
        }
