class User {
  constructor({ email }) {
    this.email = email;
  }

  sendMessage() {
    console.log(`Mensagem enviada para: ${this.email}`);
  }
}

let user = new User({ email: "william@gmail.com" });
user.sendMessage();
