 function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let final = Number(document.getElementById("final").value);
    let sonuc = document.getElementById("sonuc");

    if (vize < 0 || vize > 100 || final < 0 || final > 100) {
        sonuc.textContent = "Notlar 0-100 arasında olmalı";
        sonuc.style.color = "orange";
        return;
    }

    let ortalama = (vize * 0.4) + (final * 0.6);
    let harf = "";
    let durum = "";

    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 85) harf = "BA";
    else if (ortalama >= 80) harf = "BB";
    else if (ortalama >= 70) harf = "CB";
    else if (ortalama >= 60) harf = "CC";
    else if (ortalama >= 50) harf = "DC";
    else harf = "FF";

    if (ortalama >= 50) {
        durum = "Geçti";
        sonuc.style.color = "green";
    } else {
        durum = "Kaldı";
        sonuc.style.color = "red";
    }

    sonuc.innerHTML = `
        Ortalama: <b>${ortalama.toFixed(2)}</b><br>
        Harf Notu: <b>${harf}</b><br>
        Durum: <b>${durum}</b>
    `;
}
