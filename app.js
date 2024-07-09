let imageBox = document.getElementById("image");
        let qrImage = document.getElementById("qrimage");
        let qrText = document.getElementById("qrtext");
        let downloadButton = document.getElementById("download");

        function generateQR() {
            if (qrText.value.length > 0) {
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
                qrImage.onload = () => {
                    imageBox.classList.add("show-img");
                    downloadButton.href = qrImage.src;
                    downloadButton.style.display = 'inline-block';
                };
            } else {
                qrText.classList.add('error');
                setTimeout(() => {
                    qrText.classList.remove('error');
                }, 1000);
            }
        }

        async function shortUrl() {
            const url = document.getElementById("qrtext").value;
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
            if (response.ok) {
                const data = await response.text();
                document.getElementById('result').value = data;
            }
        }

        function copyToClipboard() {
            const resultInput = document.getElementById('result');
            resultInput.select();
            document.execCommand('copy');
            alert('Copied to clipboard');
        }