function onizleme() {
  var dosyacalistir = new FileReader(); //JavaScript Dosya İşleme Apisi
  dosyacalistir.readAsDataURL(document.getElementById("resimsec").files[0]); //ilk dosyayı seçiyor ve base64 değerine dönüştürülüyor
  dosyacalistir.onload = function (islem) { //dosyanın yüklenmesi bekleniyor
    document.getElementById("resimonizleme").src = islem.target.result; //base64 degerini img etiketinin src niteliğine yerleştiriyor
  };
}