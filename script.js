// Kiểm tra kích thước màn hình và cập nhật kích thước của canvas
  function updateCanvasSize() {
    var canvas = document.getElementById('chart');
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Thiết lập kích thước mặc định cho web
    var width = 600;
    var height = 400;

    // Kiểm tra nếu đang xem trên thiết bị di động, cập nhật kích thước
    if (deviceWidth <= 768) {
      width = 375;
      height = 667;
    }

    // Thiết lập kích thước cho canvas
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }

  // Gọi hàm updateCanvasSize khi trang được tải hoặc kích thước màn hình thay đổi
  window.addEventListener('DOMContentLoaded', updateCanvasSize);
  window.addEventListener('resize', updateCanvasSize);

    document.getElementById("fingerForm").addEventListener("submit", function(event) {
      event.preventDefault();
      

   // Lấy các giá trị nhập vào từ form
var categories = ['tay_trai', 'tay_phai', 'chan_trai', 'chan_phai'];
var values = [];
categories.forEach(category => {
  for (var i = 1; i <= 6; i++) {
    var value = parseFloat(document.getElementById(`${category}_${i}`).value);
    values.push(value / 10);
  }
});
// Lấy giá trị từ các trường mới
var patientName = document.getElementById('patientName').value;
var patientAge = parseInt(document.getElementById('patientAge').value);
var patientSymptoms = document.getElementById('patientSymptoms').value;
var measurementDate = new Date().toLocaleString();


console.log('Các giá trị từ form:', values);
console.log('Tên bệnh nhân:', patientName);
console.log('Tuổi:', patientAge);
console.log('Triệu chứng:', patientSymptoms);


  // Tính toán các giá trị yêu cầu
  const max_finger = Math.max(...values.slice(0, 12));
  const min_finger = Math.min(...values.slice(0, 12));
  const dental_finger = max_finger - min_finger;
  const average_minmax_finger = (max_finger + min_finger) / 2;
  const average_dental_finger = dental_finger / 6;

  const max_toe = Math.max(...values.slice(12, 24));
  const min_toe = Math.min(...values.slice(12, 24));
  const dental_toe = max_toe - min_toe;
  const average_minmax_toe = (max_toe + min_toe) / 2;
  const average_dental_toe = dental_toe / 6;

  // Tạo mảng chứa giá trị Percent_finger và Percent_toe
  var data = [];
  for (var i = 0; i < 6; i++) {
    const Detal_avarge_finger = (values[i]+values[i+6])/2 - average_minmax_finger;
    const Percent_finger = (Detal_avarge_finger / average_dental_finger) * 100;
    data.push(Percent_finger);
  }

  for (var i = 12; i < 18; i++) {
    const Detal_avarge_toe = (values[i]+values[i+6])/2 - average_minmax_toe;
    const Percent_toe = (Detal_avarge_toe / average_dental_toe) * 100;
    data.push(Percent_toe);
  }


// Tạo mảng chứa các màu sắc tương ứng với từng giá trị Percent_finger và Percent_toe
const colors = data.map(value => {
  if (Math.abs(value) >= 200) {
    return 'red'; // Đỏ tối
  } else if (Math.abs(value) >= 100) {
    return 'orange'; // Vàng tối
  } else {
    return 'blue'; // Xanh dương tối
  }
});

// Tạo biểu đồ bằng thư viện Chart.js
const chartElement = document.getElementById('chart');
const chartContext = chartElement.getContext('2d');

const chart = new Chart(chartContext, {
  type: 'bar',
  data: {
    labels: ['TTr', 'Tâm', '3T', 'TBL', 'ĐTr', 'Phế', 'BQ', 'Thận', 'Đởm', 'Vị', 'Can', 'Tỳ'],
    datasets: [{
      label: 'Chỉ số',
      data: data,
      backgroundColor: colors
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: patientName,
        font: {
          size: 18,
          weight: 'bold'
        }
      },
    
      subtitle: {
        display: true,
        text: `${measurementDate} - Tuổi: ${patientAge} - Triệu chứng: ${patientSymptoms}`,
        font: {
          size: 14,
          weight: 'normal'
        },
        padding: {
          top: 5
        }
      },
      tooltip: {
        enabled: false
      },
      customCanvasBackgroundColor: {
        color: 'white',
      },
      legend: {
        display: true,
        labels: {
          generateLabels: function(chart) {
            const legendColors = ['blue', 'orange', 'red'];
            const legendLabels = ['Không bệnh', 'Bệnh nhẹ', 'Bệnh nặng'];
            const dataset = chart.data.datasets[0];
            const legendItems = [];
            for (let i = 0; i < legendColors.length; i++) {
              legendItems.push({
                text: legendLabels[i],
                fillStyle: legendColors[i],
                strokeStyle: legendColors[i],
                lineWidth: 1,
                hidden: false,
                index: i
              });
            }
            return legendItems;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          font: {
            weight: 'bold'
          }
        },
        grid: {
          display: true // Ẩn đường kẻ grid trục x
        }
      },
      y: {
        ticks: {
          font: {
            weight: 'bold'
          }
        },
        grid: {
          drawBorder: true, // Ẩn đường viền của đường kẻ grid
          zeroLineColor: 'rgba(0, 100, 100, 0)' // Đặt màu của đường kẻ grid trục tung là màu trong suốt
        }
      }
    },
    responsive: true,
    

  }
});

// Tạo nút tải xuống
const downloadButton = document.createElement('button');
downloadButton.textContent = 'Tải xuống biểu đồ';
document.body.appendChild(downloadButton);

// Thêm sự kiện click cho nút tải xuống
downloadButton.addEventListener('click', () => {
  const imageUrl = chartElement.toDataURL('image/png');
  const downloadLink = document.createElement('a');
  downloadLink.href = imageUrl;
  downloadLink.download = 'chart.png';
  downloadLink.click();
});
// Lấy phần tử button theo ID
const resetButton = document.getElementById('resetButton');

// Xử lý sự kiện click vào button
resetButton.addEventListener('click', function() {
  location.reload(); // Tải lại trang web
});



    });
