import openpyxl
import csv
import os

# Đường dẫn đến tệp Excel
excel_file_path = "treatmentfull _vn_translate.xlsx"

# Đọc tệp Excel
workbook = openpyxl.load_workbook(excel_file_path)
sheet = workbook.active

# Đường dẫn hiện tại của tệp Python
current_directory = os.path.dirname(os.path.abspath(__file__))

# Tạo đường dẫn cho tệp CSV trong cùng thư mục với tệp Python
csv_file_path = os.path.join(current_directory, "treatmentfull _vn_translate.csv")

# Mở tệp CSV để viết
with open(csv_file_path, mode='w', newline='', encoding='utf-8') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=';')

    for row in sheet.iter_rows():
        csv_writer.writerow([cell.value for cell in row])

print("Chuyển đổi thành công và lưu tệp CSV tại:", csv_file_path)
