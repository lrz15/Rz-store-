function changeColor(imagePath, colorName, element) {
    const mainImg = document.getElementById('main-product-img');
    
    // تأثير اختفاء تدريجي بسيط عند التغيير
    mainImg.style.opacity = '0.2';
    
    setTimeout(() => {
        // تغيير مسار الصورة
        mainImg.src = imagePath;
        // إعادة إظهار الصورة
        mainImg.style.opacity = '1';
    }, 150);

    // تحديث اسم اللون في الكارت الرئيسية
    document.getElementById('selected-color-text').textContent = colorName;
    
    // تحديث اسم اللون في الشريط العلوي
    const headerColorValue = document.getElementById('header-color-value');
    if (headerColorValue) {
        headerColorValue.innerHTML = colorName + ' <i class="fa-solid fa-chevron-down"></i>';
    }

    // تحديث حالة الأزرار (إزالة active من الكل وإضافتها للزر المختار)
    const buttons = document.querySelectorAll('.color-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}
