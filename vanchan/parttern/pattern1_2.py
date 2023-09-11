import pandas as pd
import json

# Đọc file Excel
excel_file_path = 'pattern2excel.xlsx'
data = pd.read_excel(excel_file_path)

# Chuyển đổi dữ liệu thành danh sách JSON
json_data = []
for index, row in data.iterrows():
    symptoms = row['Symptoms']
    if isinstance(symptoms, str):
        symptoms_list = [symptom.strip().capitalize() for symptom in symptoms.split(',')]
        json_data.append({
            'PatternId': row['PatternId'],
            'PatternName': row['Name'],
            'symptoms': symptoms_list
        })

# Lưu dữ liệu JSON vào file
json_file_path = 'pattern2.json'
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, indent=4, ensure_ascii=False)

print("Chuyển đổi thành công và lưu vào file JSON.")
