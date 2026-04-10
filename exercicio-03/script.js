const secretKey = 'senhatrancada';

function processPassword() {
    const passwordInput = document.getElementById('password');
    const result = document.getElementById('resultado');
    const password = passwordInput.value;

    if (!password) {
        result.textContent = 'Digite uma senha primeiro.';
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
    localStorage.setItem('senha', encrypted);

    const stored = localStorage.getItem('senha');
    const decrypted = CryptoJS.AES.decrypt(stored, secretKey).toString(CryptoJS.enc.Utf8);

    result.textContent = 'Password: ' + decrypted;
}

document.getElementById('password-button').addEventListener('click', processPassword);
