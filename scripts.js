// 这是一个简单的JavaScript示例
document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickMe');
    const messageElement = document.getElementById('message');

    clickButton.addEventListener('click', function() {
        messageElement.textContent = "哇！你用GitHub项目里的JavaScript让我工作了！👍";
        messageElement.style.color = "#4CAF50";
    });
});
