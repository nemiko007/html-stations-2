function displayList() {
  // div#fruits要素を取得
  const fruitsDiv = document.getElementById('fruits');
  
  // 現在のp要素から果物名を取得
  const fruits = [];
  const paragraphs = fruitsDiv.querySelectorAll('p');
  paragraphs.forEach((p) => {
    fruits.push(p.textContent);
  });
  
  // div#fruits内をクリア
  fruitsDiv.innerHTML = '';
  
  // ulを作成
  const ul = document.createElement('ul');
  
  // 各果物名をliで追加
  fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    ul.appendChild(li);
  });
  
  // fruitsDiv内にulを追加
  fruitsDiv.appendChild(ul);
}
