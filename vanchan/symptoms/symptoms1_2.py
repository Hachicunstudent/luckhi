import json
from unidecode import unidecode

# Đọc nội dung từ file văn bản
with open('textToJsonCode\symptoms2textfile.txt', 'r', encoding='utf-8') as file:
    content = file.read()

# Tách các sections
sections = content.split('\n\n')

# Chuẩn bị dữ liệu cho JSON
json_data = []

for section in sections:
    lines = section.strip().split('\n')
    section_title = lines[0]
    section_id = unidecode(section_title).replace(" ", "").lower()

    questions = []
    for line in lines[1:]:
        if line.startswith("-"):
            question_text = line[1:].strip()
            question = {
                "name": f"{section_id}{len(questions) + 1}",
                "text": question_text
            }
            questions.append(question)

    section_data = {
        "sectionId": section_id,
        "sectionTitle": section_title,
        "questions": questions
    }
    json_data.append(section_data)

# Ghi dữ liệu vào file JSON
with open('output.json', 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=4)
