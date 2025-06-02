
document.getElementById('intake-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {};
  let score = 0;
  formData.forEach((value, key) => {
    data[key] = value;
    if (['q1','q2','q3','q4','q5','q6'].includes(key)) {
      score += parseInt(value);
    }
  });
  data['score'] = score;

 https://script.google.com/macros/s/AKfycbzJEl-6rhmHkuu7UYlVE77lzFWaw0zBSHEnkXlYdnNK/dev
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById('response-message').textContent = "ส่งข้อมูลเรียบร้อยแล้วค่ะ 💙 คะแนน: " + score;
  })
  .catch(error => {
    document.getElementById('response-message').textContent = "เกิดข้อผิดพลาดในการส่งข้อมูล ❌";
  });
});
