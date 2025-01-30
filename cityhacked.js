// アニメーションのスタイルを動的に作成
const style = document.createElement('style');
style.innerHTML = `
@keyframes natto-size {
    0% { width: 100%; height: auto; }
    10% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    20% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    30% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    40% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    50% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    60% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    70% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    80% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    90% { width: ${Math.random() * 100}%; height: ${Math.random() * 900 + 100}px; }
    100% { width: 100%; height: auto; }
}
.natto-animation {
    animation: natto-size 0.3s infinite; /* アニメーションの時間を短縮 */
}
`;
document.head.appendChild(style);

// すべての img 要素にアニメーションを適用
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.classList.add('natto-animation');
});
