function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    
    if (!birthdate) {
        document.getElementById("result").innerText = "الرجاء إدخال تاريخ الميلاد.";
        return;
    }

    let birthDate = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // تعديل العمر في حالة لم يكتمل الشهر أو اليوم
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerText = `عمرك هو: ${age} سنة`;
}