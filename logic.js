function generateBarCode(){
    var nric = "https://yomyyo.github.io/Video-Auto-Test/video.html";
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
                $('#barcode').attr('src', url);
}