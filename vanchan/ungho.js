document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu đến tbody của bảng
    const tbody = document.getElementById("supportersTableBody");

    // Đường dẫn tới tệp CSV của bạn
    const csvFilePath = "ungho.csv";

    // Sử dụng thư viện PapaParse để đọc tệp CSV
    Papa.parse(csvFilePath, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function (results) {
            const data = results.data;

            // Sắp xếp dữ liệu theo số tiền ủng hộ giảm dần
            data.sort((a, b) => b["sotien"] - a["sotien"]);

            // Lặp qua dữ liệu và thêm vào tbody của bảng
            for (let i = 0; i < data.length; i++) {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                const amountCell = document.createElement("td");

                nameCell.textContent = data[i]["hoten"];
                
                // Sử dụng hàm toLocaleString() để định dạng số tiền
                amountCell.textContent = data[i]["sotien"].toLocaleString();

                row.appendChild(nameCell);
                row.appendChild(amountCell);
                tbody.appendChild(row);
            }
        },
    });
});
