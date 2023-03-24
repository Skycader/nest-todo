import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `

    <input id="image-file" type="file" />
    <button onclick="send()">Send</button>
    <script>
    
let formData = new FormData();
function send() {
let photo = document.getElementById("image-file").files[0];
formData.append("file", photo);
fetch('/files/upload2', {method: "POST", body: formData});
console.log(formData)
  }

    </script>`;
  }
}
