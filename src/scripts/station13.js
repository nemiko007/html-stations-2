function changeBackgroundColor(e) {
  // チェックボックスの状態を確認
  const isChecked = e.target.checked;
  const textElement = document.getElementById('text');
  
  // if文を使って背景色を変更
  if (isChecked) {
    // オンのとき：背景色を赤色に変更
    textElement.style.backgroundColor = 'red';
  } else {
    // オフのとき：背景色を白色に変更
    textElement.style.backgroundColor = 'white';
  }
}
