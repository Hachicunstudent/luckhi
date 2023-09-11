let top_general_pattern=[];
document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");

    // Đọc dữ liệu từ file JSON part 1
    fetch("symptoms/symptoms1.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(section => {
                createQuestionnaire(section.sectionId, section.sectionTitle, section.questions);
            });

            
            // Xử lý dữ liệu sau khi bấm nút Tiếp
            nextButton.addEventListener("click", function() {

                //Tính toán điểm số    
                const totalScores = [];

            data.forEach(section => {
                const checkboxes = document.querySelectorAll(`#${section.sectionId} input[type='checkbox']`);
                const percentScore = (checkboxes.length > 0) ? (document.querySelectorAll(`#${section.sectionId} input:checked`).length / checkboxes.length) * 100 : 0;
                const totalScore = percentScore; // Tổng điểm từ 0-1

                totalScores.push({
                    sectionId: section.sectionId,
                    
                    
                    totalScore: totalScore.toFixed(0)
                });

                document.getElementById(section.sectionId + "Score").textContent = percentScore.toFixed(0);
            });
            // Lưu thông tin vào Local Storage
            

            localStorage.setItem("thongTinPage5", JSON.stringify(totalScores));
        
            console.log(totalScores);
            console.log(JSON.stringify(totalScores));


           
                
                
                
                window.location = 'page6.html';

            });
        });

});



// Hàm tạo câu hỏi dựa trên dữ liệu từ file JSON
function createQuestionnaire(sectionId, sectionTitle, questions) {
    const section = document.createElement("div");
    section.id = sectionId;

    const title = document.createElement("h3");
    title.textContent = sectionTitle;
    section.appendChild(title);

    questions.forEach((question, index) => {
        const label = document.createElement("label");
        label.textContent = question.text;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = question.name;
        checkbox.value = "yes";
    
        // Đặt checkbox vào đầu label
        label.insertBefore(checkbox, label.firstChild);
    
        section.appendChild(label);
        section.appendChild(document.createElement("br"));
        section.appendChild(document.createElement("br"));
    });

    
    const percentScoreLabel = document.createElement("p");
    percentScoreLabel.innerHTML = `Điểm phần chẩn đoán: <span id='${sectionId}Score'>0</span>%`;
    section.appendChild(percentScoreLabel);

    document.getElementById("questionnaire").appendChild(section);
}
